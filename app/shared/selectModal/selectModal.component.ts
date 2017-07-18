
import { Component, OnInit } from '@angular/core';
import { SelectService } from '../../service/select.service';
import { TranslateService } from '../../translate/translate.service';

@Component({
  moduleId: module.id,
  selector: 'selectModal',
  templateUrl: './selectModal.component.html',
  styleUrls: ['./selectModal.component.css']
})
export class SelectModalComponent implements OnInit {
   modalAll: any;
   modalObj: any ;
   modalVisible: boolean = false;
  constructor(
        private selectService: SelectService,
        private _translate: TranslateService
  ) {
    this.selectService.listPopupOpened$.subscribe(
      (listObj) => {
       this.modalAll = listObj;
       this.modalObj = listObj.list;
       this.modalVisible = true;
      });
   }

  ngOnInit() {}
  selectItemOnList(i: any) {
    this.modalAll.key = i;
    this.selectService.selectItem(this.modalAll);
    this.modalVisible = false;
  }
  closeModal() {
    this.modalVisible = false;
  }
}