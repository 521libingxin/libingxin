
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from '../../../../service/navigation.service';

@Component({
  moduleId: module.id,
  selector: 'app-Configueralerts',
  templateUrl: './Configueralerts.component.html',
  styleUrls: ['./Configueralerts.component.css']
})
export class ConfigueralertsComponent implements OnInit {
  constructor(
        private router: Router,
        private navservice: NavigationService
  ) { }

  ngOnInit() {
        this.navservice.sendPathInfo(this.router.url.split('/'));
  }

}