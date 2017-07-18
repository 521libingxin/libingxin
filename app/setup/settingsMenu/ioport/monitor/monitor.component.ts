
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from '../../../../service/navigation.service';

@Component({
  moduleId: module.id,
  selector: 'app-Monitor',
  templateUrl: './Monitor.component.html',
  styleUrls: ['./Monitor.component.css']
})
export class MonitorComponent implements OnInit {
  constructor(
        private router: Router,
        private navservice: NavigationService
  ) { }

  ngOnInit() {
        this.navservice.sendPathInfo(this.router.url.split("/"));
  }

}