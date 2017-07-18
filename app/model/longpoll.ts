import { BehaviorSubject } from 'rxjs/Rx';

export class Longpoll {
  event: BehaviorSubject<any>;
  // payload: Object;
  counter: number;
  constructor() {
    this.counter = 1;
    this.event = new BehaviorSubject<any>({});
  }
}