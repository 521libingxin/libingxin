
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from '../../../../service/navigation.service';
import { InputDialogService } from '../../../../service/inputdialog.service';
import { IntercommService } from '../../../../service/intercomm.service';

import { WriteGlobalInvert, WriteGlobalReverse, ReadPDConfig, WritePDConfig, ReadPrintHeightPercentage, WritePrintHeightPercentage,
  ReadGlobalInvert, ReadGlobalReverse, ReadEHTLevel, WriteEHTLevel, ReadPrintHeightChargeScaling,
  WritePrintHeightChargeScaling} from '../../../../model/IntercommCommonActivateRequest';

@Component({
  moduleId: module.id,
  selector: 'app-Positionorientation',
  templateUrl: './Positionorientation.component.html',
  styleUrls: ['./Positionorientation.component.css']
})

export class PositionorientationComponent implements OnInit {

    // printDelay: any = 'Print Delay';
    maxStrokeRate: any= 'Maximum Stroke Rate';
    intStrokeRate: any= 'Internal Stroke Rate';
    invertCaption: any = 'Invert';
    reverseCaption: any = 'Reverse';
    globalInverse: any = {
      'setkey': WriteGlobalInvert,
      'setinParams': {},
      'value': false,
      'getkey': ReadGlobalInvert,
      'readbackObj': function (Payload: any) {
        this['value'] = Payload['isGlobalInvert'];
        this['setinParams']['isGlobalInvert'] =  this['value'];
      },
      'changeval': function (val: any) {
        this['setinParams']['isGlobalInvert'] = val;
      }
    };
    globalReverse: any = {
      'setkey': WriteGlobalReverse,
      'setinParams': {},
      'value': false,
      'getkey': ReadGlobalReverse,
      'readbackObj': function (Payload: any) {
        this['value'] = Payload['isGlobalReverse'];
        this['setinParams']['isGlobalReverse'] =  this['value'];
      },
      'changeval': function (val: any) {
        this['setinParams']['isGlobalReverse'] = val;
      }
    };

    // printHeight: any = 'Print Height';
    strokePitch: any = 'Stroke pitch';
    // add for Print height calibrate
    // constant
    selCS: number =  0; // charge scaling
    selEHT: number  = 1; // EHT
    smallStep: number = 1;
    bigStep: number = 10;
    mFACTOR: any = 0.0761904761904762;
    // mFACTOR: any  = 1;
    mPH: number  = 100;
    mMDD_PH: number  = 140;
    mLDD_PH: number  = 101;

    // position
    bigHHeight: number = 34;
    bigHTop: number = -125;
    bigHBottom: number = 20;
    hLineTop: number = -185;
    hLineBottom: number = -140;

    leftDataTextCS: string = '';
    rightDataTextCS: string = '';
    currDataTextCS: string = '';

    leftDataTextEHT: string = '';
    rightDataTextEHT: string = '';
    currDataTextEHT: string = '';

    rightIsIncreaseDir: boolean = true;
    colorRulerCSUpto: any = [65, 85, 125, 135, 150];
    colorRulerCSColor: any = ['#ff7800', '#ffb400', '#04C66D', '#ffb400', '#ff7800'];
    colorRulerEHTUpto: any = [55, 75, 100];
    colorRulerEHTColor: any = ['#ff7800', '#ffb400', '#04C66D'];

    scaling: any = { 'Value': 0, 'MinValue': 0 , 'MaxValue': 0};
    eht: any = {'Value': 0, 'MinValue': 0, 'MaxValue': 0};
    isReadScalingFinish: boolean = false;
    isReadEhtFinish: boolean = false;
    printDelay: any;
    printHeight: any;

    constructor(
          private router: Router,
          private navservice: NavigationService,
          private inputDialogService: InputDialogService,
          private icService: IntercommService
    ) { }

    ngOnInit() {
          this.navservice.sendPathInfo(this.router.url.split('/'));
          this.printDelay = this.inputDialogService.createObj('printDelay', {});
          this.printHeight = this.inputDialogService.createObj('printHeight', {});
          this.getEHTFromInter();
          this.getScalingFromInter();

          let t = setInterval(() => {
            if (this.isReadScalingFinish && this.isReadEhtFinish) {
              this.updateAll();
              clearInterval(t);
            }
          }, 1000);

    }

    goWizard(path: string): boolean {
      if (path === '') { return false; }
      this.router.navigate(['/' + path]);
    }

    changeValue(index: number, op: string) {
          if (op === '<<') {
            this.modifySel(index, this.leftMove(index, this.bigStep));
          }else  if (op === '>>') {
            this.modifySel(index, this.rightMove(index, this.bigStep));
          }else if (op === '<') {
            this.modifySel(index, this.leftMove(index, this.smallStep));
          }else if (op === '>') {
          this.modifySel(index, this.rightMove(index, this.smallStep));
          }
          this.updateAll();
    }

    modifySel(sel_index: number, new_value: number) {
        if (sel_index === this.selCS) {
          this.setScalingToInter(new_value);
          this.scaling.Value = new_value;
        }else if (sel_index === this.selEHT) {
            this.setEHTToInter(new_value);
            this.eht.Value = new_value;
        }
    }

    leftMove(sel: number, amount: number): number {
      let bnd: any;
      let side = this.rightIsIncreaseDir ? 0 : 1;

      if (sel === this.selCS) {
          bnd = this.getLocalBoundaries(this.scaling, amount, amount);
      } else if (sel === this.selEHT) {
        // scope.eht.Value = scope.eht.Value -1;
          bnd = this.getLocalBoundaries(this.eht, amount, amount);
      }
      return bnd[side];
    }

    rightMove(sel: number, amount: number): number {
      let bnd: any;
      let side = this.rightIsIncreaseDir ? 1 : 0;

      if (sel === this.selCS) {
          bnd = this.getLocalBoundaries(this.scaling, amount, amount);
      }else {
          bnd = this.getLocalBoundaries(this.eht, amount, amount);
      }
      return bnd[side];
    }

    getLocalBoundaries (dataobj: any  , step: number, round: number): any {
      let rest = (dataobj.Value % round);
      let curVal = dataobj.Value - rest;
      let minVal = dataobj.MinValue;
      let maxVal = dataobj.MaxValue;

      let nextVal = curVal + step;
      let prevVal = nextVal - (rest > 0 ? 1 : 2) * step;

      prevVal = prevVal < minVal ? minVal : prevVal;
      nextVal = nextVal > maxVal ? maxVal : nextVal;

      return [prevVal, nextVal];
    }

    updateAll() {
        this.updateCS();
        this.updateEHT();
        this.calibratePos();
    }

    updateCS() {
      let left_side = this.rightIsIncreaseDir ? 0 : 1;
      let right_side = this.rightIsIncreaseDir ? 1 : 0;
      let endLeft = this.rightIsIncreaseDir ? this.scaling.MinValue : this.scaling.MaxValue;
      let endRight = this.rightIsIncreaseDir ? this.scaling.MaxValue : this.scaling.MinValue;
      let curVal = this.getCSValue();
      let bnd = this.getLocalBoundaries(this.scaling, this.bigStep, this.bigStep);
      let leftVal = bnd[left_side];
      let rightVal = bnd[right_side];

      let it = this.compileSelPrevNextText(this.selCS, curVal, leftVal, rightVal, endLeft, endRight);
      this.leftDataTextCS = it[0];
      this.currDataTextCS = curVal;
      document.getElementById('scaling_middle_id').style.backgroundColor = this.getColor(this.selCS, curVal);
      // currDataCS.parent.color = scope.getColor(selCS,curVal);
      this.rightDataTextCS = it[1];
    }

    updateEHT() {
      let left_side = this.rightIsIncreaseDir ? 0 : 1;
      let right_side = this.rightIsIncreaseDir ? 1 : 0;
      let endLeft = this.rightIsIncreaseDir ? this.eht.MinValue : this.eht.MaxValue;
      let endRight = this.rightIsIncreaseDir ? this.eht.MaxValue : this.eht.MinValue;
      let curVal = this.getEHTValue();
      let bnd = this.getLocalBoundaries(this.eht, this.bigStep, this.bigStep);
      let leftVal = bnd[left_side];
      let rightVal = bnd[right_side];

      let it = this.compileSelPrevNextText(this.selEHT, curVal, leftVal, rightVal, endLeft, endRight);
      this.leftDataTextEHT = it[0];
      this.currDataTextEHT = curVal;
      document.getElementById('EHT_middle_id').style.backgroundColor = this.getColor(this.selEHT, curVal);
      // currDataEHT.parent.color = scope.getColor(selEHT,curVal);
      this.rightDataTextEHT = it[1];
    }

    getColor(sel: number, val: number): string {
      let ret_col = '#04C66D';
      let ut: any;
      let cl: any;
      if (sel === this.selCS) {
          ut = this.colorRulerCSUpto;
          cl = this.colorRulerCSColor;
      }else {
          ut = this.colorRulerEHTUpto;
          cl = this.colorRulerEHTColor;
      }

      let n = ut.length;
      for (let i = 0; i < n; ++i) {
          if (val <= ut[i]) {
              ret_col = cl[i];
              break;
          }
      }
      return ret_col;
    }

    compileSelPrevNextText (sel: number , curVal: string, leftVal: string, rightVal: string, endLeft: string, endRight: string): any {
      let ltext = '';
      let rtext = '';

      if (leftVal !== endLeft) {
          ltext = '... ' + leftVal;
      }else if (curVal !== leftVal) {
          ltext = leftVal;
      }

      if (rightVal !== endRight) {
          rtext = rightVal + ' ...';
      }else if (curVal !== rightVal) {
          rtext = rightVal;
      }

      return [ltext, rtext];
    }

    calibratePos() {
        let bigHTop = this.getTopCoordinates();
        let bigHBottom = this.getBottomCoordinates();
        let baseBottom = this.mLDD_PH * this.mFACTOR;
        let units = 18 / baseBottom;
        this.bigHHeight = (bigHTop - bigHBottom) / this.mFACTOR;
        this.bigHBottom = bigHBottom * units;
    }

    getTopCoordinates(): any {
        return (this.mMDD_PH * this.mFACTOR) * ((100 * (this.getEHTValue() / 100) * ((this.getCSValue() / 100) * (this.mPH / 100))) / 100);
          // return (scope.mMDD_PH)*((100*(scope.getEHTValue()/100)*((scope.getCSValue()/100)*(scope.mPH/100)))/100);
    }

    getBottomCoordinates(): any {
        return (this.mLDD_PH * this.mFACTOR) * ((100 * (this.getEHTValue() / 100) * ((this.getCSValue() / 100) * (this.mPH / 100))) / 100);
        // return (scope.mLDD_PH)*((100*(scope.getEHTValue()/100)*((scope.getCSValue()/100)*(scope.mPH/100)))/100);
    }

    getCSValue(): any {
        return this.scaling.Value;
    }

    getEHTValue(): any {
        return this.eht.Value;
    }

    getEHTFromInter() {
      this.icService.remoteProcedureCall(ReadEHTLevel, {}).subscribe(
        (res: any) => {
            console.log('ReadEHTLevel', res);
            if (res.InterCommState === 'Success') {
            this.eht.Value = res.Payload.val;
            this.eht.MinValue = res.Payload.val_min;
            this.eht.MaxValue = res.Payload.val_max;
            this.isReadEhtFinish = true;
          }
        }
      );
    }

    setEHTToInter(curVal: number) {
      this.icService.remoteProcedureCall(WriteEHTLevel, {'val': curVal, 'val_min' : 25, 'val_max': 100} ).subscribe(
        (res: any) => {
          console.log('ReadEHTLevel', res);
          if (res.InterCommState === 'Success') {
          }
        }
      );
    }

    getScalingFromInter() {
      this.icService.remoteProcedureCall(ReadPrintHeightChargeScaling, {'jetid': 1}).subscribe(
        (res: any) => {
          console.log('ReadPrintHeightChargeScaling', res);
          if (res.InterCommState === 'Success') {
            this.scaling.Value = res.Payload.val;
            this.scaling.MinValue = res.Payload.min;
            this.scaling.MaxValue = res.Payload.max;
            this.isReadScalingFinish = true;
          }
        }
      );
    }

    setScalingToInter(curVal: number) {
      this.icService.remoteProcedureCall(WritePrintHeightChargeScaling, {'jetid': 1, 'val': curVal, 'min': 50, 'max': 150}).subscribe(
        (res: any) => {
          console.log('ReadPrintHeightChargeScaling', res);
          if (res.InterCommState === 'Success') {
          }
        }
      );
    }
}
