
import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingsMenuComponent } from './SettingsMenu.component';
import { SettingsMenuListComponent } from './SettingsMenuList.component';


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

export const routes: Routes = [
  { path: 'settingsMenu', component: SettingsMenuComponent, children: [
    { path: '', component: SettingsMenuListComponent},
  ]},
  { path: 'productionLineSetup', component: SettingsMenuComponent, children: [
    { path: '', component: LinemovementComponent},
    { path: 'lineMovement', component: LinemovementComponent},
    { path: 'powerOptions', component: PoweroptionsComponent},
    { path: 'printTrigger', component: PrinttriggerComponent}
  ]},
  { path: 'globalPrintSettings', component: SettingsMenuComponent, children: [
    { path: '', component: PositionorientationComponent},
    { path: 'content', component: ContentComponent},
    { path: 'positionOrientation', component: PositionorientationComponent}
  ]},
  { path: 'editorDefaults', component: SettingsMenuComponent, children: [
    { path: '', component: PropertiesComponent},
    { path: 'clocksDates', component: ClocksdatesComponent},
    { path: 'properties', component: PropertiesComponent}
  ]},
  { path: 'advancedSettings', component: SettingsMenuComponent, children: [
    { path: '', component: PrintheadmanualmodeComponent},
    { path: 'gutter', component: GutterComponent},
    { path: 'hardware', component: HardwareComponent},
    { path: 'inkDetails', component: InkdetailsComponent},
    { path: 'inkSystemManualMode', component: InksystemmanualmodeComponent},
    // { path: 'installoptions', component: InstalloptionsComponent},
    { path: 'printHeadManualMode', component: PrintheadmanualmodeComponent},
  ]},
  { path: 'printerDiagnostics', component: SettingsMenuComponent, children: [
    { path: '', component: StatusComponent},
    { path: 'tests', component: TestsComponent},
    { path: 'jetProfile', component: JetprofileComponent},
    { path: 'logs', component: LogsComponent},
    { path: 'qualityProblems', component: QualityproblemsComponent},
    { path: 'status', component: StatusComponent},
  ]},
  { path: 'adjustment', component: SettingsMenuComponent, children: [
    { path: '', component: ModulationComponent},
    { path: 'inspection', component: InspectionComponent},
    { path: 'installation', component: InstallationComponent},
    { path: 'modulation', component: ModulationComponent},
    { path: 'pressure', component: PressureComponent},
    { path: 'testPrint', component: TestprintComponent},
  ]},
  { path: 'alertConfiguration', component: SettingsMenuComponent, children: [
    { path: '', component: ConfigueralertsComponent},
    { path: 'configuerAlerts', component: ConfigueralertsComponent},
    { path: 'emailAlerts', component: EmailalertsComponent},
    { path: 'rangedAlerts', component: RangedalertsComponent},
    { path: 'serviceAlerts', component: ServicealertsComponent},
  ]},
  { path: 'ioport', component: SettingsMenuComponent, children: [
    { path: '', component: IoportSetupComponent},
    { path: 'assignment', component: AssignmentComponent},
    { path: 'labelSelect', component: LabelselectComponent},
    { path: 'monitor', component: MonitorComponent},
    { path: 'ioportSetup', component: IoportSetupComponent},
    { path: 'test', component: TestComponent},
  ]},
  { path: 'printerNetwork', component: SettingsMenuComponent, children: [
    { path: '', component: EthernetComponent},
    { path: 'advanced', component: AdvancedComponent},
    { path: 'ethernet', component: EthernetComponent},
    { path: 'serial', component: SerialComponent},
  ]},
  { path: 'regional', component: SettingsMenuComponent, children: [
    { path: '', component: LanguagekeyboardComponent},
    { path: 'dateTime', component: DatetimeComponent},
    { path: 'languageKeyboard', component: LanguagekeyboardComponent},
  ]},
  { path: 'backupRestore', component: SettingsMenuComponent, children: [
    { path: '', component: BackupComponent},
    { path: 'backup', component: BackupComponent},
    { path: 'defaults', component: DefaultsComponent},
    { path: 'restore', component: RestoreComponent},
    { path: 'upgrade', component: UpgradeComponent},
    { path: 'upgradeConfiguration', component: UpgradeconfigurationComponent},
  ]},
  { path: 'systemInformation', component: SettingsMenuComponent, children: [
    { path: '', component: OverviewComponent},
    { path: 'overview', component: OverviewComponent},
    { path: 'softwareVersions', component: SoftwareversionsComponent},
  ]},
  { path: 'userInterface', component: SettingsMenuComponent, children: [
    { path: '', component: PrinterconnectionComponent},
    { path: 'accessibility', component: AccessibilityComponent},
    { path: 'diagnostics', component: DiagnosticsComponent},
    { path: 'languageandkey', component: LanguageandkeyComponent},
    { path: 'network', component: NetworkComponent},
    { path: 'printerConnection', component: PrinterconnectionComponent},
    { path: 'versionInformation', component: VersioninformationComponent}
  ]},
  { path: 'tools', component: SettingsMenuComponent, children: [
    { path: '', component: LogoeditorComponent},
    { path: 'logoEditor', component: LogoeditorComponent},
  ]},
  { path: 'packsManagement', component: SettingsMenuComponent, children: [
    { path: '', component: InstallpacksComponent},
    { path: 'installPacks', component: InstallpacksComponent},
    { path: 'migratePacks', component: MigratepacksComponent},
  ]},
  { path: 'printerStatus', component: SettingsMenuComponent, children: [
    { path: '', component: ConsumablesComponent},
    { path: 'consumables', component: ConsumablesComponent},
    { path: 'counters', component: CountersComponent},
    { path: 'statistics', component: StatisticsComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsMenuRoutingModule {}
