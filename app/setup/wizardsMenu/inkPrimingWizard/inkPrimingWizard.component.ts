
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from '../../../service/navigation.service';

@Component({
  moduleId: module.id,
  selector: 'app-inkPrimingWizard',
  templateUrl: './inkPrimingWizard.component.html',
  styleUrls: ['./inkPrimingWizard.component.css']
})
export class InkPrimingWizardComponent implements OnInit {
  constructor(
        private router: Router,
        private navservice: NavigationService
  ) { }

  ngOnInit() {
    this.navservice.sendPathInfo(this.router.url.split('/'));
  }

}