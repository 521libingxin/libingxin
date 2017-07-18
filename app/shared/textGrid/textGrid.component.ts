import { Component, OnInit,  Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'text-grid',
  template: `
          <li [ngClass]="setClasses()" class="grid-li">
            <div class="grid-caption">{{ caption }}</div>
            <div class="grid-value">{{ value }}</div>
          </li>
        `,
  styles: [ '.grid-li-e6e6e6{width: 254px; height: 30px;  background-color: #e6e6e6; border:0px;}',
  '.grid-li-trans{width: 254px; height: 30px;  background-color: transparent ; border:0px;margin-left:10px;}',
  '.grid-li-white{width: 254px; height: 30px;  background-color: white; border:0px;}',
  '.grid-caption{width: 174px; height: 15px; line-height: 15px; margin-top: 7px; font-size:0.9rem; float:left;}',
   '.grid-value{width: 80px; height: 20px; line-height: 15px; margin-top: 7px; font-size:0.9rem; float:left;}']
})
export class TextGridComponent implements OnInit {
  @Input() caption: any;
  @Input() value: any;
  @Input() bgColor: any;

  constructor(
  ) {}
  ngOnInit() {

  }
  setClasses() {
    let classes: any;
    if (this.bgColor === 'e6e6e6') {
       // classes="grid-li-e6e6e6";
        classes = 'grid-li-trans';
    } else if (this.bgColor === 'white') {
        // classes="grid-li-white";
        classes = 'grid-li-trans';
    } else {
        // classes="grid-li-e6e6e6";
        classes = 'grid-li-trans';
    }
    return classes;
  }
}
