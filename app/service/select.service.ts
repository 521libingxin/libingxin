
import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
@Injectable()
export class SelectService {
  private selectItemSource = new Subject<any>();
  private openListSource = new Subject<any>();
  itemSelected$ = this.selectItemSource.asObservable();
  listPopupOpened$ = this.openListSource.asObservable();

  // Open List Popup command
  openPopup( obj: any) {
    this.openListSource.next(obj);
  }
  // Choose item from a List options
  selectItem( obj: any) {
    this.selectItemSource.next(obj);
  }
}
