
import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LabelCreatorComponent } from './labelCreator.component';

export const routes: Routes = [
  { path: '', component: LabelCreatorComponent },
  {
    path: 'createlabel',
    loadChildren: 'app/home/labelcreator/createlabel/createlabel.module#CreatelabelModule'
  },
  {
    path: 'editormainscreen/:id',
    loadChildren: 'app/home/labelcreator/editormainscreen/editormainscreen.module#EditormainscreenModule'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LabelCreatorRoutingModule {}
