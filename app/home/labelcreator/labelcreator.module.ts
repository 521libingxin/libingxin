
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { LabelCreatorRoutingModule } from './labelCreator-routing.module';
import { LabelCreatorComponent } from './labelCreator.component';
import { SharedModule }        from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule, LabelCreatorRoutingModule, FormsModule, SharedModule
  ],
  declarations: [LabelCreatorComponent]
})
export class LabelcreatorModule { }