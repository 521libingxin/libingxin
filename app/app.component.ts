import { Component } from '@angular/core';
import { TranslateService }   from './translate/translate.service';

@Component({
  moduleId: module.id,
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  constructor(
    private _translate: TranslateService
  ) {
    let t_i18 = localStorage['i18n'] || '';
    this._translate.use(t_i18);
   }
}
