
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from '../../../../service/navigation.service';
import { InputDialogService } from '../../../../service/inputdialog.service';
import { ReadPrintingOffsets, WritePrintingOffsets, ReadDefaultRepeatProperties, WriteDefaultRepeatProperties,
        TRepeatPropertiesInfo, ReadDefaultTextElementFontSize,
        WriteDefaultTextElementFontSize} from '../../../../model/IntercommCommonActivateRequest';
// import { LongpollingService } from '../../../../service/longpolling.service';
import { IntercommService } from '../../../../service/intercomm.service';

enum RepeatMode {
    REPEAT_MODE_OFF,
    REPEAT_MODE_COUNTED,
    REPEAT_MODE_CONTINUOUS
};
@Component({
  moduleId: module.id,
  selector: 'app-Properties',
  templateUrl: './Properties.component.html',
  styleUrls: ['./Properties.component.css']
})
export class PropertiesComponent implements OnInit {

  setValueChangePopupOpen = false;
  updatePrintCaption = 'Repeat:Update each print';
  updatePrint: any = {
    'setkey': WriteDefaultRepeatProperties,
    'setinParams': {},
    'value': false,
    'getkey': ReadDefaultRepeatProperties,
    'readbackObj': function (Payload: any) {
      this['value'] = Payload['repeatPropertiesInfo']['updateMsg'];
      this['setinParams']['repeatPropertiesInfo']['updateMsg'] =  this['value'];
    },
    'changeval': function (val: any) {
      this['setinParams']['repeatPropertiesInfo']['updateMsg'] = val;
    },
  };
  forwardOff: any;
  reverseOff: any;

  textElementSizeSelectObj = {
    'caption' : 'Default font size for text elements',
    'unit' : 'drops',
    'key' : '0',
    'val' : '',
    'list' : [{'key' : '0', 'val' : '5'}, {'key' : '1', 'val' : '6'}, {'key' : '2', 'val' : '7'},
     {'key' : '3', 'val' : '8'}, {'key' : '4', 'val' : '9'}, {'key' : '5', 'val' : '12'},
     {'key' : '6', 'val' : '15'}, {'key' : '7', 'val' : '16'}, {'key' : '8', 'val' : '21'},
     {'key' : '9', 'val' : '24'}, {'key' : '10', 'val' : '32'}]
  };

  repeatPropertiesInfo: TRepeatPropertiesInfo = {'mode': 0, 'countedNumRepeats': 0, 'pitch': 0, 'updateMsg': false,
                                     'usePrintGo': 0, 'pitchType': false, paramCount: 5};

  repeatSelectObj = {
    'caption' : 'Repeat',
    'unit' : '',
    'key' : '0',
    'val' : '',
    'list' : [{'key' : '0', 'val' : 'Off'}, {'key' : '1', 'val' : 'Counted'}, {'key' : '2', 'val' : 'Continuous'}]
  };

  repeatPitchTypeSelectObj = {
    'caption' : 'Repeat spacing type',
    'unit' : '',
    'key' : '0',
    'val' : '',
    'list' : [{'key' : '0', 'val' : 'Space by pitch'}, {'key' : '1', 'val' : 'Space by gap'}]
  };

 // usePrintGo
 endOfProductSelectObj = {
    'caption' : 'Repeat:End of product',
    'unit' : '',
    'key' : '0',
    'val' : '',
    'list' : [{'key' : '2', 'val' : 'Ignore'}, {'key' : '0', 'val' : 'Complete'}, {'key' : '1', 'val' : 'Cancel'}]
  };
  repeatCount: any;
  repeatPitch: any;

  constructor(
      private router: Router,
      private navservice: NavigationService,
      private inputDialogService: InputDialogService,
      private icService: IntercommService) {
      }

   ngOnInit() {
      this.navservice.sendPathInfo(this.router.url.split('/'));
      this.forwardOff = this.inputDialogService.createObj('forwardOff', {});
      this.reverseOff = this.inputDialogService.createObj('reverseOff', {});
      this.repeatCount = this.inputDialogService.createObj('repeatCount', {});
      this.repeatPitch = this.inputDialogService.createObj('repeatPitch', {});
      this.icService.remoteProcedureCall(ReadDefaultRepeatProperties, {'repeatPropertiesInf': {} }).subscribe(
        (res: any) => {
          if (res.InterCommState === 'Success') {
            this.repeatPropertiesInfo = res.Payload.repeatPropertiesInfo;
            this.repeatSelectObj['key'] = this.repeatPropertiesInfo.mode.toString();

            if (this.repeatPropertiesInfo.pitchType) {
              this.repeatPitchTypeSelectObj['key'] = '1';
            } else {
              this.repeatPitchTypeSelectObj['key'] = '0';
            }

            if (this.repeatPropertiesInfo.mode === RepeatMode.REPEAT_MODE_CONTINUOUS && this.endOfProductSelectObj['list'].length === 3) {
              this.endOfProductSelectObj['list'].splice(0, 1);
              if (this.repeatPropertiesInfo.usePrintGo === 3) {
                --this.repeatPropertiesInfo.usePrintGo;
              }
            }
            this.endOfProductSelectObj['key'] = this.repeatPropertiesInfo.usePrintGo.toString();
          }
      });
      // Default font size for text elements 
      this.icService.remoteProcedureCall(ReadDefaultTextElementFontSize, {}).subscribe(
        (res: any) => {
          if (res.InterCommState === 'Success') {
            for (let i = 0; i < 10; i++) {
              if (res.Payload.defaultTextElementFontSize.toString() === this.textElementSizeSelectObj['list'][i]['val']) {
                this.textElementSizeSelectObj['key'] = this.textElementSizeSelectObj['list'][i]['key'];
              }
            }
          }
      });
  }
  // mode 
  repeatSelectChange(Obj: any) {
    console.log('repeat select', Obj);
    this.repeatPropertiesInfo.mode = parseInt(Obj['key'], 0);
    this.icService.remoteProcedureCall(WriteDefaultRepeatProperties,
                      {'repeatPropertiesInfo': this.repeatPropertiesInfo}).subscribe(
      (res: any) => {
        if (res.InterCommState === 'Success') {
           this.repeatSelectObj['key'] = Obj['key'];
           if (this.repeatPropertiesInfo.mode === RepeatMode.REPEAT_MODE_CONTINUOUS && this.endOfProductSelectObj['list'].length === 3) {
              this.endOfProductSelectObj['list'].splice(0, 1);
           } else if (this.repeatPropertiesInfo.mode === RepeatMode.REPEAT_MODE_COUNTED
                  && this.endOfProductSelectObj['list'].length === 2) {
                this.endOfProductSelectObj['list'].splice(0, 0, { 'key': '3', 'val': 'Ignore'});
           }
           this.openSetValueChangePopup();
        }
    });
  }
  repeatCountSelectChange(Obj: any) {
    this.openSetValueChangePopup();
  }

  repeatPitchSelectChange(Obj: any) {
    this.openSetValueChangePopup();
  }
  updatePrintChange(Obj: any) {
    this.openSetValueChangePopup();
  }
  // repeatPitchType
  repeatPitchTypeSelectChange(Obj: any) {
    console.log('pitchType select', Obj);
    if (Obj['val'] === 'Space by pitch') {
      this.repeatPropertiesInfo.pitchType = false;
    } else {
      this.repeatPropertiesInfo.pitchType = true;
    }
    this.icService.remoteProcedureCall(WriteDefaultRepeatProperties,
                      {'repeatPropertiesInfo': this.repeatPropertiesInfo}).subscribe(
      (res: any) => {
        if (res.InterCommState === 'Success') {
         //  this.repeatPitchTypeSelectObj['key'] = Obj['key'];
         this.openSetValueChangePopup();
        }
    });
  }

  endOfProductSelectChange(Obj: any) {
    console.log('pitchType select', Obj);
    this.repeatPropertiesInfo.usePrintGo = parseInt(Obj['key'], 0);
    this.icService.remoteProcedureCall(WriteDefaultRepeatProperties,
                      {'repeatPropertiesInfo': this.repeatPropertiesInfo}).subscribe(
      (res: any) => {
        if (res.InterCommState === 'Success') {
          //  this.repeatPitchTypeSelectObj['key'] = Obj['key'];
          this.openSetValueChangePopup();
        }
    });
  }
  // Default font size for text elements
  textElementSizeSelectChange(Obj: any) {
    console.log('textElementSize select', Obj);
    this.textElementSizeSelectObj.val = Obj['val'];
    this.icService.remoteProcedureCall(WriteDefaultTextElementFontSize,
                      {'defaultTextElementFontSize': parseInt(this.textElementSizeSelectObj.val, 0)}).subscribe(
      (res: any) => {
        if (res.InterCommState === 'Success') {
          this.textElementSizeSelectObj['key'] = Obj['key'];
          this.openSetValueChangePopup();
        }
    });
  }
  openSetValueChangePopup(){
    this.setValueChangePopupOpen = true;
  }

  closeSetValueChangePopup() {
    this.setValueChangePopupOpen = false;
  }
}