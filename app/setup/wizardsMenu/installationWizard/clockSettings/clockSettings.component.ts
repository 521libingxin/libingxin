
import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'clockSettings',
  templateUrl: './clockSettings.component.html',
  styleUrls: ['./clockSettings.component.css']
})
export class ClockSettingsComponent implements OnInit {
  @Input() checkObj: any;
  @Output() checkChange = new EventEmitter<boolean>();

  dateSettingsOpen = false;
  timeSettingsOpen = false;
  constructor() {}
  ngOnInit() {}
  changeDate() {
    this.dateSettingsOpen = true;
  }
  closeDateModal() {
    this.dateSettingsOpen = false;
  }
  changeTime() {
    this.timeSettingsOpen = true;
  }
  closeTimeModal() {
    this.timeSettingsOpen = false;
  }



  changeValue() {
    this.checkObj = this.checkObj ? false : true;
    this.checkChange.emit(this.checkObj);
  }
  setClasses() {
    let classes =  {
      checkboxon: this.checkObj,
      checkboxoff: !this.checkObj,
      checkboxbtn: true
    };
    return classes;
  }
}