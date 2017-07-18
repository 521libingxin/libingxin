import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'setup', loadChildren: 'app/setup/settingsMenu/SettingsMenu.module#SettingsMenuModule'},
  { path: 'setup/wizardsMenu', loadChildren: 'app/setup/wizardsMenu/SettingsMenu.module#SettingsMenuModule'},
   { path: 'printOptimisation', loadChildren: 'app/home/printoptimisation/printoptimisation.module#PrintoptimisationModule'},
 // { path: 'printoptimisation', loadChildren: 'app/home/inputDialogTest/inputDialogTest.module#InputDialogTestModule'},
  /*{ path: 'selectmessage', loadChildren: 'app/home/selectmessage/selectmessage.module#SelectmessageModule'},*/
  { path: 'labelfinder', loadChildren: 'app/home/labelfinder/labelfinder.module#LabelfinderModule'},
  { path: 'labelCreator', loadChildren: 'app/home/labelcreator/labelcreator.module#LabelcreatorModule'},
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}