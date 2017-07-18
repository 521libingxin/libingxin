
import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeadComponent } from './head.component';

export const routes: Routes = [
  { path: '', component: HeadComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeadRoutingModule {}
