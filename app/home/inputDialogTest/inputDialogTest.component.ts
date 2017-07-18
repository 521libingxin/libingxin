
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InputDialogService } from '../../service/inputdialog.service';

@Component({
  moduleId: module.id,
  selector: 'inputDialogTest',
  templateUrl: './inputDialogTest.component.html',
  styleUrls: ['./inputDialogTest.component.css']
})
export class InputDialogTestComponent implements OnInit {
  setOeeTargetsPopupOpen: any = false;
  //
  targetRunRateObjTest: Object;
  printDelay: Object;
  encoderPersistence: Object;
  globalStrokePitchGoal: Object;
  encoderStrokeResolution: Object;
  //modals
  printDelay_m: Object;
  encoderPersistence_m: Object;
  globalStrokePitchGoal_m: Object;
  constructor(
        private router: Router,
        private inputDialogService: InputDialogService
  ) { }

  ngOnInit() {
    this.loadingPage();
    //this.openModalPage();
  }
  // when you open a modal,you need get data through inputDialogService;
  openModalPage() {
    this.printDelay_m = this.inputDialogService.createObj('printDelay', {
      'waitForCommit': true
    });
    this.encoderPersistence_m = this.inputDialogService.createObj('encoderPersistence', {
      'caption' : 'Encoder persistence',
      'unit' : 'ms',
      'stepsize': 0.001,
      'path': ['encoderConfig','persDurationMS'],
      'waitForCommit': true
    });
    this.globalStrokePitchGoal_m = this.inputDialogService.createObj('encoderPersistence', {
      'caption' : 'Global stroke',
      'unit' : 'mm/stroke',
      'stepsize': 0.01,
      'path': ['encoderConfig','globalStrokePitchGoal'],
      'waitForCommit': true
    });
  }

  // when you enter this page or reload this page,you need get data through inputDialogService;
  loadingPage() {
    this.targetRunRateObjTest = this.inputDialogService.createObj('targetRunRateObjTest', {});
    this.printDelay = this.inputDialogService.createObj('printDelay', {});
    this.encoderPersistence = this.inputDialogService.createObj('encoderPersistence', {
      'caption' : 'Encoder persistence',
      'unit' : 'ms',
      'stepsize': 0.001,
      'path': ['encoderConfig', 'persDurationMS']
    });
    this.globalStrokePitchGoal = this.inputDialogService.createObj('encoderPersistence', {
      'caption' : 'Global stroke pitch goal',
      'unit' : 'mm/stroke',
      'stepsize': 0.01,
      'path': ['encoderConfig', 'globalStrokePitchGoal']
    });
    this.encoderStrokeResolution = this.inputDialogService.createObj('encoderPersistence', {
      'caption' : 'Encoder stroke resolution',
      'unit' : 'pulses/stroke',
      'stepsize': 1,
      'path': ['encoderConfig', 'internalStrokeResolution']
    });

  }
  linemoveChange(Obj: any) {
    this.encoderPersistence['setinParams'] = Obj['setinParams'];
    this.globalStrokePitchGoal['setinParams'] = Obj['setinParams'];
    this.encoderStrokeResolution['setinParams'] = Obj['setinParams'];
  };

  openSetOeeTargetsPopup() {
    this.openModalPage();
    this.setOeeTargetsPopupOpen = true;
  }

  linemoveChange_m(Obj: any) {
    this.encoderPersistence_m['setinParams'] = Obj['setinParams'];
    this.globalStrokePitchGoal_m['setinParams'] = Obj['setinParams'];
  };
  closeSetOeeTargetsPopup() {
    this.setOeeTargetsPopupOpen = false;
    let t_list = [this.encoderPersistence_m, this.printDelay_m];
    this.inputDialogService.groupSubmit(t_list, () => {
      // Commit successfully and do what you want to do
      this.loadingPage();
    });
  }

}
