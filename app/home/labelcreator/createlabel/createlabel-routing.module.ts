
import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatelabelComponent } from './createlabel.component';

export const routes: Routes = [
  { path: '', component: CreatelabelComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreatelabelRoutingModule {}
