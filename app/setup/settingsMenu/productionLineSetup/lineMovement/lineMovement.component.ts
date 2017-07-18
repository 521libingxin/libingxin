
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from '../../../../service/navigation.service';
import { LongpollingService } from '../../../../service/longpolling.service';
import  * as ActivateRequest from '../../../../model/IntercommCommonActivateRequest';
import { IntercommService } from '../../../../service/intercomm.service';
import { InputDialogService } from '../../../../service/inputdialog.service';

@Component({
  moduleId: module.id,
  selector: 'lineMovement',
  templateUrl: './Linemovement.component.html',
  styleUrls: ['./Linemovement.component.css']
})
export class LinemovementComponent implements OnInit {
  encoderPulseCountObj: Object = {
    'caption' : 'Encoder pulse count',
    'value' : '',
    'unit' : ''
  };
  currentLineSpeedObj: Object = {
    'caption' : 'Line speed',
    'value' : '',
    'unit' : 'mm/s'
  };
  backlashCountObj: Object = {
    'caption' : 'Current backlash count',
    'value' : '',
    'unit' : ''
  };
  encoderConfig: any;
  encoderInputSelectObj: Object = {
    'caption' : 'Encoder input',
    'unit' : '',
    'key' : '0',
    'val' : '',
    'list' : [{'key': '0', 'val' : 'Internal'}, {'key' : '1', 'val' : 'External'}]
  };
  optimisationModeSelectObj: Object = {
    'caption' : 'Print optimisation mode',
    'unit' : '',
    'key' : '0',
    'val': '',
    'list' : [{'key' : '0', 'val' : 'Message width'}, {'key' : '1', 'val' : 'Stroke pitch'}]
  };
  encoderPersistence: Object = this.inputDialogService.createObj('encoderPersistence', {
    'caption' : 'Encoder persistence',
    'unit' : 'ms',
    'stepsize': 0.001,
    'datamin': 0,
    'datamax': 0,
    'path': ['encoderConfig', 'persDurationMS']
  });
  globalStrokePitchGoal: Object = this.inputDialogService.createObj('encoderPersistence', {
    'caption' : 'Global stroke pitch goal',
    'unit' : 'mm/stroke',
    'stepsize': 0.01,
    'datamin': 0,
    'datamax': 0,
    'path': ['encoderConfig', 'globalStrokePitchGoal']
  });
  encoderStrokeResolution: Object = this.inputDialogService.createObj('encoderPersistence', {
    'caption' : 'Encoder stroke resolution',
    'unit' : 'pulses/stroke',
    'stepsize': 0.01,
    'datamin': 0,
    'datamax': 0,
    'path': ['encoderConfig', 'internalStrokeResolution'],
    'disabled': true
  });
  encoderModeSelectObj: Object = {
    'caption': 'Encoder mode',
    'unit': '',
    'key': '0',
    'val': '',
    'list': [{'key': '0', 'val': 'Single mode'},
             {'key': '1', 'val': 'Backlash mode'},
             {'key': '2', 'val': 'Backlash suppressed'},
             {'key': '3', 'val': 'Backlash forward'}]
  };
  triggerModeSelectObj: Object = {
    'caption': 'Stroke go multiplier',
    'unit': '',
    'key': '0',
    'val': '',
    'list': [{'key' : '0', 'val' : 'x1'}, {'key' : '1', 'val' : 'x2'}, {'key' : '2', 'val' : 'x4'}]
  };
  backlashDirSelectObj: Object = {
    'caption': 'Backlash direction',
    'unit': '',
    'key': '0',
    'val': '',
    'list': [{'key' : '0', 'val' : 'A leads B'}, {'key' : '1', 'val' : 'B leads A'}]
  };
  constructor(
        private router: Router,
        private navservice: NavigationService,
        private longpollingService: LongpollingService,
        private icService: IntercommService,
        private inputDialogService: InputDialogService
  ) {}

  ngOnInit() {
      this.icService.remoteProcedureCall( ActivateRequest.ReadEncoderConfig, {}).subscribe(
          (res: any) => {
            if (res.Payload.encoderConfig !== undefined) {
              this.encoderConfig = res.Payload.encoderConfig;
              this.encoderInputSelectObj['key'] = res.Payload.encoderConfig.source;
              this.optimisationModeSelectObj['key']  = res.Payload.encoderConfig.strokeToPulseMode;
              this.encoderModeSelectObj['key'] = res.Payload.encoderConfig.externalMode;
              this.triggerModeSelectObj['key'] = res.Payload.encoderConfig.triggerMode;
              this.backlashDirSelectObj['key'] = res.Payload.encoderConfig.externalDirection;
            }
          }
      );
      this.icService.remoteProcedureCall( ActivateRequest.ReadEncoderCount, {}).subscribe(
          (res: any) => {
            this.encoderPulseCountObj['value'] = String(res.Payload.count);
            console.log('encoder pulse count is ' + res.Payload.count);
          }
      );
      this.icService.remoteProcedureCall( ActivateRequest.ReadCurrentLineSpeed, {}).subscribe(
          (res: any) => {
            this.currentLineSpeedObj['value'] = String(res.Payload.speed);
            console.log('current speed is ' + res.Payload.speed);
          }
      );
      this.icService.remoteProcedureCall( ActivateRequest.ReadBacklashCount, {}).subscribe(
          (res: any) => {
            this.backlashCountObj['value'] = String(res.Payload.count);
            console.log('backlash count is ' + res.Payload.count);
          }
      );
      this.icService.remoteProcedureCall( ActivateRequest.ReadEncoderPerDurMSLimits, {}).subscribe(
          (res: any) => {
            this.encoderPersistence['datamin'] = res.Payload.lowerLimit;
            this.encoderPersistence['datamax'] = res.Payload.upperLimit;
          }
      );
      this.icService.remoteProcedureCall( ActivateRequest.ReadGlobalStrokePitchGoalLimits, {}).subscribe(
          (res: any) => {
            this.globalStrokePitchGoal['datamin'] = res.Payload.lowerLimit;
            this.globalStrokePitchGoal['datamax'] = res.Payload.upperLimit;
          }
      );
      this.icService.remoteProcedureCall( ActivateRequest.ReadStrokeResolutionLimits, {}).subscribe(
          (res: any) => {
            this.encoderStrokeResolution['datamin'] = res.Payload.lowerLimit;
            this.encoderStrokeResolution['datamax'] = res.Payload.upperLimit;
          }
      );
      this.navservice.sendPathInfo(this.router.url.split('/'));
  }
  linemoveChange(Obj: any) {
    this.encoderPersistence['setinParams'] = Obj['setinParams'];
    this.globalStrokePitchGoal['setinParams'] = Obj['setinParams'];
    this.encoderStrokeResolution['setinParams'] = Obj['setinParams'];
  };
  encoderInputSelectChange(Obj: any) {
      console.log('encoderInput select', Obj);
      this.encoderConfig.source = Obj['key'];
      this.icService.remoteProcedureCall(ActivateRequest.WriteEncoderConfig, {'encoderConfig': this.encoderConfig}).subscribe(
        (res: any) => {
          if (res.InterCommState === 'Success') {
            this.encoderInputSelectObj['key'] = Obj['key'];
          }
      });
  }
  optimisationModeSelectChange(Obj: any) {
      console.log('optimisationMode select', Obj);
      this.encoderConfig.strokeToPulseMode = Obj['key'];
      this.icService.remoteProcedureCall(ActivateRequest.WriteEncoderConfig, {'encoderConfig': this.encoderConfig}).subscribe(
        (res: any) => {
          if (res.InterCommState === 'Success') {
            this.optimisationModeSelectObj['key'] = Obj['key'];
          }
      });
  }
  encoderModeSelectChange(Obj: any) {
      console.log('encoderMode select', Obj);
      this.encoderConfig.externalMode = Obj['key'];
      this.icService.remoteProcedureCall(ActivateRequest.WriteEncoderConfig, {'encoderConfig': this.encoderConfig}).subscribe(
        (res: any) => {
          if (res.InterCommState === 'Success') {
            this.encoderModeSelectObj['key'] = Obj['key'];
          }
      });
  }
  triggerModeSelectChange(Obj: any) {
      console.log('triggerMode select', Obj);
      this.encoderConfig.triggerMode = Obj['key'];
      this.icService.remoteProcedureCall(ActivateRequest.WriteEncoderConfig, {'encoderConfig': this.encoderConfig}).subscribe(
        (res: any) => {
          if (res.InterCommState === 'Success') {
            this.triggerModeSelectObj['key'] = Obj['key'];
          }
      });
  }
  backlashDirSelectChange(Obj: any) {
      console.log('backlashDir select', Obj);
      this.encoderConfig.externalDirection = Obj['key'];
      this.icService.remoteProcedureCall(ActivateRequest.WriteEncoderConfig, {'encoderConfig': this.encoderConfig}).subscribe(
        (res: any) => {
          if (res.InterCommState === 'Success') {
            this.backlashDirSelectObj['key'] = Obj['key'];
          }
      });
  }
}