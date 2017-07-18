
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from '../../service/navigation.service';
import { IntercommService } from '../../service/intercomm.service';
import { InputDialogService } from '../../service/inputdialog.service';
import {
  ReadPDConfig,
  WritePDConfig,
  ReadPrintHeightPercentage, WritePrintHeightPercentage,
  ReadEncoderConfig,
  WriteEncoderConfig,
  WriteGlobalInvert, WriteGlobalReverse,
   ReadGlobalInvert, ReadGlobalReverse,
    /* ReadPrintingOffsets, WritePrintingOffsets */} from '../../model/IntercommCommonActivateRequest';

@Component({
  moduleId: module.id,
  selector: 'app-printoptimisation',
  templateUrl: './printoptimisation.component.html',
  styleUrls: ['./printoptimisation.component.css']
})
export class PrintoptimisationComponent implements OnInit {
  // printDelay: any = 'Print Delay';
  printDelay: Object;
  printHeight: Object;
  strokePitch: Object;
  /*strokePitch = {
    'caption': '',
    'unit': 'mm',
    'readkey': {
      'key': ReadEncoderConfig,
      'val': {}
    },
    'data': {
      'max': 100,
      'min': 0,
      'incrementer': 0.01,
      'incrementernum': 2,
      'val': ''
    },
    'readbackObj': function(Payload: any){
      this['writeobj']['val']['encoderConfig'] = Payload['encoderConfig'];
      this['data']['val'] = Payload['encoderConfig']['globalStrokePitchGoal'];
    },
    'changeval': function(val: any){
      this['writeobj']['val']['encoderConfig']['globalStrokePitchGoal'] = val;
    },
    'writeobj': {
      'key': WriteEncoderConfig,
      'val': {}
    }
  };*/

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

  constructor(
      private router: Router,
      private navservice: NavigationService,
      private icService: IntercommService,
      private inputDialogService: InputDialogService
  ) {}

  ngOnInit() {
    this.navservice.sendPathInfo(this.router.url.split('/'));
    this.strokePitch = this.inputDialogService.createObj('strokePitch', {'caption': ''});
    this.printHeight = this.inputDialogService.createObj('printHeight', {'caption': ''});
    this.printDelay = this.inputDialogService.createObj('printDelay', {'caption': ''});
  }
  // when you changed the number ,this is the callback function,you can do someting else.
  printDelayChange(Obj: any) {
    console.log('back', Obj);
  }

}