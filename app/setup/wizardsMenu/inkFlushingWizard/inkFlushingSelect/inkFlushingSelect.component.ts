
import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'inkFlushingSelect',
  templateUrl: './inkFlushingSelect.component.html',
  styleUrls: ['./inkFlushingSelect.component.css']
})
export class InkFlushingSelectComponent implements OnInit {

  @Input()  selectList: Array<string>;
  @Output() selectBack = new EventEmitter<Object>();
  index = 0;
  constructor() { }

  ngOnInit() {}
  changePicture(i: any) {
    let nowindex = this.index + i;
    if (nowindex < 0) {
      this.selectBack.emit();
    }
    if (nowindex > this.selectList.length - 1) {
      nowindex = this.selectList.length - 1;
    }
    this.index = nowindex;
  }

}