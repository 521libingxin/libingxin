
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabelPreviewRoutingModule } from './labelPreview-routing.module';
import { LabelPreviewComponent } from './labelPreview.component';

@NgModule({
  imports: [
    CommonModule, LabelPreviewRoutingModule
  ],
  declarations: [LabelPreviewComponent]
})
export class LabelPreviewModule { }