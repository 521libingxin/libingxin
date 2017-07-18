// import { Component, OnInit,  Input } from '@angular/core';
import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
// import { IntercommService } from '../../service/intercomm.service';
@Component({
  moduleId: module.id,
  selector: 'bool',
  templateUrl: './bool.component.html',
  styleUrls: [ 'bool.component.css' ]
})
export class BoolComponent implements OnInit {
  @Input() boolData: any;
  @Input() caption: any;
  @Output() checkChangeBool = new EventEmitter<boolean>();

  constructor(
  ) {}
  ngOnInit() {

  }
  updataValue(Obj: any) {
    this.checkChangeBool.emit();
  }
}
