import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { SelectService } from '../../service/select.service';

@Component({
  moduleId: module.id,
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input()  selectObj: Object;
  @Output() selectChange = new EventEmitter<Object>();
  selectval: any;
  constructor(private selectService: SelectService) { }
  ngOnInit() {
    this.selectService.itemSelected$.subscribe(
    (listObj: any) => {
      if (this.selectObj['caption'] === listObj['caption']) {
        let t_back = listObj['key'];
        this.selectObj['key'] = t_back;

        // TODO: use array.find method instead of for loop
        for (let i in this.selectObj['list']) {
          if (this.selectObj['list'][i]['key'] === t_back) {
            this.selectval = this.selectObj['list'][i]['val'];
            this.selectChange.emit({'key': t_back, 'val': this.selectval});
          }
        };
      }
    });
  }

  openListPopop() {
    this.selectService.openPopup(this.selectObj);
  }

}
