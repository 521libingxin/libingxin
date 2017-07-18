
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from '../../../../service/navigation.service';
import { ReadEnergySaveParams, WriteEnergySaveParams,
         ReadPowerButtonAction, WritePowerButtonAction } from '../../../../model/IntercommCommonActivateRequest';
import { IntercommService } from '../../../../service/intercomm.service';

@Component({
  moduleId: module.id,
  selector: 'powerOptions',
  templateUrl: './Poweroptions.component.html',
  styleUrls: ['./Poweroptions.component.css']
})
export class PoweroptionsComponent implements OnInit {
  energySaveEnableLable: string = 'Energy save enabled';

  energySaveEnableObj: Object = {
    'setkey': WriteEnergySaveParams,
    'setinParams': {},
    'value': false,
    'getkey': ReadEnergySaveParams,
    'readbackObj': function (Payload: any) {
      this['value'] = Payload['energySaveParams']['enabled'];
      this['setinParams']['energySaveParams']['enabled'] =  this['value'];
    },
    'changeval': function (val: any) {
      this['setinParams']['energySaveParams']['enabled'] = val;
    }
  };

  powerBtnActionSelectObj: Object = {
    'caption': 'Action for power button',
    'unit': '',
    'key': '0',
    'val': '',
    'list': [{'key' : '0', 'val' : 'Sleep'}, {'key' : '1', 'val' : 'Shut down'}, {'key' : '2', 'val' : 'Prompt'}]
  };

  constructor(
    private router: Router,
    private navservice: NavigationService,
    private intercommService: IntercommService
  ) {}

  powerBtnActionSelectChange(Obj: any) {
    console.log('powerBtnAction select', Obj);
    this.intercommService.remoteProcedureCall(WritePowerButtonAction, {'action': Obj['key']}).subscribe(
      (res: any) => {
        if (res.InterCommState === 'Success') {
          this.powerBtnActionSelectObj['key'] = Obj['key'];
        }
    });
  }

  ngOnInit() {
    this.intercommService.remoteProcedureCall(ReadPowerButtonAction, {}).subscribe(
        (res: any) => {
          if (res.InterCommState === 'Success') {
            this.powerBtnActionSelectObj['key'] = res.Payload.action;
          }
        }
    );
    this.navservice.sendPathInfo(this.router.url.split('/'));
  }

  restart() {
    // TODO
  }
}