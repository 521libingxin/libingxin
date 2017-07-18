// Imports like relative paths
import { Component, trigger, state, style, transition, animate } from '@angular/core';
@Component({
  moduleId: module.id,
  selector: 'header',
  templateUrl: 'head.component.html',
  styleUrls: [ '' ],
  animations: [
    trigger('dropDownPageAnimation', [
      state('upPosition', style({
        top: '-100%',
        bottom: '100%',
      })),
      state('downPosition',   style({
        top: '0',
        bottom: '64px'
      })),
      transition('upPosition => downPosition', animate('300ms ease-in')),
      transition('downPosition => upPosition', animate('300ms ease-in'))
    ]),
    trigger('topPageJumpAnimation', [
      state('topPageState1', style({
        left: '0'
      })),
      state('topPageState2',   style({
        left: '-100%'
      })),
      state('topPageState3',   style({
        left: '-200%'
      })),
      transition('topPageState1 => topPageState2', animate('500ms ease-in')),
      transition('topPageState2 => topPageState3', animate('500ms ease-in')),
      transition('topPageState3 => topPageState2', animate('500ms ease-in')),
      transition('topPageState2 => topPageState1', animate('500ms ease-in'))
    ]),
  ]
})
export class HeadComponent {
  dropDownPageState = 'upPosition';
  topPageState = 'topPageState1';
  leftbtn = '';
  rightbtn = 'Overall equipment efficiency';
  currentPage = 1;
  statusPointPosition = 'statusPointPosition1';
  dropdownRotate_180 = '';
  toplist = [
    '',
    'Connections and consumables',
    'Overall equipment efficiency',
    'Live status',
    ''
  ];
  dropDownPage() {
    console.log(this.dropDownPageState);
      if (this.dropDownPageState === 'upPosition') {
        this.dropDownPageState = 'downPosition';
        this.dropdownRotate_180 = 'rotate_180';
      }else {
        this.dropDownPageState = 'upPosition';
        this.dropdownRotate_180 = '';
      }
  }
  goLeftPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.topPageState = 'topPageState' + this.currentPage;
      this.rightbtn = this.toplist[this.currentPage + 1];
      this.leftbtn = this.toplist[this.currentPage - 1];
      this.statusPointPosition = 'statusPointPosition' + this.currentPage;
    }
  }
  goRightPage() {
    if (this.currentPage < 3) {
      this.currentPage++;
      this.topPageState = 'topPageState' + this.currentPage;
      this.rightbtn = this.toplist[this.currentPage + 1];
      this.leftbtn = this.toplist[this.currentPage - 1];
      this.statusPointPosition = 'statusPointPosition' + this.currentPage;
    }
  }
  constructor() { }
}
