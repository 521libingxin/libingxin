import {Injectable} from '@angular/core';

import { LANG_ar_AE_NAME, LANG_ar_AE_TRANS } from './language/ar_AE';
import { LANG_bg_BG_NAME, LANG_bg_BG_TRANS } from './language/bg_BG';
import { LANG_cs_CZ_NAME, LANG_cs_CZ_TRANS } from './language/cs_CZ';
import { LANG_da_DK_NAME, LANG_da_DK_TRANS } from './language/da_DK';
import { LANG_de_DE_NAME, LANG_de_DE_TRANS } from './language/de_DE';
import { LANG_el_GR_NAME, LANG_el_GR_TRANS } from './language/el_GR';
import { LANG_en_GB_NAME, LANG_en_GB_TRANS } from './language/en_GB';
import { LANG_es_ES_NAME, LANG_es_ES_TRANS } from './language/es_ES';
import { LANG_et_EE_NAME, LANG_et_EE_TRANS } from './language/et_EE';
import { LANG_fa_IR_NAME, LANG_fa_IR_TRANS } from './language/fa_IR';
import { LANG_fi_FI_NAME, LANG_fi_FI_TRANS } from './language/fi_FI';
import { LANG_fr_FR_NAME, LANG_fr_FR_TRANS } from './language/fr_FR';
import { LANG_he_IL_NAME, LANG_he_IL_TRANS } from './language/he_IL';
import { LANG_hr_HR_NAME, LANG_hr_HR_TRANS } from './language/hr_HR';
import { LANG_hu_HU_NAME, LANG_hu_HU_TRANS } from './language/hu_HU';
import { LANG_id_ID_NAME, LANG_id_ID_TRANS } from './language/id_ID';
import { LANG_it_IT_NAME, LANG_it_IT_TRANS } from './language/it_IT';
import { LANG_ja_JP_NAME, LANG_ja_JP_TRANS } from './language/ja_JP';
import { LANG_ko_KR_NAME, LANG_ko_KR_TRANS } from './language/ko_KR';
import { LANG_lt_LT_NAME, LANG_lt_LT_TRANS } from './language/lt_LT';
import { LANG_lv_LV_NAME, LANG_lv_LV_TRANS } from './language/lv_LV';
import { LANG_mk_MK_NAME, LANG_mk_MK_TRANS } from './language/mk_MK';
import { LANG_nl_NL_NAME, LANG_nl_NL_TRANS } from './language/nl_NL';
import { LANG_no_NO_NAME, LANG_no_NO_TRANS } from './language/no_NO';
import { LANG_pl_PL_NAME, LANG_pl_PL_TRANS } from './language/pl_PL';
import { LANG_pt_BR_NAME, LANG_pt_BR_TRANS } from './language/pt_BR';
import { LANG_pt_PT_NAME, LANG_pt_PT_TRANS } from './language/pt_PT';
import { LANG_ro_RO_NAME, LANG_ro_RO_TRANS } from './language/ro_RO';
import { LANG_ru_RU_NAME, LANG_ru_RU_TRANS } from './language/ru_RU';
import { LANG_sk_SK_NAME, LANG_sk_SK_TRANS } from './language/sk_SK';
import { LANG_sl_SI_NAME, LANG_sl_SI_TRANS } from './language/sl_SI';
import { LANG_sq_AL_NAME, LANG_sq_AL_TRANS } from './language/sq_AL';
import { LANG_sr_CS_NAME, LANG_sr_CS_TRANS } from './language/sr_CS';
import { LANG_sv_SE_NAME, LANG_sv_SE_TRANS } from './language/sv_SE';
import { LANG_th_TH_NAME, LANG_th_TH_TRANS } from './language/th_TH';
import { LANG_tr_TR_NAME, LANG_tr_TR_TRANS } from './language/tr_TR';
import { LANG_vi_VN_NAME, LANG_vi_VN_TRANS } from './language/vi_VN';
import { LANG_zh_CN_NAME, LANG_zh_CN_TRANS } from './language/zh_CN';
import { LANG_zh_TW_NAME, LANG_zh_TW_TRANS } from './language/zh_TW';


@Injectable()
export class TranslateService {
    private _currentLang: string;
    private dictionary = {
     [LANG_ar_AE_NAME]: LANG_ar_AE_TRANS,
     [LANG_bg_BG_NAME]: LANG_bg_BG_TRANS,
     [LANG_cs_CZ_NAME]: LANG_cs_CZ_TRANS,
     [LANG_da_DK_NAME]: LANG_da_DK_TRANS,
     [LANG_de_DE_NAME]: LANG_de_DE_TRANS,
     [LANG_el_GR_NAME]: LANG_el_GR_TRANS,
     [LANG_en_GB_NAME]: LANG_en_GB_TRANS,
     [LANG_es_ES_NAME]: LANG_es_ES_TRANS,
     [LANG_et_EE_NAME]: LANG_et_EE_TRANS,
     [LANG_fa_IR_NAME]: LANG_fa_IR_TRANS,
     [LANG_fi_FI_NAME]: LANG_fi_FI_TRANS,
     [LANG_fr_FR_NAME]: LANG_fr_FR_TRANS,
     [LANG_he_IL_NAME]: LANG_he_IL_TRANS,
     [LANG_hr_HR_NAME]: LANG_hr_HR_TRANS,
     [LANG_hu_HU_NAME]: LANG_hu_HU_TRANS,
     [LANG_id_ID_NAME]: LANG_id_ID_TRANS,
     [LANG_it_IT_NAME]: LANG_it_IT_TRANS,
     [LANG_ja_JP_NAME]: LANG_ja_JP_TRANS,
     [LANG_ko_KR_NAME]: LANG_ko_KR_TRANS,
     [LANG_lt_LT_NAME]: LANG_lt_LT_TRANS,
     [LANG_lv_LV_NAME]: LANG_lv_LV_TRANS,
     [LANG_mk_MK_NAME]: LANG_mk_MK_TRANS,
     [LANG_nl_NL_NAME]: LANG_nl_NL_TRANS,
     [LANG_no_NO_NAME]: LANG_no_NO_TRANS,
     [LANG_pl_PL_NAME]: LANG_pl_PL_TRANS,
     [LANG_pt_BR_NAME]: LANG_pt_BR_TRANS,
     [LANG_pt_PT_NAME]: LANG_pt_PT_TRANS,
     [LANG_ro_RO_NAME]: LANG_ro_RO_TRANS,
     [LANG_ru_RU_NAME]: LANG_ru_RU_TRANS,
     [LANG_sk_SK_NAME]: LANG_sk_SK_TRANS,
     [LANG_sl_SI_NAME]: LANG_sl_SI_TRANS,
     [LANG_sq_AL_NAME]: LANG_sq_AL_TRANS,
     [LANG_sr_CS_NAME]: LANG_sr_CS_TRANS,
     [LANG_sv_SE_NAME]: LANG_sv_SE_TRANS,
     [LANG_th_TH_NAME]: LANG_th_TH_TRANS,
     [LANG_tr_TR_NAME]: LANG_tr_TR_TRANS,
     [LANG_vi_VN_NAME]: LANG_vi_VN_TRANS,
     [LANG_zh_CN_NAME]: LANG_zh_CN_TRANS,
     [LANG_zh_TW_NAME]: LANG_zh_TW_TRANS,
    };
    public get currentLang() {
       return this._currentLang;
    }

  // inject our translations
    constructor() {}

    public use(lang: string): void {
     // set current language
        this._currentLang = lang;
     // this._currentLang = "en";
    }

    private translate(key: string): string {
     // private perform translation
        let translation = key;
        // dictionary[this.currentLang]
        if (this.dictionary[this.currentLang] && this.dictionary[this.currentLang][key]) {
           return this.dictionary[this.currentLang][key];
        }

        return translation;
    }

    public instant(key: string) {
     // public perform translation
        return this.translate(key);
    }
}