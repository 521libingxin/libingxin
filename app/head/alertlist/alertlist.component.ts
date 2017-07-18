
import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';
import { IntercommService } from '../../service/intercomm.service';
import { LongpollingService } from '../../service/longpolling.service';
import { AlertDesc, AlertInfo } from '../../model/alerts';
import { GenerateDiagQRCode, tDiagType, ReadOverallSystemStatus,
         ReadActiveAlerts, EventAcknowledge } from '../../model/IntercommCommonActivateRequest';

enum tStatus {
    STATUS_START = 0,
    STATUS_NO_STATUS,
    STATUS_PRINTING_DISABLED,
    STATUS_READY,
    STATUS_SEQUENCING_ON,
    STATUS_SEQUENCING_OFF,
    STATUS_HEATING,
    STATUS_HEAD_FLUSHED,
    STATUS_JET_RUNNING,
    STATUS_MODULATING,
    STATUS_PHASE_LOCKED,
    STATUS_INK_ON_JET_OFF,
    STATUS_JET_ON_MOD_OFF,
    STATUS_JET_ON_HV_OFF,
    STATUS_JET_ON_MODN_RST,
    STATUS_BLEEDING_HEAD,
    STATUS_WAKEUP_ON,
    STATUS_STANDBY,
    STATUS_MANUAL,
    STATUS_FAULT,
    STATUS_RECOVERING,
    STATUS_WAKEUP_OFF,
    STATUS_OFF,
    STATUS_INITIALISING,
    STATUS_BOOTED,
    STATUS_NOT_DETECTED,
    STATUS_UNDEFINED,
    STATUS_FAULT_RECOVERY,
    STATUS_NULL_STATE,
    STATUS_WARMUP,
    STATUS_END
  };

@Component({
  moduleId: module.id,
  selector: 'alertList',
  templateUrl: './alertlist.component.html',
  styleUrls: ['./alertlist.component.css'],
  animations: [
    trigger('alertDropdownAnimation', [
      state('upPosition', style({
        transform: 'translateY(-100%)'
      })),
      state('downPosition',   style({
        transform: 'translateY(0)'
      })),
      transition('upPosition => downPosition', animate('500ms ease-in')),
      transition('downPosition => upPosition', animate('500ms ease-in'))
    ])
  ]
})
export class AlertlistComponent implements OnInit {
  alertDropdownState= 'upPosition';
  rotate_180 = '';
  alertList: any;
  curentALertDesc = '';

  constructor(
    private longPollingService: LongpollingService,
    private icService: IntercommService
  ) {
     this.longPollingService.subscribePolling(ReadActiveAlerts, {}).subscribe(
      (res: any) => {
        if (res) {
          let newalertList: any = [];
            for (let key in res.events) {
              if (res.events.hasOwnProperty(key)) {
                let incoming = res.events[key];
                let index = incoming.eventInfo.event;
                if (incoming.clearance === 1) {
                  AlertDesc[index].clearance = true;
                }
                AlertDesc[index].id = index;
                AlertDesc[index].severityLevel = incoming.severityLevel;
                AlertDesc[index].timeStamp = new Date(incoming.eventInfo.year, incoming.eventInfo.month,
                incoming.eventInfo.day, incoming.eventInfo.hour,
                incoming.eventInfo.minute, incoming.eventInfo.second, parseInt(key, 10));
                // this.getimg(key);
                newalertList.push(AlertDesc[index]);
              }
            }
            this.alertList = newalertList;
            // add for curent ALert Desc
            if (this.alertList.length > 0) {
              let index = 0;
              // sort id 
               for (let i = 0; i < this.alertList.length; i++) {
                  for (let j = i + 1 ; j < this.alertList.length; j++) {
                      if (this.alertList[i].id >  this.alertList[j].id) {
                        let alertInfoTem =   this.alertList[i];
                        this.alertList[i] = this.alertList[j];
                        this.alertList[j] = alertInfoTem;
                      }
                  }
               }
              for (let i = 0; i < this.alertList.length; i++) {
                  if (this.alertList[i].severityLevel > -1) {
                      index = i;
                      if (this.alertList[i].severityLevel === 0) {
                        break;
                      }
                  }
              }
              this.curentALertDesc = this.alertList[index].shortDesc;
            } else {
                this.icService.remoteProcedureCall(ReadOverallSystemStatus, {}).subscribe(
                  (resSub: any) => {
                      if (res) {
                        let systemStatus = resSub.Payload.state;
                          switch (systemStatus) {
                            case tStatus.STATUS_READY:
                            {
                              this.curentALertDesc = 'Status: Ready';
                            }
                            break;
                            case tStatus.STATUS_OFF:
                            {
                              this.curentALertDesc = 'Status: Idle';
                            }
                            break;
                            case tStatus.STATUS_STANDBY:
                            {
                              this.curentALertDesc = 'Status: Standby';
                            }
                            break;
                            case tStatus.STATUS_FAULT:
                            {
                              this.curentALertDesc = 'Status: Fault';
                            }
                            break;
                            case tStatus.STATUS_INITIALISING:
                            {
                              this.curentALertDesc = 'Status: Initialising';
                            }
                            break;
                            case tStatus.STATUS_PHASE_LOCKED:
                            {
                              this.curentALertDesc = 'Status: Jet Running';
                            }
                            break;
                            case tStatus.STATUS_READY:
                            {
                              this.curentALertDesc = 'Status: Transition (Phase Locked)';
                            }
                            break;
                            case tStatus.STATUS_SEQUENCING_ON:
                            {
                              this.curentALertDesc = 'Status: Transition (Sequencing On)';
                            }
                            break;
                            case tStatus.STATUS_SEQUENCING_OFF:
                            {
                              this.curentALertDesc = 'Status: Transition (Sequencing Off)';
                            }
                            break;
                            case tStatus.STATUS_HEATING:
                            {
                              this.curentALertDesc = 'Status: Heating';
                            }
                            break;
                            case tStatus.STATUS_BLEEDING_HEAD:
                            {
                              this.curentALertDesc = 'Status: Bleeding Head';
                            }
                            break;
                            case tStatus.STATUS_RECOVERING:
                            {
                              this.curentALertDesc = 'Status: Recovering';
                            }
                            break;
                            case tStatus.STATUS_INK_ON_JET_OFF:
                            case tStatus.STATUS_JET_ON_MOD_OFF:
                            case tStatus.STATUS_JET_ON_HV_OFF:
                            case tStatus.STATUS_JET_ON_MODN_RST:
                            {
                              this.curentALertDesc = 'Status: Transition';
                            }
                            break;
                            case tStatus.STATUS_WARMUP:
                            {
                              this.curentALertDesc = 'Status: Warmup (Remaining time = %1 seconds)';
                            }
                            break;
                            case tStatus.STATUS_FAULT_RECOVERY:
                            {
                              this.curentALertDesc = 'Status: Recovering';
                            }
                            break;
                            default: {
                              this.curentALertDesc = 'Status: Transition';
                            }
                          }
                      }
                  },
                  (error: any) => {
                      console.log(error);
                  }
                );
            }
        }
      },
      err => console.log(err));
  }

  ngOnInit() {}
  /*getimg(index:any){
    this.icService.remoteProcedureCall(GenerateDiagQRCode, { 'diagType': tDiagType.eAlert, 'id': index }).subscribe(
      (res2: any) => {
          // Covert bit array into usable BMP string
          this.alertList[index].barcodeString = 'data:image/png;base64,' + btoa(String.fromCharCode.apply(null, res2.Payload.bitmapData));
          //console.log('data:image/png;base64,' + btoa(String.fromCharCode.apply(null, res2.bitmapData)));
      }
    )
  }*/
  alertdialog = false;
  moduleobj: any;
  onPopAlert(id: number): void {
    this.icService.remoteProcedureCall(GenerateDiagQRCode, { 'diagType': tDiagType.eAlert, 'id': this.alertList[id].id }).subscribe(
      (res2: any) => {
          this.alertList[id].barcodeString = 'data:image/png;base64,' + btoa(String.fromCharCode.apply(null, res2.Payload.bitmapData));

          this.moduleobj = this.alertList[id];
          this.alertdialog = true;
          //this.alertservice.setopentype('alertdialog', true, this.alertList[id]);
      }
    );
   }
  closemodule() {
    //this.alertservice.setopentype('', false, '');
  }
  clearEvent() {
    /*
      if (this.moduleobj.clearance) {
        // alert("clearance == true");
        return false;
      }
      this.icService.remoteProcedureCall(EventAcknowledge, { 'event_id': this.moduleobj.id }).subscribe(
         (res: any) => {
            console.log(res);
            //this.alertservice.setopentype('', false, '');
         },
         (err: any) => {
            console.log(err);
         }
      );*/
   }
  clearAlert(id: number) {
      if (this.alertList[id].clearance) {
        // alert('clearance == true');
        return false;
      }
      this.icService.remoteProcedureCall(EventAcknowledge, { 'event_id': this.alertList[id].id }).subscribe(
         (res: any) => {
            console.log(res);
            for (let key in this.alertList) {
               if (this.alertList[key].id === id) {
                  this.alertList.splice(parseInt(key, 10), 1);
               }
            }
         },
         (err: any) => {
            console.log(err);
         }
      );
   }

   clearAllAlerts() {
      let shortlist: AlertInfo[] = Array<AlertInfo>();
      for (let key in this.alertList) {
         if (this.alertList[key].clearance === false) {
            this.alertList[key].oldIndex = key;
            shortlist.push(this.alertList[key]);
         }
      }

      for (let key in shortlist) {
         if (shortlist.hasOwnProperty(key)) {
            let oldIndex = shortlist[key].oldIndex;
            if (oldIndex !== -1) {
                this.clearAlert(oldIndex);
            }
         }
      }
      this.alertDropdown();
   }
  alertDropdown() {
      if (this.alertDropdownState === 'upPosition') {
        this.alertDropdownState = 'downPosition';
        this.rotate_180 = 'rotate_180';
      }else {
        this.alertDropdownState = 'upPosition';
        this.rotate_180 = '';
      }
  }
}