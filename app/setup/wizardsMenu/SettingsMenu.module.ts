import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SettingsMenuRoutingModule } from './SettingsMenu-routing.module';
import { SettingsMenuComponent } from './SettingsMenu.component';
import { SharedModule }        from '../../shared/shared.module';
import { SettingsMenuListComponent } from './SettingsMenuList.component';
import { WizardsComponent } from './wizards.component';

import { InkFlushingSelectComponent } from './inkFlushingWizard/inkFlushingSelect/inkFlushingSelect.component';
import { InkFlushingWizardComponent } from './inkFlushingWizard/inkFlushingWizard.component';
import { InkPrimingWizardComponent } from './inkPrimingWizard/inkPrimingWizard.component';
import { ApplicationsComponent } from './installationWizard/applications/applications.component';
import { ClockSettingsComponent } from './installationWizard/clockSettings/clockSettings.component';
import { InstallationWizardComponent } from './installationWizard/installationWizard.component';
import { NetworkConfigurationComponent } from './installationWizard/networkConfiguration/networkConfiguration.component';
import { RegionalSettingsComponent } from './installationWizard/regionalSettings/regionalSettings.component';
import { NozzleUnblockingWizardComponent } from './nozzleUnblockingWizard/nozzleUnblockingWizard.component';
import { PrintHeightCalibrationWizardComponent } from './printHeightCalibrationWizard/printHeightCalibrationWizard.component';
import { PrintQualityMetricsComponent } from './printHeightCalibrationWizard/printQualityMetrics/printQualityMetrics.component';
import { SetupTestPrintComponent } from './printHeightCalibrationWizard/setupTestPrint/setupTestPrint.component';
import { UpgradeWizardComponent } from './upgradeWizard/upgradeWizard.component';

@NgModule({
  imports: [
    CommonModule, SettingsMenuRoutingModule, SharedModule, FormsModule
  ],
  declarations: [
    SettingsMenuComponent,
    SettingsMenuListComponent,
    WizardsComponent,
    InkFlushingSelectComponent,
    InkFlushingWizardComponent,
    InkPrimingWizardComponent,
    ApplicationsComponent,
    ClockSettingsComponent,
    InstallationWizardComponent,
    NetworkConfigurationComponent,
    RegionalSettingsComponent,
    NozzleUnblockingWizardComponent,
    PrintHeightCalibrationWizardComponent,
    PrintQualityMetricsComponent,
    SetupTestPrintComponent,
    UpgradeWizardComponent
  ]
})
export class SettingsMenuModule {}