
import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'regionalSettings',
  templateUrl: './regionalSettings.component.html',
  styleUrls: ['./regionalSettings.component.css']
})
export class RegionalSettingsComponent implements OnInit {
  oeeResetModeSelectObj: Object = {
    'caption': 'Reset Mode',
    'unit': '',
    'key': '0',
    'val': '',
    'list': [{'key': '0', 'val': 'Lifetime'},
              {'key': '1', 'val': 'Power on'},
              {'key': '2', 'val': 'Label change'},
              {'key': '3', 'val': 'Shift change'},
              {'key': '4', 'val': 'Daily'},
              {'key': '5', 'val': 'Cartridge change'}]
  };
  constructor() { }

  ngOnInit() {
    console.log('region');
  }

}