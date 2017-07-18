
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { EditormainscreenRoutingModule } from './editormainscreen-routing.module';
import { EditormainscreenComponent } from './editormainscreen.component';

@NgModule({
  imports: [
    CommonModule, EditormainscreenRoutingModule, FormsModule
  ],
  declarations: [EditormainscreenComponent]
})
export class EditormainscreenModule { }