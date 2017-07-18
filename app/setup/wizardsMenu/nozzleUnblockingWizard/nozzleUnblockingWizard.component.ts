
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from '../../../service/navigation.service';

@Component({
  moduleId: module.id,
  selector: 'app-nozzleUnblockingWizard',
  templateUrl: './nozzleUnblockingWizard.component.html',
  styleUrls: ['./nozzleUnblockingWizard.component.css']
})
export class NozzleUnblockingWizardComponent implements OnInit {
  constructor(
        private router: Router,
        private navservice: NavigationService
  ) { }

  ngOnInit() {
    this.navservice.sendPathInfo(this.router.url.split('/'));
  }

}