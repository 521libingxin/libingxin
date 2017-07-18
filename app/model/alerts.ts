export enum PrinterData { SA_NONE, SA_CIJ_WIZ_DIAGNOSTICS_INK_ON_CHARGE_EL, SA_CIJ_WIZ_DIAGNOSTICS_CHARGE_DET_ERR };
export class AlertInfo {
   shortDesc: string;
   longDesc: string;
   printerData: PrinterData;
   barcodeString: string;
   clearance: boolean;
   id: number;
   timeStamp: Date;
   fresh: boolean;
   oldIndex: number;
   severityLevel: number;
   constructor(shortDesc: string, longDesc: string, printerData: PrinterData) {
      // this is bad coding because translations
      this.id = undefined;
      this.longDesc = longDesc;
      this.shortDesc = shortDesc;
      this.printerData = printerData;
      this.clearance = false;
      this.barcodeString = '';
      this.timeStamp = undefined;
      this.fresh = true;
      this.oldIndex = -1;
   }
}
export var AlertDesc = Array<AlertInfo>();

// TODO fix the rest of this file

// TODO I think this is supposed to be the translation fuction
function tr(input: string, meaning: string): string { return input; }

AlertDesc[1] = new AlertInfo(tr('Unexpected exception', 'Alert short description'),
   tr('Unexpected exception', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[2] = new AlertInfo(tr('Protocol DLL load failed', 'Alert short description'),
   tr('A protocol DLL failed to load', 'Alert long description'),
   PrinterData.SA_NONE);

// legacy alert 12 is in 13xx area (drop generation), but it keeps the legacy value

// legacy alert 13 is in 13xx area (drop generation), but it keeps the legacy value

AlertDesc[10] = new AlertInfo(tr('Print Max Speed Limit in Force', 'Alert short description'),
   tr('Print Max Speed Limit in Force.', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[15] = new AlertInfo(tr('Deflection EHT has tripped', 'Alert short description'),
   tr('EHT has tripped, possibly due to ink on the deflector plates. Check the print head, and if necessary, clean the deflector plates.',
   'Alert long description'),
   PrinterData.SA_NONE);

// legacy alert 16 is in 12xx area (viscometer), but it keeps the legacy value

// legacy alert 17 is in 12xx area (viscometer), but it keeps the legacy value

AlertDesc[19] = new AlertInfo(tr('Add ink cartridge', 'Alert short description'),
   tr('The ink level is low. Fit a new ink cartridge.', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[20] = new AlertInfo(tr('Ink Level Below Minimum', 'Alert short description'),
   tr('The ink level in the reservoir is below the minimum level. Fit a new ink cartridge.', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[24] = new AlertInfo(tr('Gutter dry at start-up', 'Alert short description'),
   tr('The gutter is dry - no ink is entering the gutter.', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[25] = new AlertInfo(tr('Add make-up cartridge', 'Alert short description'),
   tr('The make-up level is low. Fit a new make-up cartridge.', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[26] = new AlertInfo(tr('Printhead heater temperature high', 'Alert short description'),
   tr('The printer heater temperature is moving above the set-point.', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[27] = new AlertInfo(tr('Printhead heater temperature low', 'Alert short description'),
   tr('The printer heater temperature is moving below the set-point.', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[41] = new AlertInfo(tr('Ink level too high', 'Alert short description'),
   tr(`The level of ink in the reservoir is too high.\
 remove power to the printer and remove some ink from the ink reservoir before continuing.`,
   'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[45] = new AlertInfo(tr('Watchdog Reset', 'Alert short description'),
   tr('A critical error has occurred and the software has been reset. Please contact local Domino office.', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[46] = new AlertInfo(tr('Make-up Level too High', 'Alert short description'),
   tr('The make-up level is too high. Remove power to the printer and remove some make-up from the make-up reservoir.',
   'Alert long description'),
   PrinterData.SA_NONE);

// legacy alert 52 is in 13xx area (drop generation), but it keeps the legacy value
AlertDesc[53] = new AlertInfo(tr('Make-up Level Below Minimum', 'Alert short description'),
   tr(`The make-up level in the reservoir is below the minimum level. Fit a new make-up cartridge.\
 If cartridge is not empty, ensure it is seated properly.`,
    'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[68] = new AlertInfo(tr('Ink temperature low', 'Alert short description'),
   tr(`The ink temperature is outside control system limits. Ensure printer environment is within specification.\
 Check the temperature sensor in the ink management block.`,
    'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[69] = new AlertInfo(tr('Ink temperature high', 'Alert short description'),
   tr(`The ink temperature is too high. Ensure printer environment is within specification.\
 Check the temperature sensor in the ink management block and replace if necessary.`,
    'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[98] = new AlertInfo(tr('Feature key removed', 'Alert short description'),
   tr('The feature key has been removed.', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[117] = new AlertInfo(tr('Positive air to the print head has failed', 'Alert short description'),
   tr(`The compressor airdryer is either faulty or could not be detected. Please check the airdryer,\
 then go to self-tests and select Test Compressor from the list to re-enable the compressor.`,
    'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[120] = new AlertInfo(tr('Hardware key removed', 'Alert short description'),
   tr('The hardware key has been removed.', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[134] = new AlertInfo(tr('Unexpected shutdown', 'Alert short description'),
   tr('The printer has not been powered off properly. Please always use power button to switch off the printer.', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[136] = new AlertInfo(tr('Unable to detect printhead', 'Alert short description'),
   tr('Unable to detect printhead.', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[139] = new AlertInfo(tr('Print Trigger Occurred While Printing', 'Alert short description'),
   tr('The printer has reached the maximum stroke rate (only when using a shaft encoder). Reduce the line speed.',
    'Alert long description'),
   PrinterData.SA_NONE);

// legacy alert 140 is in 13xx area (drop generation), but it keeps the legacy value

// legacy alert 142 is in 13xx area (drop generation), but it keeps the legacy value

// legacy alert 143 is in 13xx area (drop generation), but it keeps the legacy value

AlertDesc[166] = new AlertInfo(tr('Drop generator temperature over the maximum limit', 'Alert short description'),
   tr('Drop generator temperature over the maximum limit.', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[167] = new AlertInfo(tr('Printhead temperature near boiling point', 'Alert short description'),
   tr('The printhead heater temperature is approaching the solvent\'s boiling point.', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[170] = new AlertInfo(tr('Printhead temperature imbalance', 'Alert short description'),
   tr('The printhead heaters\' temperature\'s are diverging.', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[175] = new AlertInfo(tr('Hardware key expired', 'Alert short description'),
   tr('The hardware key has expired. You will not be able to access the protected area.', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[177] = new AlertInfo(tr('Hardware key due to expire', 'Alert short description'),
   tr('The hardware key will expire within 7 days', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[179] = new AlertInfo(tr('Low number of uses left in hardware key', 'Alert short description'),
   tr('The number of uses of the hardware key is below 10', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[192] = new AlertInfo(tr('Ink Change Needed 1st Warning', 'Alert short description'),
   tr('The first warning for an ink change has been reached.', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[193] = new AlertInfo(tr('Ink Change Needed Final Warning', 'Alert short description'),
   tr('The final warning for an ink change has been reached.', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[200] = new AlertInfo(tr('Ink calibration recommended', 'Alert short description'),
   tr('The calibration of the ink levels has errors; calibration is recommended.', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[201] = new AlertInfo(tr('Solvent calibration recommended', 'Alert short description'),
   tr('The calibration of the solvent levels has errors; calibration is recommended.', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[205] = new AlertInfo(tr('Depletion State', 'Alert short description'),
   tr('Intelligent Ink System is in depletion mode to prepare for ITM change.', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[206] = new AlertInfo(tr('Remove cartridge for depletion', 'Alert short description'),
   tr('Intelligent Ink System is in depletion mode to prepare for ITM change.', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[207] = new AlertInfo(tr('Ink level low in Depletion State', 'Alert short description'),
   tr('Intelligent Ink System is in depletion mode but the ink level has reached a low state.', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[211] = new AlertInfo(tr('Less than 200 hours to next inspection', 'Alert short description'),
   tr('The next inspection for this printer is due in 200 hours or less. No immediate action is required, prepare for inspection when due.',
    'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[212] = new AlertInfo(tr('Less than 50 hours to next inspection', 'Alert short description'),
   tr(`The next inspection for this printer is due in 50 hours or less.\
 No immediate action is required, except perhaps to make arrangements for this inspection.`,
    'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[213] = new AlertInfo(tr('Inspection Required', 'Alert short description'),
   tr('This printer now requires an inspection.', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[228] = new AlertInfo(tr('Parameter defaulted', 'Alert short description'),
   tr('A parameter value has been defaulted.', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[229] = new AlertInfo(tr('Failed to write to NVRAM', 'Alert short description'),
   tr('An error has happened when trying to write to NVRAM.', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[230] = new AlertInfo(tr('Ink management not operational', 'Alert short description'),
   tr('The ink management is not working correctly.', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[231] = new AlertInfo(tr('Failed to open database', 'Alert short description'),
   tr('The system could not open a database.', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[232] = new AlertInfo(tr('Ink cartridge performance does not match configuration', 'Alert short description'),
   tr('The performance of the ink cartridge does not match the configuration.', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[233] = new AlertInfo(tr('Ink cartridge region or customer id does not match configuration', 'Alert short description'),
   tr('Either the region or the customer id of the ink cartridge does not match the configuration.', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[234] = new AlertInfo(tr('Gutter Stall', 'Alert short description'),
   tr('Excess fluid detected in gutter.', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[235] = new AlertInfo(tr('Gutter pump not rotating', 'Alert short description'),
   tr('The current gutter pump speed is much less than expected.', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[236] = new AlertInfo(tr('Gutter blocked attempting to clear', 'Alert short description'),
   tr('Attempting to clear a suspected gutter blockage.', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[237] = new AlertInfo(tr('Gutter Blocked', 'Alert short description'),
   tr('The gutter is blocked.', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[238] = new AlertInfo(tr('Insufficient gutter vacuum - Retrying', 'Alert short description'),
   tr('There is currently a delay due to low gutter vacuum being detected.', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[240] = new AlertInfo(tr('Feature key fitted', 'Alert short description'),
   tr('The feature key has been fitted.', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[241] = new AlertInfo(tr('Feature key invalid', 'Alert short description'),
   tr('The feature key is not valid.', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[242] = new AlertInfo(tr('Feature key expired', 'Alert short description'),
   tr('The feature key has expired.', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[243] = new AlertInfo(tr('Label store sync required', 'Alert short description'),
   tr('A label store sync is required.', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[244] = new AlertInfo(tr('Sync data not ready on trigger', 'Alert short description'),
   tr('The sync data was not ready on a print trigger.', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[245] = new AlertInfo(tr('Unexpected print trigger', 'Alert short description'),
   tr('An unexpected print trigger occurred.', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[246] = new AlertInfo(tr('Unexpected buffer underrun', 'Alert short description'),
   tr('An unexpected buffer underrun occurred.', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[247] = new AlertInfo(tr('Queue overflow', 'Alert short description'),
   tr('A queue overflow occurred.', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[248] = new AlertInfo(tr('Stroke rate below threshold', 'Alert short description'),
   tr('The stroke rate is below the threshold.', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[249] = new AlertInfo(tr('Stroke rate above threshold', 'Alert short description'),
   tr('The stroke rate is above the threshold.', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[250] = new AlertInfo(tr('Stroke rate within tolerance', 'Alert short description'),
   tr('The stroke rate is within tolerance.', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[251] = new AlertInfo(tr('PDET rate below threshold', 'Alert short description'),
   tr('The PDET rate is below the threshold.', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[252] = new AlertInfo(tr('PDET rate above threshold', 'Alert short description'),
   tr('The PDET rate is above the threshold.', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[253] = new AlertInfo(tr('PDET rate within tolerance', 'Alert short description'),
   tr('The PDET rate is within tolerance.', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[254] = new AlertInfo(tr('GPI queue empty', 'Alert short description'),
   tr('The GPI queue is empty.', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[500] = new AlertInfo(tr('Failed loading Pack definitions', 'Alert short description'),
   tr('It was not possible to load the definitions of Packs; only the standard Pack will be supported.', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[501] = new AlertInfo(tr('Failed loading some installed Packs', 'Alert short description'),
   tr('It was not possible to load some installed Packs (any related features will not be available).', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[502] = new AlertInfo(tr('Pack successfully installed', 'Alert short description'),
   tr('The Pack was installed successfully. Related features will be available after restarting the printer.', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[503] = new AlertInfo(tr('Failed migrating a Pack', 'Alert short description'),
   tr('It was not possible to migrate a Pack from the printer.', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[504] = new AlertInfo(tr('Pack successfully migrated', 'Alert short description'),
   tr('The Pack was migrated successfully. Related features are no longer available.', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[505] = new AlertInfo(tr('There was an error enabling or disabling Pack related features', 'Alert short description'),
   tr('An error occurred while enabling or disabling features related to a Pack. Some features may not work correctly.',
    'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[506] = new AlertInfo(tr('A trial Pack will expire soon', 'Alert short description'),
   tr('The period for trialling a Pack will end soon. Related features will be removed (contact your representative to purchase the Pack).',
    'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[507] = new AlertInfo(tr('A trial Pack is no longer available', 'Alert short description'),
   tr(`The period for trialling a Pack has expired.\
 Related features are no longer available (contact your representative to purchase the Pack).`,
    'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[508] = new AlertInfo(tr('Unable to save configuration', 'Alert short description'),
   tr('Unable to save configuration while shutting down.', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[509] = new AlertInfo(tr('Unable to write ink parameter', 'Alert short description'),
   tr('Unable to write ink parameter.', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[510] = new AlertInfo(tr('Service module disconnected', 'Alert short description'),
   tr('Cannot communicate with service module.', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[511] = new AlertInfo(tr('Service module detected', 'Alert short description'),
   tr('Service module detected.', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[517] = new AlertInfo(tr('ITM life expired (currently in grace period)', 'Alert short description'),
   tr('Source and replace a new ITM. If sequenced off during the grace period a password is required to continue use.',
    'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[519] = new AlertInfo(tr('ITM Not Actived', 'Alert short description'),
   tr('AMP Alert', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[520] = new AlertInfo(tr('Change ITM - ITM Ink Type Incorrect', 'Alert short description'),
   tr('AMP Alert', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[521] = new AlertInfo(tr('Change ITM - ITM Tag Dead', 'Alert short description'),
   tr('AMP Alert', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[523] = new AlertInfo(tr('Change ITM - Expired', 'Alert short description'),
   tr('The ITM has expired. Printing will not be permitted until a new ITM is inserted', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[524] = new AlertInfo(tr('Insert ITM - No valid ITM present', 'Alert short description'),
   tr('AMP Alert', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[525] = new AlertInfo(tr('ITM Removed First Timeout', 'Alert short description'),
   tr('AMP Alert', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[526] = new AlertInfo(tr('ITM Removed Second Timeout', 'Alert short description'),
   tr('AMP Alert', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[527] = new AlertInfo(tr('ITM Removed Timeout', 'Alert short description'),
   tr('AMP Alert', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[528] = new AlertInfo(tr('Add Ink cartridge', 'Alert short description'),
   tr('AMP Alert', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[529] = new AlertInfo(tr('Ink Cartridge Level Low', 'Alert short description'),
   tr('AMP Alert', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[530] = new AlertInfo(tr('Change Ink Cartridge - Ink Type Incorrect', 'Alert short description'),
   tr('AMP Alert', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[531] = new AlertInfo(tr('Change Ink Cartridge - Expired', 'Alert short description'),
   tr('AMP Alert', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[532] = new AlertInfo(tr('Change Ink Cartridge - Empty', 'Alert short description'),
   tr('AMP Alert', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[533] = new AlertInfo(tr('Change Ink Cartridge - Tag Dead', 'Alert short description'),
   tr('AMP Alert', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[534] = new AlertInfo(tr('Insert Ink Cartridge - No valid Cartridge present', 'Alert short description'),
   tr('AMP Alert', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[535] = new AlertInfo(tr('Ink Cartridge Removed First Warning', 'Alert short description'),
   tr('AMP Alert', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[536] = new AlertInfo(tr('Ink Cartridge Removed Second Warning', 'Alert short description'),
   tr('AMP Alert', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[537] = new AlertInfo(tr('Ink Cartridge Removed Timeout', 'Alert short description'),
   tr('AMP Alert', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[538] = new AlertInfo(tr('Ink Cartridge Notice Period Warning', 'Alert short description'),
   tr('AMP Alert', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[539] = new AlertInfo(tr('Insert Makeup Cartridge', 'Alert short description'),
   tr('AMP Alert', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[540] = new AlertInfo(tr('Makeup Low', 'Alert short description'),
   tr('AMP Alert', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[541] = new AlertInfo(tr('Change Makeup Cartridge - Makeup Type Incorrect', 'Alert short description'),
   tr('AMP Alert', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[542] = new AlertInfo(tr('Change Makeup Cartridge - Cartridge Empty', 'Alert short description'),
   tr('AMP Alert', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[543] = new AlertInfo(tr('Change Makeup Cartridge - Cartridge Dead', 'Alert short description'),
   tr('AMP Alert', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[544] = new AlertInfo(tr('Insert Makeup Cartridge - No valid Cartridge present', 'Alert short description'),
   tr('AMP Alert', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[545] = new AlertInfo(tr('Makeup Cartridge Removed First Warning', 'Alert short description'),
   tr('AMP Alert', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[546] = new AlertInfo(tr('Makeup Cartridge Removed Second Warning', 'Alert short description'),
   tr('AMP Alert', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[547] = new AlertInfo(tr('Makeup Cartridge Removed Timeout', 'Alert short description'),
   tr('AMP Alert', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[548] = new AlertInfo(tr('Makeup Cartridge Notice Period Warning', 'Alert short description'),
   tr('AMP Alert', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[549] = new AlertInfo(tr('Change Makeup Cartridge - Expired', 'Alert short description'),
   tr('The expiry date on the makeup cartridge has been reached. Please change the makeup cartridge.', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[550] = new AlertInfo(tr('Degraded gutter clearing at start-up', 'Alert short description'),
   tr('Gutter sensors detected only the minimum level of cleanliness', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[551] = new AlertInfo(tr('Gutter cannot be cleared', 'Alert short description'),
   tr('Gutter sensors didn\'t detect the minimum level of cleanliness', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[552] = new AlertInfo(tr('Pressure has not been reached', 'Alert short description'),
   tr('The feed pump wasn\'t able to establish the correct level of pressure at startup', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[553] = new AlertInfo(tr('Wash pressure has not been reached', 'Alert short description'),
   tr('The feed pump wasn\'t able to establish the correct level of pressure needed for nozzle washing', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[554] = new AlertInfo(tr('Jetting pressure has not been reached', 'Alert short description'),
   tr('The feed pump wasn\'t able to establish the correct level needed to start printing', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[555] = new AlertInfo(tr('Printhead not reached temperature', 'Alert short description'),
   tr('The gunbody heater wasn\'t able to warm up the print-head up to the temperature needed to print', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[556] = new AlertInfo(tr('Printhead warming up', 'Alert short description'),
   tr('The gunbody heater is still warming up the print-head to reach the temperature needed to print', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[557] = new AlertInfo(tr('Misaligned jet at start-up', 'Alert short description'),
   tr('The gutter is dry - no ink is entering the gutter', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[558] = new AlertInfo(tr('Gutter dry while running', 'Alert short description'),
   tr('The gutter is dry - no ink is entering the gutter', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[560] = new AlertInfo(tr('Vacuum loss recovery time-out', 'Alert short description'),
   tr('The gutter is dry - no ink is entering the gutter', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[561] = new AlertInfo(tr('Gutter pump vacuum loss - but has recovered', 'Alert short description'),
   tr('The gutter pump vacuum was detected as too low and has been restarted.', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[562] = new AlertInfo(tr('Vacuum loss - prevented from recovery', 'Alert short description'),
   tr('The gutter is dry - no ink is entering the gutter', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[563] = new AlertInfo(tr('Gutter stall - prevented from recovery', 'Alert short description'),
   tr('Gutter stall - prevented from recovery', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[564] = new AlertInfo(tr('Gutter vacuum cannot be generated', 'Alert short description'),
   tr('The gutter pump wasn\'t able to generate enough vacuum in the gutter', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[565] = new AlertInfo(tr('Gutter clearing in progress', 'Alert short description'),
   tr('Performing the gutter clearing...', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[566] = new AlertInfo(tr('Gutter blocked in run', 'Alert short description'),
   tr('Gutter vacuum too low: the gutter might be blocked', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[567] = new AlertInfo(tr('Slow gutter dry', 'Alert short description'),
   tr('Jet misalignment to the gutter has been detected', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[570] = new AlertInfo(tr('Start-Up pressure, via wash valve, not achieved yet: retrying...', 'Alert short description'),
   tr('Start-up pressure, via wash valve, has not been achieved during a tentative in ink reinvigoration.', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[571] = new AlertInfo(tr('Start-Up pressure, via wash valve, cannot be achieved', 'Alert short description'),
   tr('Start-up pressure, via wash valve, cannot be achieved during ink re-invigoration.', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[572] = new AlertInfo(tr('Start-Up pressure, via feed valve, cannot be achieved', 'Alert short description'),
   tr('Start-up pressure, via feed valve, cannot be achieved during ink re-invigoration.', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[573] = new AlertInfo(tr('Viscometer fault 1', 'Alert short description'),
   tr('Viscometer did not detect a rising ball in coil, after the viscometer valve was opened', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[574] = new AlertInfo(tr('Viscometer fault 2', 'Alert short description'),
   tr('Viscometer did not detect a falling ball in coil, after the viscometer fill and the viscometer valve was closed',
    'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[575] = new AlertInfo(tr('Start-Up pressure, via feed and bleed valves, cannot be achieved', 'Alert short description'),
   tr('Start-up pressure, via feed and bleed valves, cannot be achieved during ink re-invigoration.', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[576] = new AlertInfo(tr('Start-Up pressure, via feed and bleed valves, not achieved yet: retrying...', 'Alert short description'),
   tr('Start-up pressure, via feed and bleed valves, has not been achieved during the ink reinvigoration.', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[577] = new AlertInfo(tr('Replace Ink Items required', 'Alert short description'),
   tr('Ink items need to be replaced', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[578] = new AlertInfo(tr('Wakey Wakey cycle started', 'Alert short description'),
   tr('The printer is performing the periodic ink reinvigoration sequence', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[580] = new AlertInfo(tr('Untreated Notified State', 'Alert short description'),
   tr('A component received a state that has not been treated', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[581] = new AlertInfo(tr('ITM Life Expiry - First Warning', 'Alert short description'),
   tr('The ITM life is soon to expire. Ensure a replacement ITM is available.', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[582] = new AlertInfo(tr('ITM Life Expiry - Second Warning', 'Alert short description'),
   tr('The ITM life is soon to expire. Ensure a replacement ITM is available.', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[583] = new AlertInfo(tr('Invalid tag(s)', 'Alert short description'),
   tr('The tag reader has detected a tag that is invalid. Please make sure that the container has the correct tag.',
    'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[584] = new AlertInfo(tr('Failed to read parameter ', 'Alert short description'),
   tr('A PE parameter cannot be read.', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[585] = new AlertInfo(tr('Misplaced container(s)', 'Alert short description'),
   tr('The tag reader has detected a misplaced fluid container. Please make sure that the container is placed in the correct position.',
    'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[590] = new AlertInfo(tr('Persistent Fault', 'Alert short description'),
   tr('A persistent fault condition is keeping the printer in FAULT state', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[591] = new AlertInfo(tr('Unable to read ink parameter', 'Alert short description'),
   tr('Unable to read ink parameter.', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[592] = new AlertInfo(tr('Bleeding Damper', 'Alert short description'),
   tr('The printer is currently bleeding the damper.', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[593] = new AlertInfo(tr('Bleeding Damper Failed - Ink Low', 'Alert short description'),
   tr('Bleeding the damper failed because the ink level is low.', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[594] = new AlertInfo(tr('Hardware configuration could not be loaded', 'Alert short description'),
   tr('Hardware configuration could not be loaded', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[595] = new AlertInfo(tr('Restart required for new printhead', 'Alert short description'),
   tr('Change the printhead and restart the printer', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[596] = new AlertInfo(tr('Hardware configuration parameter defaulted', 'Alert short description'),
   tr('Hardware configuration parameter defaulted', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[597] = new AlertInfo(tr('Printhead jumper setting does not match configuration', 'Alert short description'),
   tr('Printhead jumper setting does not match configuration', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[598] = new AlertInfo(tr('Smart card failure', 'Alert short description'),
   tr('Smart card failure', 'Alert long description'),
   PrinterData.SA_NONE);

// Tag related alerts
AlertDesc[600] = new AlertInfo(tr('Tag detection - LED changed', 'Alert short description'),
   tr('Tag detection - LED changed', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[601] = new AlertInfo(tr('Tag detected', 'Alert short description'),
   tr('Tag detected', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[602] = new AlertInfo(tr('Tag removed', 'Alert short description'),
   tr('Tag removed', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[603] = new AlertInfo(tr('Cartridge fluid level low', 'Alert short description'),
   tr('Cartridge fluid level low', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[604] = new AlertInfo(tr('Tag block changed', 'Alert short description'),
   tr('Tag block changed', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[605] = new AlertInfo(tr('Tag read correctly', 'Alert short description'),
   tr('Tag read correctly', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[606] = new AlertInfo(tr('Tag log updated', 'Alert short description'),
   tr('Tag log updated', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[607] = new AlertInfo(tr('Ink cartridge not engaged', 'Alert short description'),
   tr('Ink cartridge not engaged', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[608] = new AlertInfo(tr('Makeup cartridge not engaged', 'Alert short description'),
   tr('Makeup cartridge not engaged', 'Alert long description'),
   PrinterData.SA_NONE);


AlertDesc[609] = new AlertInfo(tr('Ensure all consumables are engaged', 'Alert short description'),
   tr('All consumables must be present before the printer can be sequenced on.', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[610] = new AlertInfo(tr('Please add a new ink cartridge. Ink fully expended', 'Alert short description'),
   tr('The RFID system has determined there is no more ink available', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[611] = new AlertInfo(tr('Please add a new makeup cartridge. Makeup fully expended', 'Alert short description'),
   tr('The RFID system has determined there is no more makeup available', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[612] = new AlertInfo(tr('Ink cartridge and ITM incompatible', 'Alert short description'),
   tr('The ink cartridge is not compatible with the type of ITM fitted. Please change the ink cartridge or ITM.', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[613] = new AlertInfo(tr('ITM is incompatible with ink system', 'Alert short description'),
   tr('The ITM is not compatible with the type of ink system fitted. Please change the ITM.', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[614] = new AlertInfo(tr('Makeup cartridge is incompatible with ink system', 'Alert short description'),
   tr('The makeup cartridge is not compatible with the type of ink system fitted. Please change the makeup cartridge.',
    'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[615] = new AlertInfo(tr('ITM level on tag does not match LSM', 'Alert short description'),
   tr('The ITM tag level does not match that read from the LSM.', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[616] = new AlertInfo(tr('ITM life is invalid', 'Alert short description'),
   tr('The ITM life read from the tag is invalid.', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[617] = new AlertInfo(tr('Ink cartridge not yet required', 'Alert short description'),
   tr(`The ink cartridge is not needed yet and fitting a new one risks sedimentation.\
 Please replace the ink acrtridge with the empty old one.`,
    'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[618] = new AlertInfo(tr('Ink cartridge used in multiple printers', 'Alert short description'),
   tr('The ink cartridge has been used in another printer.', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[619] = new AlertInfo(tr('Failed setting ink system type in QMM', 'Alert short description'),
   tr('The ink system type was not correctly set in the QMM. Restart the printer.', 'Alert long description'),
   PrinterData.SA_NONE);

// Print system / renderer alerts
AlertDesc[1000] = new AlertInfo(tr('Raster unavailable', 'Alert short description'),
   tr('No present raster matched label format or drop pattern.', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[1001] = new AlertInfo(tr('Raster cannot achieve print speed', 'Alert short description'),
   tr('A raster matching the requested label format, drop pattern, etc., was found but cannot achieve the print target speed.',
    'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[1002] = new AlertInfo(tr('No rasters found', 'Alert short description'),
   tr('No raster files could be found at the location specified in the configuration.', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[1003] = new AlertInfo(tr('Raster set updated', 'Alert short description'),
   tr('The set of rasters available on the printer has been updated.  One or more rasters have been added or deleted.',
    'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[1004] = new AlertInfo(tr('Invalid BERT command', 'Alert short description'),
   tr('Print data stream is incorrect.', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[1005] = new AlertInfo(tr('Unexpected exception in print system', 'Alert short description'),
   tr(`An exception has been raised in the print system that is not handled.\
 If the exception is caught in the scheduler, the priting system is stopped.`,
    'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[1006] = new AlertInfo(tr('The label selection input slot is not mapped to a label', 'Alert short description'),
   tr('The selected slot does not have a printable label assigned to it.', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[1007] = new AlertInfo(tr('The label print height is out of range', 'Alert short description'),
   tr('The print height will be adjusted within the limits. Change the label / segment height or the print height calibration.',
    'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[1008] = new AlertInfo(tr('Label stroke pitch too small for encoder resolution', 'Alert short description'),
   tr('Increase the label stroke pitch, or increase the external encoder gearbox multiplier in the encoder calibration screen.',
    'Alert long description'),
   PrinterData.SA_NONE);

// MMI alerts
AlertDesc[1010] = new AlertInfo(tr('GPI queue empty', 'Alert short description'),
   tr('The GPI queue is empty.', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[1011] = new AlertInfo(tr('GPI queue not empty', 'Alert short description'),
   tr('GPI queue contains elements.', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[1012] = new AlertInfo(tr('GPI queue overflow', 'Alert short description'),
   tr('Too many entries in GPI queue.', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[1013] = new AlertInfo(tr('Product queue overflow', 'Alert short description'),
   tr('Too many entries in product queue.', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[1014] = new AlertInfo(tr('EDC history queue duplicate', 'Alert short description'),
   tr('Duplicate entry in EDC history queue.', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[1015] = new AlertInfo(tr('EDC queue overflow', 'Alert short description'),
   tr('Too many entries in EDC queue.', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[1016] = new AlertInfo(tr('Behavioural script tried to access output pin', 'Alert short description'),
   tr(`A behavioural script tried to set an output pin that is not assigned to be controlled by behavioural scripts.\
 Please check the output pin assignments.`,
    'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[1017] = new AlertInfo(tr('Print delay too short', 'Alert short description'),
   tr(`The label has printed late, please check the position of the label on the product. To resolve either increase the print delay\
 (and the distance between product detect sensor and print head if necessary) or decrease the product detect persistence.`,
    'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[1018] = new AlertInfo(tr('Internal gearbox frequency too high', 'Alert short description'),
   tr('Reduce gearbox multiplier setting.', 'Alert long description'),
   PrinterData.SA_NONE);

// Backup / restore alerts
AlertDesc[1030] = new AlertInfo(tr('Backup-Restore status alert', 'Alert short description'),
   tr('A status alert has been raised by the backup-restore process.', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[1031] = new AlertInfo(tr('Backup-Restore error alert', 'Alert short description'),
   tr('A error alert has been raised by the backup-restore process.', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[1032] = new AlertInfo(tr('Backup-Restore log alert', 'Alert short description'),
   tr('A log alert has been raised by the backup-restore process.', 'Alert long description'),
   PrinterData.SA_NONE);

// Fan alerts
AlertDesc[1040] = new AlertInfo(tr('Ink system fan has stopped working', 'Alert short description'),
   tr('The fan has stopped working. Check fan and it\'s connections, replace if necessary (refer to manual).', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[1041] = new AlertInfo(tr('Electronic fan has stopped working', 'Alert short description'),
   tr('The fan has stopped working. Check fan and it\'s connections, replace if necessary (refer to manual).', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[1050] = new AlertInfo(tr('Print length exceeds the repeat pitch', 'Alert short description'),
   tr('Repeat print is too short for the label width.', 'Alert long description'),
   PrinterData.SA_NONE);

/* 12xx : Viscometer alerts */
AlertDesc[1201] = new AlertInfo(tr('High viscosity', 'Alert short description'),
   tr('Potential degraded printing due to very high viscosity', 'Alert long description'),
   PrinterData.SA_NONE);

/* 1202 : but set to 16 for A-series backward compatibility */
AlertDesc[16] = new AlertInfo(tr('Viscosity Out of Range', 'Alert short description'),
   tr(`The viscosity of the ink is out of range. Check and replace the make-up cartridge if necessary.\
 Contact local Domino office for assistance if fault persists.`,
    'Alert long description'),
   PrinterData.SA_NONE);

/* 1203 : but set to 17 for A-series backward compatibility */
AlertDesc[17] = new AlertInfo(tr('Viscometer Fault', 'Alert short description'),
   tr('The viscometer or valve has failed. Replace viscometer or valve if necessary.', 'Alert long description'),
   PrinterData.SA_NONE);

/* 13xx : Drop generation, charging and phasing alerts */

/* 1300 : but set to 52 for A-series backward compatibility */
AlertDesc[52] = new AlertInfo(tr('Jet Modulation has Failed', 'Alert short description'),
   tr(`The printer could not automatically modulate the jet, therefore it will use the last successful modulation level.\
 Printer can be used but check print quality. If fault persists, clean charge electrode and contact local Domino office.`,
    'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[1303] = new AlertInfo(tr('Ink detected on the charge electrode at startup', 'Alert short description'),
   tr('The printer has found ink on the charge electrode at startup', 'Alert long description'),
   PrinterData.SA_CIJ_WIZ_DIAGNOSTICS_INK_ON_CHARGE_EL);

/* 1311 : but set to 140 for A-series backward compatibility */
AlertDesc[140] = new AlertInfo(tr('Ink detected on the charge electrode', 'Alert short description'),
   tr('The printer has found ink on the charge electrode.', 'Alert long description'),
   PrinterData.SA_CIJ_WIZ_DIAGNOSTICS_INK_ON_CHARGE_EL);

/* 1312 : but set to 12 for A-series backward compatibility */
AlertDesc[12] = new AlertInfo(tr('Charge Detection Error', 'Alert short description'),
   tr('The printer is unable to detect if it is charging drops correctly and is attempting to recover.', 'Alert long description'),
   PrinterData.SA_CIJ_WIZ_DIAGNOSTICS_CHARGE_DET_ERR);

/* 1313 : but set to 142 for A-series backward compatibility */
AlertDesc[142] = new AlertInfo(tr('Recovered successfully', 'Alert short description'),
   tr('The printer has recovered from charge detection error or ink detected in charge electrode.', 'Alert long description'),
   PrinterData.SA_NONE);

/* 1314 : but set to 143 for A-series backward compatibility */
AlertDesc[143] = new AlertInfo(tr('The attempt to recover has failed', 'Alert short description'),
   tr('The printer was unable to recovered from charge detection error or ink detected in charge electrode.', 'Alert long description'),
   PrinterData.SA_NONE);

/* 1315 : but set to 13 for A-series backward compatibility */
AlertDesc[13] = new AlertInfo(tr('Long or too fast print, check print quality', 'Alert short description'),
   tr(`The printed label is too long, speed too high or the shaft encoder has stopped mid-label. Check print quality,\
 if necessary shorten label or continue printing if using a shaft encoder.`,
    'Alert long description'),
   PrinterData.SA_NONE);


AlertDesc[1350] = new AlertInfo(tr('Cannot load protocol', 'Alert short description'),
   tr('A communication protocol cannot load. Please ensure that the protocol is compatible with the printer', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[1351] = new AlertInfo(tr('Cannot start protocol', 'Alert short description'),
   tr('A communication protocol cannot start. Please ensure that the protocol is compatible with the printer', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[1352] = new AlertInfo(tr('Invalid device description version', 'Alert short description'),
   tr('The command definition is not valid for the printer.', 'Alert long description'),
   PrinterData.SA_NONE);

AlertDesc[1353] = new AlertInfo(tr('ToDo: ALERT_HWSK_SMARTCARD_FAILURE', 'Alert short description'),
   tr('ToDo: ALERT_HWSK_SMARTCARD_FAILURE', 'Alert long description'),
   PrinterData.SA_NONE);
