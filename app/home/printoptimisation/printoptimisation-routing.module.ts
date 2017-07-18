
import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrintoptimisationComponent } from './printoptimisation.component';

export const routes: Routes = [
  { path: '', component: PrintoptimisationComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrintoptimisationRoutingModule {}
