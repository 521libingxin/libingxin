
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from '../../../../service/navigation.service';

@Component({
  moduleId: module.id,
  selector: 'app-Consumables',
  templateUrl: './Consumables.component.html',
  styleUrls: ['./Consumables.component.css']
})
export class ConsumablesComponent implements OnInit {
  constructor(
        private router: Router,
        private navservice: NavigationService
  ) { }

  ngOnInit() {
        this.navservice.sendPathInfo(this.router.url.split("/"));
  }

}