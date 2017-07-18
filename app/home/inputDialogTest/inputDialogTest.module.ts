
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputDialogTestRoutingModule } from './inputDialogTest-routing.module';
import { InputDialogTestComponent } from './inputDialogTest.component';
import { SharedModule }        from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,InputDialogTestRoutingModule, SharedModule
  ],
  declarations: [InputDialogTestComponent]
})
export class InputDialogTestModule { }