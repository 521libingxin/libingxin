
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from '../../../../service/navigation.service';

@Component({
  moduleId: module.id,
  selector: 'app-Test',
  templateUrl: './Test.component.html',
  styleUrls: ['./Test.component.css']
})
export class TestComponent implements OnInit {
  constructor(
        private router: Router,
        private navservice: NavigationService
  ) { }

  ngOnInit() {
        this.navservice.sendPathInfo(this.router.url.split("/"));
  }

}