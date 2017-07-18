export var menuData: any = {
    'home': {caption: 'home', icon: 'img/Icon_Home_Available.png', selectedIcon: 'img/Icon_Home_Selected.png', destination: 'home'},
    'login': {caption: 'login', destination: '', styleclass: 'button_style_sma', icon: 'img/loginout_icon_unselected.png'},
    'betw': { caption: '', destination: '', styleclass: 'button_betw', icon: 'img/Icon_foot_bet.png' },
    'setup': {
        grant: 'SHOW_TOOLS',
        caption: 'Setup',
        icon: 'img/Icon_Settings_Available.png',
        selectedIcon: 'img/Icon_Settings_Selected.png',
        destination: 'setup/settingsMenu'
    },
    'settingsMenu': {
        caption: 'Settings',
        icon: 'img/Icon_Setup_Available.png',
        selectedIcon: 'img/Icon_Setup_Selected.png',
        destination: 'setup/settingsMenu'
    },
    'wizardsMenu': {
        caption: 'Wizards',
        icon: 'img/Icon_Wizards_Available.png',
        selectedIcon: 'img/Icon_Wizards_Selected.png',
        destination: 'setup/wizardsMenu'
    },
    'upgradeWizard': {caption: 'Upgrade wizard', icon: 'img/wizard_unselected.png', destination: 'setup/wizardsMenu/upgradeWizard'},
    'inkPrimingWizard': {
        caption: 'Ink priming wizard',
        icon: 'img/wizard_unselected.png',
        destination: 'setup/wizardsMenu/inkPrimingWizard'
    },
    'inkFlushingWizard': {
        caption: 'Ink flushing wizard',
        icon: 'img/wizard_unselected.png',
        destination: 'setup/wizardsMenu/inkFlushingWizard'
    },
    'nozzleUnblockingWizard': {
        caption: 'Nozzle unblocking wizard',
        icon: 'img/wizard_unselected.png',
        destination: 'setup/wizardsMenu/nozzleUnblockingWizard'
    },
    'installationWizard': {
        caption: 'Installation wizard',
        icon: 'img/wizard_unselected.png',
        destination: 'setup/wizardsMenu/installationWizard'
    },
    'printHeightCalibrationWizard': {
        caption: 'Print height calibration wizard',
        icon: 'img/wizard_unselected.png',
        destination: 'setup/wizardsMenu/printHeightCalibrationWizard'
    },

    'printOptimisation': {
        grant: 'SHOW_TOOLS',
        caption: 'Print optimisation',
        icon: 'img/Icon_Printoptimisation_Pressed.png',
        selectedIcon: 'img/Icon_Print_optimisation_Selected.png',
        destination: 'printOptimisation'
    },

    'productionLineSetup': {
        grant: 'SHOW_TOOLS',
        caption: 'Production line setup',
        icon: 'img/Icon_ProductionLineSetup_Available.png',
        selectedIcon: 'img/Icon_Production_line_setup_Selected.png',
        destination: 'setup/productionLineSetup/lineMovement'
    },
    'lineMovement': {caption: 'Line movement', destination: 'setup/productionLineSetup/lineMovement'},
    'printTrigger': {caption: 'Print trigger', destination: 'setup/productionLineSetup/printTrigger'},
    'powerOptions': {caption: 'Power options', destination: 'setup/productionLineSetup/powerOptions'},

    'globalPrintSettings': {
        caption: 'Global print settings',
        icon: 'img/Icon_Global_print_settings_Available.png',
        selectedIcon: 'img/Icon_Global_print_settings_Selected.png',
        destination: 'setup/globalPrintSettings/positionOrientation'
    },
    'positionOrientation': {caption: 'Position / orientation', destination: 'setup/globalPrintSettings/positionOrientation'},
    'content': {caption: 'Content', destination: 'setup/globalPrintSettings/content'},

    'editorDefaults': {
        caption: 'Editor defaults',
        icon: 'img/Icon_Editor_defaults_Available.png',
        selectedIcon: 'img/Icon_Editor_defaults_Selected.png',
        destination: 'setup/editorDefaults/properties'
    },
    'properties': {caption: 'Properties', destination: 'setup/editorDefaults/properties'},
    'clocksDates': {caption: 'Clocks / dates', destination: 'setup/editorDefaults/clocksDates'},

    'advancedSettings': {
        caption: 'Advanced',
        icon: 'img/Icon_Advanced_Available.png',
        selectedIcon: 'img/Icon_Advanced_Selected.png',
        destination: 'setup/advancedSettings/printHeadManualMode'
    },
    'printHeadManualMode': {caption: 'Print head manual mode', destination: 'setup/advancedSettings/printHeadManualMode'},
    'inkSystemManualMode': {caption: 'Ink system manual mode', destination: 'setup/advancedSettings/inkSystemManualMode'},
    'inkDetails': {caption: 'Ink details', destination: 'setup/advancedSettings/inkDetails'},
    'hardware': {caption: 'Hardware', destination: 'setup/advancedSettings/hardware'},
    'gutter': {caption: 'Gutter', destination: 'setup/advancedSettings/gutter'},
    // 'installoptions': {caption: 'Install options', destination: 'settingsMenu/installoptions'},

    'printerDiagnostics': {
        caption: 'Printer diagnostics',
        icon: 'img/Icon_Diagnostics_Available.png',
        selectedIcon: 'img/Icon_Diagnostics_Selected.png',
        destination: 'setup/printerDiagnostics/status'
    },
    'status': {caption: 'Status', destination: 'setup/printerDiagnostics/status'},
    'logs': {caption: 'Logs', destination: 'setup/printerDiagnostics/logs'},
    'qualityProblems': {caption: 'Quality problems', destination: 'setup/printerDiagnostics/qualityProblems'},
    'jetProfile': {caption: 'Jet profile', destination: 'setup/printerDiagnostics/jetProfile'},
    'tests': {caption: 'Tests', destination: 'setup/printerDiagnostics/tests'},

    'adjustment': {
        caption: 'Adjustment',
        icon: 'img/Icon_Adjustment_Available.png',
        selectedIcon: 'img/Icon_Adjustment_Selected.png',
        destination: 'setup/adjustment/modulation'
    },
    'modulation': {caption: 'Modulation', destination: 'setup/adjustment/modulation'},
    'pressure': {caption: 'Pressure', destination: 'setup/adjustment/pressure'},
    'testPrint': {caption: 'Test print', destination: 'setup/adjustment/testPrint'},
    'installation': {caption: 'Installation', destination: 'setup/adjustment/installation'},
    'inspection': {caption: 'Inspection', destination: 'setup/adjustment/inspection'},

    'alertConfiguration': {
        caption: 'Alert configuration',
        icon: 'img/Icon_Alertconfiguration_Available.png',
        selectedIcon: 'img/Icon_Alert_configuration_Selected.png',
        destination: 'setup/alertConfiguration/configuerAlerts'
    },
    'configuerAlerts': {caption: 'Configure alerts', destination: 'setup/alertConfiguration/configuerAlerts'},
    'rangedAlerts': {caption: 'Ranged alerts', destination: 'setup/alertConfiguration/rangedAlerts'},
    'emailAlerts': {caption: 'Email alerts', destination: 'setup/alertConfiguration/emailAlerts'},
    'serviceAlerts': {caption: 'Service alerts', destination: 'setup/alertConfiguration/serviceAlerts'},

    'ioport': {
        caption: 'IO port',
        icon: 'img/Icon_IOPort_Available.png',
        selectedIcon: 'img/Icon_IO_Port_Selected.png',
        destination: 'setup/ioport/ioportSetup'
    },
    'ioportSetup': {caption: 'Set up', destination: 'setup/ioport/ioportSetup'},
    'assignment': {caption: 'Assignment', destination: 'setup/ioport/assignment'},
    'monitor': {caption: 'Monitor', destination: 'setup/ioport/monitor'},
    'test': {caption: 'Test', destination: 'setup/ioport/test'},
    'labelSelect': {caption: 'Label select', destination: 'setup/ioport/labelSelect'},

    'printerNetwork': {
        caption: 'Printer network',
        icon: 'img/Icon_Printer_network_Available.png',
        selectedIcon: 'img/Icon_Printer_network_Selected.png',
        destination: 'setup/printerNetwork/ethernet'
    },
    'ethernet': {caption: 'Ethernet', destination: 'setup/printerNetwork/ethernet'},
    'serial': {caption: 'Serial', destination: 'setup/printerNetwork/serial'},
    'advanced': {caption: 'Advanced', destination: 'setup/printerNetwork/advanced'},

    'regional': {
        caption: 'Regional',
        icon: 'img/Icon_Regional_Available.png',
        selectedIcon: 'img/Icon_Regional_Selected.png',
        destination: 'setup/regional/languageKeyboard'
    },
    'languageKeyboard': {caption: 'Language & keyboard', destination: 'setup/regional/languageKeyboard'},
    'dateTime': {caption: 'Date & time', destination: 'setup/regional/dateTime'},

    'backupRestore': {
        caption: 'Backup & restore',
        icon: 'img/Icon_BackupAndRestore_Available.png',
        selectedIcon: 'img/Icon_Backup_and_restore_Selected.png',
        destination: 'setup/backupRestore/backup'
    },
    'backup': {caption: 'Backup', destination: 'setup/backupRestore/backup'},
    'restore': {caption: 'Restore', destination: 'setup/backupRestore/restore'},
    'defaults': {caption: 'Defaults', destination: 'setup/backupRestore/defaults'},
    'upgrade': {caption: 'Upgrade', destination: 'setup/backupRestore/upgrade'},
    'upgradeConfiguration': {caption: 'Upgrade configuration', destination: 'setup/backupRestore/upgradeConfiguration'},

    'fileManager': {
        caption: 'File manager',
        icon: 'img/Icon_File_manager_Available.png',
        selectedIcon: 'img/Icon_File_manager_Selected.png',
        destination: 'settingsMenu/modulation'
    },

    'systemInformation': {
        caption: 'System information',
        icon: 'img/Icon_System_info_Available.png',
        selectedIcon: 'img/Icon_System_info_Selected.png',
        destination: 'setup/systemInformation/overview'
    },
    'overview': {caption: 'Overview', destination: 'setup/systemInformation/overview'},
    'softwareVersions': {caption: 'Software version', destination: 'setup/systemInformation/softwareVersions'},

    'userInterface': {
        caption: 'User interface',
        icon: 'img/Icon_User_interface_Available.png',
        selectedIcon: 'img/Icon_User_interface_Selected.png',
        destination: 'setup/userInterface/printerConnection'
    },
    'printerConnection': {caption: 'Printer connection', destination: 'setup/userInterface/printerConnection'},
    'languageandkey': {caption: 'Language & Keyboard', destination: 'setup/userInterface/languageandkey'},
    'accessibility': {caption: 'Accessibility', destination: 'setup/userInterface/accessibility'},
    'diagnostics': {caption: 'Diagnostics', destination: 'setup/userInterface/diagnostics'},
    'network': {caption: 'Network', destination: 'setup/userInterface/network'},
    'versionInformation': {caption: 'Version information', destination: 'setup/userInterface/versionInformation'},

    'tools': {
        caption: 'Tools',
        icon: 'img/Icon_Tools_Available.png',
        selectedIcon: 'img/Icon_Tools_Selected.png',
        destination: 'setup/tools/logoEditor'
    },
    'logoEditor': {caption: 'Logo editor', destination: 'setup/tools/logoEditor'},

    'packsManagement': {
        caption: 'Packs management',
        icon: 'img/Icon_Packs_management_Available.png',
        selectedIcon: 'img/Icon_Packs_management_Selected.png',
        destination: 'setup/packsManagement/installPacks'
    },
    'installPacks': {caption: 'Install packs', destination: 'setup/packsManagement/installPacks'},
    'migratePacks': {caption: 'Migrate packs', destination: 'setup/packsManagement/migratePacks'},

    'printerStatus': {
        caption: 'Printer status',
        icon: 'img/Icon_Printer_status_Available.png',
        selectedIcon: 'img/Icon_Printer_status_Selected.png',
        destination: 'setup/printerStatus/consumables'
    },
    'consumables': {caption: 'Consumables', destination: 'setup/printerStatus/consumables'},
    'counters': {caption: 'Counters', destination: 'setup/printerStatus/counters'},
    'statistics': {caption: 'Statistics', destination: 'setup/printerStatus/statistics'},
    // 'inspection': {caption: 'Inspection', destination: 'settingsMenu/inspection'},


    'labelCreator': {
        caption: 'labelCreator',
        icon: 'img/Icon_Tools_Available.png',
        selectedIcon: 'img/Icon_Tools_Selected.png',
        destination: 'labelCreator'
    },

    'labelfinder': {
        caption: 'labelfinder',
        icon: 'img/Icon_Tools_Available.png',
        selectedIcon: 'img/Icon_Tools_Selected.png',
        destination: 'labelfinder'
    },

    'editormainscreen': {
        caption: 'editormainscreen',
        icon: 'img/Icon_Tools_Available.png',
        selectedIcon: 'img/Icon_Tools_Selected.png',
        destination: 'labelCreator/editormainscreen'},

    'labelPreview': {
        caption: 'labelPreview',
        icon: 'img/Icon_Tools_Available.png',
        selectedIcon: 'img/Icon_Tools_Selected.png',
        destination: 'labelfinder/selectmessage'},

    'selectmessage': {
        caption: 'selectmessage',
        icon: 'img/Icon_Tools_Available.png',
        selectedIcon: 'img/Icon_Tools_Selected.png',
        destination: 'labelfinder/selectmessage',
        parent: 'selectmessage'
    },

    'savelabel': {
        caption: 'savelabel',
        icon: 'img/Icon_Tools_Available.png',
        selectedIcon: 'img/Icon_Tools_Selected.png',
        destination: 'labelCreator/savelabel'
    },
};
export var Layouts: any = {
    'settingsMenu': [
        'productionLineSetup',
        'globalPrintSettings',
        'editorDefaults',
        'advancedSettings',
        'printerDiagnostics',
        'adjustment',
        'alertConfiguration',
        'ioport',
        'printerNetwork',
        'regional',
        'backupRestore',
        'fileManager',
        'systemInformation',
        'userInterface',
        'tools',
        'packsManagement',
        'printerStatus'
    ],
    'wizardsMenu': [
        'upgradeWizard',
        'inkPrimingWizard',
        'inkFlushingWizard',
        'nozzleUnblockingWizard',
        'installationWizard',
        'printHeightCalibrationWizard'
    ],
    // settings
    'productionLineSetup': [
        'lineMovement',
        'printTrigger',
        'powerOptions'
    ],
    'globalPrintSettings': [
        'positionOrientation',
        'content'
    ],
    'editorDefaults': [
        'properties',
        'clocksDates'
    ],
    'advancedSettings': [
        'printHeadManualMode',
        'inkSystemManualMode',
        'inkDetails',
        'hardware',
        'gutter'
    ],
    'printerDiagnostics': [
        'status',
        'logs',
        'qualityProblems',
        'jetProfile',
        'tests'
    ],
    'adjustment': [
        'modulation',
        'pressure',
        'testPrint',
        'installation',
        'inspection'
    ],
    'alertConfiguration': [
        'configuerAlerts',
        'rangedAlerts',
        'emailAlerts',
        'serviceAlerts'
    ],
    'ioport': [
        'ioportSetup',
        'assignment',
        'monitor',
        'test',
        'labelSelect',
    ],
    'printerNetwork': [
        'ethernet',
        'serial',
        'advanced'
    ],
    'regional': [
        'languageKeyboard',
        'dateTime'
    ],
    'backupRestore': [
        'backup',
        'restore',
        'defaults',
        'upgrade',
        'upgradeConfiguration'
    ],
    'systemInformation': [
        'overview',
        'softwareVersions'
    ],
    'userInterface': [
        'printerConnection',
        'languageandkey',
        'accessibility',
        'diagnostics',
        'network',
        'versionInformation'
    ],
    'tools': [
        'logoEditor'
    ],
    'packsManagement': [
        'installPacks',
        'migratePacks'
    ],
    'printerStatus': [
        'consumables',
        'counters',
        'statistics'
    ],
    'setup': [
        'settingsMenu',
        'wizardsMenu'
    ],
    'home': [
        'printOptimisation',
        'productionLineSetup',
        'setup'
    ]
};
