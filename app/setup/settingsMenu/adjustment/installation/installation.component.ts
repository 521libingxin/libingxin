
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from '../../../../service/navigation.service';

@Component({
  moduleId: module.id,
  selector: 'app-Installation',
  templateUrl: './Installation.component.html',
  styleUrls: ['./Installation.component.css']
})
export class InstallationComponent implements OnInit {
  constructor(
        private router: Router,
        private navservice: NavigationService
  ) { }

  ngOnInit() {
    this.navservice.sendPathInfo(this.router.url.split('/'));
  }

}