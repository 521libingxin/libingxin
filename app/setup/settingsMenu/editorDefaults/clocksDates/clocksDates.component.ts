
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from '../../../../service/navigation.service';
import {ReadDefaultHourCodes, WriteDefaultHourCodes, ReadDefaultDayOfWeekCodes, WriteDefaultDayOfWeekCodes,
ReadDefaultDayOfMonthCodes, WriteDefaultDayOfMonthCodes, ReadDefaultMonthCodes, WriteDefaultMonthCodes,
ReadDateDayNames, WriteDateDayNames,
ReadDateMonthNames, WriteDateMonthNames} from '../../../../model/IntercommCommonActivateRequest';
// import { LongpollingService } from '../../../../service/longpolling.service';
import { IntercommService } from '../../../../service/intercomm.service';

@Component({
  moduleId: module.id,
  selector: 'app-Clocksdates',
  templateUrl: './Clocksdates.component.html',
  styleUrls: ['./Clocksdates.component.css']
})
export class ClocksdatesComponent implements OnInit {

  codesList: string[];
  codesPopupOpen: boolean = false;
  namesPopupOpen: boolean = false;

  popupTitle: string ;
  popupColumnSerialID: string ;
  popupColumnName: string ;
  currentClockType: string;

  calendarSchemeSelectObj: Object = {
    'caption' : 'Calendar scheme to edit',
    'unit' : '',
    'key' : '0',
    'val' : '',
    'list' : [{'key' : '0', 'val' : 'Gregorian'}, {'key' : '1', 'val' : 'Hijri'}, {'key' : '2', 'val' : 'Jalali'}]
  };

  constructor(
        private router: Router,
        private navservice: NavigationService,
        private icService: IntercommService
  ) { }

  ngOnInit() {
        this.navservice.sendPathInfo(this.router.url.split('/'));
  }

  showPopup(type: string) {
    // Hour codes
    if (type === 'hourCodes') {
      this.currentClockType = 'hourCodes';
      this.popupTitle = 'Hour codes';
      this.popupColumnSerialID = 'Hour';
      this.popupColumnName = 'Hour code';
      this.icService.remoteProcedureCall(ReadDefaultHourCodes, { }).subscribe(
        (res: any) => {
          if (res.InterCommState === 'Success') {
            this.codesList = res.Payload.defaultHourCodes;
            this.codesPopupOpen = true;
          }
      });
    } else if (type === 'dayOfWeekCodes') {// Day of week codes
      this.currentClockType = 'dayOfWeekCodes';
      this.popupTitle = 'Day of week codes';
      this.popupColumnSerialID = 'Day of week';
      this.popupColumnName = 'Day of week code';
      this.icService.remoteProcedureCall(ReadDefaultDayOfWeekCodes, { }).subscribe(
        (res: any) => {
          if (res.InterCommState === 'Success') {
            this.codesList = res.Payload.defaultDayOfWeekCodes;
            this.codesPopupOpen = true;
          }
      });
    } else if (type === 'dayOfMonthCodes') {// Day of month codes
      this.currentClockType = 'dayOfMonthCodes';
      this.popupTitle = 'Month codes';
      this.popupColumnSerialID = 'Month';
      this.popupColumnName = 'Month code';
      this.icService.remoteProcedureCall(ReadDefaultDayOfMonthCodes, { }).subscribe(
        (res: any) => {
          if (res.InterCommState === 'Success') {
            this.codesList = res.Payload.defaultDayOfMonthCodes;
            this.codesPopupOpen = true;
          }
      });
    } else if (type === 'monthCodes') {// Month codes
      this.currentClockType = 'monthCodes';
      this.popupTitle = 'Day of month codes';
      this.popupColumnSerialID = 'Day of month';
      this.popupColumnName = 'Day of month code';
      this.icService.remoteProcedureCall(ReadDefaultMonthCodes, { }).subscribe(
        (res: any) => {
          if (res.InterCommState === 'Success') {
            this.codesList = res.Payload.defaultMonthCodes;
            this.codesPopupOpen = true;
          }
      });
    } else if (type === 'dayNames') {// Day names
      this.currentClockType = 'dayNames';
      this.popupTitle = 'Day names';
      this.popupColumnName = 'Day name';
      this.icService.remoteProcedureCall(ReadDateDayNames,
                        {'calendarType': this.calendarSchemeSelectObj['key']} ).subscribe(
        (res: any) => {
          if (res.InterCommState === 'Success') {
            this.codesList = res.Payload.dayNames;
            this.namesPopupOpen = true;
          }
      });
    } else if (type === 'monthNames') {// Month names
      this.currentClockType = 'monthNames';
      this.popupTitle = 'Month names';
      this.popupColumnName = 'Month name';
      this.icService.remoteProcedureCall(ReadDateMonthNames,
                          {'calendarType': this.calendarSchemeSelectObj['key']}).subscribe(
        (res: any) => {
          if (res.InterCommState === 'Success') {
            this.codesList = res.Payload.monthNames;
            this.namesPopupOpen = true;
          }
      });
    }
  }

  // save
  saveValue() {
    // Hour codes
    if (this.currentClockType === 'hourCodes') {
      this.icService.remoteProcedureCall(WriteDefaultHourCodes, {'defaultHourCodes': this.codesList}).subscribe(
        (res: any) => {
          if (res.InterCommState === 'Success') {
            this.codesPopupOpen = false;
          }
      });
    } else if (this.currentClockType === 'dayOfWeekCodes') { // Day of week codes
      this.icService.remoteProcedureCall(WriteDefaultDayOfWeekCodes, {'defaultDayOfWeekCodes': this.codesList}).subscribe(
        (res: any) => {
          if (res.InterCommState === 'Success') {
            this.codesPopupOpen = false;
          }
      });
    } else if (this.currentClockType === 'dayOfMonthCodes') { // Day of month codes
      this.icService.remoteProcedureCall(WriteDefaultDayOfMonthCodes, {'defaultDayOfMonthCodes': this.codesList}).subscribe(
        (res: any) => {
          if (res.InterCommState === 'Success') {
            this.codesPopupOpen = false;
          }
      });
    } else if (this.currentClockType === 'monthCodes') { // Month codes
      this.icService.remoteProcedureCall(WriteDefaultMonthCodes, {'defaultMonthCodes': this.codesList}).subscribe(
        (res: any) => {
          if (res.InterCommState === 'Success') {
            this.codesPopupOpen = false;
          }
      });
    } else if (this.currentClockType === 'dayNames') { // Day names
      this.icService.remoteProcedureCall(WriteDateDayNames,
                             {'calendarType': this.calendarSchemeSelectObj['key'], 'dayNames': this.codesList}).subscribe(
        (res: any) => {
          if (res.InterCommState === 'Success') {
            this.namesPopupOpen = false;
          }
      });
    } else if (this.currentClockType === 'monthNames') { // Month names
      this.icService.remoteProcedureCall(WriteDateMonthNames,
                                {'calendarType': this.calendarSchemeSelectObj['key'], 'monthNames': this.codesList}).subscribe(
        (res: any) => {
          if (res.InterCommState === 'Success') {
            this.namesPopupOpen = false;
          }
      });
    }
  }
  // Calendar Scheme
  calendarSchemeSelectChange(Obj: any) {

  }
}