
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabelfinderRoutingModule } from './labelfinder-routing.module';
import { LabelfinderComponent } from './labelfinder.component';
import { SharedModule }        from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule, LabelfinderRoutingModule, SharedModule
  ],
  declarations: [LabelfinderComponent]
})
export class LabelfinderModule { }