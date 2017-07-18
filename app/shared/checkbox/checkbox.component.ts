// import { Component, OnInit, Input } from '@angular/core';
import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { IntercommService } from '../../service/intercomm.service';
@Component({
  moduleId: module.id,
  selector: 'checkbox',
  template: `
  <div class="qs-item-control" (click)="changeValue()" >
    <div [ngClass]="setClasses()" >
      <div class="checkboximg">
      </div>
    </div>
  </div>
  `,
  styleUrls: [ 'checkbox.component.css' ]
})
export class CheckBoxComponent implements OnInit {
  @Input() checkObj: any;
  @Output() checkChange = new EventEmitter<boolean>();

  // @Input() ischeck: any;
  // @Output() ischeckChange = new EventEmitter<boolean>();

  constructor(
      private intercommService: IntercommService
  ) {}
  ngOnInit() {
    this.intercommService.remoteProcedureCall(this.checkObj['getkey'], {}).subscribe(
          (res: any) => {
            if (res) {
              this.checkObj['setinParams'] = res.Payload;
              this.checkObj['readbackObj'](res.Payload);
            }
          }
      );
  }
  changeValue() {
    let checkNew = this.checkObj['value'] ? false : true;
    this.checkObj['changeval'](checkNew);
    this.intercommService.remoteProcedureCall(this.checkObj['setkey'], this.checkObj['setinParams']).subscribe(
        (res: any) => {
          if (res) {
            this.checkObj['value'] = checkNew;
            this.checkChange.emit(this.checkObj);
          }
        }
    );
  }
  setClasses() {
    let classes =  {
      checkboxon: this.checkObj['value'],
      checkboxoff: !this.checkObj['value'],
      checkboxbtn: true
    };
    return classes;
  }
}
