
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from '../../../../service/navigation.service';

@Component({
  moduleId: module.id,
  selector: 'app-Inspection',
  templateUrl: './Inspection.component.html',
  styleUrls: ['./Inspection.component.css']
})
export class InspectionComponent implements OnInit {
  constructor(
        private router: Router,
        private navservice: NavigationService
  ) { }

  ngOnInit() {
    this.navservice.sendPathInfo(this.router.url.split('/'));
  }

}