import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { SettingbtnComponent } from './settingbtn/settingbtn.component';
import { CheckBoxComponent } from './checkbox/checkbox.component';
import { TextComponent } from './text/text.component';
import { BoolComponent } from './bool/bool.component';
import { EncoderProductGraphicsComponent } from
'../setup/settingsMenu/productionlinesetup/encoderProductGraphics/encoderProductGraphics.component';
import { ModalsComponent } from './modals/modals.component';
import { SelectModalComponent } from './selectModal/selectModal.component';
import { ListComponent } from './list/list.component';
import { TextGridComponent } from './textGrid/textGrid.component';
import {InputDialogComponent } from './inputDialog/inputDialog.component';
import {TranslatePipe }   from '../translate/translate.pipe';

@NgModule({
  imports:      [CommonModule, FormsModule],
  declarations: [
    SettingbtnComponent,
    ListComponent,
    CheckBoxComponent,
    TextComponent,
    BoolComponent,
    ModalsComponent,
    SelectModalComponent,
    TranslatePipe,
    EncoderProductGraphicsComponent,
    TextGridComponent,
    InputDialogComponent
  ],
  exports:      [
    CommonModule,
    SettingbtnComponent,
    ListComponent,
    CheckBoxComponent,
    TextComponent,
    BoolComponent,
    ModalsComponent,
    SelectModalComponent,
    TranslatePipe,
    EncoderProductGraphicsComponent,
    TextGridComponent,
    InputDialogComponent
  ]
})
export class SharedModule { }
