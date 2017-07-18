
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectmessageRoutingModule } from './selectmessage-routing.module';
import { SelectmessageComponent } from './selectmessage.component';

@NgModule({
  imports: [
    CommonModule, SelectmessageRoutingModule
  ],
  declarations: [SelectmessageComponent]
})
export class SelectmessageModule { }