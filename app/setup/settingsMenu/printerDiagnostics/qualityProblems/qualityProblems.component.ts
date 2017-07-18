
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from '../../../../service/navigation.service';

@Component({
  moduleId: module.id,
  selector: 'app-Qualityproblems',
  templateUrl: './Qualityproblems.component.html',
  styleUrls: ['./Qualityproblems.component.css']
})
export class QualityproblemsComponent implements OnInit {

  qualityPopupOpen = false;
  qualityContent: string ;
  qualityList: Object = [
    {
      img: 'img/headNotAligned.png',
      content: 'Head not mounted at 90 degrees to direction of product movement.'
    },
    {
      img: 'img/headTooFarAway.png',
      content: 'Head too far from print surface.'
    },
    {
      img: 'img/incorrectBreakup.png',
      content: 'Incorrect break-up - satellites can be seen in the viewer\
      and break-up is not in correct position relative to charge electrode'
    },
    {
      img: 'img/jetMisaligned.png',
      content: 'Printed drops clipping\
      edge of gutter - Jet incorrectly aligned to gutter, or print height too low.'
    },
    {
      img: 'img/phaseError.png',
      content: 'Phase error - satellites can be seen\
      in the viewer and break-up is not in correct position relative to charge electrode'
    },
    {
      img: 'img/pressureTooHigh.png',
      content: 'Pressure too high - note drops coalescing on some characters.'
    },
    {
      img: 'img/pressureTooLow.png',
      content: 'Pressure too low - note missing drops from some characters.'
    }
  ];

  constructor(
    private router: Router,
    private navservice: NavigationService
  ) { }

  ngOnInit() {
    this.navservice.sendPathInfo(this.router.url.split('/'));
  }

  showPopupQuality(index: number) {
    this.qualityContent = this.qualityList[index].content;
    this.openQualityPopup();
  }

  openQualityPopup() {
    this.qualityPopupOpen = true;
  }

  closeQualityPopup() {
    this.qualityPopupOpen = false;
  }
}