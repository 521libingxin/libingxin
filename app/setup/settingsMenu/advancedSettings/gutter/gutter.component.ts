
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from '../../../../service/navigation.service';
import  * as ActivateRequest from '../../../../model/IntercommCommonActivateRequest';
import { IntercommService } from '../../../../service/intercomm.service';
import { LongpollingService } from '../../../../service/longpolling.service';
import { InputDialogService } from '../../../../service/inputdialog.service';

@Component({
  moduleId: module.id,
  selector: 'gutter',
  templateUrl: './Gutter.component.html',
  styleUrls: ['./Gutter.component.css']
})
export class GutterComponent implements OnInit {
  // Gutter state
  gutterStateObj: Object = {
    'caption' : 'Gutter state',
    'value' : '',
    'unit' : ''
  };
  // Gutter pump
  gutterPumpSelectObj: Object = {
    'caption': 'Gutter pump',
    'unit': '',
    'key': '0',
    'val': '',
    'list': []
  };
  // Gutter pump speed
  gutterPumpSpeedObj: Object = {
    'caption' : 'Gutter pump speed',
    'value' : '',
    'unit' : 'rpm'
  };
  // Min. gutter pump demand offset
  gutterPumpDemandOffsetObj: Object = {
    'caption' : 'Min. gutter pump demand offset',
    'value' : '',
    'unit' : ''
  };
  // Gutter pump at maximum speed TODO
  // gutterMaxSpeedEnableLable: string = 'Gutter pump at maximum speed';
  // gutterMaxSpeedEnableObj: Object = {
  //   'setkey': ActivateRequest.WriteEnableGutterDryAlert,
  //   'setinParams': {},
  //   'value': false,
  //   'getkey': ActivateRequest.ReadEnableGutterDryAlert,
  //   'readbackObj': function (Payload: any) {
  //     this['value'] = Payload['bState'];
  //     this['setinParams']['bState'] =  this['value'];
  //   },
  //   'changeval': function (val: any) {
  //     this['setinParams']['bState'] = val;
  //   }
  // };
  constructor(
    private router: Router,
    private navservice: NavigationService,
    private interCommService: IntercommService,
    private longpollingService: LongpollingService,
    private inputDialogService: InputDialogService
  ) {}
  // Gutter pump
  gutterPumpSelectChange(Obj: any) {
    // TODO 
    this.interCommService.remoteProcedureCall(ActivateRequest.WriteGutterPumpType, {'gutterPumpType': Obj['val']}).subscribe(
      (res: any) => {
        if (res.InterCommState === 'Success') {
          this.gutterPumpSelectObj['key'] = Obj['key'];
        }
    });
  }
  ngOnInit() {
    // Current pressure init
    this.interCommService.remoteProcedureCall(ActivateRequest.ReadGutterSensor, {'ucJetID': 1}).subscribe(
         (result: any) => {
            if (result.InterCommState === 'Success') {
              if (!result.Payload.bState) {
                this.gutterStateObj['value'] = 'Dry';
              } else {
                this.gutterStateObj['value'] = 'Wet';
              }
            }
         }
    );
    // Gutter pump init
    this.interCommService.remoteProcedureCall(ActivateRequest.ReadGutterPumpType, {}).subscribe(
        (result: any) => {
          if (result.InterCommState === 'Success') {
            // TODO
            this.gutterPumpSelectObj['key'] = '0';
            let tempItem: Object = {'key' : '0', 'val' : result.Payload.gutterPumpType !== '' ? result.Payload.gutterPumpType : '-'};
            this.gutterPumpSelectObj['list'].push(tempItem);
          }
        }
    );
    // Gutter pump speed init
    this.longpollingService.subscribePolling(ActivateRequest.ReadGutterPumpSpeed, {}).subscribe(
        (result: any) => {
          this.gutterPumpSpeedObj['value'] = String(result.iValue);
        }
    );
    // Min. gutter pump demand offset init
    this.interCommService.remoteProcedureCall(ActivateRequest.ReadGutterPumpMinDemandOffset, {}).subscribe(
        (result: any) => {
          if (result.InterCommState === 'Success') {
            this.gutterPumpDemandOffsetObj['value'] = String(result.Payload.minDemandOffset);
          }
        }
    );
    this.navservice.sendPathInfo(this.router.url.split('/'));
  }
  reset() {
    // TODO
  }
}