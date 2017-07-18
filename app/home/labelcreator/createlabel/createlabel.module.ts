
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { CreatelabelRoutingModule } from './createlabel-routing.module';
import { CreatelabelComponent } from './createlabel.component';

@NgModule({
  imports: [
    CommonModule, CreatelabelRoutingModule, FormsModule
  ],
  declarations: [CreatelabelComponent]
})
export class CreatelabelModule { }