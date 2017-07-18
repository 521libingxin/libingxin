
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from '../../../../service/navigation.service';
import  * as ActivateRequest from '../../../../model/IntercommCommonActivateRequest';
import { IntercommService } from '../../../../service/intercomm.service';
import { InputDialogService } from '../../../../service/inputdialog.service';

@Component({
  moduleId: module.id,
  selector: 'inkSystemManualMode',
  templateUrl: './Inksystemmanualmode.component.html',
  styleUrls: ['./Inksystemmanualmode.component.css']
})

export class InksystemmanualmodeComponent implements OnInit {
  // Pump state
  pumpStateSelectObj: Object = {
    'caption': 'Pump state',
    'unit': '',
    'key': '0',
    'val': '',
    'list': [{'key' : '0', 'val' : 'Off'}, {'key' : '1', 'val' : 'Speed Control'}, {'key' : '1', 'val' : 'Pressure Control'}]
  };

  // Current pressure
  currentPressureObj: Object = {
    'caption' : 'Current pressure',
    'value' : '',
    'unit' : 'mBar'
  };

  // Pressure set point
  pressureSetPointObj: Object = this.inputDialogService.createObj('pressureSetPoint', {
    'caption' : 'Pressure set point',
    'unit' : 'mBar',
    'stepsize': 10,
    'datamin': 0,
    'datamax': 0,
    'disabled': true,
    'path': ['iSetpoint']
  });

  // Current pump speed
  currentPumpSpeedObj: Object = {
    'caption' : 'Current pump speed',
    'value' : '',
    'unit' : 'rpm'
  };

  // Speed set point
  speedSetPointObj: Object = this.inputDialogService.createObj('speedSetPoint', {
    'caption' : 'Speed set point',
    'unit' : 'rpm',
    'stepsize': 1,
    'datamin': 0,
    'datamax': 0,
    'disabled': true,
    'path': ['SpeedSetpoint']
  });

  // Gutter dry alert enabled
  gutterDryAlertEnableLable: string = 'Gutter dry alert enabled';
  gutterDryAlertEnableObj: Object = {
    'setkey': ActivateRequest.WriteEnableGutterDryAlert,
    'setinParams': {},
    'value': false,
    'getkey': ActivateRequest.ReadEnableGutterDryAlert,
    'readbackObj': function (Payload: any) {
      this['value'] = Payload['bState'];
      this['setinParams']['bState'] =  this['value'];
    },
    'changeval': function (val: any) {
      this['setinParams']['bState'] = val;
    }
  };

  // Gutter pump speed set point
  gutterPumpSpeedSetPointObj: Object = this.inputDialogService.createObj('gutterPumpSpeedSetPoint', {
    'caption' : 'Gutter pump speed set point',
    'unit' : 'rpm',
    'stepsize': 1,
    'datamin': 0,
    'datamax': 0,
    'disabled': true,
    'path': ['iSetpoint']
  });

  // Gutter pump speed
  gutterPumpSpeedObj: Object = {
    'caption' : 'Gutter pump speed',
    'value' : '',
    'unit' : 'rpm'
  };

  // Gutter pump enabled
  gutterPumpEnableLable: string = 'Gutter pump enabled';
  gutterPumpEnableObj: Object = {
    'setkey': ActivateRequest.WriteGutterPumpState,
    'setinParams': {},
    'value': false,
    'getkey': ActivateRequest.ReadGutterPumpState,
    'readbackObj': function (Payload: any) {
      this['value'] = Payload['value'];
      this['setinParams']['value'] =  this['value'];
    },
    'changeval': function (val: any) {
      this['setinParams']['value'] = val;
    }
  };

  // Pump state Change
  pumpStateSelectChange(Obj: any) {
      console.log('pumpState select', Obj);
      if (Obj['key'] === '0') {
        this.interCommService.remoteProcedureCall(ActivateRequest.WriteFeedPumpState, {'value': false}).subscribe(
          (res: any) => {
            if (res.InterCommState === 'Success') {
              this.pumpStateSelectObj['key'] = Obj['key'];
            }
        });
      } else {
        let tempValue = parseInt(Obj['key'], 10) - 1;
        this.interCommService.remoteProcedureCall(ActivateRequest.WriteFeedPumpRegulation, {'value': tempValue}).subscribe(
          (res: any) => {
            if (res.InterCommState === 'Success') {
              this.pumpStateSelectObj['key'] = Obj['key'];
            }
        });
        this.interCommService.remoteProcedureCall(ActivateRequest.WriteFeedPumpState, {'value': true}).subscribe(
          (res: any) => {
            if (res.InterCommState === 'Success') {
              this.pumpStateSelectObj['key'] = Obj['key'];
            }
        });
      }

  }

  // Pressure set point change
  pressureSetPointChange(Obj: any) {
    this.pressureSetPointObj['setinParams'] = Obj['setinParams'];
  };

  // Speed set point change
  speedSetPointChange(Obj: any) {
    this.speedSetPointObj['setinParams'] = Obj['setinParams'];
  };

  // Gutter pump speed set point change
  gutterPumpSpeedSetPointChange(Obj: any) {
    this.gutterPumpSpeedSetPointObj['setinParams'] = Obj['setinParams'];
  };

  constructor(
    private router: Router,
    private navservice: NavigationService,
    private interCommService: IntercommService,
    private inputDialogService: InputDialogService
  ) {}

  ngOnInit() {
    // Pump state init
    this.interCommService.remoteProcedureCall(ActivateRequest.ReadFeedPumpState, {}).subscribe(
        (res: any) => {
          if (res.InterCommState === 'Success') {
            if (!res.Payload.value) {
              this.pumpStateSelectObj['key'] = '0';
            } else {
              this.interCommService.remoteProcedureCall(ActivateRequest.ReadFeedPumpRegulation, {}).subscribe(
                  (result: any) => {
                    if (result.InterCommState === 'Success') {
                      this.pumpStateSelectObj['key'] = String(result.Payload.value + 1);
                    }
                  }
              );
            }

          }
        }
    );

    // Current pressure init
    this.interCommService.remoteProcedureCall(ActivateRequest.ReadPressureActual, {}).subscribe(
         (result: any) => {
            if (result.InterCommState === 'Success') {
              this.currentPressureObj['value'] = String(result.Payload.iValue);
            }
         }
    );

    // Pressure set point init
    this.interCommService.remoteProcedureCall(ActivateRequest.ReadPressureSetpoint, {}).subscribe(
        (result: any) => {
          if (result.InterCommState === 'Success') {
            this.pressureSetPointObj['datamin'] = result.Payload.iSetMin;
            this.pressureSetPointObj['datamax'] = result.Payload.iSetMax;
          }
        }
    );

    // Current pump speed init
    this.interCommService.remoteProcedureCall(ActivateRequest.ReadFeedPumpSpeed, {}).subscribe(
         (result: any) => {
            if (result.InterCommState === 'Success') {
              this.currentPumpSpeedObj['value'] = String(result.Payload.iValue);
            }
         }
    );

    // Speed set point init
    this.interCommService.remoteProcedureCall(ActivateRequest.ReadFeedPumpSpeedSetpoint, {}).subscribe(
        (result: any) => {
          if (result.InterCommState === 'Success') {
            this.speedSetPointObj['datamin'] = result.Payload.SpeedSetMin;
            this.speedSetPointObj['datamax'] = result.Payload.SpeedSetMax;
          }
        }
    );

    // Gutter pump speed set point init
    this.interCommService.remoteProcedureCall(ActivateRequest.ReadGutterPumpSpeedSetpoint, {}).subscribe(
        (result: any) => {
          if (result.InterCommState === 'Success') {
            this.gutterPumpSpeedSetPointObj['datamin'] = result.Payload.iSetMin;
            this.gutterPumpSpeedSetPointObj['datamax'] = result.Payload.iSetMax;
          }
        }
    );

    // Gutter pump speed init
    this.interCommService.remoteProcedureCall(ActivateRequest.ReadGutterPumpSpeed, {}).subscribe(
         (result: any) => {
            if (result.InterCommState === 'Success') {
              this.gutterPumpSpeedObj['value'] = String(result.Payload.iValue);
            }
         }
    );

    this.navservice.sendPathInfo(this.router.url.split('/'));
  }
}