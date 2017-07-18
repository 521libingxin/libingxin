
import { Component, OnInit } from '@angular/core';
import { LongpollingService } from '../../service/longpolling.service';
import { ReadSystemRunTimeSincePowerOn, ReadOEEStats } from '../../model/IntercommCommonActivateRequest';
import { IntercommService } from '../../service/intercomm.service';
import { InputDialogService } from '../../service/inputdialog.service';
import { ReadTargetRunRate, WriteTargetRunRate,
  ReadTargetTotalPrints, WriteTargetTotalPrints,
  ReadOEEResetMode, WriteOEEResetMode } from '../../model/IntercommCommonActivateRequest';

@Component({
  moduleId: module.id,
  selector: 'oeePage',
  templateUrl: './oeepage.component.html',
  styleUrls: ['./oeepage.component.css']
})
export class OeepageComponent implements OnInit {

  machineRunTime: number = 0;
  strMachineRunTime: string = '';
  jetRunTime: number = 0;
  oeeEstJobEnd: string = 'N/A';
  oeePtrinterAvailability: string = '0';
  oeeOperationalAvailability: string = '0';
  targetNum: number = 0;
  oeeCurrentRunRate: number = 0;
  oeeAboveTarget: string = '-';
  oeeFinalTarget: number = 0;
  oeeTotalPrints: number = 0;
  oeeInkChangeTime: string = 'N/A'; // OEE_INK_CHANGE_TIME
  oeeMakeupChangeTime: string = 'N/A'; // OEE_MAKEUP_CHANGE_TIME
  oeeItmChangeTime: string = 'N/A'; // ITM_CHANGE_TIME

  strTargetLoc: string = '';
  strProgressLoc: string = '';
  strUserActionLoc: string = '';

  // style setting
  userAction: string = 'oee_user_action';
  targetPosition: string = 'oee_below_target';
  oeeProgressColor: string = 'oee_progress_green';
  inkChangeTimeHandColor: string = 'ink_change_time_hand_gray';
  inkChangeTimeBackgroundStyle: string = 'oeepage_bot_right_change_time';

  // gaga
  targetRat: number = 0;
  strTargetRate: string = '';

  strTransformOrigin: string = '16px 97px';
  setOeeTargetsPopupOpen: any = false;
  settingPopupOpen: any = false;
  targetRunRateObj: any;
  totalPrintsObj: any;

  oeeResetModeSelectObj: Object = {
    'caption': 'Reset Mode',
    'unit': '',
    'key': '0',
    'val': '',
    'list': [{'key': '0', 'val': 'Lifetime'},
              {'key': '1', 'val': 'Power on'},
              {'key': '2', 'val': 'Label change'},
              {'key': '3', 'val': 'Shift change'},
              {'key': '4', 'val': 'Daily'},
              {'key': '5', 'val': 'Cartridge change'}]
  };

  constructor(private longpollingService: LongpollingService,
  private inputDialogService: InputDialogService,
    private intercommService: IntercommService) { }

  ngOnInit() {
    this.totalPrintStart();
    this.intercommService.remoteProcedureCall(ReadOEEResetMode, {}).subscribe(
      (res: any) => {
        if (res.Payload.mode !== undefined) {
          this.oeeResetModeSelectObj['key'] = res.Payload.mode;
        }
      }
    );
    this.longpollingService.subscribePolling(ReadSystemRunTimeSincePowerOn,
      { 'machineRunTime': this.machineRunTime, 'jetRunTime': this.jetRunTime }).subscribe(
      (res: any) => {
        if (res) {
          this.machineRunTime = res.machine_hours;
          this.jetRunTime = res.jet_hours;
          this.strMachineRunTime = this.secondsToString(this.machineRunTime);
        }
      },
      (error: any) => {
        console.log(error);
      }
    );

    this.longpollingService.subscribePolling(ReadOEEStats, {}).subscribe(
      (res: any) => {
        if (res) {
          if (res.stats !== undefined) {
            // OEE_EST_JOB_END begin
            let jobPrintsRemaining: any = 0;
            if (res.stats.targetTotalPrints > res.stats.totalPrints) {
              jobPrintsRemaining = res.stats.targetTotalPrints - res.stats.totalPrints;
            }
            let jobRemainingSecs: any = 0;
            const minJobRemainingSecs: any = 0;
            const maxJobRemainingSecs: any = 8640000; // max. time to show on UI, ~100 days.
            // Use the current run rate to give an estimate of the time left to finish the job.
            if (res.stats.currentRunRate !== 0) {
              jobRemainingSecs = Math.max(minJobRemainingSecs,
                Math.min(Math.floor(jobPrintsRemaining / (res.stats.currentRunRate / 60.0/*seconds*/)), maxJobRemainingSecs));
              this.oeeEstJobEnd = this.secondsToString(jobRemainingSecs);
            } else {
              this.oeeEstJobEnd = 'N/A';
            }
            // OEE_EST_JOB_END end

            // OEE_PRINTER_AVAILABILITY begin
            this.oeePtrinterAvailability = String(res.stats.printerAvailability / 100.0);
            // OEE_PRINTER_AVAILABILITY end

            // OEE_OPERATIONAL_AVAILABILITY begin
            this.oeeOperationalAvailability = String(res.stats.operationalAvailability / 100.0);
            // OEE_OPERATIONAL_AVAILABILITY end

            // OEE_TARGET_RUNRATE begin
            this.targetNum = res.stats.targetRunRate;
            // OEE_TARGET_RUNRATE end

            // OEE_CURRENT_RUNRATE begin
            this.oeeCurrentRunRate = res.stats.currentRunRate;
            // OEE_CURRENT_RUNRATE end

            // OEE_ABOVE_TARGET begin
            let targetLoc: any = 0.0;
            let progressLoc: any = 0.0;
            let userActionLoc: any = 0.0;

            let objCurrentTime = new Date(this.timeFormat(res.stats.currentTime));
            let objResetTime = new Date(this.timeFormat(res.stats.resetTime));
            if (res.stats.targetRunRate > 0) {
              let current_print_target: any = 0; // Target in minutes based on (current print rate) * (time since last reset).
              let timeSinceResetSecs: number = (objCurrentTime.getTime() - objResetTime.getTime()) / 1000;
              current_print_target = res.stats.targetRunRate * (timeSinceResetSecs / 60.0);
              if (res.stats.targetTotalPrints > 0) {
                targetLoc = 1.0; // Set to max. if total print target should already have been reached.
              }
              if (res.stats.targetTotalPrints > current_print_target) {
                targetLoc = current_print_target / res.stats.targetTotalPrints;
              }
              /** @todo RTC 18384. Previously when (current_print_target > OEEStat.totalPrints) PRINTER_OEE_ABOVE_TARGET was
               *  being set to over 4*10^9. As a first step we prevent this by checking for this condition, more changes will
               *  come once it is understood what the expected behaviour should be.
               */
              if (res.stats.totalPrints >= current_print_target) {
                this.oeeAboveTarget = String(res.stats.totalPrints - current_print_target);
              }
            }
            // OEE_ABOVE_TARGET end

            // Calculate ink and makeup lifespan
            let inkLifeSpan: number = maxJobRemainingSecs;
            let itmLifeSpan: number = maxJobRemainingSecs;
            let makeUpLifeSpan: number = maxJobRemainingSecs;

            // Calculate progress location on the progress bar.
            // If total prints is 0 then the minimum progress location should be shown, if total prints execeed the total target then
            // the maximum position should be shown. Otherwise the ratio of actual total prints to target total prints is shown.
            if (res.stats.totalPrints === 0) {
              progressLoc = 0.0;
            } else if (res.stats.targetTotalPrints > res.stats.totalPrints) {
              progressLoc = (res.stats.totalPrints) / res.stats.targetTotalPrints;
            } else {
              progressLoc = 1.0;
            }

            // The next user interaction could be an ink, ITM or make-up interaction. We take the minimum time of the three.
            let nextUserActionTime: number = (Math.min(inkLifeSpan, Math.min(makeUpLifeSpan, itmLifeSpan)));

            // Calcuate next user interaction icon location on the progress bar
            if (jobPrintsRemaining === 0) {
              userActionLoc = 1.0;
            } else if ((jobRemainingSecs > 0) && (nextUserActionTime < jobRemainingSecs)) {
              userActionLoc = progressLoc + (1 - progressLoc) * ((nextUserActionTime) / jobRemainingSecs);
            } else {
              // This could happen if current print rate is 0 but there are still job prints remaining. UI decision on what
              userActionLoc = 1.0; // Icon will not appear when set to 1.0
            }

            if (userActionLoc < 1.0) {
              // red
              this.userAction = 'oee_user_action';
            } else {
              // invisible
              this.userAction = 'oee_user_action_invisible';
            }

            let temp: any = 340;
            userActionLoc = temp * userActionLoc;
            targetLoc = temp * targetLoc;
            progressLoc = temp * progressLoc;

            this.strTargetLoc = targetLoc + 'px';
            this.strProgressLoc = progressLoc + 'px';
            this.strUserActionLoc = userActionLoc + 'px';


            if (progressLoc < targetLoc) {
              // red
              this.targetPosition = 'oee_above_target';
              this.oeeProgressColor = 'oee_progress_red';
            } else {
              // green
              this.targetPosition = 'oee_below_target';
              this.oeeProgressColor = 'oee_progress_green';
            }

            if (this.oeeInkChangeTime != null && this.oeeInkChangeTime.indexOf(':') > -1) {
              if (parseInt(this.oeeInkChangeTime.split(':')[0], 10) < 24) {
                // red
                this.inkChangeTimeHandColor = 'ink_change_time_hand_red';
                this.inkChangeTimeBackgroundStyle = 'oeepage_bot_right_change_time_red';
              } else {
                this.inkChangeTimeHandColor = 'ink_change_time_hand_gray';
                this.inkChangeTimeBackgroundStyle = 'oeepage_bot_right_change_time';
              }
            } else {
              this.inkChangeTimeHandColor = 'ink_change_time_hand_red';
              this.inkChangeTimeBackgroundStyle = 'oeepage_bot_right_change_time_red';
            }

            // gage set begin
            let val = 180 * this.oeeCurrentRunRate / this.targetNum - 148;
            if (val > 30) {
              this.targetRat = 30;
              this.strTransformOrigin = '16px 97px';
            } else if (val < -148) {
              this.targetRat = -148;
              this.strTransformOrigin = '25px 25px';
            } else {
              this.targetRat = 180 * this.oeeCurrentRunRate / this.targetNum - 148;
              this.strTransformOrigin = '25px 25px';
            }

            if (isNaN(this.targetRat)) {
              this.targetRat = 30; // TODO
              this.strTransformOrigin = '16px 97px';
            }

            this.strTargetRate = 'rotate(' + this.targetRat + 'deg)';
            // gage set end

            // OEE_TARGET_TOTAL_PRINTS begin
            this.oeeFinalTarget = res.stats.targetTotalPrints;
            this.oeeTotalPrints = res.stats.targetTotalPrints;
            // OEE_TARGET_TOTAL_PRINTS end
          }
        }
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  totalPrintStart() {
    this.targetRunRateObj = this.inputDialogService.createObj('targetRunRateObj', {'waitForCommit': true});
    this.totalPrintsObj = this.inputDialogService.createObj('totalPrintsObj', {'waitForCommit': true});
  }



  openSetOeeTargetsPopup() {
    this.totalPrintStart();
    this.setOeeTargetsPopupOpen = true;
  }

  closeSetOeeTargetsPopup() {
    this.setOeeTargetsPopupOpen = false;
    let t_list = [this.targetRunRateObj, this.totalPrintsObj];
    this.inputDialogService.groupSubmit(t_list, () => {
      // Commit successfully and do what you want to do
    });
  }

  openSettingPopup() {
    this.settingPopupOpen = true;
  }

  closeSettingPopup() {
    this.settingPopupOpen = false;
  }

  oeeResetModeSelectChange(Obj: any) {
      console.log('oeeResetMode select', Obj);
      this.intercommService.remoteProcedureCall(WriteOEEResetMode, {'mode': parseInt(Obj.key, 10)}).subscribe(
        (res: any) => {
          if (res.InterCommState === 'Success') {
            this.oeeResetModeSelectObj['key'] = Obj['key'];
          }
      });
  }

  // restoreAlert() {
  //   let el = document.getElementById('head_box_more');
  //   el.hidden = false;
  // }
  secondsToString(seconds: number): string {
    let hrs: number = Math.floor(seconds / 3600);
    seconds -= hrs * 3600;
    let mins: number = Math.floor(seconds / 60);
    seconds -= mins * 60;
    let strMins: string = mins.toString();
    let strSeconds: string = seconds.toString();
    if (mins < 10) {
      strMins = '0' + strMins;
    }
    if (seconds < 10) {
      strSeconds = '0' + strSeconds;
    }
    let strTime: string = hrs + ':' + strMins + ':' + strSeconds;
    return strTime;
  }

  timeFormat(strTimeNoFormat: string): string { // example: input:'20170516T160112'-->output:'16:01:12 05/16/2017'
    let timeList = strTimeNoFormat.split('T');
    let year = timeList[0].substring(0, 4);
    let mth = timeList[0].substring(4, 6);
    let day = timeList[0].substring(6, 8);
    let hour = timeList[1].substring(0, 2);
    let min = timeList[1].substring(2, 4);
    let sec = timeList[1].substring(4, 6);

    let strFormat: string = hour + ':' + min + ':' + sec + ' ' + mth + '/' + day + '/' + year;

    return strFormat;
  }
}