
import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectmessageComponent } from './selectmessage.component';

export const routes: Routes = [
  { path: '', component: SelectmessageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SelectmessageRoutingModule {}
