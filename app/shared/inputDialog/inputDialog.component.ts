import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { IntercommService } from '../../service/intercomm.service';
@Component({
  moduleId: module.id,
  selector: 'inputDialog',
  templateUrl: './inputDialog.component.html'
})
export class InputDialogComponent implements OnInit {
  @Input()  requestObj: Object;
  @Output() requestObjChange = new EventEmitter<Object>();
  t_selectbtn_l = 'qt-sel-clickleft';
  t_selectbtn_r = 'qt-sel-clickright';
  decimal = 0;
  constructor(
      private icService: IntercommService
  ) {}
  ngOnInit() {}
  initialise() {
    if (this.requestObj !== undefined) {
      // The decimal is calculated according to the stepsize
      let t_array = this.requestObj['stepsize'].toString().split('.')[1];
      this.decimal = t_array === undefined ? 0 : t_array.length;

      this.icService.remoteProcedureCall( this.requestObj['getkey'], this.requestObj['getinParams']).subscribe(
        (res: any) => {
          if (this.requestObj['getkey']['id'] === 10189) {
            // input and out parameter diffrent for ReadTargetTotalPrints and WriteTargetTotalPrints
            // this.requestObj['setinParams']['max'] = res.Payload['max'];
            // this.requestObj['setinParams']['min'] = res.Payload['min'];
            this.requestObj['setinParams']['val'] = res.Payload['val'];
          } else {
             this.requestObj['setinParams'] = res.Payload;
          }

          this.requestObj['value'] =  this.getValueByPath(res.Payload, this.requestObj['path'], 0);
        }
      );
    }
  }
  getValueByPath(payload: Object, list: Array<string>, index: number): any {
    if (list !== undefined) {
      if (index < list.length - 1) {
        return this.getValueByPath(payload[list[index]], list, index + 1);
      }else {
        return payload[list[index]];
      }
    }
  }
  setValueByPath(setinParams: Object, list: Array<string>, index: number, val: number) {
    if (list !== undefined) {
      if (index < list.length - 1) {
        this.setValueByPath(setinParams[list[index]], list, index + 1, val);
      }else {
        setinParams[list[index]] = val ;
      }
    }
  }
  dec() { this.changeValue(-this.requestObj['stepsize']); }
  inc() { this.changeValue(this.requestObj['stepsize']); }
  ngOnChanges(changes: any) {
    this.initialise();
  }
  changeValue(delta: number) {
    if (this.requestObj['disabled']) {
      return false;
    }
    let t_old = this.requestObj['value'];
    let t_data = Math.min(this.requestObj['datamax'], Math.max(this.requestObj['datamin'],
     parseFloat((t_old + delta).toFixed(this.decimal))));
     // set value if different
    if (t_old !== t_data) {
      this.setValueByPath(this.requestObj['setinParams'], this.requestObj['path'], 0, t_data);
      this.setData(t_data);
    }
  }
  setData(t_data: any) {
    if (this.requestObj['waitForCommit']) {
      this.requestObj['value'] = t_data;
      this.requestObjChange.emit(this.requestObj);
    }else {
      this.icService.remoteProcedureCall(this.requestObj['setkey'], this.requestObj['setinParams']).subscribe(
        (res: any) => {
          if (res.InterCommState === 'Success') {
            this.requestObj['value'] = t_data;
            this.requestObjChange.emit(this.requestObj);
          }
        }
      );
    }
  }
}
