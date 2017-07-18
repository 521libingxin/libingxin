
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'printQualityMetrics',
  templateUrl: './printQualityMetrics.component.html',
  styleUrls: ['./printQualityMetrics.component.css']
})
export class PrintQualityMetricsComponent implements OnInit {
  constructor(
        private router: Router
  ) { }

  ngOnInit() {}

}