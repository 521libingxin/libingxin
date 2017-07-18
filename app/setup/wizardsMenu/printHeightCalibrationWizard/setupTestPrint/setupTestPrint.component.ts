
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'setupTestPrint',
  templateUrl: './setupTestPrint.component.html',
  styleUrls: ['./setupTestPrint.component.css']
})
export class SetupTestPrintComponent implements OnInit {
  constructor(
        private router: Router
  ) { }

  ngOnInit() {}

}