
import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LabelPreviewComponent } from './labelPreview.component';

export const routes: Routes = [
  { path: '', component: LabelPreviewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LabelPreviewRoutingModule {}
