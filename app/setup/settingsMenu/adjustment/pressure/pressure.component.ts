
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from '../../../../service/navigation.service';
import  * as ActivateRequest from '../../../../model/IntercommCommonActivateRequest';
import { IntercommService } from '../../../../service/intercomm.service';
import { InputDialogService } from '../../../../service/inputdialog.service';

@Component({
  moduleId: module.id,
  selector: 'pressure',
  templateUrl: './Pressure.component.html',
  styleUrls: ['./Pressure.component.css']
})
export class PressureComponent implements OnInit {
  // BUP time
  bupTimeObj: Object = {
    'caption' : 'BUP time',
    'value' : '',
    'unit' : ''
  };
  // Ink temperature
  inkTemperatureObj: Object = {
    'caption' : 'Ink temperature',
    'value' : '',
    'unit' : ''
  };
  // Actual viscosity
  actualViscosityObj: Object = {
    'caption' : 'Actual viscosity',
    'value' : '',
    'unit' : 'cP'
  };
  // Pump speed
  pumpSpeedObj: Object = {
    'caption' : 'Pump speed',
    'value' : '',
    'unit' : 'rpm'
  };
  // Pressure
  pressureObj: Object = {
    'caption' : 'Pressure',
    'value' : '',
    'unit' : 'mBar'
  };
  // Printing pressure set point
  printPressureSetPoint: Object = this.inputDialogService.createObj('printPressureSetPoint', {});
  // Original printing pressure set point
  originalPrintPressureSetObj: Object = {
    'caption' : 'Original printing pressure set point',
    'value' : '',
    'unit' : 'mBar'
  };
  constructor(
    private router: Router,
    private navservice: NavigationService,
    private interCommService: IntercommService,
    private inputDialogService: InputDialogService
  ) {}

  // Printing pressure set point change
  printPressureSetPointChange(Obj: any) {
    this.printPressureSetPoint['setinParams'] = Obj['setinParams'];
  };

  ngOnInit() {
    // BUP time init
    this.interCommService.remoteProcedureCall(ActivateRequest.ReadBUPTime, {'ucJetID': 1}).subscribe(
      (result: any) => {
        if (result.InterCommState === 'Success') {
          this.bupTimeObj['value'] = String(result.Payload.AvBUTime);
        }
      }
    );
    // Ink temperature init
    this.interCommService.remoteProcedureCall(ActivateRequest.ReadInkTemperature, {}).subscribe(
      (result: any) => {
        if (result.InterCommState === 'Success') {
          this.inkTemperatureObj['value'] = String((result.Payload.iValue / 1000.0).toFixed(1));
        }
      }
    );
    // Actual viscosity init
    this.interCommService.remoteProcedureCall(ActivateRequest.ReadViscosityActual, {}).subscribe(
      (result: any) => {
        if (result.InterCommState === 'Success') {
          this.actualViscosityObj['value'] = String(result.Payload.uVisco.toFixed(2));
        }
      }
    );
    // Pump speed init
    this.interCommService.remoteProcedureCall(ActivateRequest.ReadFeedPumpSpeed, {}).subscribe(
      (result: any) => {
        if (result.InterCommState === 'Success') {
          this.pumpSpeedObj['value'] = String(result.Payload.iValue);
        }
      }
    );
    // Pressure init
    this.interCommService.remoteProcedureCall(ActivateRequest.ReadPressureActual, {}).subscribe(
      (result: any) => {
        if (result.InterCommState === 'Success') {
          this.pressureObj['value'] = String(result.Payload.iValue);
        }
      }
    );
    // Printing pressure set point init
    this.interCommService.remoteProcedureCall( ActivateRequest.ReadPrintingPressureSetpoint, {}).subscribe(
      (res: any) => {
        this.printPressureSetPoint['datamin'] = res.Payload.iSetMin;
        this.printPressureSetPoint['datamax'] = res.Payload.iSetMax;
      }
    );
    // Original printing pressure set point init
    this.interCommService.remoteProcedureCall(ActivateRequest.ReadOriginalPressureSetpoint, {}).subscribe(
      (result: any) => {
        if (result.InterCommState === 'Success') {
          this.originalPrintPressureSetObj['value'] = String(result.Payload.originalPrintingPressure);
        }
      }
    );
    this.navservice.sendPathInfo(this.router.url.split('/'));
  }

  reset() {}
}
