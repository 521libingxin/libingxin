
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from '../../../../service/navigation.service';

@Component({
  moduleId: module.id,
  selector: 'app-Restore',
  templateUrl: './Restore.component.html',
  styleUrls: ['./Restore.component.css']
})
export class RestoreComponent implements OnInit {
  constructor(
        private router: Router,
        private navservice: NavigationService
  ) { }

  ngOnInit() {
        this.navservice.sendPathInfo(this.router.url.split("/"));
  }

}