
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from '../../../../service/navigation.service';
import { TranslateService }   from '../../../../translate/translate.service';

@Component({
  moduleId: module.id,
  selector: 'app-Languagekeyboard',
  templateUrl: './Languagekeyboard.component.html',
  styleUrls: ['./Languagekeyboard.component.css']
})
export class LanguagekeyboardComponent implements OnInit {
  selectObj: Object = {
    'caption': 'Language', // the left text(if the caption equal '' we will remove the left part)
    'unit': 'mm',
    'key': 'en_GB',       // the select key
    'val': '',						 // the select val
    'list': [{'key': 'ar_AE', 'val': 'العربية'},
            {'key': 'bg_BG', 'val': 'български език'},
            {'key': 'cs_CZ', 'val': 'Čeština'},
            {'key': 'da_DK', 'val': 'Dansk'},
            {'key': 'de_DE', 'val': 'Deutsch'},
            {'key': 'el_GR', 'val': 'ελληνικά'},
            {'key': 'en_GB', 'val': 'English'},
            {'key': 'es_ES', 'val': 'Español'},
            {'key': 'et_EE', 'val': 'Eesti Keel'},
            {'key': 'fa_IR', 'val': 'فارسی'},
            {'key': 'fi_FI', 'val': 'Suomi'},
            {'key': 'fr_FR', 'val': 'Français'},
            {'key': 'he_IL', 'val': 'עברית'},
            {'key': 'hr_HR', 'val': 'Hrvatski'},
            {'key': 'hu_HU', 'val': 'Magyar'},
            {'key': 'id_ID', 'val': 'Bahasa Indonesia'},
            {'key': 'is_IS', 'val': 'Islenska'},
            {'key': 'it_IT', 'val': 'Italiano'},
            {'key': 'ja_JP', 'val': '日本語'},
            {'key': 'ko_KR', 'val': '한국어'},
            {'key': 'lt_LT', 'val': 'Lietuvių'},
            {'key': 'lv_LV', 'val': 'Latviešu'},
            {'key': 'mk_MK', 'val': 'Mакедонски'},
            {'key': 'nl_NL', 'val': 'Nederlands'},
            {'key': 'no_NO', 'val': 'Norsk'},
            {'key': 'pl_PL', 'val': 'Polski'},
            {'key': 'pt_BR', 'val': 'Português (Br)'},
            {'key': 'pt_PT', 'val': 'Português'},
            {'key': 'ro_RO', 'val': 'Română'},
            {'key': 'ru_RU', 'val': 'Русский'},
            {'key': 'sk_SK', 'val': 'Slovenčina'},
            {'key': 'sl_SI', 'val': 'Slovenščina'},
            {'key': 'sq_AL', 'val': 'Shqip'},
            {'key': 'sr_CS', 'val': 'Srpski'},
            {'key': 'sv_SE', 'val': 'Svenska'},
            {'key': 'th_TH', 'val': 'ภาษาไทย'},
            {'key': 'tr_TR', 'val': 'Türkçe'},
            {'key': 'vi_VN', 'val': 'Tiếng Việt'},
            {'key': 'zh_CN', 'val': '简体中文'},
            {'key': 'zh_TW', 'val': '繁體中文'}]
  };
	/**
	 * when you selected your choice , this is the callback function,you can do someting else.
	 */
  selectChange(Obj: any) {
    console.log('back', Obj);
    localStorage['i18n'] = Obj['key'];
    this._translate.use(Obj['key']);
  }
  constructor(
      private router: Router,
      private navservice: NavigationService,
      private _translate: TranslateService
  ) {}
  translates() {
    //this.alertservice.setopentype('selectmodal', true, this.selectObj['list']);
  }
  ngOnInit() {
      this.selectObj['key'] = localStorage['i18n'] || 'en_GB';
      this.navservice.sendPathInfo(this.router.url.split('/'));
  }
}