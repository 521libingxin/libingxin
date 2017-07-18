
import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditormainscreenComponent } from './editormainscreen.component';

export const routes: Routes = [
  { path: '', component: EditormainscreenComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditormainscreenRoutingModule {}
