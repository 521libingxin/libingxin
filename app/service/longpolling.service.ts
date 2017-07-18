import { Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';
// import { Observable, BehaviorSubject, Subject, Subscription } from 'rxjs/Rx';
import { Longpoll } from '../model/longpoll';
import { IntercommService } from './intercomm.service';
// import { GetCurrentGrants, GetCurrentUserId } from '../model/IntercommCommonActivateRequest';

// This is a bit non-linear and deserves long explanations.

// Eventemitter provides .subscribe(...) and .emit(...) functions.
// Subscribe(...) function (can be called multiple times in different
// places) registers a callback function that will be called when the
// associated emit(...) function is activated somewhere. The Useful bit
// is that when emit is given an input parameter, it is passed as a
// input parameter to callback functions. It is essentially a multicast
// radio.

// This service will keep a hash table of Longpoll{} objects.
// Incoming responses will be parsed. Parsed data will be pushed to
// subscribers without checking freshness.

@Injectable()
export class LongpollingService {
  // The list of subscriptions will be indexed with the function id number. Indexing an array
  // as such results in a sparse array. So instead of an array I will use a simple object as
  // a hash table
  subscriptionList: Array<Longpoll>;
  // TODO  SHOULD LONG POLLING EVER STOP DURING APP RUNTIME? if yes this may be necessary to delete subscription
  timerSubscription: Subscription;

  constructor(
    private icService: IntercommService) {
    // List init as empty object
    this.subscriptionList = [];
    // This ties long polling function to a timer such that it is always called 10 ms after the last call ends. 
    // (upper bound is determined by server as timeout) TODO improve bad explanation
    this.timerSubscription = Observable.interval(10).exhaustMap(() => this.icService.longpolling()).subscribe(
      (res: any) => {
        // TODO Parse incoming data and directly push to subscribers
        for (let key in this.subscriptionList) {
          this.subscriptionList[key].event.next(res[key]);
        }

      },
      (err: any) => {
      }
    );
  }

  getObservablebyID(id: number): Observable<any> {
    return this.subscriptionList[id].event.asObservable();
  }

  subscribePolling(fcn: any, inParams: any): Observable<any> {
    // TODO make sure this doesn't cause undefined value problems due to empty observable under any circumstance
    // this is will be returned
    let subject: Observable<any>;
    // If poll already exists
    if (this.subscriptionList[fcn.id]) {
      // Increase the subscriber count by 1 
      this.subscriptionList[fcn.id].counter++;
      // and assign existing observable, This will be immediately available
      subject = this.getObservablebyID(fcn.id);
    }else { // If poll is new, create a new poll in server. also register poll in local list
      // Make a new subject
      this.subscriptionList[fcn.id] = new Longpoll();
      // Notify server that frontend needs a subscription
      this.icService.manageActivePolling(fcn, inParams, true).subscribe(
        (res: any) => {
          // TODO better diagnostics?
          // console.log("manageActivePolling");
        },
        (err: any) => {
          console.log(err);
        }
      );
      // Give a returnable observer.      
      subject = this.getObservablebyID(fcn.id);
    }
    // The object returned here will get updated by this.icService.longpolling() in init()
    return subject;
  }

  // TODO
  unsubscribePolling(fcn: any) {
    // If the caller is not the last subscriber
    if (this.subscriptionList[fcn.id].counter > 1) {
      // Decrease the number of subscribers by 1
      this.subscriptionList[fcn.id].counter--;
    }else { // Otherwise delete the subscription
      this.icService.manageActivePolling(fcn, {}, false).subscribe(
        (res: any) => {
          // TODO delete from list
        },
        (err: any) => {
          console.log(err);
        }
      );
    }
  }

}
