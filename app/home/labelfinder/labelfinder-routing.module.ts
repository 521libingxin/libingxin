
import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LabelfinderComponent } from './labelfinder.component';

export const routes: Routes = [
  { path: '', component: LabelfinderComponent },
  {
    path: 'selectmessage',
    loadChildren: 'app/home/labelfinder/selectmessage/selectmessage.module#SelectmessageModule'
  },
  {
    path: 'selectmessage/editormainscreen/:id',
    loadChildren: 'app/home/labelcreator/editormainscreen/editormainscreen.module#EditormainscreenModule'
    // loadChildren: 'app/home/labelfinder/selectmessage/selectmessage.module#SelectmessageModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LabelfinderRoutingModule {}
