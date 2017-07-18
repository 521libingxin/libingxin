
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from '../../../../service/navigation.service';
import * as ActivateRequest from '../../../../model/IntercommCommonActivateRequest';
import { IntercommService } from '../../../../service/intercomm.service';
import { InputDialogService } from '../../../../service/inputdialog.service';

@Component({
  moduleId: module.id,
  selector: 'printHeadManualMode',
  templateUrl: './Printheadmanualmode.component.html',
  styleUrls: ['./Printheadmanualmode.component.css']
})
export class PrintheadmanualmodeComponent implements OnInit {
  // Skip next flush
  skipNextFlushEnableLable: string = 'Skip next flush';
  skipNextFlushEnableObj: Object = {
    'setkey': ActivateRequest.WriteSkipNextFlushEnable,
    'setinParams': {},
    'value': false,
    'getkey': ActivateRequest.ReadSkipNextFlushEnable,
    'readbackObj': function (Payload: any) {
      this['value'] = Payload['bState'];
      this['setinParams']['bState'] =  this['value'];
    },
    'changeval': function (val: any) {
      this['setinParams']['bState'] = val;
    }
  };

  // Heater state
  heaterStateSelectObj: Object = {
    'caption': 'Heater state',
    'unit': '',
    'key': '0',
    'val': '',
    'list': [{'key' : '0', 'val' : 'Disabled'}, {'key' : '1', 'val' : 'Enabled'}]
  };

  // Auto modulation start voltage
  autoModulationStartVoltageObj: Object = this.inputDialogService.createObj('autoModStartVoltageInfo', {
    'caption' : 'Auto modulation start voltage',
    'unit' : '',
    'stepsize': 1,
    'datamin': 0,
    'datamax': 0,
    'path': ['autoModStartVoltageInfo', 'autoModStartVoltage']
  });

  // Temperature
  temperatureObj: Object = {
    'caption' : 'Temperature',
    'value' : '',
    'unit' : ''
  };

  // Temperature set point
  temperatureSetPointObj: Object = this.inputDialogService.createObj('temperatureSetPoint', {
    'caption' : 'Temperature set point',
    'unit' : '',
    'stepsize': 1,
    'datamin': 5,
    'datamax': 55,
    'path': ['Target']
  });

  constructor(
    private router: Router,
    private navservice: NavigationService,
    private intercommService: IntercommService,
    private inputDialogService: InputDialogService
  ) {}

  // Heater state Change
  heaterStateSelectChange(Obj: any) {
      console.log('heaterState select', Obj);
      this.intercommService.remoteProcedureCall(ActivateRequest.WriteHeaterEnable, {'state': Obj['key']}).subscribe(
        (res: any) => {
          if (res.InterCommState === 'Success') {
            this.heaterStateSelectObj['key'] = Obj['key'];
          }
      });
  }

  // Auto modulation start voltage change
  autoModulationStartVoltageChange(Obj: any) {
    this.autoModulationStartVoltageObj['setinParams'] = Obj['setinParams'];
  };

  // Temperature set point change
  temperatureSetPointChange(Obj: any) {
    this.temperatureSetPointObj['setinParams'] = Obj['setinParams'];
  };

  ngOnInit() {
    // Heater state init
    this.intercommService.remoteProcedureCall(ActivateRequest.ReadHeaterEnable, {}).subscribe(
        (res: any) => {
          if (res.InterCommState === 'Success') {
            this.heaterStateSelectObj['key'] = res.Payload.state;
          }
        }
    );
    // Auto modulation start voltage init
    this.intercommService.remoteProcedureCall(ActivateRequest.ReadAutoModulationStartVoltage, {}).subscribe(
        (res: any) => {
          if (res.InterCommState === 'Success') {
            this.autoModulationStartVoltageObj['datamin'] = res.Payload.minAutoModStartVoltage;
            this.autoModulationStartVoltageObj['datamax'] = res.Payload.maxAutoModStartVoltage;
          }
        }
    );
    // Temperature init
    this.intercommService.remoteProcedureCall(ActivateRequest.ReadHeaterTemperature, {'jetID': 0}).subscribe(
         (res: any) => {
            if (res.InterCommState === 'Success') {
                let tempValue = parseFloat(<string><any>(res.Payload.currentTemperature / 1000));
                this.temperatureObj['value'] = tempValue.toFixed(1);
            }
         }
    );
    this.navservice.sendPathInfo(this.router.url.split('/'));
  }
}