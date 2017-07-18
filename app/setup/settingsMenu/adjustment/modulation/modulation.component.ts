
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from '../../../../service/navigation.service';
import  * as ActivateRequest from '../../../../model/IntercommCommonActivateRequest';
import { IntercommService } from '../../../../service/intercomm.service';
import { InputDialogService } from '../../../../service/inputdialog.service';

@Component({
  moduleId: module.id,
  selector: 'modulation',
  templateUrl: './Modulation.component.html',
  styleUrls: ['./Modulation.component.css']
})
export class ModulationComponent implements OnInit {
  hideAutoModulationMode: boolean = false;
  // BUP time
  bupTimeObj: Object = {
    'caption' : 'BUP time',
    'value' : '',
    'unit' : ''
  };
  // Modulation level
  modulationLevelObj: Object = {
    'caption' : 'Modulation level',
    'value' : '',
    'unit' : 'V'
  };
  // Modulation mode
  modulationModeSelectObj: Object = {
    'caption': 'Modulation mode',
    'unit': '',
    'key': '0',
    'val': '',
    'list': [{'key' : '0', 'val' : 'Fixed'}, {'key' : '1', 'val' : 'Auto'}]
  };
  // Modulation set point
  modulationSetPoint: Object = this.inputDialogService.createObj('modulationSetPoint', {});
  constructor(
    private router: Router,
    private navservice: NavigationService,
    private interCommService: IntercommService,
    private inputDialogService: InputDialogService
  ) {}

  // Modulation mode
  modulationModeSelectChange(Obj: any) {
    this.interCommService.remoteProcedureCall(ActivateRequest.WriteModulationMode,
                              {'ucJetID': 2, 'modulation_mode': parseInt(Obj['key'], 10)}).subscribe(
      (res: any) => {
        if (res.InterCommState === 'Success') {
          this.modulationModeSelectObj['key'] = Obj['key'];
          if (parseInt(Obj['key'], 10) === 1) {
            this.hideAutoModulationMode = true;
          } else {
            this.hideAutoModulationMode = false;
          }
        }
    });
  }
  // Modulation set point change
  modulationSetPointChange(Obj: any) {
    this.modulationSetPoint['setinParams'] = Obj['setinParams'];
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
    // Modulation level init
    this.interCommService.remoteProcedureCall(ActivateRequest.ReadModulationLevel, {'ucJetID': 1}).subscribe(
      (result: any) => {
        if (result.InterCommState === 'Success') {
          this.modulationLevelObj['value'] = String(result.Payload.iValue);
        }
      }
    );
    // Modulation mode init
    this.interCommService.remoteProcedureCall(ActivateRequest.ReadModulationMode, {'ucJetID': 2}).subscribe(
      (result: any) => {
        if (result.InterCommState === 'Success') {
          this.modulationModeSelectObj['key'] = String(result.Payload.modulation_mode);
          if (result.Payload.modulation_mode === 1) {
            this.hideAutoModulationMode = true;
          } else {
            this.hideAutoModulationMode = false;
          }
        }
      }
    );
    // Modulation set point init
    this.interCommService.remoteProcedureCall( ActivateRequest.ReadModulationSetpoint, {'ucJetID': 1}).subscribe(
      (res: any) => {
        this.modulationSetPoint['datamin'] = res.Payload.iSetMin;
        this.modulationSetPoint['datamax'] = res.Payload.iSetMax;
      }
    );
    this.navservice.sendPathInfo(this.router.url.split('/'));
  }

  reset() {}
}