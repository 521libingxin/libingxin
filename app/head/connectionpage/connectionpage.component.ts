
import { Component, OnInit } from '@angular/core';
import { LongpollingService } from '../../service/longpolling.service';
import { GetDevices, ReadActiveConnections, ReadOverallSystemStatus, ReadRemainingInkPercentages,
  ReadRemainingSolventPercentages} from '../../model/IntercommCommonActivateRequest';

@Component({
  moduleId: module.id,
  selector: 'connectionPage',
  templateUrl: './connectionpage.component.html',
  styleUrls: ['./connectionpage.component.css']
})

export class ConnectionpageComponent implements OnInit {
  headlist = [ ['Jet', 'Sequencing on/off', 'jet_none'], ['USB', 'Not connected', 'usb_none'],
  ['Service key', 'No Service key is inserted', 's_k_none'], ['Multiple network', 'Not connected to multiple network', 'm_n_hover'] ];
  usbKeyState: number = 0;
  connectionCount: number = 0;
  consumables1Percent: number = 0;
  consumables2Percent: number = 0;
  leftLine: number = 0;
  rightLine: number = 0;
  percentHeight: number = 175;

  constructor(private longpollingService: LongpollingService) { }

  ngOnInit() {
      // get
      this.longpollingService.subscribePolling(GetDevices, {}).subscribe(
         (res: any) => {
            if (res) {
                let usbKeyFound = false;
                for (let i in res.devices) {
                  if (res.devices[i].startsWith('\\USB')) {
                      this.usbKeyState |= 0x4;
                      usbKeyFound = true;
                    }
                }
                if (!usbKeyFound && (this.usbKeyState & 0x4)) {
                    this.usbKeyState &= ~0x4 ;
                }
                // USB
                if (this.usbKeyState & 0x4) {
                  this.headlist[1][1] = 'Connected';
                  this.headlist[1][2] = 'usb_hover';
                }else {
                  this.headlist[1][1] = 'Not connected';
                  this.headlist[1][2] = 'usb_none';
                }
                // Service key
                switch (this.usbKeyState & 0x3) {
                  case 0 :
                  {
                    this.headlist[2][1] = 'No Service key is inserted';
                    this.headlist[2][2] = 's_k_none';
                  }
                  break;
                  case 1 :
                  {
                    this.headlist[2][1] = 'Factory key is inserted';
                    this.headlist[2][2] =  's_k_factory';
                  }
                  break;
                  case 2 :
                  {
                    this.headlist[2][1] = 'Service key is inserted';
                    this.headlist[2][2] = 's_k_service';
                  }
                  break;
                  case 3 :
                  {
                    this.headlist[2][1] = 'Factory and Service keys are inserted';
                    this.headlist[2][2] = 's_k_hover';
                  }
                  break;
                }
            }
         },
         (error: any) => {
            console.log(error);
         }
      );
      // Multiple network
      this.longpollingService.subscribePolling(ReadActiveConnections, {}).subscribe(
         (res: any) => {
            if (res) {
              this.connectionCount = res.nrActiveConnections;
              if (this.connectionCount > 1) {
                  this.headlist[3][1] = 'More than one network connection is available';
                  this.headlist[3][2] = 'm_n_hover';
              }else {
                  this.headlist[3][1] = 'Not connected to multiple network';
                  this.headlist[3][2] = 'm_n_none';
              }
            }
         },
         (error: any) => {
            console.log(error);
         }
      );

      this.longpollingService.subscribePolling(ReadOverallSystemStatus, {}).subscribe(
         (res: any) => {
            if (res) {
              this.connectionCount = res.state;
            }
         },
         (error: any) => {
            console.log(error);
         }
      );
      // ink
      this.longpollingService.subscribePolling(ReadRemainingInkPercentages, {}).subscribe(
         (res: any) => {
            if (res) {
              this.consumables1Percent = this.calculateOverallConsumablePercentRemaining(res.percentageInCartridge, res.percentageInModule);
              this.rightLine = -(this.consumables1Percent * (this.percentHeight - 12) / 100);
            }
         },
         (error: any) => {
            console.log(error);
         }
      );
      // make up
      this.longpollingService.subscribePolling(ReadRemainingSolventPercentages, {}).subscribe(
         (res: any) => {
            if (res) {
              this.consumables2Percent = this.calculateOverallConsumablePercentRemaining(res.percentageInCartridge, res.percentageInModule);
              // this.consumables2Percent = 100;
              this.leftLine = -(this.consumables2Percent * (this.percentHeight - 12) / 100);
            }
         },
         (error: any) => {
            console.log(error);
         }
      );
  }

  calculateOverallConsumablePercentRemaining(percentageInCartridge: number, percentageInModule: number): number {
    let percent = 0;
    if (percentageInCartridge > 0) {
        // Ink remaining in cartridge - overall percent should take into account ink in module (60%)
        percent = 60 + (percentageInCartridge * 40 / 100);
    }else if (percentageInModule > 0) {
        // No ink in cartridge - overall percent should just take into account ink empty limit (10%)
        percent = 10 + (percentageInModule * 50 / 100);
    }else {
        percent = 0;
    }
    return percent;
  }
}