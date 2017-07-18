
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from '../../../service/navigation.service';

@Component({
  moduleId: module.id,
  selector: 'app-printHeightCalibrationWizard',
  templateUrl: './printHeightCalibrationWizard.component.html',
  styleUrls: ['./printHeightCalibrationWizard.component.css']
})
export class PrintHeightCalibrationWizardComponent implements OnInit {
  childIndex: number = 0;
  childList: Array<String> = ['printQualityMetrics', 'setupTestPrint'];
  constructor(
        private router: Router,
        private navservice: NavigationService
  ) { }
  ngOnInit() {
    this.navservice.sendPathInfo(this.router.url.split('/'));
  }
  clickleft() {
    this.childIndex = this.childIndex === 0 ? 0 : (this.childIndex - 1);
  }
  clickright() {
    this.childIndex = this.childIndex === this.childList.length - 1 ? this.childList.length - 1 : (this.childIndex + 1);
  }

}