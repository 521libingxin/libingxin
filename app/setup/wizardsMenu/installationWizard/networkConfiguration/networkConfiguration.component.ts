
import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'networkConfiguration',
  templateUrl: './networkConfiguration.component.html',
  styleUrls: ['./networkConfiguration.component.css']
})
export class NetworkConfigurationComponent implements OnInit {
  netWorkOpen = false;
  constructor() { }
  ngOnInit() {}
  editNetWork() {
    this.netWorkOpen = true;
  }
  closeNetWorkModal() {
    this.netWorkOpen = false;
  }
}