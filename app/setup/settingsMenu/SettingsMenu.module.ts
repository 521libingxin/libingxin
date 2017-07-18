import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SettingsMenuRoutingModule } from './SettingsMenu-routing.module';
import { SettingsMenuComponent } from './SettingsMenu.component';
import { SharedModule }        from '../../shared/shared.module';
import { SettingsMenuListComponent,  } from './SettingsMenuList.component';

import { LinemovementComponent } from './productionLineSetup/lineMovement/lineMovement.component';
import { PrinttriggerComponent } from './productionLineSetup/printTrigger/printTrigger.component';
import { PoweroptionsComponent } from './productionLineSetup/powerOptions/powerOptions.component';
import { PositionorientationComponent } from './globalPrintSettings/positionOrientation/positionOrientation.component';
import { ContentComponent } from './globalPrintSettings/content/content.component';
import { ClocksdatesComponent } from './editorDefaults/clocksDates/clocksDates.component';
import { PropertiesComponent } from './editorDefaults/properties/properties.component';
import { JetprofileComponent } from './printerDiagnostics/jetProfile/jetProfile.component';
import { StatusComponent } from './printerDiagnostics/status/status.component';
import { LogsComponent } from './printerDiagnostics/logs/logs.component';
import { TestsComponent } from './printerDiagnostics/tests/tests.component';
import { QualityproblemsComponent } from './printerDiagnostics/qualityProblems/qualityProblems.component';
import { ModulationComponent } from './adjustment/modulation/modulation.component';
import { TestprintComponent } from './adjustment/testPrint/testPrint.component';
import { PressureComponent } from './adjustment/pressure/pressure.component';
import { InspectionComponent } from './adjustment/inspection/inspection.component';
import { InstallationComponent } from './adjustment/installation/installation.component';
import { PrintheadmanualmodeComponent } from './advancedSettings/printHeadManualMode/printHeadManualMode.component';
import { InksystemmanualmodeComponent } from './advancedSettings/inkSystemManualMode/inkSystemManualMode.component';
import { InkdetailsComponent } from './advancedSettings/inkDetails/inkDetails.component';
import { GutterComponent } from './advancedSettings/gutter/gutter.component';
import { HardwareComponent } from './advancedSettings/hardware/hardware.component';
import { RangedalertsComponent } from './alertConfiguration/rangedAlerts/rangedAlerts.component';
import { ConfigueralertsComponent } from './alertConfiguration/configuerAlerts/configuerAlerts.component';
import { EmailalertsComponent } from './alertConfiguration/emailAlerts/emailAlerts.component';
import { ServicealertsComponent } from './alertConfiguration/serviceAlerts/serviceAlerts.component';
import { AssignmentComponent } from './ioport/assignment/assignment.component';
import { MonitorComponent } from './ioport/monitor/monitor.component';
import { IoportSetupComponent } from './ioport/ioportSetup/ioportSetup.component';
import { LabelselectComponent } from './ioport/labelSelect/labelSelect.component';
import { LanguagekeyboardComponent } from './regional/languageKeyboard/languageKeyboard.component';
import { EthernetComponent } from './printerNetwork/ethernet/ethernet.component';
import { TestComponent } from './ioport/test/test.component';
import { SerialComponent } from './printerNetwork/serial/serial.component';
import { DatetimeComponent } from './regional/dateTime/dateTime.component';
import { AdvancedComponent } from './printerNetwork/advanced/advanced.component';
import { PrinterconnectionComponent } from './userInterface/printerConnection/printerConnection.component';
import { LanguageandkeyComponent } from './userInterface/languageandkey/languageandkey.component';
import { DiagnosticsComponent } from './userInterface/diagnostics/diagnostics.component';
import { AccessibilityComponent } from './userInterface/accessibility/accessibility.component';
import { NetworkComponent } from './userInterface/network/network.component';
import { RestoreComponent } from './backupRestore/restore/restore.component';
import { VersioninformationComponent } from './userInterface/versionInformation/versionInformation.component';
import { BackupComponent } from './backupRestore/backup/backup.component';
import { DefaultsComponent } from './backupRestore/defaults/defaults.component';
import { UpgradeComponent } from './backupRestore/upgrade/upgrade.component';
import { UpgradeconfigurationComponent } from './backupRestore/upgradeConfiguration/upgradeConfiguration.component';
import { OverviewComponent } from './systemInformation/overview/overview.component';
import { ConsumablesComponent } from './printerStatus/consumables/consumables.component';
import { LogoeditorComponent } from './tools/logoEditor/logoEditor.component';
import { SoftwareversionsComponent } from './systemInformation/softwareVersions/softwareVersions.component';
import { CountersComponent } from './printerStatus/counters/counters.component';
import { StatisticsComponent } from './printerStatus/statistics/statistics.component';
import { InstallpacksComponent } from './packsManagement/installPacks/installPacks.component';
import { MigratepacksComponent } from './packsManagement/migratePacks/migratePacks.component';

@NgModule({
  imports: [
    CommonModule, FormsModule, SharedModule, SettingsMenuRoutingModule,
  ],
  declarations: [SettingsMenuComponent,
    SettingsMenuListComponent,
    InspectionComponent,
    InstallationComponent,
    ModulationComponent,
    PressureComponent,
    TestprintComponent,
    GutterComponent,
    HardwareComponent,
    InkdetailsComponent,
    InksystemmanualmodeComponent,
    PrintheadmanualmodeComponent,
    ConfigueralertsComponent,
    EmailalertsComponent,
    RangedalertsComponent,
    ServicealertsComponent,
    BackupComponent,
    DefaultsComponent,
    RestoreComponent,
    UpgradeComponent,
    UpgradeconfigurationComponent,
    ClocksdatesComponent,
    PropertiesComponent,
    ContentComponent,
    PositionorientationComponent,
    AssignmentComponent,
    LabelselectComponent,
    MonitorComponent,
    IoportSetupComponent,
    TestComponent,
    InstallpacksComponent,
    MigratepacksComponent,
    JetprofileComponent,
    LogsComponent,
    QualityproblemsComponent,
    StatusComponent,
    TestsComponent,
    AdvancedComponent,
    EthernetComponent,
    SerialComponent,
    ConsumablesComponent,
    CountersComponent,
    StatisticsComponent,
    LinemovementComponent,
    PoweroptionsComponent,
    PrinttriggerComponent,
    DatetimeComponent,
    LanguagekeyboardComponent,
    OverviewComponent,
    SoftwareversionsComponent,
    LogoeditorComponent,
    AccessibilityComponent,
    DiagnosticsComponent,
    LanguageandkeyComponent,
    NetworkComponent,
    PrinterconnectionComponent,
    VersioninformationComponent,
  ]
})
export class SettingsMenuModule {}