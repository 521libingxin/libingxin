
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from '../../../../service/navigation.service';
import { LongpollingService } from '../../../../service/longpolling.service';
import * as ActivateRequest from '../../../../model/IntercommCommonActivateRequest';
import { IntercommService } from '../../../../service/intercomm.service';
import { InputDialogService } from '../../../../service/inputdialog.service';

@Component({
  moduleId: module.id,
  selector: 'printTrigger',
  templateUrl: './Printtrigger.component.html',
  styleUrls: ['./Printtrigger.component.css']
})
export class PrinttriggerComponent implements OnInit {
  enableTestPrintBtnLabel: any = 'Enable test print button';
  pdConfig: any;

  currentPDStateObj: Object = {
    'caption' : 'Current level',
    'value' : '',
    'unit' : ''
  };
  enableTestPrintBtnObj: Object = {
    'setkey': ActivateRequest.WriteTestPrintButtonEnabled,
    'setinParams': {},
    'value': false,
    'getkey': ActivateRequest.ReadTestPrintButtonEnabled,
    'readbackObj': function (Payload: any) {
      this['value'] = Payload['isEnabled'];
      this['setinParams']['isEnabled'] =  this['value'];
    },
    'changeval': function (val: any) {
      this['setinParams']['isEnabled'] = val;
      }
  };
  triggerBySelectObj: Object = {
    'caption' : 'trigger By',
    'unit' : '',
    'key' : '0',
    'val' : '',
    'list' : [{'key': '0', 'val' : 'External'}, {'key' : '1', 'val' : 'Internal'}]
  };
  activeLevelSelectObj: Object = {
    'caption' : 'Active level',
    'unit' : '',
    'key' : '0',
    'val' : '',
    'list' : [{'key': '0', 'val' : 'Active Low'}, {'key' : '1', 'val' : 'Active High'}]
  };
  printDelayObj: Object = this.inputDialogService.createObj('PDConfig', {
    'caption' : 'Print delay',
    'unit' : 'mm',
    'stepsize': 0.1,
    'datamin': 0,
    'datamax': 0,
    'path': ['pdConfig', 'printDelay']
  });
  flightDistanceObj: Object = this.inputDialogService.createObj('PDConfig', {
    'caption' : 'Throw distance',
    'unit' : 'mm',
    'stepsize': 0.1,
    'datamin': 0,
    'datamax': 0,
    'path': ['pdConfig', 'dropFlightDistanceMM']
  });
  jetVelocityMMPerSObj: Object = this.inputDialogService.createObj('PDConfig', {
    'caption' : 'Jet velocity',
    'unit' : 'mm/s',
    'stepsize': 1,
    'datamin': 0,
    'datamax': 0,
    'path': ['pdConfig', 'dropVelocityMMPS']
  });
  pDPersistenceObj: Object = this.inputDialogService.createObj('PDConfig', {
    'caption' : 'Product detect persistence',
    'unit' : 'ms',
    'stepsize': 0.01,
    'datamin': 0,
    'datamax': 0,
    'path': ['pdConfig', 'persistence']
  });
  productQueueDepthObj: Object = this.inputDialogService.createObj('PDConfig', {
    'caption' : 'Product queue depth',
    'unit' : '',
    'stepsize': 1,
    'datamin': 0,
    'datamax': 0,
    'path': ['pdConfig', 'depth']
  });

  constructor(
        private router: Router,
        private navservice: NavigationService,
        private longpollingService: LongpollingService,
        private intercommService: IntercommService,
        private inputDialogService: InputDialogService
  ) {}

  triggerBySelectChange(Obj: any) {
      console.log('triggerBy select', Obj);
      if (Obj['key'] === '1') {
        this.pdConfig.extPD = false;
      } else {
        this.pdConfig.extPD = true;
      }
      this.intercommService.remoteProcedureCall(ActivateRequest.WritePDConfig, {'pdConfig': this.pdConfig}).subscribe(
        (res: any) => {
          if (res.InterCommState === 'Success') {
            this.triggerBySelectObj['key'] = Obj['key'];
          }
      });
  }

  activeLevelSelectChange(Obj: any) {
      console.log('activeLevel select', Obj);
      if (Obj['key'] === '1') {
        this.pdConfig.activeLevel = true;
      } else {
        this.pdConfig.activeLevel = false;
      }
      this.intercommService.remoteProcedureCall(ActivateRequest.WritePDConfig, {'pdConfig': this.pdConfig}).subscribe(
        (res: any) => {
          if (res.InterCommState === 'Success') {
            this.activeLevelSelectObj['key'] = Obj['key'];
          }
      });
  }

  PDConfigChange(Obj: any) {
    this.printDelayObj['setinParams'] = Obj['setinParams'];
    this.flightDistanceObj['setinParams'] = Obj['setinParams'];
    this.jetVelocityMMPerSObj['setinParams'] = Obj['setinParams'];
    this.pDPersistenceObj['setinParams'] = Obj['setinParams'];
    this.productQueueDepthObj['setinParams'] = Obj['setinParams'];
  };
  ngOnInit() {
   this.intercommService.remoteProcedureCall(ActivateRequest.ReadCurrentPDState, {}).subscribe(
        (res: any) => {
          if (!res.Payload.state) {
            this.currentPDStateObj['value'] = 'Low';
          } else {
            this.currentPDStateObj['value'] = 'High';
          }
        }
    );
    this.intercommService.remoteProcedureCall(ActivateRequest.ReadPDConfig, {}).subscribe(
        (res: any) => {
          if (res.Payload.pdConfig !== undefined) {
            this.pdConfig = res.Payload.pdConfig;

            // Trigger by
            if (res.Payload.pdConfig.extPD) {
              this.triggerBySelectObj['key'] = '0';
            } else {
             this.triggerBySelectObj['key'] = '1';
            }
            // Active level
            if (!res.Payload.pdConfig.activeLevel) {
              this.activeLevelSelectObj['key'] = '0';
            } else {
             this.activeLevelSelectObj['key'] = '1';
            }

          }
        }
    );
    this.intercommService.remoteProcedureCall(ActivateRequest.ReadPrintDelayLimits, {}).subscribe(
        (res: any) => {
          this.printDelayObj['datamin'] = res.Payload.lowerLimit;
          this.printDelayObj['datamax'] = res.Payload.upperLimit;
        }
    );
    this.intercommService.remoteProcedureCall(ActivateRequest.ReadFlightDistanceLimits, {}).subscribe(
        (res: any) => {
          this.flightDistanceObj['datamin'] = res.Payload.lowerLimit;
          this.flightDistanceObj['datamax'] = res.Payload.upperLimit;
        }
    );
    this.intercommService.remoteProcedureCall(ActivateRequest.ReadJetVelocityMMPerSLimits, {}).subscribe(
        (res: any) => {
          this.jetVelocityMMPerSObj['datamin'] = res.Payload.lowerLimit;
          this.jetVelocityMMPerSObj['datamax'] = res.Payload.upperLimit;
        }
    );
    this.intercommService.remoteProcedureCall(ActivateRequest.ReadPDPersistenceLimits, {}).subscribe(
        (res: any) => {
          this.pDPersistenceObj['datamin'] = res.Payload.lowerLimit;
          this.pDPersistenceObj['datamax'] = res.Payload.upperLimit;
        }
    );
    this.intercommService.remoteProcedureCall(ActivateRequest.ReadProductQueueDepthLimits, {}).subscribe(
        (res: any) => {
          this.productQueueDepthObj['datamin'] = res.Payload.lowerLimit;
          this.productQueueDepthObj['datamax'] = res.Payload.upperLimit;
        }
    );
    this.navservice.sendPathInfo(this.router.url.split('/'));
  }

}
