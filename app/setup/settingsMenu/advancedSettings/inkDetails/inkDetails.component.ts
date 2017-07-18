
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from '../../../../service/navigation.service';
import  * as ActivateRequest from '../../../../model/IntercommCommonActivateRequest';
import { IntercommService } from '../../../../service/intercomm.service';
import { InputDialogService } from '../../../../service/inputdialog.service';

@Component({
  moduleId: module.id,
  selector: 'inkDetails',
  templateUrl: './Inkdetails.component.html',
  styleUrls: ['./Inkdetails.component.css']
})
export class InkdetailsComponent implements OnInit {
  groupNames: Array<String> = ['i-Tech module', 'Ink cartridge', 'Makeup cartridge', 'Ink details'];
  /*********************************** GROUP[i-Tech module] OBJECTS ***************************************/
  // Capacity
  ITMCapacityObj: Object = {
    'caption' : 'Capacity',
    'value' : '',
    'unit' : ''
  };
  // Serial number 1
  serialNumberOneObj: Object = {
    'caption' : 'Serial number 1',
    'value' : '',
    'unit' : ''
  };
  // Timestamp 1
  timestampOneObj: Object = {
    'caption' : 'Timestamp 1',
    'value' : '',
    'unit' : ''
  };
  // Serial number 2
  serialNumberTwoObj: Object = {
    'caption' : 'Serial number 2',
    'value' : '',
    'unit' : ''
  };
  // Life data
  liftDataObj: Object = {
    'caption' : 'Life data',
    'value' : '',
    'unit' : ''
  };
  /*******************************************************************************************************/
  /*********************************** GROUP[ink_cartridge] OBJECTS **************************************/
  // Expiry
  expiryObj: Object = {
    'caption' : 'Expiry',
    'value' : '',
    'unit' : ''
  };
  // Capacity
  inkCartridgeCapacityObj: Object = {
    'caption' : 'Capacity',
    'value' : '',
    'unit' : ''
  };
  // Ink code
  inkCodeObj: Object = {
    'caption' : 'Ink code',
    'value' : '',
    'unit' : ''
  };
  // Ink name
  inkNameObj: Object = {
    'caption' : 'Ink name',
    'value' : '',
    'unit' : ''
  };
  // i-Tech module compatiblity code
  compatiblityCodeObj: Object = {
    'caption' : 'i-Tech module compatiblity code',
    'value' : '',
    'unit' : ''
  };
  // Viscosity A
  viscosityAObj: Object = {
    'caption' : 'Viscosity A',
    'value' : '',
    'unit' : ''
  };
  // Viscosity B
  viscosityBObj: Object = {
    'caption' : 'Viscosity B',
    'value' : '',
    'unit' : ''
  };
  // Serial number 1
  inkCartridgeSerialNumberOneObj: Object = {
    'caption' : 'Serial number 1',
    'value' : '',
    'unit' : ''
  };
  // Timestamp 1
  inkCartridgeTimestampOneObj: Object = {
    'caption' : 'Timestamp 1',
    'value' : '',
    'unit' : ''
  };
  // Serial number 2
  inkCartridgeSerialNumberTwoObj: Object = {
    'caption' : 'Serial number 2',
    'value' : '',
    'unit' : ''
  };
  // Timestamp 2
  inkCartridgeTimestampTwoObj: Object = {
    'caption' : 'Timestamp 2',
    'value' : '',
    'unit' : ''
  };
  // Batch code
  batchCodeObj: Object = {
    'caption' : 'Batch code',
    'value' : '',
    'unit' : ''
  };
  /*******************************************************************************************************/
  /*********************************** GROUP[makeup_cartridge] OBJECTS ***********************************/
  // Expiry
  makeupExpiryObj: Object = {
    'caption' : 'Expiry',
    'value' : '',
    'unit' : ''
  };
  // Capacity
  makeupCapacityObj: Object = {
    'caption' : 'Capacity',
    'value' : '',
    'unit' : ''
  };
  // Makeup code
  makeupCodeObj: Object = {
    'caption' : 'Makeup code',
    'value' : '',
    'unit' : ''
  };
  // Printer serial number 1
  printerSerialNumOneObj: Object = {
    'caption' : 'Printer serial number 1',
    'value' : '',
    'unit' : ''
  };
  // Timestamp 1
  makeupTimestampOneObj: Object = {
    'caption' : 'Timestamp 1',
    'value' : '',
    'unit' : ''
  };
  // Serial number 2
  printerSerialNumTwoObj: Object = {
    'caption' : 'Serial number 2',
    'value' : '',
    'unit' : ''
  };
  // Timestamp 2
  makeupTimestampTwoObj: Object = {
    'caption' : 'Timestamp 2',
    'value' : '',
    'unit' : ''
  };
  // Batch code
  makeupBatchCodeObj: Object = {
    'caption' : 'Batch code',
    'value' : '',
    'unit' : ''
  };
  /*****************************************************************************************************/
  /*********************************** GROUP[ink_details] OBJECTS **************************************/
  // Current ink
  currentInkSelectObj: Object = {
    'caption': 'Current ink',
    'unit': '',
    'key': '0',
    'val': '',
    'list': []
  };
  // Ink version
  inkVersionObj: Object = {
    'caption': 'Ink version',
    'value' : '---',
    'unit' : ''
  };
  // Wash type
  washTypeObj: Object = {
    'caption': 'Wash type',
    'value' : '',
    'unit' : ''
  };
  // Make-up type
  makeupTypeObj: Object = {
    'caption': 'Make-up type',
    'value' : '',
    'unit' : ''
  };
  // Class
  classObj: Object = {
    'caption': 'Class',
    'value' : '-',
    'unit' : ''
  };
  // System
  systemObj: Object = {
    'caption': 'System',
    'value' : '',
    'unit' : ''
  };
  // Target viscosity
  targetViscosityObj: Object = this.inputDialogService.createObj('targetViscosity', {
    'caption' : 'Target viscosity',
    'unit' : 'cP',
    'stepsize': 0.01,
    'datamin': 0,
    'datamax': 0,
    'disabled': true,
    'path': ['uVisco']
  });
  /*****************************************************************************************************/
  constructor(
    private router: Router,
    private navservice: NavigationService,
    private intercommService: IntercommService,
    private inputDialogService: InputDialogService
  ) {}

  // Current ink Change
  currentInkSelectChange(Obj: any) {
    console.log('currentInk select', Obj);
    // TODO  
  }

  // Target viscosity change
  temperatureSetPointChange(Obj: any) {
    this.targetViscosityObj['setinParams'] = Obj['setinParams'];
  };

  ngOnInit() {
    // init buttons status
    let iTechModuleEle = document.getElementById('itechModule');
    iTechModuleEle.hidden = true;
    let inkCartridgeEle = document.getElementById('inkCartridge');
    inkCartridgeEle.hidden = true;
    let makeupCartridgeEle = document.getElementById('makeupCartridge');
    makeupCartridgeEle.hidden = true;
    let inkDetailsEle = document.getElementById('inkDetails');
    inkDetailsEle.hidden = true;
    /*********************************** GROUP[i-Tech module] INIT ***************************************/
    // Capacity init
    this.intercommService.remoteProcedureCall(ActivateRequest.ReadITMCapacity, {}).subscribe(
         (res: any) => {
            if (res.State !== 'Failed') {
              this.ITMCapacityObj['value'] = String(res.Payload.val * 10);
            } else {
              this.ITMCapacityObj['value'] = '-';
            }
         }
    );
    // Serial number 1 init
    this.intercommService.remoteProcedureCall(ActivateRequest.ReadITMSerialNumberFirstPrinter, {}).subscribe(
         (res: any) => {
            if (res.State !== 'Failed') {
              this.serialNumberOneObj['value'] = String(res.Payload.val);
            } else {
              this.serialNumberOneObj['value'] = 'Failed reading';
            }
         }
    );
    // Timestamp 1
    this.intercommService.remoteProcedureCall(ActivateRequest.ReadITMTimestampFirstPrinter, {}).subscribe(
         (res: any) => {
            if (res.State !== 'Failed') {
              this.timestampOneObj['value'] = String(res.Payload.val);
            } else {
              this.timestampOneObj['value'] = 'Failed reading';
            }
         }
    );
    // Serial number 2
    this.intercommService.remoteProcedureCall(ActivateRequest.ReadITMSerialNumberLastPrinter, {}).subscribe(
         (res: any) => {
            if (res.State !== 'Failed') {
              this.serialNumberTwoObj['value'] = String(res.Payload.val);
            } else {
              this.serialNumberTwoObj['value'] = 'Failed reading';
            }
         }
    );
    // Life data
    this.intercommService.remoteProcedureCall(ActivateRequest.ReadITMLifeData, {}).subscribe(
         (res: any) => {
            if (res.State !== 'Failed') {
              this.liftDataObj['value'] = String(res.Payload.CHAR); // TODO
            } else {
              this.liftDataObj['value'] = 'Failed reading';
            }
         }
    );
    /*****************************************************************************************************/
    /*********************************** GROUP[ink_cartridge] INIT ***************************************/
    // Expiry init
    this.intercommService.remoteProcedureCall(ActivateRequest.ReadInkExpiry, {}).subscribe(
         (res: any) => {
            if (res.State !== 'Failed') {
              this.expiryObj['value'] = String(res.Payload.val);
            } else {
              this.expiryObj['value'] = '-';
            }
         }
    );
    // Capacity
    this.intercommService.remoteProcedureCall(ActivateRequest.ReadInkCapacity, {}).subscribe(
         (res: any) => {
            if (res.State !== 'Failed') {
              this.inkCartridgeCapacityObj['value'] = String(res.Payload.val * 10);
            } else {
              this.inkCartridgeCapacityObj['value'] = '-';
            }
         }
    );
    // Ink code
    this.intercommService.remoteProcedureCall(ActivateRequest.ReadConsumableInkId, {}).subscribe(
         (res: any) => {
            if (res.State !== 'Failed') {
              this.inkCodeObj['value'] = String(res.Payload.val);
            } else {
              this.inkCodeObj['value'] = '-';
            }
         }
    );
    // Ink name
    this.intercommService.remoteProcedureCall(ActivateRequest.ReadConsumableInkName, {}).subscribe(
         (res: any) => {
            if (res.State !== 'Failed') {
              this.inkNameObj['value'] = String(res.Payload.val);
            } else {
              this.inkNameObj['value'] = 'Failed reading';
            }
         }
    );
    // i-Tech module compatiblity code
    this.intercommService.remoteProcedureCall(ActivateRequest.ReadInkITMCompatibility, {}).subscribe(
         (res: any) => {
            if (res.State !== 'Failed') {
              this.compatiblityCodeObj['value'] = String(res.Payload.val);
            } else {
              this.compatiblityCodeObj['value'] = '-';
            }
         }
    );
    // Viscosity A
    this.intercommService.remoteProcedureCall(ActivateRequest.ReadInkViscosityParamA, {}).subscribe(
         (res: any) => {
            if (res.State !== 'Failed') {
              this.viscosityAObj['value'] = String(res.Payload.val);
            } else {
              this.viscosityAObj['value'] = '-';
            }
         }
    );
    // Viscosity B
    this.intercommService.remoteProcedureCall(ActivateRequest.ReadInkViscosityParamB, {}).subscribe(
         (res: any) => {
            if (res.State !== 'Failed') {
              this.viscosityBObj['value'] = String(res.Payload.val);
            } else {
              this.viscosityBObj['value'] = '-';
            }
         }
    );
    // Serial number 1 
    this.intercommService.remoteProcedureCall(ActivateRequest.ReadInkSerialNumberFirstPrinter, {}).subscribe(
         (res: any) => {
            if (res.State !== 'Failed') {
              this.inkCartridgeSerialNumberOneObj['value'] = String(res.Payload.val);
            } else {
              this.inkCartridgeSerialNumberOneObj['value'] = 'Failed reading';
            }
         }
    );
    // Timestamp 1 
    this.intercommService.remoteProcedureCall(ActivateRequest.ReadInkTimestampFirstPrinter, {}).subscribe(
         (res: any) => {
            if (res.State !== 'Failed') {
              this.inkCartridgeTimestampOneObj['value'] = String(res.Payload.val);
            } else {
              this.inkCartridgeTimestampOneObj['value'] = 'Failed reading';
            }
         }
    );
    // Serial number 2
    this.intercommService.remoteProcedureCall(ActivateRequest.ReadInkSerialNumberLastPrinter, {}).subscribe(
         (res: any) => {
            if (res.State !== 'Failed') {
              this.inkCartridgeSerialNumberTwoObj['value'] = String(res.Payload.val);
            } else {
              this.inkCartridgeSerialNumberTwoObj['value'] = 'Failed reading';
            }
         }
    );
    // Timestamp 2
    this.intercommService.remoteProcedureCall(ActivateRequest.ReadInkTimestampLastPrinter, {}).subscribe(
         (res: any) => {
            if (res.State !== 'Failed') {
              this.inkCartridgeTimestampTwoObj['value'] = String(res.Payload.val);
            } else {
              this.inkCartridgeTimestampTwoObj['value'] = 'Failed reading';
            }
         }
    );
    // Batch code
    this.intercommService.remoteProcedureCall(ActivateRequest.ReadInkBatchCode, {}).subscribe(
         (res: any) => {
            if (res.State !== 'Failed') {
              this.batchCodeObj['value'] = String(res.Payload.val);
            } else {
              this.batchCodeObj['value'] = 'Failed reading';
            }
         }
    );
    /********************************************************************************************************/
    /*********************************** GROUP[makeup_cartridge] INIT ***************************************/
    // Expiry init
    this.intercommService.remoteProcedureCall(ActivateRequest.ReadMakeupExpiry, {}).subscribe(
         (res: any) => {
            if (res.State !== 'Failed') {
              this.makeupExpiryObj['value'] = String(res.Payload.val);
            } else {
              this.makeupExpiryObj['value'] = '-';
            }
         }
    );
    // Capacity init
    this.intercommService.remoteProcedureCall(ActivateRequest.ReadMakeupCapacity, {}).subscribe(
         (res: any) => {
            if (res.State !== 'Failed') {
              this.makeupCapacityObj['value'] = String(res.Payload.val);
            } else {
              this.makeupCapacityObj['value'] = '-';
            }
         }
    );
    // Makeup code init
    this.intercommService.remoteProcedureCall(ActivateRequest.ReadConsumableMakeupId, {}).subscribe(
         (res: any) => {
            if (res.State !== 'Failed') {
              this.makeupCodeObj['value'] = String(res.Payload.val);
            } else {
              this.makeupCodeObj['value'] = '-';
            }
         }
    );
    // Printer serial number 1 init
    this.intercommService.remoteProcedureCall(ActivateRequest.ReadMakeupSerialNumberFirstPrinter, {}).subscribe(
         (res: any) => {
            if (res.State !== 'Failed') {
              this.printerSerialNumOneObj['value'] = String(res.Payload.val);
            } else {
              this.printerSerialNumOneObj['value'] = 'Failed reading';
            }
         }
    );
    // Timestamp 1 init
    this.intercommService.remoteProcedureCall(ActivateRequest.ReadMakeupTimestampFirstPrinter, {}).subscribe(
         (res: any) => {
            if (res.State !== 'Failed') {
              this.makeupTimestampOneObj['value'] = String(res.Payload.val);
            } else {
              this.makeupTimestampOneObj['value'] = 'Failed reading';
            }
         }
    );
    // Serial number 2 init
    this.intercommService.remoteProcedureCall(ActivateRequest.ReadMakeupSerialNumberLastPrinter, {}).subscribe(
         (res: any) => {
            if (res.State !== 'Failed') {
              this.printerSerialNumTwoObj['value'] = String(res.Payload.val);
            } else {
              this.printerSerialNumTwoObj['value'] = 'Failed reading';
            }
         }
    );
    // Timestamp 2 init
    this.intercommService.remoteProcedureCall(ActivateRequest.ReadMakeupTimestampLastPrinter, {}).subscribe(
         (res: any) => {
            if (res.State !== 'Failed') {
              this.makeupTimestampTwoObj['value'] = String(res.Payload.val);
            } else {
              this.makeupTimestampTwoObj['value'] = 'Failed reading';
            }
         }
    );
    // Batch code init
    this.intercommService.remoteProcedureCall(ActivateRequest.ReadMakeupBatchCode, {}).subscribe(
         (res: any) => {
            if (res.State !== 'Failed') {
              this.makeupBatchCodeObj['value'] = String(res.Payload.val);
            } else {
              this.makeupBatchCodeObj['value'] = 'Failed reading';
            }
         }
    );
    /********************************************************************************************************/
    /*********************************** GROUP[ink_details] INIT ***************************************/
    // Current ink init
    this.intercommService.remoteProcedureCall(ActivateRequest.ReadPrinterInkName, {}).subscribe(
        (res: any) => {
          if (res.InterCommState === 'Success') {
            this.intercommService.remoteProcedureCall(ActivateRequest.ReadAvailInkNames, {}).subscribe(
                (result: any) => {
                  if (result.InterCommState === 'Success') {
                    for (let i = 0; i < result.Payload.vec.length; ++i) {
                      if (result.Payload.vec[i] === res.Payload.val) {
                        this.currentInkSelectObj['key'] = String(i);
                      }
                      let tempObj: Object = {'key': String(i), 'val': result.Payload.vec[i]};
                      (this.currentInkSelectObj['list']).push(tempObj);
                    }

                  }
                }
            );
          }
        }
    );
    // Wash type init
    this.intercommService.remoteProcedureCall(ActivateRequest.ReadWashSolventName, {}).subscribe(
         (res: any) => {
            if (res.InterCommState === 'Success') {
              this.washTypeObj['value'] = res.Payload.washSolventName;
            }
         }
    );
    // Make-up type init
    this.intercommService.remoteProcedureCall(ActivateRequest.ReadPrinterInkName, {}).subscribe(
         (res: any) => {
            if (res.InterCommState === 'Success') {
              this.makeupTypeObj['value'] = res.Payload.val;
            }
         }
    );
    // System init
    this.intercommService.remoteProcedureCall(ActivateRequest.ReadInkSystemVariant, {}).subscribe(
         (res: any) => {
            if (res.InterCommState === 'Success') {
              this.intercommService.remoteProcedureCall(ActivateRequest.ReadInkSystemVariantNameList, {}).subscribe(
                  (result: any) => {
                      if (result.InterCommState === 'Success') {
                        this.systemObj['value'] = result.Payload.name[res.Payload.systemType];
                      }
                  }
              );

            }
         }
    );
    // Target viscosity init
    this.intercommService.remoteProcedureCall(ActivateRequest.ReadExpectedViscosityLimits, {}).subscribe(
      (res: any) => {
        if (res.InterCommState === 'Success') {
          this.targetViscosityObj['datamin'] = res.Payload.lowerLimit;
          this.targetViscosityObj['datamax'] = res.Payload.upperLimit;

          this.intercommService.remoteProcedureCall(ActivateRequest.ReadViscosityExpected, {}).subscribe(
            (result: any) => {
              if (result.InterCommState === 'Success') {
                this.targetViscosityObj['value'] = result.Payload.uVisco.toFixed(2);
              }
            }
          );
        }
      }
    );
    /********************************************************************************************************/
    this.navservice.sendPathInfo(this.router.url.split('/'));
  }

  hideDetailEle(obj: Object): void {
    let hideEle = document.getElementById(obj['currentTarget']['id'].split('_')[0]); // get hide element id
    if (hideEle.hidden) {
      hideEle.hidden = false;
    } else {
      hideEle.hidden = true;
    }
  }
}