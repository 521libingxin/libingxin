
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from '../../service/navigation.service';

@Component({
  moduleId: module.id,
  selector: 'labelCreator',
  templateUrl: './labelCreator.component.html',
  styleUrls: ['./labelCreator.component.css']
})
export class LabelCreatorComponent implements OnInit {
  constructor(
        private router: Router,
        private navservice: NavigationService,
  ) { }
  ngOnInit() {
    this.navservice.sendPathInfo(this.router.url.split('/'));
  }
  go(i: any, ids: any) {
    if (i === '') {return false; }
    this.router.navigate(['/' + i, ids]);
  }
}