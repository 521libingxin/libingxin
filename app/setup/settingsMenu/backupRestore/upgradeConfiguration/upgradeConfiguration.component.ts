
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from '../../../../service/navigation.service';

@Component({
  moduleId: module.id,
  selector: 'upgradeConfiguration',
  templateUrl: './Upgradeconfiguration.component.html',
  styleUrls: ['./Upgradeconfiguration.component.css']
})
export class UpgradeconfigurationComponent implements OnInit {
  constructor(
        private router: Router,
        private navservice: NavigationService
  ) { }

  ngOnInit() {
        this.navservice.sendPathInfo(this.router.url.split('/'));
  }
}
