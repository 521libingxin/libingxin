
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from '../../../../service/navigation.service';

@Component({
  moduleId: module.id,
  selector: 'ioportSetup',
  templateUrl: './ioportSetup.component.html',
  styleUrls: ['./ioportSetup.component.css']
})
export class IoportSetupComponent implements OnInit {
  constructor(
        private router: Router,
        private navservice: NavigationService
  ) { }

  ngOnInit() {
        this.navservice.sendPathInfo(this.router.url.split("/"));
  }

}