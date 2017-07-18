
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from '../../../../service/navigation.service';
import { ReadPrintheadName, ReadPrintheadNameList, ReadSelectedPrintheadInfo,
         ReadNozzleSize, ReadConduitLength, ReadPrintheadType, tPrintheadType,
         ReadIsDuo, ReadModulationMode, WriteModulationMode,
         ReadFeedPumpType, WriteFeedPumpType, ReadPrinterStartingMode,
         tPrinterStartingMode, ReadWarmUpModeEnable, WriteWarmUpModeEnable,
         ReadWakeUpModeEnabled, WriteWakeUpModeEnabled, ReadInkSystemVariant,
         WriteInkSystemVariant, ReadIsPrinterITM4, ReadModulationFrequency } from '../../../../model/IntercommCommonActivateRequest';
import { IntercommService } from '../../../../service/intercomm.service';

@Component({
  moduleId: module.id,
  selector: 'hardWare',
  templateUrl: './Hardware.component.html',
  styleUrls: ['./Hardware.component.css']
})
export class HardwareComponent implements OnInit {
  // Print head
  printHeadSelectObj: Object = {
    'caption': 'Print head',
    'unit': '',
    'key': '0',
    'val': '',
    'list': []
  };
  // Nozzle size
  nozzleSizeObj: Object = {
    'caption' : 'Nozzle size',
    'value' : '',
    'unit' : 'um'
  };
  // Conduit length
  conduitLengthObj: Object = {
    'caption' : 'Conduit length',
    'value' : '',
    'unit' : 'm'
  };
  // Printhead series
  printHeadSeriesObj: Object = {
    'caption' : 'Printhead series',
    'value' : '',
    'unit' : ''
  };
  // Duo printhead
  duoPrintHeadObj: Object = {
    'caption' : 'Duo printhead',
    'value' : '',
    'unit' : ''
  };
  // Modulation frequency
  modulationFrequencyObj: Object = {
    'caption' : 'Modulation frequency',
    'value' : '',
    'unit' : 'kHz'
  };
  // Modulation mode
  modulationModeSelectObj: Object = {
    'caption': 'Modulation mode',
    'unit': '',
    'key': '0',
    'val': '',
    'list': [{'key' : '0', 'val' : 'Fixed'}, {'key' : '1', 'val' : 'Auto'}]
  };
  // Ink container
  inkContainerSelectObj: Object = {
    'caption': 'Ink container',
    'unit': '',
    'key': '0',
    'val': '',
    'list': [{'key' : '0', 'val' : 'i-Tech Module'}]
  };
  // Pump type
  pumpTypeSelectObj: Object = {
    'caption': 'Pump type',
    'unit': '',
    'key': '0',
    'val': '',
    'list': []
  };
  // Starting mode
  startingModeObj: Object = {
    'caption' : 'Starting mode',
    'value' : '',
    'unit' : ''
  };
  // Warm-up mode enabled
  WarmupModeEnableLable: string = 'Warm-up mode enabled';
  WarmupModeEnableObj: Object = {
    'setkey': WriteWarmUpModeEnable,
    'setinParams': {},
    'value': false,
    'getkey': ReadWarmUpModeEnable,
    'readbackObj': function (Payload: any) {
      this['value'] = Payload['isEnabled'];
      this['setinParams']['isEnabled'] =  this['value'];
    },
    'changeval': function (val: any) {
      this['setinParams']['isEnabled'] = val;
    }
  };
  // Wake-up mode enabled
  WakeupModeEnableLable: string = 'Wake-up mode enabled';
  WakeupModeEnableObj: Object = {
    'setkey': WriteWakeUpModeEnabled,
    'setinParams': {},
    'value': false,
    'getkey': ReadWakeUpModeEnabled,
    'readbackObj': function (Payload: any) {
      this['value'] = Payload['enabled'];
      this['setinParams']['enabled'] =  this['value'];
    },
    'changeval': function (val: any) {
      this['setinParams']['enabled'] = val;
    }
  };
  // Ink system
  inkSystemSelectObj: Object = {
    'caption': 'Ink system',
    'unit': '',
    'key': '0',
    'val': '',
    'list': [{'key' : '0', 'val' : 'UNKNOWN'}, {'key' : '1', 'val' : 'STANDARD'}, {'key' : '2', 'val' : 'OPAQUE'}]
  };
  // ITM type required
  ITMTypeRequiredObj: Object = {
    'caption' : 'ITM type required',
    'value' : '',
    'unit' : ''
  };
  constructor(
    private router: Router,
    private navservice: NavigationService,
    private interCommService: IntercommService
  ) {}

  // Print head Change
  printHeadSelectChange(Obj: any) {
    // TODO
  }
  // Modulation mode Change
  modulationModeSelectChange(Obj: any) {
      console.log('Modulation mode select', Obj);
      this.interCommService.remoteProcedureCall(WriteModulationMode, {'ucJetID': 2, 'modulation_mode': parseInt(Obj['key'], 10)}).subscribe(
        (res: any) => {
          if (res.InterCommState === 'Success') {
            this.modulationModeSelectObj['key'] = Obj['key'];
          }
      });
  }
  // Ink container Change
  inkContainerSelectChange(Obj: any) {
      console.log('Ink container select', Obj);
      this.inkContainerSelectObj['key'] = Obj['key'];
  }
  // Pump type Change
  pumpTypeSelectChange(Obj: any) {
      console.log('Pump type select', Obj);
      this.interCommService.remoteProcedureCall(WriteFeedPumpType, {'feedPumpType': Obj['val']}).subscribe(
        (res: any) => {
          if (res.InterCommState === 'Success') {
            this.pumpTypeSelectObj['key'] = Obj['key'];
          }
      });
  }
  // Ink system Change
  inkSystemSelectChange(Obj: any) {
      console.log('Ink system select', Obj);
      this.interCommService.remoteProcedureCall(WriteInkSystemVariant, {'systemType': parseInt(Obj['key'], 10)}).subscribe(
        (res: any) => {
          if (res.InterCommState === 'Success') {
            this.inkSystemSelectObj['key'] = Obj['key'];
          }
      });
  }

  GetTranslatedPhSeries(printheadType: tPrintheadType): String {
    let printheadSeriesName: String = '';
    if (printheadType === tPrintheadType.eWB) {
        printheadSeriesName = 'Wiedenbach';
    } else if (printheadType === tPrintheadType.eDUK) {
        printheadSeriesName = 'Domino';
    }
    return printheadSeriesName;
  }

  ngOnInit() {
    // Print head init
    this.interCommService.remoteProcedureCall(ReadPrintheadName, {}).subscribe(
        (res: any) => {
          if (res.InterCommState === 'Success') {
            this.interCommService.remoteProcedureCall(ReadPrintheadNameList, {}).subscribe(
                (result: any) => {
                  if (result.InterCommState === 'Success') {
                    for (let i = 0; i < result.Payload.printheadName.length; ++i) {
                      this.interCommService.remoteProcedureCall(ReadSelectedPrintheadInfo,
                                                                      {'printheadName': result.Payload.printheadName[i]}).subscribe(
                        (re: any) => {
                          if (re.InterCommState === 'Success') {
                            let tempObj: Object = {'key': String(i), 'val': re.Payload.printheadInfo.userFriendlyName};
                            (this.printHeadSelectObj['list']).push(tempObj);
                            if (res.Payload.printheadName === result.Payload.printheadName[i]) {
                              this.printHeadSelectObj['key'] = String(i);
                            }
                          }
                        }
                      );
                    }
                  }
                }
            );
          }
        }
    );
    // Nozzle size init
    this.interCommService.remoteProcedureCall(ReadNozzleSize, {}).subscribe(
        (res: any) => {
          if (res.InterCommState === 'Success') {
            this.nozzleSizeObj['value'] = String(res.Payload.nozzle_size);
          }
        }
    );
    // Conduit length init
    this.interCommService.remoteProcedureCall(ReadConduitLength, {}).subscribe(
        (res: any) => {
          if (res.InterCommState === 'Success') {
            this.conduitLengthObj['value'] = String(res.Payload.conduit_length);
          }
        }
    );
    // Printhead series init
    this.interCommService.remoteProcedureCall(ReadPrintheadType, {}).subscribe(
        (res: any) => {
          if (res.InterCommState === 'Success') {
            this.printHeadSeriesObj['value'] = this.GetTranslatedPhSeries(res.Payload.val);
          }
        }
    );
    // Duo printhead init
    this.interCommService.remoteProcedureCall(ReadIsDuo, {}).subscribe(
        (res: any) => {
          if (res.InterCommState === 'Success') {
            if (res.Payload.val) {
              this.duoPrintHeadObj['value'] = 'Yes';
            } else {
              this.duoPrintHeadObj['value'] = 'No';
            }
          }
        }
    );
     // Modulation frequency init
    this.interCommService.remoteProcedureCall(ReadModulationFrequency, {}).subscribe(
        (res: any) => {
          if (res.InterCommState === 'Success') {
            this.modulationFrequencyObj['value'] = String(res.Payload.modulation_frequency);
          }
        }
    );

    // Modulation mode init
    this.interCommService.remoteProcedureCall(ReadModulationMode, {'ucJetID': 2}).subscribe(
        (res: any) => {
          if (res.InterCommState === 'Success') {
            this.modulationModeSelectObj['key'] = String(res.Payload.modulation_mode);
          }
        }
    );
    // Pump type init
    this.interCommService.remoteProcedureCall(ReadFeedPumpType, {}).subscribe(
        (res: any) => {
          if (res.InterCommState === 'Success') {
            // TODO
            this.pumpTypeSelectObj['key'] = '0';
            let tempItem: Object = {'key' : '0', 'val' : res.Payload.feedPumpType !== '' ? res.Payload.feedPumpType : '-'};
            this.pumpTypeSelectObj['list'].push(tempItem);
          }
        }
    );
    // Starting mode init
    this.interCommService.remoteProcedureCall(ReadPrinterStartingMode, {}).subscribe(
        (res: any) => {
          if (res.InterCommState === 'Success') {
            if (res.Payload.mode === tPrinterStartingMode.eCLEAN_START) {
              this.startingModeObj['value'] = 'Clean Start';
            } else {
              this.startingModeObj['value'] = 'Fast Start';
            }
          }
        }
    );
    // ink System & ITM type required init
    this.interCommService.remoteProcedureCall(ReadInkSystemVariant, {}).subscribe(
        (res: any) => {
          if (res.InterCommState === 'Success') {
            this.inkSystemSelectObj['key'] = String(res.Payload.systemType);
            this.interCommService.remoteProcedureCall(ReadIsPrinterITM4, {}).subscribe(
                (result: any) => {
                  if (result.InterCommState === 'Success') {
                    if (res.Payload.isPrinterITM4) {
                      this.ITMTypeRequiredObj['value'] = 'ITM4';
                    } else {
                      if (res.Payload.systemType === 1) {
                        this.ITMTypeRequiredObj['value'] = 'ITM2';
                      } else if (res.Payload.systemType === 2) {
                        this.ITMTypeRequiredObj['value'] = 'ITM3';
                      } else {
                        this.ITMTypeRequiredObj['value'] = 'Unknown';
                      }
                    }

                  }
                }
            );
          }
        }
    );
    this.navservice.sendPathInfo(this.router.url.split('/'));
  }
}