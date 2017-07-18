
import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
@Injectable()
export class NavigationService {
  private navigationSource = new Subject<any>();
  pageOpened$ = this.navigationSource.asObservable();
  sendPathInfo(pathInfos: any) {
    this.navigationSource.next(pathInfos);
  }
}
