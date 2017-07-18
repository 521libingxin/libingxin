import { Injectable, Inject } from '@angular/core';
import { grants } from '../model/grants';
import { IntercommService } from './intercomm.service';
import { LongpollingService } from './longpolling.service';
// import { Observable } from 'rxjs/Observable';

import { GetCurrentGrants, GetCurrentUserId,
         GetSecurityMode, SMSecurityMode } from '../model/IntercommCommonActivateRequest';

@Injectable()
export class SecurityService {
  grantList: Array<string>;
  userGrantList: Object;
  userId: string;
  indexer: number = 1;
  securityMode: number = SMSecurityMode.eSimple;

  constructor(
    private icService: IntercommService,
    private longpolling: LongpollingService
  ) {
    this.grantList = Array<string>();
    this.userGrantList = {'undefined': true};
    this.userId = '';

    //let parser = new DOMParser();
    let t_array = grants.split('>');
    for (let t = 0, len = t_array.length; t < len; t++) {
      if (t_array[t].indexOf('<sm:grant id') > -1) {
          this.grantList.push(t_array[t].split('"')[1]);
      }
    }
    /*
    let grantDoc = parser.parseFromString(grants, 'application/xml');
    let grantCollection = grantDoc.getElementsByTagName('grant');
    for (let i = 0; i < grantCollection.length; i++) {
      let index = grantCollection[i].firstElementChild.firstChild.nodeValue;
      this.grantList[index] = grantCollection[i].id;
      // console.log(this.securityService.grantList[i]);
    }*/
    this.icService.remoteProcedureCall(GetSecurityMode, {}).subscribe(
         (res: any) => {
            // console.log(res);
            // Store response
            this.securityMode = res.Payload.Result;
            // If response is no security, simply add all grants except SERVICE - 86
            if (this.securityMode === SMSecurityMode.eNoSecurity) {
              for (let key in this.grantList) {
                if (this.grantList.hasOwnProperty(key)) {
                    //console.log(key);
                    if (key === '86') {
                      continue;
                    }
                    this.userGrantList[this.grantList[key]] = true;
                }
              }
            } else { // if response is another security mode, this function will handle subscriptions
               this.init();
            }
         },
         (err: any) => {
            console.log(err);
         }
      );
  }

  init() {
    this.longpolling.subscribePolling(GetCurrentUserId, {}).subscribe(
      (res: any) => {
      },
      (err: any) => {
        console.log(err);
      }
    );

    this.longpolling.getObservablebyID(GetCurrentUserId.id).subscribe(
      (res: any) => {
        if (res !== {} && this.userId !== res.UserId) {
          this.userId = res.UserId;
          this.userGrantList = {'undefined': true};
          this.icService.remoteProcedureCall(GetCurrentGrants, {}).subscribe(
            (res2: any) => {
              console.log(res2);
              let list = res2.Payload.Grants[0].Bitset;
              for (let key in list) {
                if (list[key] === true) {
                  this.userGrantList[this.grantList[key]] = true;
                }
              }
            },
            (err: any) => {
              console.log(err);
            }
          );
        }
      },
      (err: any) => {
        console.log(err);
      }
    );
    // This chunk parses and stores the grant enum from printer specific XML
    // TODO Requires manual maintenance, the process should be refactored for automation
    // console.log(grantCollection);
    // console.log(this.securityService.grantList);
  }
}
