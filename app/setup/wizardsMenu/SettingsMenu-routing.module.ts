
import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingsMenuComponent } from './SettingsMenu.component';
import { SettingsMenuListComponent } from './SettingsMenuList.component';
import { WizardsComponent } from './wizards.component';

import { InkFlushingWizardComponent } from './inkFlushingWizard/inkFlushingWizard.component';
import { InkPrimingWizardComponent } from './inkPrimingWizard/inkPrimingWizard.component';
import { InstallationWizardComponent } from './installationWizard/installationWizard.component';
import { NozzleUnblockingWizardComponent } from './nozzleUnblockingWizard/nozzleUnblockingWizard.component';
import { PrintHeightCalibrationWizardComponent } from './printHeightCalibrationWizard/printHeightCalibrationWizard.component';
import { UpgradeWizardComponent } from './upgradeWizard/upgradeWizard.component';

export const routes: Routes = [
  { path: '', component: SettingsMenuComponent, children: [
        {path: '', component: SettingsMenuListComponent},
        // { path: "upgradewizard",
        //  loadChildren:'app/Setup/SettingsMenu/Productionlinesetup/Printtrigger/Printtrigger.module#PrinttriggerModule'},
        {
          path: 'upgradeWizard',
          component: WizardsComponent, children: [
            { path: '', component: UpgradeWizardComponent},
          ]
        },
        {
          path: 'inkPrimingWizard',
          component: WizardsComponent, children: [
            { path: '', component: InkPrimingWizardComponent},
          ]
        },
        {
          path: 'inkFlushingWizard',
          component: WizardsComponent, children: [
            { path: '', component: InkFlushingWizardComponent},
          ]
        },
        {
          path: 'nozzleUnblockingWizard',
          component: WizardsComponent, children: [
            { path: '', component: NozzleUnblockingWizardComponent},
          ]
        },
        {
          path: 'installationWizard',
          component: WizardsComponent, children: [
            { path: '', component: InstallationWizardComponent},
          ]
        },
        {
          path: 'printHeightCalibrationWizard',
          component: WizardsComponent, children:[
            { path: '', component: PrintHeightCalibrationWizardComponent},
          ]
        }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsMenuRoutingModule {}
