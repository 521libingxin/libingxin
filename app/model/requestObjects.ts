
import * as interrequest from './IntercommCommonActivateRequest';
export let requestObjects = {
    'targetRunRateObj' : {
      'caption': 'Target run rate',
      'unit': 'prints/min',
      'getkey': interrequest.ReadTargetRunRate,
      'getinParams': {},
      'setkey': interrequest.WriteTargetRunRate,
      'setinParams': {},
      'stepsize': 1,
      'value': 0,
      'datamin': 0,
      'datamax': 1000,
      'disabled': false,
      'waitForCommit': false,
      'path': ['target']
    },
    'totalPrintsObj' : {
      'caption': 'Target total prints',
      'unit': '',
      'getkey': interrequest.ReadTargetTotalPrints,
      'getinParams': {},
      'setkey': interrequest.WriteTargetTotalPrints,
      'setinParams': {},
      'value': 0,
      'datamin': 0,
      'datamax': 288000,
      'stepsize': 1,
      'disabled': false,
      'waitForCommit': false,
      'path': ['target']
    },
    'printDelay': {
        'caption': 'printDelay',
        'unit': 'mm',
        'getkey': interrequest.ReadPDConfig,
        'getinParams': {},
        'setkey': interrequest.WritePDConfig,
        'setinParams': {},
        'stepsize': 0.1,
        'value': 0,
        'datamin': 0,
        'datamax': 1000,
        'disabled': false,
        'waitForCommit': false,
        'path': ['pdConfig', 'printDelay']
    },
    'printHeight': {
        'caption': 'Print height',
        'unit': '%',
        'getkey': interrequest.ReadPrintHeightPercentage,
        'getinParams': {'jetid': 1, 'max': 140, 'min': 60, 'val': 60},
        'setkey': interrequest.WritePrintHeightPercentage,
        'setinParams': {'jetid': 1, 'max': 140, 'min': 60, 'val': 60},
        'stepsize': 1,
        'value': 60,
        'datamin': 60,
        'datamax': 140,
        'disabled': false,
        'waitForCommit': false,
        'path': ['val']
    },
    'strokePitch': {
        'caption': '',
        'unit': 'mm',
        'getkey': interrequest.ReadEncoderConfig,
        'getinParams': {},
        'setkey': interrequest.WriteEncoderConfig,
        'setinParams': {},
        'stepsize':  0.01,
        'value': 0,
        'datamin': 0,
        'datamax': 1000,
        'disabled': false,
        'waitForCommit': false,
        'path': ['encoderConfig', 'globalStrokePitchGoal']
    },
    'encoderPersistence': {
        'caption' : 'Encoder persistence',
        'unit' : 'ms',
        'getkey': interrequest.ReadEncoderConfig,
        'getinParams': {},
        'setkey': interrequest.WriteEncoderConfig,
        'setinParams': {},
        'stepsize': 0.001,
        'value': 0,
        'datamin': 0,
        'datamax': 1000,
        'disabled': false,
        'waitForCommit': false,
        'path': ['encoderConfig', 'persDurationMS']
    },
    'PDConfig': {
        'caption' : 'PDConfig',
        'unit' : '',
        'getkey': interrequest.ReadPDConfig,
        'getinParams': {},
        'setkey': interrequest.ReadPDConfig,
        'setinParams': {},
        'stepsize': 1,
        'value': 0,
        'datamin': 0,
        'datamax': 1000,
        'disabled': false,
        'waitForCommit': false,
        'path': ['PDConfig', 'printDelay']
    },
    // AutoModStartVoltageInfo
    'autoModStartVoltageInfo': {
        'caption' : 'Auto modulation start voltage',
        'unit' : '',
        'getkey': interrequest.ReadAutoModulationStartVoltage,
        'getinParams': {},
        'setkey': interrequest.WriteAutoModulationStartVoltage,
        'setinParams': {},
        'stepsize': 1,
        'value': 0,
        'datamin': 0,
        'datamax': 0,
        'disabled': true,
        'waitForCommit': false,
        'path': ['autoModStartVoltageInfo', 'autoModStartVoltage']
    },
    // Temperature set point
    'temperatureSetPoint': {
        'caption' : 'Temperature set point',
        'unit' : '',
        'getkey': interrequest.ReadHeaterSetpoint,
        'getinParams': {'ucJetID': 0},
        'setkey': interrequest.WriteHeaterSetpoint,
        'setinParams': {'ucJetID': 0},
        'stepsize': 1,
        'value': 0,
        'datamin': 5,
        'datamax': 55,
        'disabled': true,
        'waitForCommit': false,
        'path': ['Target']
    },
    // Speed set point
    'speedSetPoint': {
        'caption' : 'Speed set point',
        'unit' : 'rpm',
        'getkey': interrequest.ReadFeedPumpSpeedSetpoint,
        'getinParams': {},
        'setkey': interrequest.WriteFeedPumpSpeedSetpoint,
        'setinParams': {'SpeedSetMax': 0, 'SpeedSetMin': 0},
        'stepsize': 1,
        'value': 0,
        'datamin': 0,
        'datamax': 0,
        'disabled': true,
        'waitForCommit': false,
        'path': ['SpeedSetpoint']
    },
    // Gutter pump speed set point
    'gutterPumpSpeedSetPoint': {
        'caption' : 'Gutter pump speed set point',
        'unit' : 'rpm',
        'getkey': interrequest.ReadGutterPumpSpeedSetpoint,
        'getinParams': {},
        'setkey': interrequest.WriteGutterPumpSpeedSetpoint,
        'setinParams': {'iSetMax': 0, 'iSetMin': 0},
        'stepsize': 1,
        'value': 0,
        'datamin': 0,
        'datamax': 0,
        'disabled': true,
        'waitForCommit': false,
        'path': ['iSetpoint']
    },
    // Pressure set point
    'pressureSetPoint': {
        'caption' : 'Pressure set point',
        'unit' : 'mBar',
        'getkey': interrequest.ReadPressureSetpoint,
        'getinParams': {},
        'setkey': interrequest.WritePressureSetpoint,
        'setinParams': {'iSetMax': 0, 'iSetMin': 0},
        'stepsize': 10,
        'value': 0,
        'datamin': 0,
        'datamax': 0,
        'disabled': true,
        'waitForCommit': false,
        'path': ['iSetpoint']
    },
    // Target viscosity
    'targetViscosity': {
        'caption' : 'Target viscosity',
        'unit' : 'cP',
        'getkey': interrequest.ReadViscosityExpected,
        'getinParams': {},
        'setkey': interrequest.WriteViscosityExpected,
        'setinParams': {},
        'stepsize': 0.01,
        'value': 0,
        'datamin': 0,
        'datamax': 0,
        'disabled': true,
        'waitForCommit': false,
        'path': ['uVisco']
    },
    'forwardOff': {
        'caption': 'Forward offset',
        'unit': 'mm',
        'getkey': interrequest.ReadPrintingOffsets,
        'getinParams': {},
        'setkey': interrequest.WritePrintingOffsets,
        'setinParams': {},
        'stepsize': 1,
        'value': 0,
        'datamin': 0,
        'datamax': 255,
        'disabled': false,
        'waitForCommit': false,
        'path': ['forwardOffset']
    },
    'reverseOff': {
        'caption': 'Reverse offset',
        'unit': 'mm',
        'getkey': interrequest.ReadPrintingOffsets,
        'getinParams': {},
        'setkey': interrequest.WritePrintingOffsets,
        'setinParams': {},
        'stepsize': 1,
        'value': 0,
        'datamin': 0,
        'datamax': 255,
        'disabled': false,
        'waitForCommit': false,
        'path': ['reverseOffset']
    },
    'repeatCount': {
        'caption': 'Repeat count',
        'unit': '',
        'getkey': interrequest.ReadDefaultRepeatProperties,
        'getinParams': {},
        'setkey': interrequest.WriteDefaultRepeatProperties,
        'setinParams': {},
        'stepsize': 1,
        'value': 0,
        'datamin': 1,
        'datamax': 99,
        'disabled': false,
        'waitForCommit': false,
        'path': ['repeatPropertiesInfo', 'countedNumRepeats']
    },
    'repeatPitch': {
        'caption': 'Repeat spacing',
        'unit': 'mm',
        'getkey': interrequest.ReadDefaultRepeatProperties,
        'getinParams': {},
        'setkey': interrequest.WriteDefaultRepeatProperties,
        'setinParams': {},
        'stepsize': 1,
        'value': 0,
        'datamin': 2,
        'datamax': 9999,
        'disabled': false,
        'waitForCommit': false,
        'path': ['repeatPropertiesInfo', 'pitch']
    },
    'modulationSetPoint': {
        'caption': 'Modulation set point',
        'unit': '',
        'getkey': interrequest.ReadModulationSetpoint,
        'getinParams': {'ucJetID': 1},
        'setkey': interrequest.WriteModulationSetpoint,
        'setinParams': {'ucJetID': 1, 'iSetpoint': 0, 'iSetMax': 0, 'iSetMin': 0},
        'stepsize': 1,
        'value': 0,
        'datamin': 0,
        'datamax': 0,
        'disabled': false,
        'waitForCommit': false,
        'path': ['iSetpoint']
    },
    'printPressureSetPoint': {
        'caption': 'Printing pressure set-point',
        'unit': 'mBar',
        'getkey': interrequest.ReadPrintingPressureSetpoint,
        'getinParams': {},
        'setkey': interrequest.WritePrintingPressureSetpoint,
        'setinParams': {'iSetpoint': 0, 'iSetMax': 0, 'iSetMin': 0},
        'stepsize': 1,
        'value': 0,
        'datamin': 0,
        'datamax': 0,
        'disabled': false,
        'waitForCommit': false,
        'path': ['iSetpoint']
    }
};
