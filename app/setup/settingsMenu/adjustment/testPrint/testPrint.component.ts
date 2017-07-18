
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from '../../../../service/navigation.service';

@Component({
  moduleId: module.id,
  selector: 'app-Testprint',
  templateUrl: './Testprint.component.html',
  styleUrls: ['./Testprint.component.css']
})
export class TestprintComponent implements OnInit {
  constructor(
        private router: Router,
        private navservice: NavigationService
  ) { }

  ngOnInit() {
    this.navservice.sendPathInfo(this.router.url.split('/'));
  }

}