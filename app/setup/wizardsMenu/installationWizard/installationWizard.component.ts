
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from '../../../service/navigation.service';

@Component({
  moduleId: module.id,
  selector: 'app-installationWizard',
  templateUrl: './installationWizard.component.html',
  styleUrls: ['./installationWizard.component.css']
})
export class InstallationWizardComponent implements OnInit {
  childIndex: number = 0;
  checkObj = false;
  childList: Array<String> = ['regionalSettings', 'clockSettings'];
  childList_more: Array<String> = ['networkConfiguration', 'applications'];
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
  complete() {
    console.log('complete');
    this.router.navigate(['wizardsMenu']);
  }
  checkChange(back: any) {
    this.checkObj = back;
    if (!back) {
      this.childList.splice(2, 2);
    }else {
      this.childList = this.childList.concat(this.childList_more);
    }
  }

}
