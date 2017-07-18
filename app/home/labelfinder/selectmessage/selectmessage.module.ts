
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectmessageRoutingModule } from './selectmessage-routing.module';
import { SelectmessageComponent } from './selectmessage.component';
import { SharedModule }        from '../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule, SelectmessageRoutingModule, SharedModule
  ],
  declarations: [SelectmessageComponent]
})
export class SelectmessageModule { }