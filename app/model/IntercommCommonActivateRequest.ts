/* This file has been automatically generated and must not be modified manually */

/* typedefs (temporary) */
type QString = string;
type wchar_t = string;
type char = string;
type qint64 = number;
type quint64 = number;
type int64_t = number;
type uint64_t = number;
type qint32 = number;
type quint32 = number;
type int32_t = number;
type uint32_t = number;
type qint16 = number;
type quint16 = number;
type int16_t = number;
type uint16_t = number;
type quint8 = number;
type qint8 = number;
type int8_t = number;
type uint8_t = number;
type bool = boolean;
type float = number;
type utf8 = string;
/* events */
export enum IntercommCommonICEventID {IntercommCommonEventStatusChange = 1000, IntercommCommonEventJetProfileCompleted = 1100,
    IntercommCommonEventStartProfileCompleted = 1101, };

export enum SMErrorType {SM_Succeeded = 0, SM_NotSupported = 100, SM_NotConnected = 101, SM_NotRegistered = 102, SM_NotInitialised = 103,
                        SM_FDA21CFR11KeyNoConnected = 104, SM_StillActiveSessions = 105, SM_InconsistentDatabase = 106,
                        SM_UnexpectedResponse = 109, SM_FileAlreadyExists = 110, SM_CfgConnectionInUse = 113, SM_Internal = 116,
                        SM_ChecksumError = 117, SM_RuntimeError = 118, SM_FileNotExists = 119, SM_RemoteServerFailure = 120,
                        SM_NoGroup = 121, SM_LoginNeeded = 122, SM_Unknown = 123, };
export enum ControllerType {unknown = 0, T_Series = 1, S_Series = 2, D_Series = 3, D_Combined = 4, A_Series = 5, A_Series_iTECH = 6,
                            V_Series = 7, M_Series = 8, G_Series = 9, C_Series = 10, Valvejet = 11, L_Series = 12, K_Series = 13,
                            Bitjet = 14, N_Series = 15, };
export enum PrintHeadType {unknown = 0, Laser_D = 1, Laser_DS = 2, CIJ_Classic = 3, CIJ_Plus = 4,
                            CIJ_Duo = 5, CIJ_CS = 6, TIJ_HP = 7, TIJ_Lexmark = 8, };
export enum Events {ServerIdentify = 0, ClientIdentify = 1, RemovableDevicesChanged = 37, FeatureKeyChanged = 38,
                    ServiceLogin = 39, ServiceLogout = 40, LogoutAll = 41, ReadGlobals = 42, RegisteredPlugin = 43, };
export enum SBCInfoType {SerialNumber = 0, Version = 1, BoardName = 2, Manufacturer = 3, BootCount = 4,
                        ManufacturingDate = 5, Runtime = 6, };
export enum SecurityConfig {Service = 0, FileSimple = 1, FileAdvanced = 2, ServerProcess = 3, };
export enum SoftwareFeature {None = 0, AdvancedSecurity = 1, ServiceDongle = 3, };
export enum SoftwareOptions {none = 0, DynUI = 1, Datasource = 2, ReturnJumpDelayFactor = 4, option4 = 8, };
export enum StatusSeverity {undefined = -1, informal = 0, warning = 1, temporary_fault = 2, critical_fault = 3, disabled = 4, };
export enum DaysOfWeek {sunday = 0, monday = 1, tuesday = 2, wednesday = 3, thursday = 4, friday = 5, saturday = 6, };
export enum MonthsOfYear {jan = 0, feb = 1, mar = 2, apr = 3, may = 4, jun = 5, jul = 6, aug = 7, sep = 8, oct = 9, nov = 10, dec = 11, };
export enum UpdateTime {before_first_shift = 0, at_midnight = 1, after_last_shift = 2, };
export enum JulianLeapDay {LeapDayIs60 = 0, LeapDayIs366 = 1, };
export enum OperatingSystem {wince = 1, winnt = 2, linux = 3, unknown = 4, };
export enum GraphicFileFormat {Undefined = 0, HPGL = 1, Bitmap = 2, DXF = 3, };
export enum TransactionMode {start = 0, commit = 1, rollback = 2, };
export enum ESignatureId {SendToPrinter = 0, SaveMessage = 1, DeleteMessage = 2, RenameMessage = 3,
                        CreateMessageStore = 4, DeleteMessageStore = 5, SetupGeneral = 6, InitialSetup = 7, Restore = 8,
                        RemoveFile = 9, LoadFile = 10, SetupUserSecurity = 11, SetupGroupSecurity = 12, SetupPasswordPolicy = 13,
                        SetupDynamicText = 14, PrintFieldOffset = 15, LaserParameters = 16, ClearActionLog = 17, SignatureIdLast = 18, };
export class TGraphicFile { 'strFilename': QString; 'nFileFormat': GraphicFileFormat; paramCount: number = 2; };
export class TLoggingMessage {'nLogID': qint64; 'nStatusID': quint32; 'nMessageID': qint32; 'nSeverity': StatusSeverity;
 'strIdentifier': QString; 'strTimeBegin': QString; 'strTimeEnd': QString; 'strTimeAcknowledge': QString; paramCount: number = 8; };
export enum LoggingFilter {All = 0, NotActive = 1, Active = 2, Ack = 3, NotAck = 4, };
export class TActionLogOverview {'nTypeID': qint32; 'strIdentifier': QString; 'strIPAddress': QString; 'strTime': QString;
                                 'nActionID': qint32; 'strUserID': QString; 'nLogId': qint64; paramCount: number = 7; };
export class TActionLogDetail {'strParam': QString; 'strOldVal': QString; 'strNewVal': QString; 'nActionID': qint32;
                                 'nLogLink': quint32; paramCount: number = 5; };
export class TSoftwareVersionPair {'ActualRevision': QString ; 'ImageRevisionOnSBC': QString ; paramCount: number = 2; };
export class TActionElem {'nIndex': quint16; 'strType': QString; 'strDescription': QString; paramCount: number = 3; };
export class TEmailAlertRecord {'Alert_ID': quint16; 'bFieldActive': quint8; paramCount: number = 2; };
export class TLanguageId {'id': QString; 'name': QString; paramCount: number = 2; };
export class TRegisteredPlugin {'strKey': QString; 'strName': QString; 'strVersion': QString; 'strWebdocs': QString;
                                'strStartPage': QString; 'strSetupPage': QString; 'strPathStatusOK': QString; 'strICServerURL': QString;
                                'nICTimeout': quint32; 'strConfigPath': QString; 'strConfigDescription': QString;
                                'pathBackup': QString; 'nSoftwareOptions': SoftwareOptions; paramCount: number = 13; };
export class TEDCProtocol {'iACKEnabled': qint16; 'iASCIIMode': qint16; 'iEndHeader': qint16; 'iMaxDataLength': qint16;
                        'iStartHeader': qint16; 'iHistoryEnabled': qint16; 'iMaxHistoryDuplicates': qint16;
                        'iResetHistoryWhenFull': qint16; 'iSaveHistory': qint16; 'iResetQueuesOnMsgSelect': qint16;
                        'iDepletionSignalState': qint16; 'iDepletionSignalThreshold': qint16;
                        'iDepletionSignalStartHeader': qint16; 'iDepletionSignalEndHeader': qint16;
                         'iLastEntryPersistencyState': qint16; paramCount: number = 15; };
export class TActiveEvent {'event': quint16; 'source': quint8; 'year': quint16; 'month': quint16; 'day': quint16;
                         'hour': quint16; 'minute': quint16; 'second': quint16; paramCount: number = 8; };
export enum SMResultType {eSuccess = 0, eUnknownUser = 1, ePasswordWrong = 2, ePasswordExpired = 3, eAccountLocked = 4,
                        eAccountDeleted = 5, eAccountDormant = 6, eAccountExpired = 7, ePasswordPolicy = 8, eUnknownGroup = 9,
                        eAccountExists = 10, eGroupExists = 11, eGroupInUsed = 12, eNoPermission = 13, eServiceAccountUndef = 14,
                        eUnknownComponent = 15, eOutOfRange = 16, eUnerasable = 17, eNotDefined = 18, ePasswordExists = 19, };
export enum ICSMAccountStatus {eActive = 0, eExpired = 1, eDormant = 2, eLocked = 3, eDeleted = 4, };
export enum SMMismatchedPasswordPolicy {eMinLength = 0, eMinUpperChar = 1, eMinLowerChar = 2, eMinNumericChar = 3,
                                         eMaxMultipleChar = 4, eMaxPartOfUserId = 5, eMinReusePassword = 6, eMinSpecialChar = 7, };
export enum SMAuditTrailMode {eOff = 1, eAsSecurityMode = 2, eSimple = 3, eAdvanced = 4, eRemote = 5, eLdap = 6, };
export enum SMSecurityMode {eSimple = 1, eAdvanced = 2, eRemote = 3, eLdap = 4, eNoSecurity = 5, };
export enum SMWarningLevel {eNone = 0, eLevel1 = 1, eLevel2 = 2, };
export class SMActionId {'Component': QString; 'Id': quint32; paramCount: number = 2; };
export class SMActionEntry {'ActionId': SMActionId; 'UserId': QString; 'DeviceId': QString; 'DateTime': QString; 'Param1': QString;
                             'Param2': QString; 'Param3': QString; paramCount: number = 7; };
export class SMActionFilter {'ActionId': SMActionId; 'UserId': QString; 'TimeFrom': QString; 'TimeTo': QString; 'CountFrom': qint32;
                             'CountTo': qint32; 'Param1': QString; 'Param2': QString; 'Param3': QString; paramCount: number = 9; };
export class SMGrantId {'Component': QString; 'Id': quint32; paramCount: number = 2; };
export class SMComponentsBitset {'Component': QString; 'Bitset': bool []; paramCount: number = 2; };
export class SMGrantDefinition {'Description': QString; 'User': bool; 'Service': bool; paramCount: number = 3; };
export class SMComponentGrantDefinitions {'Component': QString; 'Grants': SMGrantDefinition []; paramCount: number = 2; };
export class SMActionDescription {'Description': QString; 'Param1': QString; 'Param2': QString;
                                 'Param3': QString; paramCount: number = 4; };
export class SMComponentActions {'Component': QString; 'Descriptions': SMActionDescription []; paramCount: number = 2; };
export class SMUserAccount {'Id': QString; 'Status': ICSMAccountStatus; 'UserGroups': QString []; 'Forename': QString;
                            'Surname': QString; 'Department': QString; 'InactivityTimeout': quint32; 'AccountExpireDate': QString;
                            'PasswordChangePeriod': quint32; 'PasswordExpireDate': QString; 'MustChangePW': bool;
                            'LoginAttempts': quint32; paramCount: number = 12; };
export class PWPolicy {'MinLength': qint32; 'MinUpperChar': qint32; 'MinLowerChar': qint32; 'MinNumericChar': qint32;
                        'MaxMultipleChar': qint32; 'MaxPartOfUserID': qint32; 'MinReusePassword': qint32;
                        'MaxLoginAttempts': qint32; 'MinSpecChar': qint32; 'SpecialCharacter': QString; paramCount: number = 10; };
export enum TContentType {eUnknown = 0, eLabel = 1, eLabelTemplate = 2, eConfig = 3, eBinaryImage = 4,
                         eGraphicalImage = 5, eScript = 6, eFont = 7, eCustom = 8, };
export enum ErrorType {LB_InvalidLabel = 1, LB_PromptFieldsRequired = 2, LB_BitMapContentError = 3, LB_ChangeDeviceError = 4,
                        LB_ChangeDirectoryError = 5, LB_CMSessionShowDevicesError = 6, LB_CMShowDevices = 7, LB_ContentDataError = 8,
                        LB_ContentDataInitializationError = 9, LB_CopyContentError = 10, LB_DevicesListError = 11,
                        LB_ExportSessionError = 12, LB_FailedToGeneratePreview = 13, LB_FileSystemError = 14, LB_GetDeviceError = 15,
                        LB_GetMountNameError = 16, LB_GetProgressError = 17, LB_GetProgressStatusError = 18, LB_IECallError = 19,
                        LB_ImageDataAssign = 20, LB_ImageDataResize = 21, LB_ImageMemoryAcquire = 22, LB_ImageMemoryClose = 23,
                        LB_ImageMemoryOpenError = 24, LB_ImageMemorySaveError = 25, LB_ImportSessionError = 26,
                        LB_InvalidContentLocationOrName = 27, LB_LabelFileError = 28, LB_MutexLockError = 29, LB_NetworkError = 30,
                        LB_NetworkRefreshError = 31, LB_PrintingConfigError = 32, LB_PromptedFieldsError = 33,
                        LB_PutMessageOnlineError = 34, LB_StatusEventHandlerError = 35, LB_TemplateReferenceNotFoundError = 36,
                        LB_ExternalLabelSelectionConflict = 37, LB_UnknownError = 38, LB_Success = 0XFFFF, };
export enum PackErrorType {eUnknownError = 0, eFlexRegistrationError = 1, eDestWriteError = 2, eFailedReadingPackRunHours = 3,
                         eHwKeyMissing = 4, eHwKeyOnlyOnePermitted = 5, eHwKeyPackNotFound = 6, eHwKeyTypeUnknown = 7, eInvalidPack = 8,
                         ePackAlreadyExists = 9, ePackFeaturesError = 10, ePackIsTrial = 11, ePackNotInstalled = 12, ePackUnsupported = 13,
                         eSrcWriteError = 14, eSrcDestWriteError = 15, eTrialRequiresSalesKey = 16, };
export enum ContentTypeFilter {eDefaultStore = 0x00000001, eLocalDevices = 0x00000002, eNetworkDevices = 0x00000004,
                                eFontsVirtual = 0x00000008, eRastersVirtual = 0x00000010, eScriptsVirtual = 0x00000020,
                                eAllDevices = 0x000000FF, eLabelStores = 0x00000100, eTemplateStores = 0x00000200,
                                eImageStores = 0x00000400, eScriptStores = 0x00000800, eNetworkStores = 0x00001000,
                                eAllStores = 0x0000FF00, eLabels = 0x00010000, eTemplates = 0x00020000, eImages = 0x00040000,
                                eScripts = 0x00080000, eNetworkFiles = 0x00100000, eFontFiles = 0x00200000, eRasterFiles = 0x00400000,
                                ePrintJobFiles = 0x00800000, eAllFiles = 0x00FF0000, eEverything = 0x0FFFFFFF, };
export class TFluidMonitorTriggerLevels {'ink_high_level': quint16; 'ink_low_level': quint16; 'ink_empty_level': quint16;
                                         'solvent_high_level': quint16; 'solvent_low_level': quint16;
                                         'solvent_empty_level': quint16; paramCount: number = 6; };
export class TClockOffset {'year': quint16; 'month': quint16; 'week': quint16; 'day': quint16; 'hour': quint16;
                             'minute': quint16; 'month_rollover': quint8; paramCount: number = 7; };
export class THermesShiftCodeTemplate {'StartMinutes': quint8; 'StartHours': quint8; 'FinishMinutes': quint8; 'FinishHours': quint8;
                                         'lblShiftCode': QString; paramCount: number = 5; };
export class TScriptDetails {'FileName': QString; 'Description': QString; 'Representation': QString; 'DateModified': QString;
                             'CompilerVersion': quint16; paramCount: number = 5; };
export class TJetInfoChar {'Modulation': quint16; 'Detection': quint16; 'Average': quint16; 'Minimum': quint16;
                             'Maximum': quint16; paramCount: number = 5; };
export enum tFontType {eFixed = 0, eTower = 1, eProportional = 2, eUnknown = 3, };
export class TFontInfo {'Description': QString; 'Height': quint16; 'Type': tFontType; paramCount: number = 3; };
export class TRasterDetails {'NumLines': quint8; 'LineHeight': quint8; 'LineGap': quint8; 'MaxStrokeRatePerSecond': quint16;
                             'DesignHeight': quint32; paramCount: number = 5; };
export enum tAlertSeverityLevel {eRedAlert = 0, eAmberAlert = 1, eStatusAlert = 2, };
export enum tAlertClearance {eUser = 0, eSystem = 1, eSystemAndUser = 2, };
export class TActiveAlert {'eventInfo': TActiveEvent; 'clearance': tAlertClearance; 'severityLevel': tAlertSeverityLevel;
                             paramCount: number = 3; };
export enum tPumpRegulation {eSpeedControl = 0, ePressureControl = 1, eVacuumControl = 2, };
export enum tFluidSensorTypes {eFLUID_SENSOR_INK = 0, eFLUID_SENSOR_SOLVENT = 1, eFLUID_SENSOR_END = 2, };
export enum tLevelStatus {EMPTY = 0, LOW = 1, OK = 2, HIGH = 3, UNDEF = 4, };
export enum tDataLinkLayerSource {DLL_TCP_IP = 0, DLL_SERIAL = 1, DLL_USB = 2, DLL_IR_SOCK = 3, DLL_BLUETOOTH = 4, };
export enum tEncodingMethod {ASCII_ENCODING = 0, BINARY_ENCODING = 1, };
export enum tUnits {STROKES = 0, MILLIMETERS = 1, INCHES = 2, ENCODER_PULSES = 3, };
export enum tCommunicationsProtocol {eINTERCOMM_PROTOCOL = 0, eZPL_PROTOCOL = 1, eCODENET_PROTOCOL = 2, eRAW_SOCKET = 3,
                                    eEXTERNAL_PROTOCOL = 4, };
export enum tInkSystemFamily {eINK_SYSTEM_A_SERIES_HASTINGS = 0, eINK_SYSTEM_SWIM_VARIANT = 1, };
export enum tLogType {eALERT = 0, eSTATUS = 1, eDATA = 2, eCONFIG = 3, eAUDIT = 4, };
export enum tPrinterStartingMode {eCLEAN_START = 0, eFAST_START = 1, };
export class TFilterType {'log': tLogType; 'filters': QString []; paramCount: number = 2; };
export enum tElementType {eText = 0, eMRC = 1, eImage = 2, eClock = 3, eCounter = 4, ePrompt = 5, eReference = 6,
                         eScript = 7, eExternalData = 8, eShiftCodeTable = 9, eShiftCode = 10, eSegment = 11, };
export class TElementLimit {'elementType': tElementType; 'limit': qint8; paramCount: number = 2; };
export enum tLoginMode {eNone = 0, ePlain = 1, eLogin = 2, eCramMd5 = 3, eNtlm = 4, };
export enum tTlsMode {eDisabled = 0, eTls = 1, eStartTls = 2, };
export enum tEmailClientMode {eDisabled = 0, eSendAlarms = 1, };
export class TEmailAlert {'AlertID': QString; 'RefID': quint32; 'Active': bool; paramCount: number = 3; };
export enum tPackKeyType {eOptionPack = 0, eSalesKey = 1, eServiceKey = 2, eSmartcard = 3, eEOLTT = 4, eLast = 5, };
export class TPackInfo {'packID': QString; 'packIsTemporary': bool; 'runHoursRemaining': quint16; 'packSource': quint16;
                         'keyType': tPackKeyType; paramCount: number = 5; };
export enum tPortType {eGPI = 0, eGPO = 1, eSerial = 2, eEthernet = 3, ePD = 4, eControlPort = 5, eNONE = 6, };
export enum tEncoderSource {eInternal = 0, eExternal = 1, };
export enum tEncoderDirection {eAleadsB = 0, eBleadsA = 1, };
export enum tPDDisplacementUnits {eTime = 0, eDistance = 1, };
export enum tEncoderMode {eSingle = 0, eBacklash = 1, eBacklashSuppress = 2, eBacklashToForward = 3, };
export enum tGpioLineSelector {eNone = 0, eLine0 = 0x0001, eLine1 = 0x0002, eLine2 = 0x0004, eLine3 = 0x0008, eLine4 = 0x0010,
                                eLine5 = 0x0020, eLine6 = 0x0040, eLine7 = 0x0080, eLine8 = 0x0100, eLine9 = 0x0200,
                                eLine10 = 0x0400, eLine11 = 0x0800, eLine12 = 0x1000, eLine13 = 0x2000, eLine14 = 0x4000,
                                eLine15 = 0x8000, };
export enum tWatermarkAction {eNone = 0, eSendMessage = 1, ePulseGPO = 2, };
export enum tEncodingType {eASCII = 0, eUTF8 = 1, eUnicode_BigEndian = 2, eUnicode_LittleEndian = 3, };
export enum tOutputActiveLevel {eLow = 0, eHigh = 1, };
export enum tInternalPDType {eTime = 0, ePosition = 1, };
export enum tStrobeSource {eLUTStrobe = 0, eInputLines = 1, };
export enum tInterruptCondition {eLowLevel = 0, eHighLevel = 1, eRisingEdge = 2, eFallingEdge = 3, eEveryEdge = 4, };
export enum tQueueFullAction {eReset = 0, eOverwrite = 1, };
export enum tDataPackageType {eUseStartEndMarker = 0, eUseSpecificLength = 1, };
export enum tAcknowledgeSchedule {eImmediately = 0, eAfterParsing = 1, };
export enum tAcknowledgeType {eNone = 0, eDefault = 1, eRegExpression = 2, eDefaultSpecialChars = 3, eBufferDepth = 4, };
export enum tAckNakBufferDepth {eFilled = 0, eEmpty = 1, };
export enum tAckNakBufferFormat {eText = 0, e1ByteBinary = 1, e2ByteBinaryBigEndian = 2, e2ByteBinaryLittleEndian = 3, };
export enum tFlowControl {eNone = 0, eNoneDtrEnable = 1, eDtrDsr = 2, eRtsCts = 3, eXonXoff = 4, };
export enum tParity {eNone = 0, eEven = 1, eOdd = 2, eMark = 3, eSpace = 4, };
export enum tStopBits {e1Bit = 0, e1Bit5 = 1, e2Bit = 2, };
export enum tFlightTimeAverage {eNone = 1, eTwo = 2, eFour = 4, eEight = 8, eSixteen = 16, eThirtyTwo = 32, };
export enum tQueueType {eQueueProduct = 0, eQueueGpInput = 1, eNumQueueType = 2, };
export enum tTriggerMode {eSingleChannelRisingEdge = 0, eSingleChannelBothEdges = 1, eBothChannelsAllEdges = 2, };
export enum tGearboxMultiplier {eOff = 0, eX2 = 1, eX4 = 2, eX8 = 3, eX16 = 4, eX32 = 5, eX64 = 6, eX128 = 7, eX256 = 8, };
export enum tEncoderConfigSettingId {eSource = 0x0001, eTriggerMode = 0x0002, eInternalVelocity = 0x0004,
                                    eInternalStrokeResolution = 0x0008, eGlobalStrokePitchGoal = 0x0010, eExternalDirection = 0x0020,
                                    eExternalMode = 0x0040, eExternalCalibrationDistance = 0x0080, eExternalCalibrationPulseCount = 0x0100,
                                    ePersDurationMS = 0x0200, eStrokeToPulseMode = 0x0400, ePulsesPerMm = 0x0800,
                                    eGearboxMultiplier = 0x1000, eGearboxDivider = 0x2000, eAllSettingIds = 0xFFFF, };
export enum tPDConfigSettingId {eExtPD = 0x0001, eActiveLevel = 0x0002, eIntPD_distance = 0x0004, eDepth = 0x0008, ePrintDelay = 0x0010,
                            eDisplacementUnits = 0x0020, ePersistence = 0x0040, eDebounceTimeMS = 0x0080, eDropFlightDistanceMM = 0x0100,
                            eStrokeByStrokeTOFComp = 0x0200, eAutoFlightTime = 0x0400, eDropVelocityMMPS = 0x0800, eAverageMode = 0x1000, };
export enum tStrokeToPulseMode {eOptimiseForMessageWidth = 0, eOptimiseForStrokePitch = 1, };
export class TPinConfig {'pinId': tGpioLineSelector; 'portType': tPortType; paramCount: number = 2; };
export class TPortData {'portName': QString; 'portType': tPortType; paramCount: number = 2; };
export class TPinSettings {'pinCfg': TPinConfig; 'funcName': QString; 'availableFunc': QString []; 'activeState': bool;
                         paramCount: number = 4; };
export class TAbortConfig {'inactivePDEdge': bool; 'midPrintAbort': bool; paramCount: number = 2; };
export class TEncoderConfig {'source': tEncoderSource; 'triggerMode': tTriggerMode; 'internalVelocity': float;
                            'internalStrokeResolution': quint32; 'globalStrokePitchGoal': float; 'externalDirection': tEncoderDirection;
                            'externalMode': tEncoderMode; 'externalCalibrationDistance': quint32;
                             'externalCalibrationPulseCount': quint32; 'persDurationMS': float; 'strokeToPulseMode': tStrokeToPulseMode;
                              'gearboxMultiplier': tGearboxMultiplier; 'gearboxDivider': quint32; paramCount: number = 13; };
export class TPDConfig {'extPD': bool; 'activeLevel': bool; 'intPD_distance': float; 'depth': quint16; 'printDelay': float;
                        'displacementUnits': tPDDisplacementUnits; 'debounceTimeMS': float; 'persistence': float;
                        'dropVelocityMMPS': quint32; 'calcMethod': tFlightTimeAverage; 'dropFlightDistanceMM': float;
                        'strokeByStrokeTOFComp': bool; 'autoFlightTime': bool; paramCount: number = 13; };
export class TGPIConfig {'depth': quint32; 'emptyAlertEnable': bool; 'notEmptyAlertEnable': bool;
                         'overflowAlertEnable': bool; paramCount: number = 4; };
export class TTriggerConfig {'inactivePDEdge': bool; paramCount: number = 1; };
export class TEDCConfig {'dataSinkId': QString; 'portId': QString; 'itcMask': quint32; 'encodingType': tEncodingType;
                        'startMarker': QString; 'endMarker': QString; 'packetLength': quint32;
                        'dataPackageType': tDataPackageType; 'ackType': tAcknowledgeType; 'ackNackBufferDepth': tAckNakBufferDepth;
                        'ackNackBufferFormat': tAckNakBufferFormat; 'ackSchedule': tAcknowledgeSchedule; 'ackRegExFilter': QString;
                        'ackRegExFormat': QString; 'nackRegExFilter': QString; 'nackRegExFormat': QString; 'dataRegEx': QString;
                        'persistenceEnabled': bool; 'historyChecked': bool; 'itcEvent': QString; 'maxQueueSize': quint32;
                        'expiringEntriesLifetime': quint32; 'expiredEntriesStoreID': bool; 'expiredEntriesReportFormat': QString;
                        'watermarkLowLevel': quint32; 'watermarkLowLevelMessage': QString; 'watermarkActionTypeLow': tWatermarkAction;
                        'watermarkHighLevel': quint32; 'watermarkHighLevelMessage': QString;
                        'watermarkActionTypeHigh': tWatermarkAction; paramCount: number = 30; };
export class TEDCHistoryQueueConfig {'enabled': bool; 'queueDepth': quint32; 'maxDuplicates': quint32;
                                     'queueFullAction': tQueueFullAction; 'preserveOverPowerOff': bool; paramCount: number = 5; };
export class TQueueConfig {'depth': quint16; 'printDelay': quint16; 'queueType': tQueueType; 'portEnable': bool; paramCount: number = 4; };
export class TSerialConfiguration {'flowControl': tFlowControl; 'parity': tParity; 'dataBits': quint8; 'stopBits': tStopBits;
                                    'comPort': QString; 'baudrate': quint32; paramCount: number = 6; };
export class TTcpConfiguration {'portNumber': quint16; paramCount: number = 1; };
export enum tNozzleSize {eFortyMicron = 0, eFiftyMicron = 1, eSixtyMicron = 2, eSeventyFiveMicron = 3, };
export enum tConduitLength {eThreeMetre = 0, eFourMetre = 1, eSixMetre = 2, };
export enum tPrintheadType {eWB = 0, eDUK = 1, };
export class TSelectedPrintheadInfo {'nozzleSize': tNozzleSize; 'conduitLength': tConduitLength; 'printheadType': tPrintheadType;
                                     'isDuo': bool; 'modulationFreq': quint32; 'userFriendlyName': QString; paramCount: number = 6; };
export class TStroke {'data': quint32 []; paramCount: number = 1; };
export enum tInkUsage {eStandard = 0, ePayPerCode = 1, eSafeGuard = 2, };
export enum tInkPerformance {eStandard = 0, ePremium = 1, eSafeguard = 2, };
export enum tIILState {eIILUnknown = 0, eIILOff = 1, eIILOn = 2, };
export enum tInspectionTimeMode {eHours = 0, eDate = 1, };
export enum tSysCalendarType {eGregorian = 0, eJalali = 1, eHijri = 2, };
export enum tProtocolsListFilter {eAll = 0, eEDConly = 1, };
export enum tProtocolType {eCodenet = 0, eIntercomm = 1, eEggnet = 2, eEDC = 3, eWDBTerm6 = 4, eWDBTCP = 5, eWDBPOPP = 6,
                             eWDBKRPC = 7, eUnknown = 8, };
export enum tProtocolVarTypeIndex {eBool = 2, eUIntTuple = 3, eFloatTuple = 4, eString = 5, eEnum = 6, };
export enum tDiagType {eAlert = 0, };
export enum tEnergySaveIdleTriggerType {eNoPrint = 1, eJetOff = 2, };
export class TInspectionDate {'m_year': quint16; 'm_month': quint8; 'm_day': quint8; paramCount: number = 3; };
export class TReplacementInfo {'m_partName': QString; 'm_timeStamp': QString; 'm_operator': QString;
                                 'm_notes': QString; paramCount: number = 4; };
export class TServiceKeyProtectedFeature {'featureName': QString; 'featureId': quint8; paramCount: number = 2; };
export class TFeatureKeyDetails {'detected': bool; 'type': QString []; 'timeKey': bool;
                                    'expiry': QString; 'uses': quint16; paramCount: number = 5; };
export class TInt32RangeStruct {'value': qint32; 'rangeMin': qint32; 'rangeMax': qint32; paramCount: number = 3; };
export class TUInt32RangeStruct {'value': quint32; 'rangeMin': quint32; 'rangeMax': quint32; paramCount: number = 3; };
export class TFloatRangeStruct {'value': float; 'rangeMin': float; 'rangeMax': float; paramCount: number = 3; };
export enum tScriptParamType {eBool = 1, eInt = 2, eFloat = 3, eString = 4, eWString = 5, };
export class TBCScriptVarValue {'type': tScriptParamType; 'booleanValue': bool; 'intValueRange': TInt32RangeStruct;
                                 'floatValueRange': TFloatRangeStruct; 'stringValue': QString;
                                  'wStringValue': QString; paramCount: number = 6; };
export enum tScriptStatus {eCreated = 1, eLoaded = 2, eInitialized = 3, eRunning = 4, eSuspended = 5, eException = 6, };
export class TBCScriptInfo {'type': tScriptStatus; 'scriptParamValues': QString []; 'cfgParamValues': QString []; paramCount: number = 3; };
export class TScriptParamNameAndValue {'paramName': QString; 'paramInfo': TBCScriptVarValue; paramCount: number = 2; };
export class TDateTimeInfo {'year': quint16; 'month': quint8; 'day': quint8; 'hour': quint8; 'minute': quint8;
                             'second': quint8; paramCount: number = 6; };
export class TRepeatPropertiesInfo {'mode': quint8; 'countedNumRepeats': quint16; 'pitch': quint16; 'updateMsg': bool;
                                     'usePrintGo': quint8; 'pitchType': bool; paramCount: number = 6; };
export class TSysCalendarStruct {'sysCalendarType': tSysCalendarType; 'stringValue': QString; paramCount: number = 2; };
export class TEnergySaveParamsStruct {'enabled': bool; 'idleTimeEnabled': bool; 'idleTimeTrigger': tEnergySaveIdleTriggerType;
                                        'currentIdleTime': quint16; 'minIdleTime': quint16; 'maxIdleTime': quint16;
                                        'lowPowerTimeEnabled': bool; 'currentLowPowerTime': quint16; 'minLowPowerTime': quint16;
                                        'maxLowPowerTime': quint16; paramCount: number = 10; };
export class TAutoModStartVoltageInfo {'autoModStartVoltage': qint16; 'minAutoModStartVoltage': qint16;
                                         'maxAutoModStartVoltage': qint16; paramCount: number = 3; };
export class TProtocolConfigStruct {'index': quint8; 'eProtVarTypeInd': tProtocolVarTypeIndex; 'boolValue': bool;
                                     'uInt32RangeStruct': TUInt32RangeStruct; 'floatRangeStruct': TFloatRangeStruct;
                                      'stringValue': QString; 'enumIndex': quint8; paramCount: number = 7; };
export class TSerialPortConfigStruct {'baudRate': quint32; 'dataBits': quint8; 'stopBits': quint8; 'parity': quint8;
                                     'flowControl': quint8; paramCount: number = 5; };
export class TTcpPortInfo {'tcpPort': quint16; 'minTcpPort': quint16; 'maxTcpPort': quint16; paramCount: number = 3; };
export enum tProtocolMode {eSerial = 0, eTCP = 1, eUnknown = 2, };
export class TEthernetConfig {'dhcpEnabled': bool; 'domainName': QString; 'ipAddress': QString; 'subnetMask': QString;
                             'defaultGateway': QString; 'dnsServer': QString; 'macAddress': quint8 []; paramCount: number = 7; };
export class TSystemPerformance {'TotalMemory': quint32; 'FreeMemory': quint32; 'cpu_load': quint8 []; paramCount: number = 3; };
export class TDiskSpaceInfo {'TotalSpace': quint32; 'FreeSpace': quint32; paramCount: number = 2; };
export enum tOEEResetMode {eLifeTime = 0, ePowerOn = 1, eMessageChange = 2, eShiftChange = 3, eDaily = 4, eCartridgeChange = 5, };
export class TOEEStatistics {'printerAvailability': quint32; 'operationalAvailability': quint32; 'resetTime': QString;
                            'currentTime': QString; 'averageRunRate': quint32; 'currentRunRate': quint32;
                            'targetRunRate': quint32; 'totalPrints': quint32; 'targetTotalPrints': quint32; 'inkUsed': quint32;
                             'makeupUsed': quint32; 'quality': quint32; paramCount: number = 12; };
export enum tPowerButtonAction {eSleep = 0, ePowerOff = 1, ePrompt = 2, };
export enum tDispatchType {ePeriodic = 0, eOnChange = 1, };
export class TDataLoggingValue {'loggingValueName': QString; 'dispatchType': tDispatchType; 'periodicInterval': quint32;
                                 paramCount: number = 3; };
export enum tIgnoreState {eNEVER = 0, eIGNORE_TEMPORARILY = 1, eIGNORE_ALWAYS = 2, };
export enum tUpgradeState {eNOT_AN_UPGRADE = 0, eNOT_AVAILABLE = 1, eNOT_COMPATIBLE = 2, eNOT_ENOUGH_SPACE = 3,
                            eINSTALLABLE_NEXT_RESET_ANOTHER_SET_TO_BE_INSTALLED = 4, eINSTALLABLE_NOW_ANOTHER_SET_TO_BE_INSTALLED = 5,
                            eSET_TO_BE_INSTALLED_NEXT_RESET = 6, eSET_TO_BE_INSTALLED_NOW = 7, eINSTALLABLE_NEXT_RESET = 8,
                            eINSTALLABLE_NOW = 9, };
export enum tBRtype {eFULL = 0, eLABEL = 1, eSERVICE = 2, };
export enum tBRstate {eUninitialized = 0, eIdle = 1, eBackupCheckEnv = 2, eBackupInProgress = 3, eBackupAborted = 4, eBackupFailed = 5,
                     eBackupFinished = 6, eRestoreCheckEnv = 7, eRestoreInProgress = 8, eRestoreAborted = 9, eRestoreFailed = 10,
                      eRestoreFinished = 11, eBackupPrevented = 12, eRestorePrevented = 13, eRebooting = 14, };
export enum tBRerror {e_None = 0, e_Success = 1, e_Failure = 2, e_NotImplemented = 3, };
export enum tBRcontext {eNone = 0, };
export class TBRdetails {'type': tBRtype; 'description': QString; paramCount: number = 2; };
export class TWDBMachineDetails {'rs232': bool; 'invertStrokes': bool; 'stopAtWasLastPsOk': bool; 'encoderDirection': bool;
                                'encoderCircumference': quint32; 'encoderResolution': quint32; 'ipAddress': QString;
                                'subnetMask': QString; 'gatewayAddress': QString; paramCount: number = 9; };
export enum tPrintHeightCalibrationQualityMetric {ePrintingPressure = 0, eViscosity = 1, eGunbodyTemperature = 2,
                                                 ePrintHeight_pc = 3, };
export class TConsumableLimits {'itmGracePeriodMin': qint16; 'itmGracePeriodMax': qint16; 'itmGracePeriodStep': qint16;
                                'inkCartridgeNoticePeriodMin': qint16; 'inkCartridgeNoticePeriodMax': qint16;
                                'inkCartridgeNoticePeriodStep': qint16; 'makeupCartridgeNoticePeriodMin': qint16;
                                'makeupCartridgeNoticePeriodMax': qint16; 'makeupCartridgeNoticePeriodStep': qint16;
                                 paramCount: number = 9; };
export class TFluidLevels {'inkCartLevel': qint32; 'itmLevel': qint32; 'makeupCartLevel': qint32;
                             'mumLevel': qint32; paramCount: number = 4; };
export enum tPrinterRequestState {eUnknown = 0, eSequenceOn = 1, eEnablePrinting = 2, };
export enum tInkSystemType {eINK_SYSTEM_UNKNOWN = 0, eINK_SYSTEM_A_SERIES_STANDARD = 1, eINK_SYSTEM_A_SERIES_OPAQUE = 2, };
export enum tNozzleUnblockingRoutine {eStandard = 0, eLowPerformance = 1, eMumRemoved = 2, };
export enum tNozzleUnblockingCompletionReason {eGutterPumpNotRotating = 0, eGutterBlocked = 1, eGutterVacuumNotGenerated = 2,
                                                eFeedPressureNotReached = 3, eGutterDry = 4, eNozzleUnblockOk = 5, };
export enum tITMReplacementCompletionReason {eAborted = 0, eInkLevelLow = 1, eNoPressure = 2, eExternalFault = 3, eSuccess = 4, };
export enum tITMReplacementCurrentState {eFinished = 0, eInkLevelCheck = 1, eITMPrime = 2, ePressureCheck = 3,
                                         eBleed = 4, eAbort = 5, eUnknown = 6, };
export enum tPeltierMode {eOff = 0, eAuto = 1, };
export enum tPromptedFieldValueType {eBool = 0, eDateTime = 1, eDuration = 2, eFloat = 3, eBinary = 4, eInteger = 5, eString = 6,
                                     eVectorList = 7, eUnknown = 8, };
export class TPromptedFieldData {'Name': QString; 'Text': QString; 'Mask': QString; 'Type': tPromptedFieldValueType;
                                 paramCount: number = 4; };
export class TPromptedFieldInput {'Field': QString; 'Data': QString; paramCount: number = 2; };
export enum tPJErrorType {eNone = 0, eGenericError = 1, eJobFileError = 2, eJobFileNotFound = 3, eJobParseError = 4,
                         eJobComposingError = 5, ePrintingSystemError = 6, };
export enum tPrintJobMode {eBatch = 0, ePositioned = 1, };
export enum tPrintJobAnchorMode {eJobOnPrintGo = 0, eStepOnPrintGo = 1, };
export enum tPrintJobStepDistanceRef {eStitch = 0, eAbsolute = 1, eRelative = 2, ePercentage = 3, };
export enum tPosStartRelativeTo {ePreviousStepEnd = 0, ePrintStart = 1, };
export enum tPosStopRelativeTo {eNextStepStart = 0, eTotalLength = 1, };
export enum tPrintJobStepRepeatMode {eNoRepeat = 0, eRepeat = 1, eFill = 2, };
export enum tPrintJobStepAlignment {eLeft = 0, eRight = 1, eCenter = 2, };
export enum tPrintJobStepMirrorMode {eOff = 0, eAlternate = 1, eBoth = 2, };
export class TPrintJobStep {'m_Id': quint32; 'm_Name': QString; 'm_LabelLocation': QString; 'm_LabelName': QString;
                            'm_DistanceReference': tPrintJobStepDistanceRef; 'm_PositionOffset': float; 'm_PositionPercentage': float;
                            'm_StartRelativeTo': tPosStartRelativeTo; 'm_StopRelativeTo': tPosStopRelativeTo; 'm_GapLength': float;
                            'm_RepeatMode': tPrintJobStepRepeatMode; 'm_StepRepeat': quint32; 'm_OrientationInverted': bool;
                            'm_OrientationReversed': bool; 'm_PresentationInverseVideo': bool; 'm_PresentationBold': bool;
                            'm_PresentationDoubleSpace': bool; 'm_Alignment': tPrintJobStepAlignment;
                            'm_MirrorMode': tPrintJobStepMirrorMode; paramCount: number = 19; };
export class TPrintJob {'m_Version': quint32; 'm_Ref': QString; 'm_JobMode': tPrintJobMode; 'm_TotalLength_mm': float;
                        'm_AnchorMode': tPrintJobAnchorMode; 'm_InfiniteRepeat': bool; 'm_RepeatCount': quint32;
                        'm_Steps': TPrintJobStep []; paramCount: number = 8; };
export class TPrintJobValidationData {'m_MaxPrintSpeed_mm_s': float; 'm_PromptsCount': quint32;
                                         'm_TotalLength_mm': float; paramCount: number = 3; };
export enum tPrintJobValidationError {eGenericError = 0, eLabelOverlap = 1, };
export class TPrintJobValidationErrorLogEntry {'m_Error': tPrintJobValidationError; 'm_AdditionalInfo': QString; paramCount: number = 2; };
export class FileProgressT {'bIdFound': bool; 'nType': quint32; 'nStatus': quint32; 'nProgress': quint32;
                             'nTotal': quint32; paramCount: number = 5; };
export enum ResettableCounterID_t {eRESETTABLE_COUNTER_1 = 0, eRESETTABLE_COUNTER_2 = 1, };
export class PrintCounterStatisticsT {'totalDetected': quint32; 'totalCoded': quint32; 'resettableCount1': quint32;
                                     'resettableCount2': quint32; 'printsSincePowerUp': quint32; paramCount: number = 5; };
export class LabelPrintCounterStatisticsT {'labelStatisticsFound': bool; 'detected': quint32;
                                 'coded': quint32; paramCount: number = 3; };
export class IndirectAccessIdT {'id': quint64; paramCount: number = 1; };
export class TAliasInfo {'alias': QString; 'mappingPath': QString; paramCount: number = 2; };
export class TLabelMappingInfo {'contentPath': QString; 'id': quint64; 'online': bool; paramCount: number = 3; };
export enum tRasterQuality {eHighQuality = 0, eStandard = 1, eHighSpeed = 2, eLowHeight = 3, eSnowFlake = 4, };
export enum tLabelType {eASeriesPlus = 0, };
export enum tLabelConversionError {eInvalidFormat = 0, eInvalidRaster = 1, eInvalidFont = 2, eInvalidNumberLines = 3, eInvalidElement = 4,
                                     eUnsupportedElement = 5, };
export let ReadEventProperty = {type : 'handlePropertyRead', id : 1023, inParams : {'tag_Event_ID': <uint16_t> undefined,
                                 'tag_Event_Field': <wchar_t> undefined}, outParams : {'tag_Value': <uint8_t> undefined}};
export let WriteEventProperty = {type : 'handlePropertyWrite', id : 1023, inParams : {'tag_Event_ID': <uint16_t> undefined,
                                 'tag_Event_Field': <wchar_t> undefined, 'tag_Value': <uint8_t> undefined}};
export let ReadSystemEventSeverity = {type : 'handlePropertyRead', id : 1024, outParams : {'state': <int32_t> undefined}};
export let ReadLatestUnacknowledgedEvent = {type : 'handlePropertyRead', id : 1025, outParams : {'tag_Event_id': <uint16_t> undefined}};
export let ReadHighestPriorityAlert = {type : 'handlePropertyRead', id : 1026, outParams : {'tag_Event_id': <uint16_t> undefined}};
export let ReadPrinterSeries = {type : 'handlePropertyRead', id : 1027, inParams : {'CommercialName': <bool> undefined},
                                 outParams : {'printer_series': <wchar_t> undefined}};
export let WritePrinterSeries = {type : 'handlePropertyWrite', id : 1027, inParams : {'CommercialName': <bool> undefined,
                                 'printer_series': <wchar_t> undefined}};
export let ReadPrinterSeriesText = {type : 'handlePropertyRead', id : 1028, outParams : {'printer_series_text': <wchar_t> undefined}};
export let ReadPrinterModel = {type : 'handlePropertyRead', id : 1029, outParams : {'printer_model': <wchar_t> undefined}};
export let WritePrinterModel = {type : 'handlePropertyWrite', id : 1029, inParams : {'printer_model': <wchar_t> undefined}};
export let ReadPrinterModelBackgroundImageRef = {type : 'handlePropertyRead', id : 1030,
                                                 outParams : {'printer_model_image_ref': <wchar_t> undefined}};
export let WritePrinterModelBackgroundImageRef = {type : 'handlePropertyWrite', id : 1030,
                                                 inParams : {'printer_model_image_ref': <wchar_t> undefined}};
export let ReadPrinterModelBackgroundImage = {type : 'handlePropertyRead', id : 1031,
                                             outParams : {'printer_model_image': <quint8[]> undefined}};
export let WritePrinterModelBackgroundImage = {type : 'handlePropertyWrite', id : 1031,
                                                 inParams : {'printer_model_image': <quint8[]> undefined}};
export let ReadPrinterSerialNumber = {type : 'handlePropertyRead', id : 1032, outParams : {'serial_number': <wchar_t> undefined}};
export let WritePrinterSerialNumber = {type : 'handlePropertyWrite', id : 1032, inParams : {'serial_number': <wchar_t> undefined}};
export let ReadPrinterConfig = {type : 'handlePropertyRead', id : 1033, outParams : {'config': <char> undefined}};
export let WritePrinterConfig = {type : 'handlePropertyWrite', id : 1033, inParams : {'config': <char> undefined}};
export let ReadConfigurationValue = {type : 'handlePropertyRead', id : 1034, inParams : {'ComponentID': <char> undefined,
                                     'ConfigNode': <char> undefined}, outParams : {'Value': <wchar_t> undefined}};
export let WriteConfigurationValue = {type : 'handlePropertyWrite', id : 1034, inParams : {'ComponentID': <char> undefined,
                                         'ConfigNode': <char> undefined, 'Value': <wchar_t> undefined}};
export let ReadPrinterName = {type : 'handlePropertyRead', id : 1035, outParams : {'printer_name': <wchar_t> undefined}};
export let WritePrinterName = {type : 'handlePropertyWrite', id : 1035, inParams : {'printer_name': <wchar_t> undefined}};
export let ReadHardwareOptionsFitted = {type : 'handlePropertyRead', id : 1036, outParams : {'config': <char> undefined}};
export let WriteHardwareOptionsFitted = {type : 'handlePropertyWrite', id : 1036, inParams : {'config': <char> undefined}};
export let ReadHardwareSoftwareCompatibilityList = {type : 'handlePropertyRead', id : 1037, outParams : {'config': <char> undefined}};
export let WriteHardwareSoftwareCompatibilityList = {type : 'handlePropertyWrite', id : 1037, inParams : {'config': <char> undefined}};
export let ReadSoftwareOptionsAvailable = {type : 'handlePropertyRead', id : 1038, outParams : {'config': <char> undefined}};
export let WriteSoftwareOptionsAvailable = {type : 'handlePropertyWrite', id : 1038, inParams : {'config': <char> undefined}};
export let ReadSoftwareOptionsActive = {type : 'handlePropertyRead', id : 1039, outParams : {'config': <char> undefined}};
export let WriteSoftwareOptionsActive = {type : 'handlePropertyWrite', id : 1039, inParams : {'config': <char> undefined}};
export let ReadLanguageIdActive = {type : 'handlePropertyRead', id : 1040, outParams : {'strId': <char> undefined}};
export let WriteLanguageIdActive = {type : 'handlePropertyWrite', id : 1040, inParams : {'strId': <char> undefined}};
export let ReadLanguageIdsSupported = {type : 'handlePropertyRead', id : 1041, outParams : {'vecIds': <TLanguageId[]> undefined}};
export let ReadLocalTimeSettings = {type : 'handlePropertyRead', id : 1042, outParams : {'auto_dst': <bool> undefined,
                                     'time_zone': <wchar_t> undefined, 'time_format': <char> undefined, 'date_format': <char> undefined}};
export let WriteLocalTimeSettings = {type : 'handlePropertyWrite', id : 1042, inParams : {'auto_dst': <bool> undefined,
                                     'time_zone': <wchar_t> undefined, 'time_format': <char> undefined, 'date_format': <char> undefined}};
export let ReadLocalCurrency = {type : 'handlePropertyRead', id : 1043, outParams : {'symbol_major': <wchar_t> undefined,
                                 'symbol_minor': <wchar_t> undefined}};
export let WriteLocalCurrency = {type : 'handlePropertyWrite', id : 1043, inParams : {'symbol_major': <wchar_t> undefined,
                                 'symbol_minor': <wchar_t> undefined}};
export let ReadTimeZonesAvailable = {type : 'handlePropertyRead', id : 1044, outParams : {'time_zone': <QString[]> undefined}};
export let ReadLocalTimeString = {type : 'handlePropertyRead', id : 1045, outParams : {'localdate': <char> undefined,
                                 'localtime': <char> undefined}};
export let ReadLocalTime = {type : 'handlePropertyRead', id : 1046, outParams : {'year': <int16_t> undefined,
                            'month': <int8_t> undefined, 'day': <int8_t> undefined, 'hour': <int8_t> undefined,
                            'minutes': <int8_t> undefined, 'seconds': <int8_t> undefined}};
export let WriteLocalTime = {type : 'handlePropertyWrite', id : 1046, inParams : {'year': <int16_t> undefined, 'month': <int8_t> undefined,
                             'day': <int8_t> undefined, 'hour': <int8_t> undefined, 'minutes': <int8_t> undefined,
                              'seconds': <int8_t> undefined}};
export let ReadEmailToAddress = {type : 'handlePropertyRead', id : 1047, outParams : {'address': <wchar_t> undefined}};
export let WriteEmailToAddress = {type : 'handlePropertyWrite', id : 1047, inParams : {'address': <wchar_t> undefined}};
export let ReadEmailFromAddress = {type : 'handlePropertyRead', id : 1048, outParams : {'address': <wchar_t> undefined}};
export let WriteEmailFromAddress = {type : 'handlePropertyWrite', id : 1048, inParams : {'address': <wchar_t> undefined}};
export let ReadEmailServerAddress = {type : 'handlePropertyRead', id : 1049, outParams : {'address': <wchar_t> undefined}};
export let WriteEmailServerAddress = {type : 'handlePropertyWrite', id : 1049, inParams : {'address': <wchar_t> undefined}};
export let ReadEmailEventsList = {type : 'handlePropertyRead', id : 1050, inParams : {'filter_mode': <uint8_t> undefined},
                                     outParams : {'EmailAlertRecords': <TEmailAlertRecord[]> undefined}};
export let WriteEmailEventsList = {type : 'handlePropertyWrite', id : 1050, inParams : {'filter_mode': <uint8_t> undefined,
                                     'EmailAlertRecords': <TEmailAlertRecord[]> undefined}};
export let ReadEmailEventFormatType = {type : 'handlePropertyRead', id : 1051, outParams : {'FormatType': <uint8_t> undefined}};
export let WriteEmailEventFormatType = {type : 'handlePropertyWrite', id : 1051, inParams : {'FormatType': <uint8_t> undefined}};
export let ReadEmailClientEnable = {type : 'handlePropertyRead', id : 1052, outParams : {'bState': <bool> undefined}};
export let WriteEmailClientEnable = {type : 'handlePropertyWrite', id : 1052, inParams : {'bState': <bool> undefined}};
export let ReadEmailSubject = {type : 'handlePropertyRead', id : 1053, outParams : {'subject': <wchar_t> undefined}};
export let WriteEmailSubject = {type : 'handlePropertyWrite', id : 1053, inParams : {'subject': <wchar_t> undefined}};
export let ReadEmailSmtpRequiresAuthentication = {type : 'handlePropertyRead', id : 1054,
                                                 outParams : {'bAuthenticationRequired': <bool> undefined}};
export let WriteEmailSmtpRequiresAuthentication = {type : 'handlePropertyWrite', id : 1054,
                                                     inParams : {'bAuthenticationRequired': <bool> undefined}};
export let ReadEmailSmtpAuthenticationDetails = {type : 'handlePropertyRead', id : 1055,
                                                outParams : {'nTranMethodStyle': <uint8_t> undefined,
                                                'UserName': <wchar_t> undefined, 'Password': <wchar_t> undefined}};
export let WriteEmailSmtpAuthenticationDetails = {type : 'handlePropertyWrite', id : 1055,
                                                 inParams : {'nTranMethodStyle': <uint8_t> undefined, 'UserName': <wchar_t> undefined,
                                                  'Password': <wchar_t> undefined}};
export let ReadControllerHostName = {type : 'handlePropertyRead', id : 1056, outParams : {'strHostName': <char> undefined}};
export let WriteControllerHostName = {type : 'handlePropertyWrite', id : 1056, inParams : {'strHostName': <char> undefined}};
export let ReadControllerNetworkAdapters = {type : 'handlePropertyRead', id : 1057, outParams : {'nAdapterCount': <uint8_t> undefined}};
export let WriteControllerNetworkAdapters = {type : 'handlePropertyWrite', id : 1057, inParams : {'nAdapterCount': <uint8_t> undefined}};
export let ReadControllerIPSettings = {type : 'handlePropertyRead', id : 1058, inParams : {'nAdapter': <uint8_t> undefined},
                                         outParams : {'bDHCP': <bool> undefined, 'strIP': <char> undefined, 'strMask': <char> undefined,
                                          'strGateway': <char> undefined}};
export let WriteControllerIPSettings = {type : 'handlePropertyWrite', id : 1058, inParams : {'nAdapter': <uint8_t> undefined,
                                        'bDHCP': <bool> undefined, 'strIP': <char> undefined, 'strMask': <char> undefined,
                                         'strGateway': <char> undefined}};
export let ReadControllerDNSSettings = {type : 'handlePropertyRead', id : 1059,
                                 outParams : {'strDomain': <char> undefined, 'strDNS': <char> undefined, 'strWINS': <char> undefined}};
export let WriteControllerDNSSettings = {type : 'handlePropertyWrite', id : 1059, inParams : {'strDomain': <char> undefined,
                                         'strDNS': <char> undefined, 'strWINS': <char> undefined}};
export let ReadNetworkServiceEnabled = {type : 'handlePropertyRead', id : 1060, inParams : {'service': <char> undefined},
                                         outParams : {'enabled': <bool> undefined}};
export let WriteNetworkServiceEnabled = {type : 'handlePropertyWrite', id : 1060,
                                        inParams : {'service': <char> undefined, 'enabled': <bool> undefined}};
export let ReadNetworkTimeParameters = {type : 'handlePropertyRead', id : 1061,
                                         outParams : {'bEnableLocalServer': <bool> undefined,
                                         'strServers': <char> undefined, 'nRefreshTime': <uint32_t> undefined,
                                          'nRecoveryRefreshTime': <uint32_t> undefined, 'nTreshold': <uint32_t> undefined}};
export let WriteNetworkTimeParameters = {type : 'handlePropertyWrite', id : 1061, inParams : {'bEnableLocalServer': <bool> undefined,
                                         'strServers': <char> undefined, 'nRefreshTime': <uint32_t> undefined,
                                          'nRecoveryRefreshTime': <uint32_t> undefined, 'nTreshold': <uint32_t> undefined}};
export let ReadMACAddress = {type : 'handlePropertyRead', id : 1062, inParams : {'nAdapter': <uint8_t> undefined},
                                 outParams : {'MACAddress': <quint8[]> undefined}};
export let ReadEthernetValidPortNumbers = {type : 'handlePropertyRead', id : 1063, inParams : {'nAdapter': <uint8_t> undefined},
                                             outParams : {'ValidPortNumbers': <quint16[]> undefined}};
export let ReadEthernetExternalProtocol = {type : 'handlePropertyRead', id : 1064, outParams : {'uiprotocol': <uint8_t> undefined,
                                             'uiPortNumber': <uint16_t> undefined, 'uiExternalPortNumber': <uint16_t> undefined}};
export let WriteEthernetExternalProtocol = {type : 'handlePropertyWrite', id : 1064, inParams : {'uiprotocol': <uint8_t> undefined,
                                             'uiPortNumber': <uint16_t> undefined, 'uiExternalPortNumber': <uint16_t> undefined}};
export let ReadEthernetProtocolEnabled = {type : 'handlePropertyRead', id : 1065, outParams : {'state': <uint8_t> undefined}};
export let WriteEthernetProtocolEnabled = {type : 'handlePropertyWrite', id : 1065, inParams : {'state': <uint8_t> undefined}};
export let ReadExternalSerialSetup = {type : 'handlePropertyRead', id : 1066, inParams : {'deviceName': <wchar_t> undefined},
                                     outParams : {'baud': <int32_t> undefined, 'data_bits': <uint8_t> undefined,
                                      'stop_bits': <uint8_t> undefined, 'parity': <uint8_t> undefined,
                                       'flow_control': <uint8_t> undefined, 'event_char': <uint8_t> undefined}};
export let WriteExternalSerialSetup = {type : 'handlePropertyWrite', id : 1066, inParams : {'deviceName': <wchar_t> undefined,
                                    'baud': <int32_t> undefined, 'data_bits': <uint8_t> undefined, 'stop_bits': <uint8_t> undefined,
                        'parity': <uint8_t> undefined, 'flow_control': <uint8_t> undefined, 'event_char': <uint8_t> undefined}};
export let ReadExternalSerialProtocol = {type : 'handlePropertyRead', id : 1067, inParams : {'deviceName': <wchar_t> undefined},
                                        outParams : {'protocol': <uint8_t> undefined, 'encoding_method': <uint8_t> undefined}};
export let WriteExternalSerialProtocol = {type : 'handlePropertyWrite', id : 1067, inParams : {'deviceName': <wchar_t> undefined,
                                         'protocol': <uint8_t> undefined, 'encoding_method': <uint8_t> undefined}};
export let ReadExternalSerialEnabled = {type : 'handlePropertyRead', id : 1068, inParams : {'deviceName': <wchar_t> undefined},
                                         outParams : {'state': <bool> undefined}};
export let WriteExternalSerialEnabled = {type : 'handlePropertyWrite', id : 1068,
                                         inParams : {'deviceName': <wchar_t> undefined, 'state': <bool> undefined}};
export let ReadEDCProtocol = {type : 'handlePropertyRead', id : 1069,
                             inParams : {'protocol_id': <uint8_t> undefined}, outParams : {'protocol': <TEDCProtocol[]> undefined}};
export let WriteEDCProtocol = {type : 'handlePropertyWrite', id : 1069, inParams : {'protocol_id': <uint8_t> undefined,
                                 'protocol': <TEDCProtocol[]> undefined}};
export let ReadProductDetectExternalConfig = {type : 'handlePropertyRead', id : 1070,
                                             inParams : {'ucInterfaceID': <uint8_t> undefined, 'SensorID': <uint8_t> undefined},
                                            outParams : {'stateEnabled': <bool> undefined, 'stateActive': <bool> undefined,
                                             'debounce': <int32_t> undefined, 'response_time': <int32_t> undefined}};
export let WriteProductDetectExternalConfig = {type : 'handlePropertyWrite', id : 1070,
                                             inParams : {'ucInterfaceID': <uint8_t> undefined, 'SensorID': <uint8_t> undefined,
                                              'stateEnabled': <bool> undefined, 'stateActive': <bool> undefined,
                                               'debounce': <int32_t> undefined, 'response_time': <int32_t> undefined}};
export let ReadProductDetectExternalCurrentState = {type : 'handlePropertyRead', id : 1071,
                                                    inParams : {'ucInterfaceID': <uint8_t> undefined,
                                                    'SensorID': <uint8_t> undefined}, outParams : {'state': <bool> undefined}};
export let ReadPrintGoSource = {type : 'handlePropertyRead', id : 1072,
                                 inParams : {'ucInterfaceID': <uint8_t> undefined}, outParams : {'source': <uint8_t> undefined}};
export let WritePrintGoSource = {type : 'handlePropertyWrite', id : 1072,
                                 inParams : {'ucInterfaceID': <uint8_t> undefined, 'source': <uint8_t> undefined}};
export let ReadEncoderSource = {type : 'handlePropertyRead', id : 1073,
                                 inParams : {'ucInterfaceID': <uint8_t> undefined}, outParams : {'source': <uint8_t> undefined}};
export let WriteEncoderSource = {type : 'handlePropertyWrite', id : 1073,
                                 inParams : {'ucInterfaceID': <uint8_t> undefined, 'source': <uint8_t> undefined}};
export let ReadEncoderMaximumRate = {type : 'handlePropertyRead', id : 1074,
                                     inParams : {'ucInterfaceID': <uint8_t> undefined}, outParams : {'rate': <uint16_t> undefined}};
export let WriteEncoderMaximumRate = {type : 'handlePropertyWrite', id : 1074,
                                     inParams : {'ucInterfaceID': <uint8_t> undefined, 'rate': <uint16_t> undefined}};
export let ReadEncoderInternalStrokeRate = {type : 'handlePropertyRead', id : 1075, inParams : {'ucInterfaceID': <uint8_t> undefined},
                                             outParams : {'stroke_rate': <uint16_t> undefined}};
export let WriteEncoderInternalStrokeRate = {type : 'handlePropertyWrite', id : 1075,
                                             inParams : {'ucInterfaceID': <uint8_t> undefined, 'stroke_rate': <uint16_t> undefined}};
export let ReadEncoderPulseCount = {type : 'handlePropertyRead', id : 1076,
                                     inParams : {'ucInterfaceID': <uint8_t> undefined}, outParams : {'pulse_count': <uint16_t> undefined}};
export let ReadEncoderBacklashConfig = {type : 'handlePropertyRead', id : 1077, inParams : {'ucInterfaceID': <uint8_t> undefined},
                                          outParams : {'ucActive': <uint8_t> undefined, 'ucDirection': <uint8_t> undefined,
                                           'ucPin': <uint8_t> undefined, 'ucPinLevel': <uint8_t> undefined}};
export let WriteEncoderBacklashConfig = {type : 'handlePropertyWrite', id : 1077, inParams : {'ucInterfaceID': <uint8_t> undefined,
                                         'ucActive': <uint8_t> undefined, 'ucDirection': <uint8_t> undefined,
                                          'ucPin': <uint8_t> undefined, 'ucPinLevel': <uint8_t> undefined}};
export let ReadEncoderBacklashCount = {type : 'handlePropertyRead', id : 1078, inParams :
                                         {'ucInterfaceID': <uint8_t> undefined}, outParams : {'pulse_count': <int32_t> undefined}};
export let ReadRemoteControlEnabled = {type : 'handlePropertyRead', id : 1079, outParams : {'state': <uint8_t> undefined}};
export let WriteRemoteControlEnabled = {type : 'handlePropertyWrite', id : 1079, inParams : {'state': <uint8_t> undefined}};
export let ReadRemoteConnectionInhibitionState = {type : 'handlePropertyRead', id : 1080, outParams : {'state': <uint8_t> undefined}};
export let ReadAllImageVersionInfo = {type : 'handlePropertyRead', id : 1081, outParams : {'config': <char> undefined}};
export let WriteAllImageVersionInfo = {type : 'handlePropertyWrite', id : 1081, inParams : {'config': <char> undefined}};
export let ReadComponentVersionInfo = {type : 'handlePropertyRead', id : 1082, outParams : {'config': <char> undefined}};
export let WriteComponentVersionInfo = {type : 'handlePropertyWrite', id : 1082, inParams : {'config': <char> undefined}};
export let ReadSystemBuildStandardInfo = {type : 'handlePropertyRead', id : 1083, outParams : {'config': <char> undefined}};
export let WriteSystemBuildStandardInfo = {type : 'handlePropertyWrite', id : 1083, inParams : {'config': <char> undefined}};
export let ReadOverallSoftwareVersion = {type : 'handlePropertyRead', id : 1084, outParams : {'config': <char> undefined}};
export let WriteOverallSoftwareVersion = {type : 'handlePropertyWrite', id : 1084, inParams : {'config': <char> undefined}};
export let ReadPrintingEnabled = {type : 'handlePropertyRead', id : 1085,
                                    inParams : {'print_engine': <uint8_t> undefined}, outParams : {'state': <bool> undefined}};
export let WritePrintingEnabled = {type : 'handlePropertyWrite', id : 1085,
                                     inParams : {'print_engine': <uint8_t> undefined, 'state': <bool> undefined}};
export let ReadOverallSystemStatus = {type : 'handlePropertyRead', id : 1086, outParams : {'state': <int32_t> undefined}};
export let ReadLastError = {type : 'handlePropertyRead', id : 1087, outParams : {'error': <uint16_t> undefined}};
export let PluginLogin = {type : 'handleActivateFunction', id : 1017, inParams : {'strName': <wchar_t> undefined}};
export let QueryFeatureKeyDetails = {type : 'handleActivateFunction', id : 1024, inParams :
                                     {'keyType': <uint8_t> undefined}, outParams : {'bDetected': <bool> undefined,
                                     'bTimeKey': <bool> undefined, 'expiry': <wchar_t> undefined, 'uses': <uint16_t> undefined}};
export let DetectFeatureKeyType = {type : 'handleActivateFunction', id : 1025, outParams : {'lstfeature_key_types': <quint8[]> undefined}};
export let ApplySoftwareFeatureList = {type : 'handleActivateFunction', id : 1026, inParams : {'lstfeatures': <quint8[]> undefined}};
export let IsSoftwareFeatureEnabled = {type : 'handleActivateFunction', id : 1027, inParams : {'lstfeatures': <quint8[]> undefined},
                                         outParams : {'lstfeaturestates': <bool[]> undefined}};
export let IsSoftwareFeatureEnabledbyDongle = {type : 'handleActivateFunction', id : 1028, inParams : {'lstfeatures': <quint8[]> undefined},
                                                 outParams : {'lstfeaturestates': <bool[]> undefined}};
export let RetrieveSystemLog = {type : 'handleActivateFunction', id : 1029, inParams : {'log_type': <uint8_t> undefined},
                                 outParams : {'log': <quint8[]> undefined}};
export let ClearSystemLog = {type : 'handleActivateFunction', id : 1030, inParams : {'log_type': <uint8_t> undefined}};
export let EventAcknowledge = {type : 'handleActivateFunction', id : 1031, inParams : {'event_id': <uint16_t> undefined}};
export let EventAcknowledgeAll = {type : 'handleActivateFunction', id : 1032 };
export let ReadActiveEvents = {type : 'handleActivateFunction', id : 1033, outParams : {'events': <TActiveEvent[]> undefined}};
export let BackupLog = {type : 'handleActivateFunction', id : 1034, inParams : {'log_type': <uint8_t> undefined},
                         outParams : {'result': <bool> undefined}};
export let GetActionLogOverview = {type : 'handleActivateFunction', id : 1035, inParams : {'nBlock': <uint32_t> undefined},
                                     outParams : {'Msg': <TActionLogOverview[]> undefined}};
export let RemoveOldActionLogs = {type : 'handleActivateFunction', id : 1038, inParams : {'nDays': <int16_t> undefined}};
export let RemoveOldEventLogs = {type : 'handleActivateFunction', id : 1039, inParams : {'nDays': <int16_t> undefined}};
export let PrinterModelsList = {type : 'handleActivateFunction', id : 1040, outParams : {'models': <QString[]> undefined}};
export let GetCommonConfigPaths = {type : 'handleActivateFunction', id : 1041,
                                    outParams : {'ConfigPaths': <QString[]> undefined, 'Descriptors': <QString[]> undefined}};
export let GetConfigSections = {type : 'handleActivateFunction', id : 1042, inParams : {'ConfigPath': <wchar_t> undefined},
                                 outParams : {'sections': <QString[]> undefined}};
export let GetConfigSectionKeys = {type : 'handleActivateFunction', id : 1043, inParams : {'ConfigPath': <wchar_t> undefined,
                                 'strSection': <char> undefined}, outParams : {'keys': <QString[]> undefined,
                                  'values': <QString[]> undefined}};
export let SetConfigValues = {type : 'handleActivateFunction', id : 1044, inParams : {'ConfigPath': <wchar_t> undefined,
                             'Sections': <QString[]> undefined, 'Keys': <QString[]> undefined, 'Values': <QString[]> undefined}};
export let EmailValidateEventAgainstEventList = {type : 'handleActivateFunction', id : 1045,
                                 inParams : {'index': <uint16_t> undefined}, outParams : {'email_listed': <bool> undefined}};
export let NetworkTimeSync = {type : 'handleActivateFunction', id : 1046, inParams : {'bForce': <bool> undefined}};
export let DisconnectLink = {type : 'handleActivateFunction', id : 1047 };
export let ExternalSerialEnumerateRS232Ports = {type : 'handleActivateFunction', id : 1048,
                                             outParams : {'deviceNames': <QString[]> undefined}};
export let GenerateSystemBuildStandardInfo = {type : 'handleActivateFunction', id : 1049};
export let SendHeartbeat = {type : 'handleActivateFunction', id : 1050};
export let GetPrinterStorageSpaceInfo = {type : 'handleActivateFunction', id : 1051,
                                        inParams : {'deviceReference': <wchar_t> undefined},
                                        outParams : {'ruiTotalCapacity': <int32_t> undefined,
                                        'ruiUsedSpace': <int32_t> undefined, 'ruiFreeSpace': <int32_t> undefined}};
export let EnumeratePrinterStorageDevices = {type : 'handleActivateFunction', id : 1052,
                                             outParams : {'deviceNames': <QString[]> undefined}};
export let UsedFolderSpace = {type : 'handleActivateFunction', id : 1053,
                             inParams : {'deviceReference': <wchar_t> undefined, 'StorageArea': <uint8_t> undefined,
                            'pszExtraPathDets': <wchar_t> undefined}, outParams : {'ruiUsedSpace': <int32_t> undefined}};
export let BoardUpdating = {type : 'handleActivateFunction', id : 1054, outParams : {'bBoardUpdating': <bool> undefined}};
export let PrinterReadyForShutdown = {type : 'handleActivateFunction', id : 1055, outParams : {'bReadyToShutdown': <bool> undefined}};
export let SelectReadyState = {type : 'handleActivateFunction', id : 1056 };
export let SelectStandbyState = {type : 'handleActivateFunction', id : 1057 };
export let SelectOffState = {type : 'handleActivateFunction', id : 1058};
export let SelectEmergencyStop = {type : 'handleActivateFunction', id : 1059};
export let BoardUpdate = {type : 'handleActivateFunction', id : 1060, inParams : {'lstUpdateflags': <quint8[]> undefined}};
export let CheckForUSBUpdate = {type : 'handleActivateFunction', id : 1061, outParams : {'UpdateAvailable': <bool> undefined}};
export let ResetSystem = {type : 'handleActivateFunction', id : 1062 };
export let ReadPWPolicy = {type : 'handlePropertyRead', id : 1101, outParams : {'policy': <PWPolicy> undefined}};
export let WritePWPolicy = {type : 'handlePropertyWrite', id : 1101, inParams : {'policy': <PWPolicy> undefined}};
export let ReadReminderInfo = {type : 'handlePropertyRead', id : 1102, outParams : {'ExpiryAccount': <uint32_t> undefined,
                             'ExpiryPassword': <uint32_t> undefined}};
export let WriteReminderInfo = {type : 'handlePropertyWrite', id : 1102, inParams :
                                {'ExpiryAccount': <uint32_t> undefined, 'ExpiryPassword': <uint32_t> undefined}};
export let ReadESignature = {type : 'handlePropertyRead', id : 1103, outParams : {'bsESignature': <SMComponentsBitset[]> undefined}};
export let WriteESignature = {type : 'handlePropertyWrite', id : 1103, inParams : {'bsESignature': <SMComponentsBitset[]> undefined}};
export let ReadActionConfig = {type : 'handlePropertyRead', id : 1104, outParams : {'bsConfig': <SMComponentsBitset[]> undefined}};
export let WriteActionConfig = {type : 'handlePropertyWrite', id : 1104, inParams : {'bsConfig': <SMComponentsBitset[]> undefined}};
export let ReadAutoLoginUser = {type : 'handlePropertyRead', id : 1105,
                                outParams : {'UserId': <wchar_t> undefined, 'Active': <bool> undefined}};
export let WriteAutoLoginUser = {type : 'handlePropertyWrite', id : 1105,
                                inParams : {'UserId': <wchar_t> undefined, 'Active': <bool> undefined}};
export let Login = {type : 'handleActivateFunction', id : 1110, inParams : {'UserId': <wchar_t> undefined,
                     'Password': <wchar_t> undefined}, outParams : {'RemindPasswordExpire': <uint32_t> undefined,
                      'RemindAccountExpire': <uint32_t> undefined, 'Result': <SMResultType> undefined}};
export let Logout = {type : 'handleActivateFunction', id : 1111};
export let ESignature = {type : 'handleActivateFunction', id : 1112, inParams : {'UserId': <wchar_t> undefined,
                        'Password': <wchar_t> undefined, 'GrantId': <SMGrantId> undefined},
                         outParams : {'Result': <SMResultType> undefined}};
export let LogAction = {type : 'handleActivateFunction', id : 1113, inParams : {'Action': <SMActionId> undefined,
                         'Param1': <wchar_t> undefined, 'Param2': <wchar_t> undefined, 'Param3': <wchar_t> undefined}};
export let GetActionLogs = {type : 'handleActivateFunction', id : 1114,
                             inParams : {'Filter': <SMActionFilter> undefined}, outParams : {'ActionLogs': <SMActionEntry[]> undefined}};
export let GetActionCount = {type : 'handleActivateFunction', id : 1115,
                             inParams : {'Filter': <SMActionFilter> undefined}, outParams : {'Count': <uint32_t> undefined}};
export let GetUserSet = {type : 'handleActivateFunction', id : 1116, outParams : {'UserIds': <QString[]> undefined}};
export let GetUserAccount = {type : 'handleActivateFunction', id : 1117, inParams : {'UserId': <wchar_t> undefined},
                             outParams : {'User': <SMUserAccount> undefined, 'Result': <SMResultType> undefined}};
export let AlterUserAccount = {type : 'handleActivateFunction', id : 1119, inParams : {'User': <SMUserAccount> undefined},
                                 outParams : {'Result': <SMResultType> undefined}};
export let AddUserAccount = {type : 'handleActivateFunction', id : 1120, inParams : {'User': <SMUserAccount> undefined,
                             'Password': <wchar_t> undefined}, outParams : {'MismatchedPolicy': <SMMismatchedPasswordPolicy[]> undefined,
                             'Result': <SMResultType> undefined}};
export let RemoveUserAccount = {type : 'handleActivateFunction', id : 1121, inParams : {'UserId': <wchar_t> undefined},
                                 outParams : {'Result': <SMResultType> undefined}};
export let ChangePassword = {type : 'handleActivateFunction', id : 1122, inParams : {'UserId': <wchar_t> undefined,
                            'Password': <wchar_t> undefined}, outParams : {'MismatchedPolicy': <SMMismatchedPasswordPolicy[]> undefined,
                             'Result': <SMResultType> undefined}};
export let GetUserGroupSet = {type : 'handleActivateFunction', id : 1123, outParams : {'GroupIds': <QString[]> undefined}};
export let GetUserGroup = {type : 'handleActivateFunction', id : 1124, inParams : {'UserGroupId': <wchar_t> undefined},
                             outParams : {'Grants': <SMComponentsBitset[]> undefined, 'Result': <SMResultType> undefined}};
export let AlterUserGroup = {type : 'handleActivateFunction', id : 1125, inParams : {'UserGroupId': <wchar_t> undefined,
                             'Grants': <SMComponentsBitset[]> undefined}, outParams : {'Result': <SMResultType> undefined}};
export let AddUserGroup = {type : 'handleActivateFunction', id : 1126, inParams : {'UserGroupId': <wchar_t> undefined,
                             'Grants': <SMComponentsBitset[]> undefined}, outParams : {'Result': <SMResultType> undefined}};
export let RemoveUserGroup = {type : 'handleActivateFunction', id : 1127, inParams : {'UserGroupId': <wchar_t> undefined},
                             outParams : {'Result': <SMResultType> undefined}};
export let ChangeCurrentPassword = {type : 'handleActivateFunction', id : 1129, inParams : {'UserId': <wchar_t> undefined,
                                    'OldPassword': <wchar_t> undefined, 'NewPassword': <wchar_t> undefined},
                                    outParams : {'MismatchedPolicy': <SMMismatchedPasswordPolicy[]> undefined,
                                    'Result': <SMResultType> undefined}};
export let GetCurrentUserId = {type : 'handleActivateFunction', id : 1130, outParams : {'UserId': <wchar_t> undefined}};
export let TriggerUserAction = {type : 'handleActivateFunction', id : 1131};
export let GetServiceCode = {type : 'handleActivateFunction', id : 1132, inParams : {'GenerateNewCode': <bool> undefined},
                             outParams : {'ServiceCode': <char> undefined, 'ExpirationTime': <char> undefined}};
export let IsESignature = {type : 'handleActivateFunction', id : 1133, inParams : {'GrantId': <SMGrantId> undefined},
                             outParams : {'Result': <bool> undefined}};
export let HasPermission = {type : 'handleActivateFunction', id : 1134, inParams : {'GrantId': <SMGrantId> undefined},
                             outParams : {'Result': <bool> undefined}};
export let GetAuditTrailMode = {type : 'handleActivateFunction', id : 1135, outParams : {'Result': <SMAuditTrailMode> undefined}};
export let GetSecurityMode = {type : 'handleActivateFunction', id : 1136, outParams : {'Result': <SMSecurityMode> undefined}};
export let GetWarningLevel = {type : 'handleActivateFunction', id : 1137, outParams : {'Result': <SMWarningLevel> undefined}};
export let ExportLogging = {type : 'handleActivateFunction', id : 1138, inParams : {'ExportPath': <char> undefined}};
export let RemoveExportedLogs = {type : 'handleActivateFunction', id : 1139};
export let GetComponentGrants = {type : 'handleActivateFunction', id : 1140,
                                 outParams : {'Grants': <SMComponentGrantDefinitions[]> undefined}};
export let AutoLogin = {type : 'handleActivateFunction', id : 1141, outParams : {'RemindPasswordExpire': <uint32_t> undefined,
                         'RemindAccountExpire': <uint32_t> undefined, 'Result': <SMResultType> undefined}};
export let GetActionDescriptions = {type : 'handleActivateFunction', id : 1142, outParams : {'Actions': <SMComponentActions[]> undefined}};
export let GetCurrentUserAccount = {type : 'handleActivateFunction', id : 1143, outParams : {'User': <SMUserAccount> undefined}};
export let GetCurrentGrants = {type : 'handleActivateFunction', id : 1144, outParams : {'Grants': <SMComponentsBitset[]> undefined}};
export let ReadPressureSetpoint = {type : 'handlePropertyRead', id : 5000, outParams : {'iSetpoint': <int16_t> undefined,
                                     'iSetMax': <int16_t> undefined, 'iSetMin': <int16_t> undefined}};
export let WritePressureSetpoint = {type : 'handlePropertyWrite', id : 5000, inParams : {'iSetpoint': <int16_t> undefined,
                                     'iSetMax': <int16_t> undefined, 'iSetMin': <int16_t> undefined}};
export let ReadPrintingPressureSetpoint = {type : 'handlePropertyRead', id : 5061, outParams : {'iSetpoint': <int16_t> undefined,
                                         'iSetMax': <int16_t> undefined, 'iSetMin': <int16_t> undefined}};
export let WritePrintingPressureSetpoint = {type : 'handlePropertyWrite', id : 5061, inParams : {'iSetpoint': <int16_t> undefined,
                                             'iSetMax': <int16_t> undefined, 'iSetMin': <int16_t> undefined}};
export let ReadFeedValve = {type : 'handlePropertyRead', id : 5060, outParams : {'bState': <bool> undefined}};
export let WriteFeedValve = {type : 'handlePropertyWrite', id : 5060, inParams : {'bState': <bool> undefined}};
export let SelectFastShutdown = {type : 'handleActivateFunction', id : 5136 };
export let SelectJetOn = {type : 'handleActivateFunction', id : 5137 };
export let ReadPressureActual = {type : 'handlePropertyRead', id : 5093, outParams : {'iValue': <int16_t> undefined}};
export let ReadFeedPumpSpeed = {type : 'handlePropertyRead', id : 5094, outParams : {'iValue': <uint16_t> undefined}};
export let ReadSkipNextFlushEnable = {type : 'handlePropertyRead', id : 5145, outParams : {'bState': <bool> undefined}};
export let WriteSkipNextFlushEnable = {type : 'handlePropertyWrite', id : 5145, inParams : {'bState': <bool> undefined}};
export let EHT_Test = {type : 'handleActivateFunction', id : 10010, inParams : {'bStart': <bool> undefined}};
export let EnableViscometer = {type : 'handleActivateFunction', id : 10011, inParams : {'state': <bool> undefined}};
export let InitiateJetCharacterisation = {type : 'handleActivateFunction', id : 10018, inParams : {'print_engine': <uint8_t> undefined}};
export let NozzleUnblockCommand = {type : 'handleActivateFunction', id : 10019, inParams : {'command': <uint8_t> undefined,
                                 'param': <int32_t> undefined}};
export let PrintSetupWizardCommand = {type : 'handleActivateFunction', id : 10021};
export let ReadBFTActual = {type : 'handlePropertyRead', id : 10024, outParams : {'uTime': <uint32_t> undefined}};
export let ReadAirDryerAvailable = {type : 'handlePropertyRead', id : 10025, outParams : {'air_dryer_available': <bool> undefined}};
export let WriteAirDryerAvailable = {type : 'handlePropertyWrite', id : 10025, inParams : {'air_dryer_available': <bool> undefined}};
export let ReadAirDryerExtendedMode = {type : 'handlePropertyRead', id : 10026, outParams : {'isExtended': <bool> undefined}};
export let WriteAirDryerExtendedMode = {type : 'handlePropertyWrite', id : 10026, inParams : {'isExtended': <bool> undefined}};
export let ReadBleedValve = {type : 'handlePropertyRead', id : 10029, outParams : {'bState': <bool> undefined}};
export let WriteBleedValve = {type : 'handlePropertyWrite', id : 10029, inParams : {'bState': <bool> undefined}};
export let ReadCompressorState = {type : 'handlePropertyRead', id : 10032, outParams : {'state': <bool> undefined}};
export let WriteCompressorState = {type : 'handlePropertyWrite', id : 10032, inParams : {'state': <bool> undefined}};
export let ReadCurrentInkName = {type : 'handlePropertyRead', id : 10034, outParams : {'ink_name': <char> undefined}};
export let WriteCurrentInkName = {type : 'handlePropertyWrite', id : 10034, inParams : {'ink_name': <char> undefined}};
export let ReadEnableGutterDryAlert = {type : 'handlePropertyRead', id : 10036, outParams : {'bState': <bool> undefined}};
export let WriteEnableGutterDryAlert = {type : 'handlePropertyWrite', id : 10036, inParams : {'bState': <bool> undefined}};
export let ReadFluidMonitorTriggerLevels = {type : 'handlePropertyRead', id : 10043,
                                             outParams : {'levels': <TFluidMonitorTriggerLevels> undefined}};
export let WriteFluidMonitorTriggerLevels = {type : 'handlePropertyWrite', id : 10043,
                                             inParams : {'levels': <TFluidMonitorTriggerLevels> undefined}};
export let ReadHeaterEnable = {type : 'handlePropertyRead', id : 10046, outParams : {'state': <uint8_t> undefined}};
export let WriteHeaterEnable = {type : 'handlePropertyWrite', id : 10046, inParams : {'state': <uint8_t> undefined}};
export let ReadHVActual = {type : 'handlePropertyRead', id : 10047, outParams : {'iValue': <int16_t> undefined}};
export let ReadHVStepDelay = {type : 'handlePropertyRead', id : 10048, outParams : {'uiStepDelay': <uint16_t> undefined}};
export let WriteHVStepDelay = {type : 'handlePropertyWrite', id : 10048, inParams : {'uiStepDelay': <uint16_t> undefined}};
export let ReadModulationLevel = {type : 'handlePropertyRead', id : 10059, inParams : {'ucJetID': <uint8_t> undefined},
                                 outParams : {'iValue': <int16_t> undefined}};
export let ReadModulationMode = {type : 'handlePropertyRead', id : 10060, inParams : {'ucJetID': <uint8_t> undefined},
                                 outParams : {'modulation_mode': <uint8_t> undefined}};
export let WriteModulationMode = {type : 'handlePropertyWrite', id : 10060, inParams : {'ucJetID': <uint8_t> undefined,
                                 'modulation_mode': <uint8_t> undefined}};
export let ReadModulationSetpoint = {type : 'handlePropertyRead', id : 10061, inParams : {'ucJetID': <uint8_t> undefined},
                                     outParams : {'iSetpoint': <int16_t> undefined, 'iSetMax': <int16_t> undefined,
                                      'iSetMin': <int16_t> undefined}};
export let WriteModulationSetpoint = {type : 'handlePropertyWrite', id : 10061, inParams : {'ucJetID': <uint8_t> undefined,
                                     'iSetpoint': <int16_t> undefined, 'iSetMax': <int16_t> undefined, 'iSetMin': <int16_t> undefined}};
export let ReadNozzleValve = {type : 'handlePropertyRead', id : 10062, inParams : {'ucNozzleID': <uint8_t> undefined},
                                 outParams : {'bState': <bool> undefined}};
export let WriteNozzleValve = {type : 'handlePropertyWrite', id : 10062, inParams : {'ucNozzleID': <uint8_t> undefined,
                                 'bState': <bool> undefined}};
export let ReadNumberJets = {type : 'handlePropertyRead', id : 10065, outParams : {'ucJets': <uint8_t> undefined}};
export let ReadPrintableAreaHeight = {type : 'handlePropertyRead', id : 10069, outParams : {'height': <uint16_t> undefined,
                                     'max_height': <uint16_t> undefined, 'min_height': <uint16_t> undefined}};
export let WritePrintableAreaHeight = {type : 'handlePropertyWrite', id : 10069, inParams : {'height': <uint16_t> undefined,
                                     'max_height': <uint16_t> undefined, 'min_height': <uint16_t> undefined}};
export let ReadPrintFormat = {type : 'handlePropertyRead', id : 10070, outParams : {'print_format': <wchar_t> undefined}};
export let WritePrintFormat = {type : 'handlePropertyWrite', id : 10070, inParams : {'print_format': <wchar_t> undefined}};
export let ReadPromptToResetSerialNumbers = {type : 'handlePropertyRead', id : 10078, outParams : {'bPrompt': <bool> undefined}};
export let ReadRunHoursRemaining = {type : 'handlePropertyRead', id : 10082, outParams : {'run_hours': <uint16_t> undefined}};
export let WriteRunHoursRemaining = {type : 'handlePropertyWrite', id : 10082, inParams : {'run_hours': <uint16_t> undefined}};
export let ReadSBCHardwareID = {type : 'handlePropertyRead', id : 10084, outParams : {'ulSBCHardwareID': <int32_t> undefined}};
export let ReadSolventValve = {type : 'handlePropertyRead', id : 10087, outParams : {'bState': <bool> undefined}};
export let WriteSolventValve = {type : 'handlePropertyWrite', id : 10087, inParams : {'bState': <bool> undefined}};
export let ReadFeedPumpSpeedSetpoint = {type : 'handlePropertyRead', id : 10088, outParams : {'SpeedSetpoint': <uint16_t> undefined,
                                         'SpeedSetMax': <uint16_t> undefined, 'SpeedSetMin': <uint16_t> undefined}};
export let WriteFeedPumpSpeedSetpoint = {type : 'handlePropertyWrite', id : 10088, inParams : {'SpeedSetpoint': <uint16_t> undefined,
                                         'SpeedSetMax': <uint16_t> undefined, 'SpeedSetMin': <uint16_t> undefined}};
export let ReadViscometerValve = {type : 'handlePropertyRead', id : 10091, outParams : {'bState': <bool> undefined}};
export let WriteViscometerValve = {type : 'handlePropertyWrite', id : 10091, inParams : {'bState': <bool> undefined}};
export let ReadWashValve = {type : 'handlePropertyRead', id : 10092, outParams : {'bState': <bool> undefined}};
export let WriteWashValve = {type : 'handlePropertyWrite', id : 10092, inParams : {'bState': <bool> undefined}};
export let SelectPhaseLock = {type : 'handleActivateFunction', id : 10096 };
export let Shutdown = {type : 'handleActivateFunction', id : 10099};
export let ReadManualModeAccessedState = {type : 'handlePropertyRead', id : 10101, outParams : {'state': <bool> undefined}};
export let WriteManualModeAccessedState = {type : 'handlePropertyWrite', id : 10101, inParams : {'state': <bool> undefined}};
export let ReadActiveConnections = {type : 'handlePropertyRead', id : 10114, outParams : {'nrActiveConnections': <uint16_t> undefined}};
export let ReadViscosityActual = {type : 'handlePropertyRead', id : 10116, outParams : {'uVisco': <float> undefined}};
export let ReadViscosityExpected = {type : 'handlePropertyRead', id : 10117, outParams : {'uVisco': <float> undefined}};
export let WriteViscosityExpected = {type : 'handlePropertyWrite', id : 10117, inParams : {'uVisco': <float> undefined}};
export let ReadCoilFrequency = {type : 'handlePropertyRead', id : 10118, outParams : {'uVisco': <uint32_t> undefined}};
export let ReadGutterSensor = {type : 'handlePropertyRead', id : 10119, inParams : {'ucJetID': <uint8_t> undefined},
                                 outParams : {'bState': <bool> undefined}};
export let ReadHeaterSetpoint = {type : 'handlePropertyRead', id : 10120, inParams : {'ucJetID': <uint8_t> undefined},
                                 outParams : {'Target': <int16_t> undefined}};
export let WriteHeaterSetpoint = {type : 'handlePropertyWrite', id : 10120, inParams : {'ucJetID': <uint8_t> undefined,
                                 'Target': <int16_t> undefined}};
export let ReadEHT_Trip = {type : 'handlePropertyRead', id : 10121, outParams : {'value': <bool> undefined}};
export let ReadFeedPumpState = {type : 'handlePropertyRead', id : 10124, outParams : {'value': <bool> undefined}};
export let WriteFeedPumpState = {type : 'handlePropertyWrite', id : 10124, inParams : {'value': <bool> undefined}};
export let ReadFeedPumpRegulation = {type : 'handlePropertyRead', id : 10126, outParams : {'value': <tPumpRegulation> undefined}};
export let WriteFeedPumpRegulation = {type : 'handlePropertyWrite', id : 10126, inParams : {'value': <tPumpRegulation> undefined}};
export let ReadSystemRunTime = {type : 'handlePropertyRead', id : 10127, outParams : {'machine_hours': <uint32_t> undefined,
                                 'jet_hours': <uint32_t> undefined, 'rtp_hours': <uint32_t> undefined}};
export let WriteSystemRunTime = {type : 'handlePropertyWrite', id : 10127, inParams : {'machine_hours': <uint32_t> undefined,
                                 'jet_hours': <uint32_t> undefined, 'rtp_hours': <uint32_t> undefined}};
export let ChangeDirectory = {type : 'handleActivateFunction', id : 10128, inParams : {'path': <wchar_t> undefined,
                             'isPathRelative': <bool> undefined}, outParams : {'result': <bool> undefined}};
export let ListItems = {type : 'handleActivateFunction', id : 10129, inParams : {'doRecurse': <bool> undefined,
                         'filter': <TContentType> undefined}, outParams : {'files': <QString[]> undefined}};
export let LoadFile = {type : 'handleActivateFunction', id : 10130, inParams : {'label': <wchar_t> undefined},
                         outParams : {'result': <bool> undefined}};
export let ListLabels = {type : 'handleActivateFunction', id : 10131, outParams : {'labels': <QString[]> undefined}};
export let ReadPrintEnable = {type : 'handlePropertyRead', id : 10132, outParams : {'bEnable': <bool> undefined}};
export let WritePrintEnable = {type : 'handlePropertyWrite', id : 10132, inParams : {'bEnable': <bool> undefined}};
export let ReadInkLevel = {type : 'handlePropertyRead', id : 10133, outParams : {'level': <uint8_t> undefined}};
export let ReadSolventLevel = {type : 'handlePropertyRead', id : 10134, outParams : {'level': <uint8_t> undefined}};
export let ReadInkState = {type : 'handlePropertyRead', id : 10135, outParams : {'level': <tLevelStatus> undefined}};
export let ReadSolventState = {type : 'handlePropertyRead', id : 10136, outParams : {'level': <tLevelStatus> undefined}};
export let SimulateProductDetect = {type : 'handleActivateFunction', id : 10139};
export let ReadDateTimeFormat = {type : 'handlePropertyRead', id : 10140, outParams : {'DateTimeFormat': <wchar_t> undefined}};
export let WriteDateTimeFormat = {type : 'handlePropertyWrite', id : 10140,
                                    inParams : {'DateTimeFormat': <wchar_t> undefined}};
export let ReadLogFilters = {type : 'handlePropertyRead', id : 10141,
                             inParams : {'log': <tLogType> undefined}, outParams : {'filters': <QString[]> undefined}};
export let ReadLogResults = {type : 'handlePropertyRead', id : 10142, inParams : {'pageNum': <uint32_t> undefined},
                             outParams : {'logValid': <bool> undefined, 'page': <QString[]> undefined}};
export let CreateLog = {type : 'handleActivateFunction', id : 10143, inParams : {'logs': <tLogType[]> undefined,
                         'numPerPage': <uint16_t> undefined, 'filters': <TFilterType[]> undefined, 'fromTime': <char> undefined,
                          'toTime': <char> undefined}, outParams : {'numPages': <uint32_t> undefined, 'page1': <QString[]> undefined}};
export let CreateLogFile = {type : 'handleActivateFunction', id : 10144, inParams : {'filename': <wchar_t> undefined,
                             'logs': <tLogType[]> undefined, 'filters': <TFilterType[]> undefined, 'fromTime': <char> undefined,
                              'toTime': <char> undefined}, outParams : {'fileCreated': <bool> undefined}};
export let ReadProductDetectState = {type : 'handlePropertyRead', id : 10145, inParams : {'pciID': <uint8_t> undefined},
                                     outParams : {'state': <bool> undefined}};
export let ReadViscosityLimits = {type : 'handlePropertyRead', id : 10146,
                                     outParams : {'lowerLimit': <float> undefined, 'upperLimit': <float> undefined}};
export let ResetFluidMonitorTriggerLevels = {type : 'handleActivateFunction', id : 10147 };
export let ReadExpectedViscosityLimits = {type : 'handlePropertyRead', id : 10148,
                                         outParams : {'lowerLimit': <float> undefined, 'upperLimit': <float> undefined}};
export let ReadPrinterStartingMode = {type : 'handlePropertyRead', id : 10150, outParams : {'mode': <tPrinterStartingMode> undefined}};
export let WritePrinterStartingMode = {type : 'handlePropertyWrite', id : 10150, inParams : {'mode': <tPrinterStartingMode> undefined}};
export let ReadSystemRunTimeSincePowerOn = {type : 'handlePropertyRead', id : 10151, outParams : {'machine_hours': <uint32_t> undefined,
                                             'jet_hours': <uint32_t> undefined}};
export let ReadModulationFrequencyLimits = {type : 'handlePropertyRead', id : 10152, outParams : {'lowerLimit': <uint32_t> undefined,
                                             'upperLimit': <uint32_t> undefined}};
export let ReadCurrentChargeLevel = {type : 'handlePropertyRead', id : 10153, inParams : {'ucJetID': <uint8_t> undefined},
                                     outParams : {'current_charge_level': <uint16_t> undefined}};
export let ReadAvailableFonts = {type : 'handlePropertyRead', id : 10154, outParams : {'fonts': <QString[]> undefined}};
export let ReadFontHeight = {type : 'handlePropertyRead', id : 10155, inParams : {'font': <char> undefined},
                             outParams : {'height': <uint8_t> undefined}};
export let ReadAvailableRasters = {type : 'handlePropertyRead', id : 10156,
                                     outParams : {'rasters': <QString[]> undefined}};
export let ReadRasterDetails = {type : 'handlePropertyRead', id : 10157, inParams : {'raster': <char> undefined},
                                 outParams : {'details': <TRasterDetails> undefined}};
export let ReadMaxJetHeight = {type : 'handlePropertyRead', id : 10158, outParams : {'maxHeight': <uint8_t> undefined}};
export let ReadOriginalModSetPoint = {type : 'handleActivateFunction', id : 10161, inParams : {'ucJetID': <uint8_t> undefined},
                                     outParams : {'iSetpoint': <int16_t> undefined}};
export let ReadOriginalPressureSetpoint = {type : 'handlePropertyRead', id : 10162,
                                             outParams : {'originalPrintingPressure': <int16_t> undefined}};
export let ReadElementTypeLimits = {type : 'handlePropertyRead', id : 10163, outParams : {'limits': <TElementLimit[]> undefined}};
export let GenerateEditorBitmap = {type : 'handleActivateFunction', id : 18000, inParams : {'cilfLabel': <utf8> undefined,
                                     'adjustDimensions': <bool> undefined}, outParams : {'bitmapData': <quint8[]> undefined}};
export let EditorBitmapDimensions = {type : 'handleActivateFunction', id : 18001, inParams : {'cilfLabel': <utf8> undefined},
                                     outParams : {'width': <uint32_t> undefined, 'height': <uint32_t> undefined}};
export let MaxPrintSpeedMetersPerSecond = {type : 'handleActivateFunction', id : 18002, inParams : {'cilfLabel': <utf8> undefined},
                                             outParams : {'maxSpeedMpS': <float> undefined}};
export let SavePrinterHardwareConfiguration = {type : 'handleActivateFunction', id : 18003 };
export let ReadActiveAlerts = {type : 'handlePropertyRead', id : 18004, outParams : {'events': <TActiveAlert[]> undefined}};
export let RestartPrinter = {type : 'handleActivateFunction', id : 18005 };
export let SetSleepMode = {type : 'handleActivateFunction', id : 18006 };
export let ReadFontInfo = {type : 'handlePropertyRead', id : 18007, inParams : {'font': <char> undefined},
                             outParams : {'info': <TFontInfo> undefined}};
export let ReadLastJetProfileData = {type : 'handlePropertyRead', id : 18008, outParams : {'JetData': <TJetInfoChar[]> undefined}};
export let ReadLastJetProfileTime = {type : 'handlePropertyRead', id : 18009, outParams : {'time': <char> undefined}};
export let UnloadAllLabels = {type : 'handleActivateFunction', id : 18010};
export let ReadUberlogHeader = {type : 'handlePropertyRead', id : 18011, inParams : {'version': <uint16_t> undefined},
                                outParams : {'version_ack': <uint16_t> undefined, 'persistent_data': <char> undefined,
                                'column_metadata': <char> undefined}};
export let ReadUberlogDataSnapshotBasic = {type : 'handlePropertyRead', id : 18012,
                                         inParams : {'version': <uint16_t> undefined}, outParams : {'version_ack': <uint16_t> undefined,
                                          'numeric_data': <float[]> undefined, 'text_data': <QString[]> undefined}};
export let ReadUberlogDataSnapshot = {type : 'handlePropertyRead', id : 18013, inParams : {'version': <uint16_t> undefined},
                                     outParams : {'version_ack': <uint16_t> undefined, 'bit1_data': <quint8[]> undefined,
                                     'bit8_data': <quint8[]> undefined, 'bit16_data': <quint16[]> undefined,
                                     'bit32_data': <quint32[]> undefined, 'text_data': <QString[]> undefined}};
export let SetSecurityMode = {type : 'handleActivateFunction', id : 18014, inParams : {'mode': <uint32_t> undefined}};
export let ReadAvailablePrintFormats = {type : 'handlePropertyRead', id : 18015, outParams : {'print_formats': <QString[]> undefined}};
export let ReadAvailableSecurityModes = {type : 'handlePropertyRead', id : 18016, outParams : {'modes': <quint32[]> undefined}};
export let ReadEmailClientMode = {type : 'handlePropertyRead', id : 1700, outParams : {'mode': <tEmailClientMode> undefined}};
export let WriteEmailClientMode = {type : 'handlePropertyWrite', id : 1700, inParams : {'mode': <tEmailClientMode> undefined}};
export let ReadSmtpServerAddress = {type : 'handlePropertyRead', id : 1701, outParams : {'address': <char> undefined}};
export let WriteSmtpServerAddress = {type : 'handlePropertyWrite', id : 1701, inParams : {'address': <char> undefined}};
export let ReadSmtpServerPort = {type : 'handlePropertyRead', id : 1702, outParams : {'address': <uint32_t> undefined}};
export let WriteSmtpServerPort = {type : 'handlePropertyWrite', id : 1702, inParams : {'address': <uint32_t> undefined}};
export let ReadLoginMode = {type : 'handlePropertyRead', id : 1703, outParams : {'mode': <tLoginMode> undefined}};
export let WriteLoginMode = {type : 'handlePropertyWrite', id : 1703, inParams : {'mode': <tLoginMode> undefined}};
export let ReadLoginName = {type : 'handlePropertyRead', id : 1704, outParams : {'name': <char> undefined}};
export let WriteLoginName = {type : 'handlePropertyWrite', id : 1704, inParams : {'name': <char> undefined}};
export let ReadLoginPassword = {type : 'handlePropertyRead', id : 1705, outParams : {'password': <char> undefined}};
export let WriteLoginPassword = {type : 'handlePropertyWrite', id : 1705, inParams : {'password': <char> undefined}};
export let ReadEmailHeaderSendTo = {type : 'handlePropertyRead', id : 1706, outParams : {'toAdresses': <char> undefined}};
export let WriteEmailHeaderSendTo = {type : 'handlePropertyWrite', id : 1706, inParams : {'toAdresses': <char> undefined}};
export let ReadEmailHeaderSendFrom = {type : 'handlePropertyRead', id : 1707, outParams : {'fromAddress': <char> undefined}};
export let WriteEmailHeaderSendFrom = {type : 'handlePropertyWrite', id : 1707, inParams : {'fromAddress': <char> undefined}};
export let ReadEmailHeaderSubject = {type : 'handlePropertyRead', id : 1708, outParams : {'subject': <wchar_t> undefined}};
export let WriteEmailHeaderSubject = {type : 'handlePropertyWrite', id : 1708, inParams : {'subject': <wchar_t> undefined}};
export let ReadTLSMode = {type : 'handlePropertyRead', id : 1709, outParams : {'mode': <tTlsMode> undefined}};
export let WriteTLSMode = {type : 'handlePropertyWrite', id : 1709, inParams : {'mode': <tTlsMode> undefined}};
export let ReadSSLServerName = {type : 'handlePropertyRead', id : 1710, outParams : {'name': <char> undefined}};
export let WriteSSLServerName = {type : 'handlePropertyWrite', id : 1710, inParams : {'name': <char> undefined}};
export let ReadSSLCertFile = {type : 'handlePropertyRead', id : 1711, outParams : {'filePath': <char> undefined}};
export let WriteSSLCertFile = {type : 'handlePropertyWrite', id : 1711, inParams : {'filePath': <char> undefined}};
export let GetEnabledAlerts = {type : 'handleActivateFunction', id : 1720, outParams : {'list': <TEmailAlert[]> undefined}};
export let SetEnabledAlerts = {type : 'handleActivateFunction', id : 1721, inParams : {'ids': <QString[]> undefined}};
export let SendTestMail = {type : 'handleActivateFunction', id : 1722, outParams : {'errorTxt': <char> undefined,
                             'CHAR': <uint32_t> undefined}};
export let ReadPacksSupported = {type : 'handlePropertyRead', id : 28000, outParams : {'list': <QString[]> undefined}};
export let ReadPacksInstalled = {type : 'handlePropertyRead', id : 28001, outParams : {'list': <TPackInfo[]> undefined}};
export let ReadPacksInstallable = {type : 'handlePropertyRead', id : 28002, outParams : {'list': <TPackInfo[]> undefined}};
export let InstallPackUsingID = {type : 'handleActivateFunction', id : 28004, inParams : {'packId': <char> undefined,
                                 'isTrialPack': <bool> undefined}};
export let InstallPackUsingInfo = {type : 'handleActivateFunction', id : 28005, inParams : {'packInfo': <TPackInfo> undefined}};
export let MigratePack = {type : 'handleActivateFunction', id : 28006, inParams : {'packId': <char> undefined}};
export let ReadPackRunHours = {type : 'handlePropertyRead', id : 28007, inParams : {'packId': <char> undefined},
                                 outParams : {'runHours': <uint16_t> undefined}};
export let ReadProgramPacksChallenge = {type : 'handleActivateFunction', id : 28008,
                                         outParams: {'smartcardSerialNumber': <char> undefined, 'publicKey': <char> undefined}};
export let ProgramPacks = {type : 'handleActivateFunction', id : 28009,
                             inParams : {'smartcardSerialNumber': <char> undefined, 'encryptedPacksData': <char> undefined}};
export let ReadPacksNotAvailableAsTrial = {type : 'handlePropertyRead', id : 28010, outParams : {'list': <QString[]> undefined}};
export let ReadEDCHistoryQueueConfig = {type : 'handlePropertyRead', id : 20000,
                                         outParams : {'edcHistoryQueueConfig': <TEDCHistoryQueueConfig> undefined}};
export let WriteEDCHistoryQueueConfig = {type : 'handlePropertyWrite', id : 20000,
                                    inParams: {'edcHistoryQueueConfig': <TEDCHistoryQueueConfig> undefined}};
export let ReadTriggerConfig = {type : 'handlePropertyRead', id : 20001, outParams : {'triggerConfig': <TTriggerConfig> undefined}};
export let WriteTriggerConfig = {type : 'handlePropertyWrite', id : 20001, inParams : {'triggerConfig': <TTriggerConfig> undefined}};
export let ReadPDConfig = {type : 'handlePropertyRead', id : 20002, outParams : {'pdConfig': <TPDConfig> undefined}};
export let WritePDConfig = {type : 'handlePropertyWrite', id : 20002, inParams : {'pdConfig': <TPDConfig> undefined}};
export let ReadGPIConfig = {type : 'handlePropertyRead', id : 20003, outParams : {'gpiConfig': <TGPIConfig> undefined}};
export let WriteGPIConfig = {type : 'handlePropertyWrite', id : 20003, inParams : {'gpiConfig': <TGPIConfig> undefined}};
export let ReadEncoderConfig = {type : 'handlePropertyRead', id : 20004, outParams : {'encoderConfig': <TEncoderConfig> undefined}};
export let WriteEncoderConfig = {type : 'handlePropertyWrite', id : 20004, inParams : {'encoderConfig': <TEncoderConfig> undefined}};
export let ReadAbortConfig = {type : 'handlePropertyRead', id : 20006, outParams : {'abortConfig': <TAbortConfig> undefined}};
export let WriteAbortConfig = {type : 'handlePropertyWrite', id : 20006, inParams : {'abortConfig': <TAbortConfig> undefined}};
export let ReadBehPDEventEnable = {type : 'handlePropertyRead', id : 20008, outParams : {'enable': <bool> undefined}};
export let WriteBehPDEventEnable = {type : 'handlePropertyWrite', id : 20008, inParams : {'enable': <bool> undefined}};
export let ReadDropVelocityEventName = {type : 'handlePropertyRead', id : 20009, outParams : {'enable': <char> undefined}};
export let WriteDropVelocityEventName = {type : 'handlePropertyWrite', id : 20009, inParams : {'enable': <char> undefined}};
export let ReadGpiDebounceUS = {type : 'handlePropertyRead', id : 20010, outParams : {'gpiDebounceUS': <uint32_t> undefined}};
export let WriteGpiDebounceUS = {type : 'handlePropertyWrite', id : 20010, inParams : {'gpiDebounceUS': <uint32_t> undefined}};
export let ReadGpoPulseMS = {type : 'handlePropertyRead', id : 20011, outParams : {'gpoPulsesMS': <float> undefined}};
export let WriteGpoPulseMS = {type : 'handlePropertyWrite', id : 20011, inParams : {'gpoPulsesMS': <float> undefined}};
export let ReadCommonQueueDepth = {type : 'handlePropertyRead', id : 20013, outParams : {'queueDepth': <uint32_t> undefined}};
export let WriteCommonQueueDepth = {type : 'handlePropertyWrite', id : 20013, inParams : {'queueDepth': <uint32_t> undefined}};
export let ReadAvailableEDCQueues = {type : 'handlePropertyRead', id : 20100, outParams : {'queueCol': <QString[]> undefined}};
export let ReadCurrentPDState = {type : 'handlePropertyRead', id : 20101, outParams : {'state': <bool> undefined}};
export let ReadCurrentPDFreq = {type : 'handlePropertyRead', id : 20102, outParams : {'freq': <float> undefined}};
export let ReadEncoderCount = {type : 'handlePropertyRead', id : 20103, outParams : {'count': <uint32_t> undefined}};
export let ReadCurrentEncoderFreq = {type : 'handlePropertyRead', id : 20104, outParams : {'freq': <float> undefined}};
export let ReadBacklashCount = {type : 'handlePropertyRead', id : 20105, outParams : {'count': <uint32_t> undefined}};
export let ReadPDQueueState = {type : 'handlePropertyRead', id : 20106, outParams : {'state': <bool> undefined}};
export let ReadCurrentLineSpeed = {type : 'handlePropertyRead', id : 20107, outParams : {'speed': <uint32_t> undefined}};
export let GetGPIOPinAssignment = {type : 'handleActivateFunction', id : 20201, inParams : {'pinCfg': <TPinConfig> undefined},
                                     outParams : {'pinSettings': <TPinSettings> undefined}};
export let SetGPIOPinAssignment = {type : 'handleActivateFunction', id : 20202, inParams : {'config': <TPinSettings> undefined}};
export let ClearGPIOPinAssignment = {type : 'handleActivateFunction', id : 20203, inParams : {'pinCfg': <TPinConfig> undefined}};
export let GetGPIOPortAssignment = {type : 'handleActivateFunction', id : 20204, inParams : {'portType': <tPortType> undefined},
                                     outParams : {'config': <TPinSettings[]> undefined}};
export let SetGPIOPortAssignment = {type : 'handleActivateFunction', id : 20205,
                                     inParams : {'portType': <tPortType> undefined, 'config': <TPinSettings[]> undefined}};
export let ClearGPIOPortAssignment = {type : 'handleActivateFunction', id : 20206, inParams : {'portType': <tPortType> undefined}};
export let GetEDCConfig = {type : 'handleActivateFunction', id : 20207,
                         inParams : {'dataSinkId': <char> undefined}, outParams : {'config': <TEDCConfig> undefined}};
export let SetEDCConfig = {type : 'handleActivateFunction', id : 20208, inParams : {'config': <TEDCConfig> undefined}};
export let ResetBacklash = {type : 'handleActivateFunction', id : 20210};
export let GetEDCQueueState = {type : 'handleActivateFunction', id : 20211,
                             inParams : {'queueName': <char> undefined}, outParams : {'elemsNr': <uint32_t> undefined}};
export let ClearGPIHardwareQueue = {type : 'handleActivateFunction', id : 20212 };
export let ClearPDQueue = {type : 'handleActivateFunction', id : 20213 };
export let ClearEDCQueue = {type : 'handleActivateFunction', id : 20214, inParams : {'queueName': <char> undefined}};
export let ClearEDCHistoryQueue = {type : 'handleActivateFunction', id : 20215 };
export let SetOutPin = {type : 'handleActivateFunction', id : 20216,
            inParams : {'line': <tGpioLineSelector> undefined, 'level': <tOutputActiveLevel> undefined, 'pciId': <uint8_t> undefined}};
export let GetOutPin = {type : 'handleActivateFunction', id : 20218, inParams : {'pciId': <uint8_t> undefined},
                         outParams : {'portValue': <uint16_t> undefined}};
export let ReadPDDebounceTimeMSLimits = {type : 'handlePropertyRead', id : 20221,
                                         outParams : {'lowerLimit': <float> undefined, 'upperLimit': <float> undefined}};
export let ReadFlightDistanceLimits = {type : 'handlePropertyRead', id : 20223, outParams : {'lowerLimit': <float> undefined,
                                         'upperLimit': <float> undefined}};
export let ReadJetVelocityMMPerSLimits = {type : 'handlePropertyRead', id : 20224, outParams : {'lowerLimit': <uint32_t> undefined,
                                             'upperLimit': <uint32_t> undefined}};
export let ReadProductQueueDepthLimits = {type : 'handlePropertyRead', id : 20225, outParams : {'lowerLimit': <uint32_t> undefined,
                                             'upperLimit': <uint32_t> undefined}};
export let ReadGPIHwQueueDepthLimits = {type : 'handlePropertyRead', id : 20226, outParams : {'lowerLimit': <uint32_t> undefined,
                                         'upperLimit': <uint32_t> undefined}};
export let ReadPrintDelayLimits = {type : 'handlePropertyRead', id : 20228, outParams : {'lowerLimit': <float> undefined,
                                     'upperLimit': <float> undefined}};
export let ReadEncoderIntVelocityLimits = {type : 'handlePropertyRead', id : 20229, outParams : {'lowerLimit': <float> undefined,
                                             'upperLimit': <float> undefined}};
export let ReadEncoderPerDurMSLimits = {type : 'handlePropertyRead', id : 20231, outParams : {'lowerLimit': <float> undefined,
                                         'upperLimit': <float> undefined}};
export let ReadGPOOutputPulseMSLimits = {type : 'handlePropertyRead', id : 20232, outParams : {'lowerLimit': <float> undefined,
                                         'upperLimit': <float> undefined}};
export let ReadGPIDebounceUSLimits = {type : 'handlePropertyRead', id : 20233, outParams : {'lowerLimit': <uint32_t> undefined,
                                     'upperLimit': <uint32_t> undefined}};
export let ReadGPISyncDepthLimits = {type : 'handlePropertyRead', id : 20234, outParams : {'lowerLimit': <uint32_t> undefined,
                                     'upperLimit': <uint32_t> undefined}};
export let ReadEDCPacketLengthLimits = {type : 'handlePropertyRead', id : 20235, outParams : {'lowerLimit': <uint32_t> undefined,
                                         'upperLimit': <uint32_t> undefined}};
export let ReadWatermarkLevelLimits = {type : 'handlePropertyRead', id : 20236, outParams : {'lowerLimit': <uint32_t> undefined,
                                         'upperLimit': <uint32_t> undefined}};
export let ReadEDCDuplicatesLimits = {type : 'handlePropertyRead', id : 20237, outParams : {'lowerLimit': <uint32_t> undefined,
                                         'upperLimit': <uint32_t> undefined}};
export let ReadEDCQueueDepthLimits = {type : 'handlePropertyRead', id : 20238, outParams : {'lowerLimit': <uint32_t> undefined,
                                         'upperLimit': <uint32_t> undefined}};
export let GetInPin = {type : 'handleActivateFunction', id : 20239, inParams : {'pciId': <uint8_t> undefined},
                         outParams : {'portValue': <uint16_t> undefined}};
export let ReadPrintContinuousEnabled = {type : 'handlePropertyRead', id : 20240, outParams : {'enabled': <bool> undefined}};
export let WritePrintContinuousEnabled = {type : 'handlePropertyWrite', id : 20240, inParams : {'enabled': <bool> undefined}};
export let ReadPrintContinuousInternalRate = {type : 'handlePropertyRead', id : 20241,
                                             outParams : {'encoderIntVelocity': <float> undefined}};
export let WritePrintContinuousInternalRate = {type : 'handlePropertyWrite', id : 20241,
                                                 inParams : {'encoderIntVelocity': <float> undefined}};
export let ReadPrintContinuousInternalProductDetectPosition = {type : 'handlePropertyRead', id : 20243,
                                                             outParams : {'pdIntPosition': <float> undefined}};
export let WritePrintContinuousInternalProductDetectPosition = {type : 'handlePropertyWrite', id : 20243,
                                                                 inParams : {'pdIntPosition': <float> undefined}};
export let ReadPDDistanceLimits = {type : 'handlePropertyRead', id : 20251,
                                     outParams : {'lowerLimit': <float> undefined, 'upperLimit': <float> undefined}};
export let ReadPDPersistenceLimits = {type : 'handlePropertyRead', id : 20252, outParams : {'lowerLimit': <float> undefined,
                                     'upperLimit': <float> undefined}};
export let ReadEDCHistorySize = {type : 'handlePropertyRead', id : 20253, outParams : {'elemsNr': <uint32_t> undefined}};
export let GetGPIOTestModeEnabled = {type : 'handleActivateFunction', id : 20254, outParams : {'enabled': <bool> undefined}};
export let SetGPIOTestModeEnabled = {type : 'handleActivateFunction', id : 20255, inParams : {'enabled': <bool> undefined,
                                     'pciId': <uint8_t> undefined}};
export let ReadStrokeResolutionLimits = {type : 'handlePropertyRead', id : 20261, outParams : {'lowerLimit': <uint32_t> undefined,
                                         'upperLimit': <uint32_t> undefined}};
export let ReadGlobalStrokePitchGoalLimits = {type : 'handlePropertyRead', id : 20262, outParams : {'lowerLimit': <float> undefined,
                         'upperLimit': <float> undefined, 'lowerLimitAbs': <float> undefined, 'upperLimitAbs': <float> undefined}};
export let ReadCalibrationDistanceLimits = {type : 'handlePropertyRead', id : 20263, outParams : {'lowerLimit': <uint32_t> undefined,
                                         'upperLimit': <uint32_t> undefined}};
export let ReadCalibrationPulseCountLimits = {type : 'handlePropertyRead', id : 20264, outParams : {'lowerLimit': <uint32_t> undefined,
                                             'upperLimit': <uint32_t> undefined}};
export let ReadGpiMaxPinsNr = {type : 'handlePropertyRead', id : 20265, outParams : {'gpiMaxPinsNr': <uint8_t> undefined}};
export let ReadGpoMaxPinsNr = {type : 'handlePropertyRead', id : 20266, outParams : {'gpoMaxPinsNr': <uint8_t> undefined}};
export let WriteEncoderSetting = {type : 'handlePropertyWrite', id : 20267, inParams : {'encoderConfig': <TEncoderConfig> undefined,
                                     'changedSettingIds': <tEncoderConfigSettingId> undefined}};
export let WriteProductDetectSetting = {type : 'handlePropertyWrite', id : 20268, inParams : {'pdConfig': <TPDConfig> undefined,
                                         'changedSettingIds': <tPDConfigSettingId> undefined}};
export let ReadEncoderResolution = {type : 'handlePropertyRead', id : 20269, inParams : {'config': <TEncoderConfig> undefined},
                                     outParams : {'resolution': <float> undefined}};
export let ReadEncoderTriggerModeDynamicLimits = {type : 'handlePropertyRead', id : 20270,
                                         outParams : {'lowerLimit': <tTriggerMode> undefined, 'upperLimit': <tTriggerMode> undefined}};
export let ReadVelocityEncoderCount = {type : 'handlePropertyRead', id : 20271, outParams : {'velicityCount': <uint32_t> undefined}};
export let ReadEncoderTriggerModeLimits = {type : 'handlePropertyRead', id : 20274, outParams : {'lowerLimit': <tTriggerMode> undefined,
                                         'upperLimit': <tTriggerMode> undefined}};
export let ReadDigitalGearboxMultiplierLimits = {type : 'handlePropertyRead', id : 20275,
                                 outParams : {'lowerLimit': <tGearboxMultiplier> undefined, 'upperLimit': <tGearboxMultiplier> undefined}};
export let ReadDigitalGearboxDividerLimits = {type : 'handlePropertyRead', id : 20276, outParams : {'lowerLimit': <uint32_t> undefined,
                                             'upperLimit': <uint32_t> undefined}};
export let GetGPIOLabelSelection = {type : 'handleActivateFunction', id : 20277, outParams : {'enabled': <bool> undefined}};
export let SetGPIOLabelSelection = {type : 'handleActivateFunction', id : 20278, inParams : {'enableLabelSelection': <bool> undefined},
                                     outParams : {'success': <bool> undefined}};
export let SetupGPIOLabelSelection = {type : 'handleActivateFunction', id : 20279,
                                     inParams : {'enableLabelSelection': <bool> undefined}, outParams : {'success': <bool> undefined}};
export let ReadMaxSelectionSlot = {type : 'handlePropertyRead', id : 20280, outParams : {'maxSelectionSlot': <uint32_t> undefined}};
export let GetFunctionSystemIds = {type : 'handleActivateFunction', id : 20281, inParams : {'functionNames': <QString[]> undefined,
                                 'checkConfigured': <bool> undefined}, outParams : {'systemIds': <QString[]> undefined}};
export let GetInvertFunctionNames = {type : 'handleActivateFunction', id : 20282, outParams : {'funcNames': <QString[]> undefined}};
export let GetReverseFunctionNames = {type : 'handleActivateFunction', id : 20283, outParams : {'funcNames': <QString[]> undefined}};
export let GetUpdateFunctionNames = {type : 'handleActivateFunction', id : 20284, outParams : {'funcNames': <QString[]> undefined}};
export let GetResetFunctionNames = {type : 'handleActivateFunction', id : 20285, outParams : {'funcNames': <QString[]> undefined}};
export let GetShowHideFunctionNames = {type : 'handleActivateFunction', id : 20286, outParams : {'funcNames': <QString[]> undefined}};
export let ReadPrintheadName = {type : 'handlePropertyRead', id : 11000, outParams : {'printheadName': <char> undefined}};
export let WritePrintheadName = {type : 'handlePropertyWrite', id : 11000, inParams : {'printheadName': <char> undefined}};
export let ReadPrintheadType = {type : 'handlePropertyRead', id : 11001, outParams : {'val': <tPrintheadType> undefined}};
export let ReadIsDuo = {type : 'handlePropertyRead', id : 11002, outParams : {'val': <bool> undefined}};
export let ReadSelectedPrintheadInfo = {type : 'handlePropertyRead', id : 11003, inParams : {'printheadName': <char> undefined},
                                     outParams : {'printheadInfo': <TSelectedPrintheadInfo> undefined}};
export let ReadPrintheadNameList = {type : 'handlePropertyRead', id : 11004, outParams : {'printheadName': <QString[]> undefined}};
export let ReadNozzleSize = {type : 'handlePropertyRead', id : 11005, outParams : {'nozzle_size': <uint8_t> undefined}};
export let ReadConduitLength = {type : 'handlePropertyRead', id : 11006, outParams : {'conduit_length': <uint8_t> undefined}};
export let ReadModulationFrequency = {type : 'handlePropertyRead', id : 11007, outParams : {'modulation_frequency': <uint32_t> undefined}};
export let InjectExternalStrokeCol = {type : 'handleActivateFunction', id : 10202, inParams : {'strokeCol': <TStroke[]> undefined}};
export let ReadPrinterInkName = {type : 'handlePropertyRead', id : 15001, outParams : {'val': <char> undefined}};
export let WritePrinterInkName = {type : 'handlePropertyWrite', id : 15001, inParams : {'val': <char> undefined}};
export let ReadPrinterInkId = {type : 'handlePropertyRead', id : 15002, outParams : {'val': <uint16_t> undefined}};
export let ReadConsumableInkName = {type : 'handlePropertyRead', id : 15003, outParams : {'val': <char> undefined}};
export let ReadConsumableInkId = {type : 'handlePropertyRead', id : 15004, outParams : {'val': <uint16_t> undefined}};
export let ReadInkCapacity = {type : 'handlePropertyRead', id : 15005, outParams : {'val': <uint8_t> undefined}};
export let ReadAvailInkNames = {type : 'handlePropertyRead', id : 15006, outParams : {'vec': <QString[]> undefined}};
export let ReadITMLifeIILOffUser = {type : 'handlePropertyRead', id : 15007, outParams : {'val': <uint32_t> undefined}};
export let WriteITMLifeIILOffUser = {type : 'handlePropertyWrite', id : 15007, inParams : {'val': <uint32_t> undefined}};
export let ReadInkExpiry = {type : 'handlePropertyRead', id : 15008, outParams : {'val': <uint16_t> undefined}};
export let ReadInkViscosityParamA = {type : 'handlePropertyRead', id : 15009, outParams : {'val': <uint16_t> undefined}};
export let ReadInkViscosityParamB = {type : 'handlePropertyRead', id : 15010, outParams : {'val': <uint16_t> undefined}};
export let ReadIILState = {type : 'handlePropertyRead', id : 15011, outParams : {'state': <tIILState> undefined}};
export let ReadMakeupExpiry = {type : 'handlePropertyRead', id : 15012, outParams : {'val': <uint16_t> undefined}};
export let ReadMakeupCapacity = {type : 'handlePropertyRead', id : 15013, outParams : {'val': <uint8_t> undefined}};
export let ReadITMCapacity = {type : 'handlePropertyRead', id : 15014, outParams : {'val': <uint8_t> undefined}};
export let ReadITMExpiry = {type : 'handlePropertyRead', id : 15015, outParams : {'val': <uint16_t> undefined}};
export let ReadITMSerialNumberFirstPrinter = {type : 'handlePropertyRead', id : 15016, outParams : {'val': <char> undefined}};
export let ReadITMTimestampFirstPrinter = {type : 'handlePropertyRead', id : 15017, outParams : {'val': <char> undefined}};
export let ReadITMSerialNumberLastPrinter = {type : 'handlePropertyRead', id : 15018, outParams : {'val': <char> undefined}};
export let ReadITMTimestampLastPrinter = {type : 'handlePropertyRead', id : 15019, outParams : {'val': <char> undefined}};
export let ReadITMLifeInitial = {type : 'handlePropertyRead', id : 15020, outParams : {'val': <uint32_t> undefined}};
export let ReadITMLifeRemaining = {type : 'handlePropertyRead', id : 15021, outParams : {'val': <uint32_t> undefined}};
export let ReadPrinterCustomerId = {type : 'handlePropertyRead', id : 15022, outParams : {'val': <uint8_t> undefined}};
export let ReadPrinterInkPerformance = {type : 'handlePropertyRead', id : 15023, outParams : {'val': <tInkPerformance> undefined}};
export let ReadPrinterInkUsage = {type : 'handlePropertyRead', id : 15024, outParams : {'val': <tInkUsage> undefined}};
export let ReadPrinterRegionId = {type : 'handlePropertyRead', id : 15025, outParams : {'val': <uint8_t> undefined}};
export let ReadITMLifeData = {type : 'handlePropertyRead', id : 15026, outParams : {'CHAR': <quint32[]> undefined}};
export let ReadInkITMCompatibility = {type : 'handlePropertyRead', id : 15027, outParams : {'val': <uint8_t> undefined}};
export let ReadInkSerialNumberFirstPrinter = {type : 'handlePropertyRead', id : 15028, outParams : {'val': <char> undefined}};
export let ReadInkTimestampFirstPrinter = {type : 'handlePropertyRead', id : 15029, outParams : {'val': <char> undefined}};
export let ReadInkSerialNumberLastPrinter = {type : 'handlePropertyRead', id : 15030, outParams : {'val': <char> undefined}};
export let ReadInkTimestampLastPrinter = {type : 'handlePropertyRead', id : 15031, outParams : {'val': <char> undefined}};
export let ReadInkBatchCode = {type : 'handlePropertyRead', id : 15032, outParams : {'val': <char> undefined}};
export let ReadConsumableMakeupId = {type : 'handlePropertyRead', id : 15033, outParams : {'val': <uint16_t> undefined}};
export let ReadMakeupSerialNumberFirstPrinter = {type : 'handlePropertyRead', id : 15034, outParams : {'val': <char> undefined}};
export let ReadMakeupTimestampFirstPrinter = {type : 'handlePropertyRead', id : 15035, outParams : {'val': <char> undefined}};
export let ReadMakeupSerialNumberLastPrinter = {type : 'handlePropertyRead', id : 15036, outParams : {'val': <char> undefined}};
export let ReadMakeupTimestampLastPrinter = {type : 'handlePropertyRead', id : 15037, outParams : {'val': <char> undefined}};
export let ReadMakeupBatchCode = {type : 'handlePropertyRead', id : 15038, outParams : {'val': <char> undefined}};
export let ReadITMLifeWarnings = {type : 'handlePropertyRead', id : 15039, outParams : {'firstWarning': <uint16_t> undefined,
                                 'finalWarning': <uint16_t> undefined}};
export let WriteITMLifeWarnings = {type : 'handlePropertyWrite', id : 15039, inParams : {'firstWarning': <uint16_t> undefined,
                                 'finalWarning': <uint16_t> undefined}};
export let ReadIsPrinterITM4 = {type : 'handlePropertyRead', id : 15040, outParams : {'isPrinterITM4': <bool> undefined}};
export let SetPrinterAsITM4 = {type : 'handleActivateFunction', id : 15041, outParams : {'bITM4SetSuccess': <bool> undefined}};
export let ReadRemainingInkPercentages = {type : 'handlePropertyRead', id : 15042,
                                         outParams : {'percentageInCartridge': <uint8_t> undefined,
                                         'percentageInModule': <uint8_t> undefined}};
export let ReadRemainingSolventPercentages = {type : 'handlePropertyRead', id : 15043, outParams : {
                            'percentageInCartridge': <uint8_t> undefined, 'percentageInModule': <uint8_t> undefined}};
export let ReadInspectionTimeMode = {type : 'handlePropertyRead', id : 25000, outParams : {'val': <tInspectionTimeMode> undefined}};
export let WriteInspectionTimeMode = {type : 'handlePropertyWrite', id : 25000, inParams : {'val': <tInspectionTimeMode> undefined}};
export let ReadRunHoursToNextInspection = {type : 'handlePropertyRead', id : 25001, outParams : {'val': <uint16_t> undefined}};
export let WriteRunHoursToNextInspection = {type : 'handlePropertyWrite', id : 25001, inParams : {'val': <uint16_t> undefined}};
export let ReadNextInspectionDate = {type : 'handlePropertyRead', id : 25002, outParams : {'val': <TInspectionDate> undefined}};
export let WriteNextInspectionDate = {type : 'handlePropertyWrite', id : 25002, inParams : {'val': <TInspectionDate> undefined}};
export let ResetInspectionInterval = {type : 'handleActivateFunction', id : 25003 };
export let ReadListReplacements = {type : 'handlePropertyRead', id : 25004, outParams : {'list': <TReplacementInfo[]> undefined}};
export let RecordSparePartReplacement = {type : 'handleActivateFunction', id : 25005,
                                         inParams : {'rep_info': <TReplacementInfo> undefined}};
export let ReadListReplaceableParts = {type : 'handlePropertyRead', id : 25007, outParams : {'list': <QString[]> undefined}};
export let ReadFeatureKeySecurity = {type : 'handlePropertyRead', id : 25008, inParams : {'featureId': <uint8_t> undefined},
                                     outParams : {'isProtected': <bool> undefined}};
export let WriteFeatureKeySecurity = {type : 'handlePropertyWrite', id : 25008, inParams : {'featureId': <uint8_t> undefined,
                                     'isProtected': <bool> undefined}};
export let ReadServiceKeyProtectedFeatureList = {type : 'handlePropertyRead', id : 25010,
                                             outParams : {'list': <TServiceKeyProtectedFeature[]> undefined}};
export let ReadDetectedFeatureKeyList = {type : 'handlePropertyRead', id : 25011, outParams : {'list': <QString[]> undefined}};
export let FeatureKeyDetails = {type : 'handleActivateFunction', id : 25012, inParams : {'serialNo': <char> undefined},
                                 outParams : {'info': <TFeatureKeyDetails> undefined}};
export let ReadIsServiceKeyDetected = {type : 'handlePropertyRead', id : 25013, outParams : {'isDetected': <bool> undefined}};
export let ReadFeatureKeyFactoryDongleFitted = {type : 'handlePropertyRead', id : 25014, outParams : {'dongle_fitted': <bool> undefined}};
export let TestSetInspectionRunHours = {type : 'handleActivateFunction', id : 25015, inParams : {'runHours': <uint16_t> undefined}};
export let ReadScriptInstanceList = {type : 'handlePropertyRead', id : 25016, outParams : {'instanceList': <QString[]> undefined}};
export let ReadScriptInfo = {type : 'handlePropertyRead', id : 25017, inParams : {'instanceName': <char> undefined},
                             outParams : {'BCScriptInfo': <TBCScriptInfo> undefined}};
export let ReadScriptParamValue = {type : 'handlePropertyRead', id : 25018, inParams : {'instanceName': <char> undefined,
                                     'paramName': <char> undefined}, outParams : {'BCScriptVarValue': <TBCScriptVarValue> undefined}};
export let ReadScriptCfgVarValue = {type : 'handlePropertyRead', id : 25019, inParams : {'instanceName': <char> undefined,
                                 'paramName': <char> undefined}, outParams : {'BCScriptVarValue': <TBCScriptVarValue> undefined}};
export let WriteScriptCfgVarValue = {type : 'handlePropertyWrite', id : 25019, inParams : {'instanceName': <char> undefined,
                                    'paramName': <char> undefined, 'BCScriptVarValue': <TBCScriptVarValue> undefined}};
export let DefaultScriptCfgSingleVariable = {type : 'handleActivateFunction', id : 25020, inParams : {'instanceName': <char> undefined,
                                             'paramName': <char> undefined}};
export let DefaultScriptCfgVariables = {type : 'handleActivateFunction', id : 25021, inParams : {'instanceName': <char> undefined}};
export let ReadScriptAutoRunEnabled = {type : 'handlePropertyRead', id : 25022, inParams : {'instanceName': <char> undefined},
                                         outParams : {'isEnabled': <bool> undefined}};
export let WriteScriptAutoRunEnabled = {type : 'handlePropertyWrite', id : 25022, inParams : {'instanceName': <char> undefined,
                                         'isEnabled': <bool> undefined}};
export let ReadWarmUpModeEnable = {type : 'handlePropertyRead', id : 25024, outParams : {'isEnabled': <bool> undefined}};
export let WriteWarmUpModeEnable = {type : 'handlePropertyWrite', id : 25024, inParams : {'isEnabled': <bool> undefined}};
export let ReadWarmUpModeTime = {type : 'handlePropertyRead', id : 25025, outParams : {'time': <uint16_t> undefined}};
export let WriteWarmUpModeTime = {type : 'handlePropertyWrite', id : 25025, inParams : {'time': <uint16_t> undefined}};
export let ReadWakeUpModeEnabled = {type : 'handlePropertyRead', id : 25026, outParams : {'enabled': <bool> undefined}};
export let WriteWakeUpModeEnabled = {type : 'handlePropertyWrite', id : 25026, inParams : {'enabled': <bool> undefined}};
export let ReadWakeUpIntervalInfo = {type : 'handlePropertyRead', id : 25027, outParams : {'value': <uint16_t> undefined,
                             'min': <uint16_t> undefined, 'max': <uint16_t> undefined, 'def': <uint16_t> undefined}};
export let WriteWakeUpIntervalInfo = {type : 'handlePropertyWrite', id : 25027, inParams : {'value': <uint16_t> undefined,
                             'min': <uint16_t> undefined, 'max': <uint16_t> undefined, 'def': <uint16_t> undefined}};
export let ReadSystemDateTime = {type : 'handlePropertyRead', id : 25028, outParams : {'dateTimeInfo': <TDateTimeInfo> undefined}};
export let WriteSystemDateTime = {type : 'handlePropertyWrite', id : 25028, inParams : {'dateTimeInfo': <TDateTimeInfo> undefined}};
export let ReadGlobalBold = {type : 'handlePropertyRead', id : 25032, outParams : {'isGlobalBold': <bool> undefined}};
export let WriteGlobalBold = {type : 'handlePropertyWrite', id : 25032, inParams : {'isGlobalBold': <bool> undefined}};
export let ReadGlobalInterCharGap = {type : 'handlePropertyRead', id : 25033, outParams : {'isGlobalInterCharGap': <bool> undefined}};
export let WriteGlobalInterCharGap = {type : 'handlePropertyWrite', id : 25033, inParams : {'isGlobalInterCharGap': <bool> undefined}};
export let ReadGlobalInvert = {type : 'handlePropertyRead', id : 25034, outParams : {'isGlobalInvert': <bool> undefined}};
export let WriteGlobalInvert = {type : 'handlePropertyWrite', id : 25034, inParams : {'isGlobalInvert': <bool> undefined}};
export let ReadGlobalReverse = {type : 'handlePropertyRead', id : 25035, outParams : {'isGlobalReverse': <bool> undefined}};
export let WriteGlobalReverse = {type : 'handlePropertyWrite', id : 25035, inParams : {'isGlobalReverse': <bool> undefined}};
export let ReadDSTEnabled = {type : 'handlePropertyRead', id : 25036, outParams : {'isEnabled': <bool> undefined}};
export let WriteDSTEnabled = {type : 'handlePropertyWrite', id : 25036, inParams : {'isEnabled': <bool> undefined}};
export let ReadTimeZone = {type : 'handlePropertyRead', id : 25037, outParams : {'timeZone': <char> undefined}};
export let WriteTimeZone = {type : 'handlePropertyWrite', id : 25037, inParams : {'timeZone': <char> undefined}};
export let ReadDefaultRepeatProperties = {type : 'handlePropertyRead', id : 25038,
                                         outParams : {'repeatPropertiesInfo': <TRepeatPropertiesInfo> undefined}};
export let WriteDefaultRepeatProperties = {type : 'handlePropertyWrite', id : 25038,
                                             inParams : {'repeatPropertiesInfo': <TRepeatPropertiesInfo> undefined}};
export let ReadListCalendarNames = {type : 'handlePropertyRead', id : 25040, outParams : {'list': <TSysCalendarStruct[]> undefined}};
export let ReadWashSolventName = {type : 'handlePropertyRead', id : 25041, outParams : {'washSolventName': <char> undefined}};
export let ReadPrinterID = {type : 'handlePropertyRead', id : 25042, outParams : {'printerID': <char> undefined}};
export let WritePrinterID = {type : 'handlePropertyWrite', id : 25042, inParams : {'printerID': <char> undefined}};
export let ReadContactDetails = {type : 'handlePropertyRead', id : 25046, outParams : {'contactDetails': <wchar_t> undefined}};
export let WriteContactDetails = {type : 'handlePropertyWrite', id : 25046, inParams : {'contactDetails': <wchar_t> undefined}};
export let ReadEnergySaveParams = {type : 'handlePropertyRead', id : 25047,
                                     outParams : {'energySaveParams': <TEnergySaveParamsStruct> undefined}};
export let WriteEnergySaveParams = {type : 'handlePropertyWrite', id : 25047,
                                     inParams : {'energySaveParams': <TEnergySaveParamsStruct> undefined}};
export let ReadConfigInfo = {type : 'handlePropertyRead', id : 25050, inParams : {'item': <uint8_t> undefined},
                             outParams : {'configInfo': <char> undefined}};
export let ReadPrintingOffsets = {type : 'handlePropertyRead', id : 25051, outParams : {'forwardOffset': <uint16_t> undefined,
                                 'reverseOffset': <uint16_t> undefined}};
export let WritePrintingOffsets = {type : 'handlePropertyWrite', id : 25051, inParams : {'forwardOffset': <uint16_t> undefined,
                                     'reverseOffset': <uint16_t> undefined}};
export let ReadProductSpecificConfigInfo = {type : 'handlePropertyRead', id : 25052, inParams : {'item_id': <char> undefined},
                                             outParams : {'configInfo': <char> undefined}};
export let ReadDateDayNames = {type : 'handlePropertyRead', id : 25054, inParams : {'calendarType': <uint8_t> undefined},
                                 outParams : {'dayNames': <QString[]> undefined}};
export let WriteDateDayNames = {type : 'handlePropertyWrite', id : 25054, inParams : {'calendarType': <uint8_t> undefined,
                                 'dayNames': <QString[]> undefined}};
export let ReadDateMonthNames = {type : 'handlePropertyRead', id : 25056, inParams : {'calendarType': <uint8_t> undefined},
                                 outParams : {'monthNames': <QString[]> undefined}};
export let WriteDateMonthNames = {type : 'handlePropertyWrite', id : 25056, inParams : {'calendarType': <uint8_t> undefined,
                                 'monthNames': <QString[]> undefined}};
export let ReadAutoModulationStartVoltage = {type : 'handlePropertyRead', id : 25058,
                                 outParams : {'autoModStartVoltageInfo': <TAutoModStartVoltageInfo> undefined}};
export let WriteAutoModulationStartVoltage = {type : 'handlePropertyWrite', id : 25058,
                                 inParams : {'autoModStartVoltageInfo': <TAutoModStartVoltageInfo> undefined}};
export let StartScriptInstance = {type : 'handleActivateFunction', id : 25061, inParams : {'instanceName': <char> undefined,
                                 'labelScript': <bool> undefined}, outParams : {'isSuccess': <bool> undefined}};
export let StopScriptInstance = {type : 'handleActivateFunction', id : 25062, inParams : {'instanceName': <char> undefined},
                                 outParams : {'isSuccess': <bool> undefined}};
export let ReadFeedPumpType = {type : 'handlePropertyRead', id : 25063, outParams : {'feedPumpType': <char> undefined}};
export let WriteFeedPumpType = {type : 'handlePropertyWrite', id : 25063, inParams : {'feedPumpType': <char> undefined}};
export let ReadGutterPumpType = {type : 'handlePropertyRead', id : 25064, outParams : {'gutterPumpType': <char> undefined}};
export let WriteGutterPumpType = {type : 'handlePropertyWrite', id : 25064, inParams : {'gutterPumpType': <char> undefined}};
export let ReadProtocolsList = {type : 'handlePropertyRead', id : 25065, inParams :
                         {'protocolsListFilter': <tProtocolsListFilter> undefined}, outParams : {'protocolsList': <QString[]> undefined}};
export let ReadProtocolType = {type : 'handlePropertyRead', id : 25066, inParams : {'protocolInstance': <char> undefined},
                         outParams : {'protocolType': <tProtocolType> undefined}};
export let ReadProtocolConfigVariables = {type : 'handlePropertyRead', id : 25067, inParams : {'protocolInstance': <char> undefined},
                                     outParams : {'protocolConfigVec': <TProtocolConfigStruct[]> undefined}};
export let WriteProtocolConfigVariables = {type : 'handlePropertyWrite', id : 25067, inParams : {'protocolInstance': <char> undefined,
                                         'protocolConfigVec': <TProtocolConfigStruct[]> undefined}};
export let ReadSerialPortIds = {type : 'handlePropertyRead', id : 25069, outParams : {'serialPortIdsVec': <QString[]> undefined}};
export let ReadSerialPortSettings = {type : 'handlePropertyRead', id : 25070, inParams : {'portId': <char> undefined},
                             outParams : {'serialPortSettings': <TSerialPortConfigStruct> undefined}};
export let WriteSerialPortSettings = {type : 'handlePropertyWrite', id : 25070, inParams : {'portId': <char> undefined,
                                 'serialPortSettings': <TSerialPortConfigStruct> undefined}};
export let ReadTcpPortNumber = {type : 'handlePropertyRead', id : 25072, inParams : {'protocolInstance': <char> undefined},
                                 outParams : {'tcpPortInfo': <TTcpPortInfo> undefined}};
export let WriteTcpPortNumber = {type : 'handlePropertyWrite', id : 25072, inParams : {'protocolInstance': <char> undefined,
                                 'tcpPortInfo': <TTcpPortInfo> undefined}};
export let ReadProtocolMode = {type : 'handlePropertyRead', id : 25074, inParams : {'protocolInstance': <char> undefined},
                                 outParams : {'protocolMode': <tProtocolMode> undefined}};
export let WriteProtocolMode = {type : 'handlePropertyWrite', id : 25074, inParams : {'protocolInstance': <char> undefined,
                                 'protocolMode': <tProtocolMode> undefined}};
export let ReadSerialPortAssignedToProtocol = {type : 'handlePropertyRead', id : 25076, inParams : {'protocolInstance': <char> undefined},
                                                 outParams : {'serialPort': <char> undefined}};
export let WriteSerialPortAssignedToProtocol = {type : 'handlePropertyWrite', id : 25076, inParams : {'protocolInstance': <char> undefined,
                                                 'serialPort': <char> undefined}};
export let ReadNetworkAdapterNames = {type : 'handlePropertyRead', id : 25078,
                                        outParams : {'networkAdapterNamesVec': <QString[]> undefined}};
export let ReadEthernetSettings = {type : 'handlePropertyRead', id : 25079, inParams : {'networkAdapterName': <char> undefined},
                                     outParams : {'ethernetSettings': <TEthernetConfig> undefined}};
export let WriteEthernetSettings = {type : 'handlePropertyWrite', id : 25079, inParams : {'networkAdapterName': <char> undefined,
                                     'ethernetSettings': <TEthernetConfig> undefined}};
export let ReadEthernetEnable = {type : 'handlePropertyRead', id : 25081, outParams : {'isEnabled': <bool> undefined}};
export let WriteEthernetEnable = {type : 'handlePropertyWrite', id : 25081, inParams : {'isEnabled': <bool> undefined}};
export let ReadWebServerEnable = {type : 'handlePropertyRead', id : 25082, outParams : {'isEnabled': <bool> undefined}};
export let WriteWebServerEnable = {type : 'handlePropertyWrite', id : 25082, inParams : {'isEnabled': <bool> undefined}};
export let ReadSerialEnable = {type : 'handlePropertyRead', id : 25083, outParams : {'isEnabled': <bool> undefined}};
export let WriteSerialEnable = {type : 'handlePropertyWrite', id : 25083, inParams : {'isEnabled': <bool> undefined}};
export let ReadMachineName = {type : 'handlePropertyRead', id : 25084, outParams : {'machineName': <char> undefined}};
export let WriteMachineName = {type : 'handlePropertyWrite', id : 25084, inParams : {'machineName': <char> undefined}};
export let ReadProtocolEnable = {type : 'handlePropertyRead', id : 25085, inParams : {'protocolInstance': <char> undefined},
                                 outParams : {'isEnabled': <bool> undefined}};
export let WriteProtocolEnable = {type : 'handlePropertyWrite', id : 25085, inParams : {'protocolInstance': <char> undefined,
                                 'isEnabled': <bool> undefined}};
export let IsSelectedPortInUse = {type : 'handleActivateFunction', id : 25087, inParams : {'protocolInstance': <char> undefined},
                                 outParams : {'protocolInstanceUsingPort': <char> undefined}};
export let ReadIsOptionPackKeyDetected = {type : 'handlePropertyRead', id : 25088, outParams : {'isDetected': <bool> undefined}};
export let ReadIsSalesKeyDetected = {type : 'handlePropertyRead', id : 25089, outParams : {'isDetected': <bool> undefined}};
export let ReadSystemPerformance = {type : 'handlePropertyRead', id : 25090, outParams : {'performance': <TSystemPerformance> undefined}};
export let ReadDefaultHourCodes = {type : 'handlePropertyRead', id : 25091, outParams : {'defaultHourCodes': <QString[]> undefined}};
export let WriteDefaultHourCodes = {type : 'handlePropertyWrite', id : 25091, inParams : {'defaultHourCodes': <QString[]> undefined}};
export let ReadDefaultDayOfWeekCodes = {type : 'handlePropertyRead', id : 25092,
                                        outParams : {'defaultDayOfWeekCodes': <QString[]> undefined}};
export let WriteDefaultDayOfWeekCodes = {type : 'handlePropertyWrite', id : 25092,
                                         inParams : {'defaultDayOfWeekCodes': <QString[]> undefined}};
export let ReadDefaultMonthCodes = {type : 'handlePropertyRead', id : 25093, outParams : {'defaultMonthCodes': <QString[]> undefined}};
export let WriteDefaultMonthCodes = {type : 'handlePropertyWrite', id : 25093, inParams : {'defaultMonthCodes': <QString[]> undefined}};
export let ReadDefaultDayOfMonthCodes = {type : 'handlePropertyRead', id : 25094,
                                         outParams : {'defaultDayOfMonthCodes': <QString[]> undefined}};
export let WriteDefaultDayOfMonthCodes = {type : 'handlePropertyWrite', id : 25094,
                                         inParams : {'defaultDayOfMonthCodes': <QString[]> undefined}};
export let ReadPowerButtonAction = {type : 'handlePropertyRead', id : 25095, outParams : {'action': <tPowerButtonAction> undefined}};
export let WritePowerButtonAction = {type : 'handlePropertyWrite', id : 25095, inParams : {'action': <tPowerButtonAction> undefined}};
export let GetMrcDefaultRatio = {type : 'handleActivateFunction', id : 25096, inParams : {'mrcType': <uint8_t> undefined},
                                 outParams : {'defaultRatio': <char> undefined}};
export let GetMrcRatioFormatHint = {type : 'handleActivateFunction', id : 25097, inParams : {'mrcType': <uint8_t> undefined},
                                     outParams : {'ratioFormatHint': <char> undefined}};
export let GetMrcCheckDigitMethodsAvailable = {type : 'handleActivateFunction', id : 25098, inParams : {'mrcType': <uint8_t> undefined},
                                                 outParams : {'checkDigitMethods': <quint8[]> undefined}};
export let GetMrcDataMatrixSizes = {type : 'handleActivateFunction', id : 25099, outParams : {'dataMatrixSizes': <quint8[]> undefined}};
export let GetMrcQRVersions = {type : 'handleActivateFunction', id : 25100, outParams : {'mrcQRVersions': <quint8[]> undefined}};
export let AddDataLoggingValue = {type : 'handleActivateFunction', id : 25101, inParams : {'newValue': <TDataLoggingValue> undefined}};
export let RemoveDataLoggingValue = {type : 'handleActivateFunction', id : 25102, inParams : {'valueName': <char> undefined}};
export let ModifyDataLoggingValue = {type : 'handleActivateFunction', id : 25103,
                                     inParams : {'modifiedValue': <TDataLoggingValue> undefined}};
export let ReadOEEResetMode = {type : 'handlePropertyRead', id : 25104, outParams : {'mode': <tOEEResetMode> undefined}};
export let WriteOEEResetMode = {type : 'handlePropertyWrite', id : 25104, inParams : {'mode': <tOEEResetMode> undefined}};
export let ReadTargetRunRate = {type : 'handlePropertyRead', id : 25105, outParams : {'target': <uint32_t> undefined}};
export let WriteTargetRunRate = {type : 'handlePropertyWrite', id : 25105, inParams : {'target': <uint32_t> undefined}};
export let ReadTargetTotalPrints = {type : 'handlePropertyRead', id : 25106, outParams : {'target': <uint32_t> undefined}};
export let WriteTargetTotalPrints = {type : 'handlePropertyWrite', id : 25106, inParams : {'target': <uint32_t> undefined}};
export let ReadOEEStats = {type : 'handlePropertyRead', id : 25107,
                             outParams : {'stats': <TOEEStatistics> undefined}};
export let ReadIsInitialSetUpRequired = {type : 'handlePropertyRead', id : 25108, outParams : {'isInitialSetUpRequired': <bool> undefined}};
export let WriteIsInitialSetUpRequired = {type : 'handlePropertyWrite', id : 25108,
                                         inParams : {'isInitialSetUpRequired': <bool> undefined}};
export let GenerateDiagQRCode = {type : 'handleActivateFunction', id : 25109, inParams : {'diagType': <tDiagType> undefined,
                                 'id': <uint32_t> undefined}, outParams : {'bitmapData': <quint8[]> undefined}};
export let ReadProtocolDataSink = {type : 'handlePropertyRead', id : 25110, inParams : {'protocolInstance': <char> undefined},
                                     outParams : {'dataSinkId': <char> undefined}};
export let ReadDiskSpaceInfo = {type : 'handlePropertyRead', id : 25111, outParams : {'spaceInfo': <TDiskSpaceInfo> undefined}};
export let ReadCurrentPrimaryConsumableName = {type : 'handlePropertyRead', id : 25112, outParams : {'consumable_name': <char> undefined}};
export let WriteCurrentPrimaryConsumableName = {type : 'handlePropertyWrite', id : 25112, inParams : {'consumable_name': <char> undefined}};
export let ReadCurrentSecondaryConsumableName = {type : 'handlePropertyRead', id : 25113,
                                                 outParams : {'consumable_name': <char> undefined}};
export let ReadScriptLoopTimeMs = {type : 'handlePropertyRead', id : 25114, inParams : {'instanceName': <char> undefined},
                                     outParams : {'loopTime': <uint32_t> undefined}};
export let ReadScriptName = {type : 'handlePropertyRead', id : 25115, inParams : {'instanceName': <char> undefined},
                             outParams : {'scriptName': <char> undefined}};
export let AddScriptInstance = {type : 'handleActivateFunction', id : 25116, inParams : {'folderName': <char> undefined,
                                 'scriptName': <char> undefined, 'instanceName': <char> undefined, 'loopTime': <uint32_t> undefined},
                                  outParams : {'isSuccess': <bool> undefined}};
export let RemoveScriptInstance = {type : 'handleActivateFunction', id : 25117, inParams : {'instanceName': <char> undefined}};
export let GetScriptParamNameAndValueList = {type : 'handleActivateFunction', id : 25118, inParams : {'folderName': <char> undefined,
                         'scriptName': <char> undefined}, outParams : {'list': <TScriptParamNameAndValue[]> undefined}};
export let ReadDefaultTextElementFontSize = {type : 'handlePropertyRead', id : 25119,
                                            outParams : {'defaultTextElementFontSize': <uint8_t> undefined}};
export let WriteDefaultTextElementFontSize = {type : 'handlePropertyWrite', id : 25119,
                                             inParams : {'defaultTextElementFontSize': <uint8_t> undefined}};
export let ReadTestPrintButtonEnabled = {type : 'handlePropertyRead', id : 25120, outParams : {'isEnabled': <bool> undefined}};
export let WriteTestPrintButtonEnabled = {type : 'handlePropertyWrite', id : 25120, inParams : {'isEnabled': <bool> undefined}};
export let ReadIsUpgradeAvailable = {type : 'handlePropertyRead', id : 35000, outParams : {'isAvailable': <bool> undefined}};
export let SetUpgradeNextReset = {type : 'handleActivateFunction', id : 35001, inParams : {'name': <char> undefined},
             outParams : {'state': <tUpgradeState> undefined}};
export let ReadIgnoreAvailableState = {type : 'handlePropertyRead', id : 35002, outParams : {'state': <tIgnoreState> undefined}};
export let WriteIgnoreAvailableState = {type : 'handlePropertyWrite', id : 35002, inParams : {'state': <tIgnoreState> undefined}};
export let ReadListOfUpgrades = {type : 'handlePropertyRead', id : 35003, outParams : {'upgrades': <QString[]> undefined}};
export let ReadUpgradeDetails = {type : 'handlePropertyRead', id : 35004, inParams : {'name': <char> undefined},
                                 outParams : {'details': <char> undefined}};
export let ReadUpgradeInstallability = {type : 'handlePropertyRead', id : 35005, inParams : {'name': <char> undefined},
                                         outParams : {'state': <tUpgradeState> undefined}};
export let ReadForceCompleteUpgrade = {type : 'handlePropertyRead', id : 35006, outParams : {'forceComplete': <bool> undefined}};
export let WriteForceCompleteUpgrade = {type : 'handlePropertyWrite', id : 35006, inParams : {'forceComplete': <bool> undefined}};
export let CancelUpgrade = {type : 'handleActivateFunction', id : 35007 };
export let ReadUpgradeToInstall = {type : 'handlePropertyRead', id : 35008, outParams : {'name': <char> undefined}};
export let ReadEnableRollBackToPrevious = {type : 'handlePropertyRead', id : 35009, outParams : {'enabled': <bool> undefined}};
export let WriteEnableRollBackToPrevious = {type : 'handlePropertyWrite', id : 35009, inParams : {'enabled': <bool> undefined}};
export let SetUpgradeInstallNow = {type : 'handleActivateFunction', id : 35010, inParams : {'name': <char> undefined}};
export let BRrequestBackup = {type : 'handleActivateFunction', id : 26001, inParams : {'path': <char> undefined,
                         'type': <tBRtype> undefined, 'user_ref': <char> undefined}, outParams : {'retval': <tBRerror> undefined}};
export let BRrequestRestore = {type : 'handleActivateFunction', id : 26002, inParams : {'path': <char> undefined,
                             'type': <tBRtype> undefined}, outParams : {'retval': <tBRerror> undefined}};
export let BRgetState = {type : 'handleActivateFunction', id : 26003, outParams : {'state': <tBRstate> undefined}};
export let BRgetProgress = {type : 'handleActivateFunction', id : 26004, outParams : {'progress': <uint16_t> undefined}};
export let BRclear = {type : 'handleActivateFunction', id : 26005, outParams : {'retval': <tBRerror> undefined}};
export let BRabort = {type : 'handleActivateFunction', id : 26006, outParams : {'retval': <tBRerror> undefined}};
export let BRgetBackupPath = {type : 'handleActivateFunction', id : 26007, outParams : {'path': <char> undefined}};
export let BRgetRestorePath = {type : 'handleActivateFunction', id : 26008, outParams : {'path': <char> undefined}};
export let BRgetRestoreDetails = {type : 'handleActivateFunction', id : 26009, inParams : {'path': <char> undefined},
                                     outParams : {'details': <TBRdetails[]> undefined}};
export let ReadWdbMachineNames = {type : 'handlePropertyRead', id : 36000, outParams : {'names': <QString[]> undefined}};
export let ReadWdbMachineDetails = {type : 'handlePropertyRead', id : 36001, inParams : {'machineName': <char> undefined},
                                     outParams : {'machineFound': <bool> undefined, 'details': <TWDBMachineDetails> undefined}};
export let ReadCurrentWdbMachine = {type : 'handlePropertyRead', id : 36002, outParams : {'machineName': <char> undefined}};
export let WriteCurrentWdbMachine = {type : 'handlePropertyWrite', id : 36002, inParams : {'machineName': <char> undefined}};
export let AddNewWdbMachine = {type : 'handleActivateFunction', id : 36003, inParams : {'machineName': <char> undefined,
                                 'details': <TWDBMachineDetails> undefined}, outParams : {'succeeded': <bool> undefined}};
export let RemoveWdbMachine = {type : 'handleActivateFunction', id : 36004, inParams : {'machineName': <char> undefined},
                                 outParams : {'succeeded': <bool> undefined}};
export let ReadWdbEncoderCircumferenceLimits = {type : 'handlePropertyRead', id : 36005, outParams : {'lowerLimit': <uint32_t> undefined,
                                                 'upperLimit': <uint32_t> undefined}};
export let ReadWdbEncoderResolutionLimits = {type : 'handlePropertyRead', id : 36006, outParams : {'lowerLimit': <uint32_t> undefined,
                                             'upperLimit': <uint32_t> undefined}};
export let ReadSSOTriggerEnabled = {type : 'handlePropertyRead', id : 10138, outParams : {'enabled': <bool> undefined}};
export let WriteSSOTriggerEnabled = {type : 'handlePropertyWrite', id : 10138, inParams : {'enabled': <bool> undefined}};
export let ReadGutterPumpSpeed = {type : 'handlePropertyRead', id : 10225, outParams : {'iValue': <uint16_t> undefined}};
export let ReadInkTemperature = {type : 'handlePropertyRead', id : 10050, outParams : {'iValue': <int32_t> undefined}};
export let ReadHeaterTemperature = {type : 'handlePropertyRead', id : 10112, inParams : {'jetID': <uint8_t> undefined},
                                     outParams : {'currentTemperature': <int32_t> undefined}};
export let ReadTargetHeaterTemperature = {type : 'handlePropertyRead', id : 10123, inParams : {'jetID': <uint8_t> undefined},
                                             outParams : {'TargetTemperature': <int32_t> undefined}};
export let ReadVacuumActual = {type : 'handlePropertyRead', id : 10220, outParams : {'iActual': <int16_t> undefined}};
export let ReadGutterPumpState = {type : 'handlePropertyRead', id : 10125, outParams : {'value': <bool> undefined}};
export let WriteGutterPumpState = {type : 'handlePropertyWrite', id : 10125, inParams : {'value': <bool> undefined}};
export let ReadBUPTime = {type : 'handlePropertyRead', id : 10111, inParams : {'ucJetID': <uint8_t> undefined},
                             outParams : {'AvBUTime': <int32_t> undefined}};
export let ReadMakeUpConsumptionLogging = {type : 'handlePropertyRead', id : 10131, outParams : {'UpdateAvailable': <bool> undefined,
                                             'CalcData': <float[]> undefined}};
export let ReadUberLogging = {type : 'handlePropertyRead', id : 11133, outParams : {'CalcData': <float[]> undefined,
                             'MUCalcUpdateAvailable': <bool> undefined, 'LogVariablesCount': <int32_t> undefined}};
export let ReadGutterPumpSpeedSetpoint = {type : 'handlePropertyRead', id : 5001, outParams : {'iSetpoint': <uint16_t> undefined,
                             'iSetMax': <uint16_t> undefined, 'iSetMin': <uint16_t> undefined}};
export let WriteGutterPumpSpeedSetpoint = {type : 'handlePropertyWrite', id : 5001, inParams : {'iSetpoint': <uint16_t> undefined,
                                         'iSetMax': <uint16_t> undefined, 'iSetMin': <uint16_t> undefined}};
export let ReadGutterPumpMinDemandOffset = {type : 'handlePropertyRead', id : 18302, outParams : {'minDemandOffset': <int32_t> undefined}};
export let WriteGutterPumpMinDemandOffset = {type : 'handlePropertyWrite', id : 18302, inParams : {'minDemandOffset': <int32_t> undefined}};
export let ReadFeedPumpDemand = {type : 'handlePropertyRead', id : 18303, outParams : {'demand': <uint16_t> undefined}};
export let WriteFeedPumpDemand = {type : 'handlePropertyWrite', id : 18303, inParams : {'demand': <uint16_t> undefined}};
export let ReadFeedPumpDemandLimits = {type : 'handlePropertyRead', id : 18304, outParams : {'minLimit': <uint16_t> undefined,
                                         'maxLimit': <uint16_t> undefined}};
export let ReadGutterPumpDemand = {type : 'handlePropertyRead', id : 18305, outParams : {'demand': <uint16_t> undefined}};
export let WriteGutterPumpDemand = {type : 'handlePropertyWrite', id : 18305, inParams : {'demand': <uint16_t> undefined}};
export let ReadGutterPumpDemandLimits = {type : 'handlePropertyRead', id : 18306, outParams : {'minLimit': <uint16_t> undefined,
                                         'maxLimit': <uint16_t> undefined}};
export let ReadPhaseOffset = {type : 'handlePropertyRead', id : 18307, outParams : {'Offset': <uint8_t> undefined,
                             'MaxOffset': <uint8_t> undefined, 'MinOffset': <uint8_t> undefined}};
export let WritePhaseOffset = {type : 'handlePropertyWrite', id : 18307, inParams : {'Offset': <uint8_t> undefined,
                                 'MaxOffset': <uint8_t> undefined, 'MinOffset': <uint8_t> undefined}};
export let ReadPhasePosition = {type : 'handlePropertyRead', id : 18308, inParams : {'jetId': <uint8_t> undefined},
                                 outParams : {'position': <uint8_t> undefined}};
export let PrimeInkSystem = {type : 'handleActivateFunction', id : 10020};
export let AbortPrimeInkSystem = {type : 'handleActivateFunction', id : 10003 };
export let ReadPrimeInkSystemCompleted = {type : 'handlePropertyRead', id : 10165, outParams : {'completed': <bool> undefined}};
export let AbortFluidFlushSequence = {type : 'handleActivateFunction', id : 10002 };
export let StartFluidFlushSequence = {type : 'handleActivateFunction', id : 10012 };
export let ReadFluidFlushCompleted = {type : 'handlePropertyRead', id : 10168, outParams : {'completed': <bool> undefined}};
export let AbortNozzleUnblockingSequence = {type : 'handleActivateFunction', id : 10069};
export let StartNozzleUnblockingSequence = {type : 'handleActivateFunction', id : 10070};
export let ReadNozzleUnblockingCompleted = {type : 'handlePropertyRead', id : 10171, outParams : {'completed': <bool> undefined}};
export let ReadNozzleUnblockingCompletionReason = {type : 'handlePropertyRead', id : 10172,
                                                    outParams : {'completionReason': <tNozzleUnblockingCompletionReason> undefined}};
export let ReadNozzleUnblockingRoutine = {type : 'handlePropertyRead', id : 10173,
                                         outParams : {'nozzleUnblockingRoutine': <tNozzleUnblockingRoutine> undefined}};
export let AbortITMReplacementSequence = {type : 'handleActivateFunction', id : 10174 };
export let StartITMReplacementSequence = {type : 'handleActivateFunction', id : 10175, outParams : {'started': <bool> undefined}};
export let ReadITMReplacementCompleted = {type : 'handlePropertyRead', id : 10176, outParams : {'completed': <bool> undefined}};
export let ReadITMReplacementCompletionReason = {type : 'handlePropertyRead', id : 10177,
                                                 outParams : {'completionReason': <tITMReplacementCompletionReason> undefined}};
export let ReadITMReplacementCurrentState = {type : 'handlePropertyRead', id : 10178,
                                             outParams : {'currentState': <tITMReplacementCurrentState> undefined}};
export let ReadITMReplaceSequenceSecondsRemaining = {type : 'handlePropertyRead', id : 10179,
                                                     outParams : {'secondsRemaining': <uint16_t> undefined}};
export let CalibrateInkSensor = {type : 'handleActivateFunction', id : 10132 };
export let CalibrateSolventSensor = {type : 'handleActivateFunction', id : 10133 };
export let CalibrateRFID = {type : 'handleActivateFunction', id : 10134 };
export let ReadElectronicsFanSpeed = {type : 'handlePropertyRead', id : 10166, outParams : {'iFanSpeed': <uint32_t> undefined}};
export let ReadSystemFanSpeed = {type : 'handlePropertyRead', id : 10167, outParams : {'iFanSpeed': <uint32_t> undefined}};
export let ReadWarmUpTimeRemaining = {type : 'handlePropertyRead', id : 18309,
                                         outParams : {'uTimeRemaining': <uint32_t> undefined}};
export let ReadConsumableNoticePeriodLimits = {type : 'handlePropertyRead', id : 18310,
                                                 outParams : {'limits': <TConsumableLimits> undefined}};
export let ReadITMGracePeriod = {type : 'handlePropertyRead', id : 18311, outParams : {'period': <int16_t> undefined}};
export let WriteITMGracePeriod = {type : 'handlePropertyWrite', id : 18311, inParams : {'period': <int16_t> undefined}};
export let ReadInkCartNoticePeriod = {type : 'handlePropertyRead', id : 18312, outParams : {'period': <int16_t> undefined}};
export let WriteInkCartNoticePeriod = {type : 'handlePropertyWrite', id : 18312, inParams : {'period': <int16_t> undefined}};
export let ReadMakeupCartNoticePeriod = {type : 'handlePropertyRead', id : 18313, outParams : {'period': <int16_t> undefined}};
export let WriteMakeupCartNoticePeriod = {type : 'handlePropertyWrite', id : 18313, inParams : {'period': <int16_t> undefined}};
export let ReadInkHoursToEmpty = {type : 'handlePropertyRead', id : 18314, outParams : {'hoursToEmpty': <uint32_t> undefined}};
export let ReadMakeupHoursToEmpty = {type : 'handlePropertyRead', id : 18315, outParams : {'hoursToEmpty': <uint32_t> undefined}};
export let PasswordRequiredForNextState = {type : 'handleActivateFunction', id : 18316,
                                          inParams : {'state': <tPrinterRequestState> undefined},
                                          outParams : {'pwdRequired': <bool> undefined}};
export let ValidatePasswordForNextState = {type : 'handleActivateFunction', id : 18317,
                                             inParams : {'state': <tPrinterRequestState> undefined,
                                             'password': <char> undefined}, outParams : {'validated': <bool> undefined}};
export let ReadPrintedDropCount = {type : 'handlePropertyRead', id : 18318, outParams : {'drops': <quint32[]> undefined}};
export let RunSinglePhaseTest = {type : 'handleActivateFunction', id : 18319, inParams : {'jetId': <uint8_t> undefined,
                                 'position': <uint8_t> undefined}, outParams : {'phase_data': <quint32[]> undefined}};
export let ReadGracePeriodRemaining = {type : 'handlePropertyRead', id : 10169, outParams : {'remainingSeconds': <uint16_t> undefined}};
export let AbortJetAlignmentSequence = {type : 'handleActivateFunction', id : 10180};
export let StartJetAlignmentSequence = {type : 'handleActivateFunction', id : 10181};
export let ReadIsJetAlignmentOn = {type : 'handlePropertyRead', id : 10182, outParams : {'isOn': <bool> undefined}};
export let ReadLastRunHourMuLoss = {type : 'handlePropertyRead', id : 10183, outParams : {'muLoss': <float> undefined}};
export let ReadLast24RunHoursMuLoss = {type : 'handlePropertyRead', id : 10184, outParams : {'muLossVals': <float[]> undefined}};
export let ReadLast24RunHoursMuLossMean = {type : 'handlePropertyRead', id : 10185, outParams : {'muLossMean': <float> undefined}};
export let ReadLast30DaysMuLoss = {type : 'handlePropertyRead', id : 10186, outParams : {'muLossVals': <float[]> undefined}};
export let ReadLast30DaysMuLossMean = {type : 'handlePropertyRead', id : 10187, outParams : {'muLossMean': <float> undefined}};
export let ReadLast30DaysMuLossRunHours = {type : 'handlePropertyRead', id : 10188, outParams : {'hours': <quint8[]> undefined}};
export let ReadPrintHeightPercentage = {type : 'handlePropertyRead', id : 10189, inParams : {'jetid': <uint8_t> undefined},
                                     outParams : {'val': <int32_t> undefined, 'min': <int32_t> undefined, 'max': <int32_t> undefined}};
export let WritePrintHeightPercentage = {type : 'handlePropertyWrite', id : 10189, inParams : {'jetid': <uint8_t> undefined,
                                        'val': <int32_t> undefined, 'min': <int32_t> undefined, 'max': <int32_t> undefined}};
export let ReadPrintHeightChargeScaling = {type : 'handlePropertyRead', id : 10190, inParams : {'jetid': <uint8_t> undefined},
                                        outParams : {'val': <int32_t> undefined, 'min': <int32_t> undefined, 'max': <int32_t> undefined}};
export let WritePrintHeightChargeScaling = {type : 'handlePropertyWrite', id : 10190, inParams : {'jetid': <uint8_t> undefined,
                                            'val': <int32_t> undefined, 'min': <int32_t> undefined, 'max': <int32_t> undefined}};
export let ReadEHTLevel = {type : 'handlePropertyRead', id : 10191, outParams : {'val': <int32_t> undefined,
                             'val_min': <int32_t> undefined, 'val_max': <int32_t> undefined}};
export let WriteEHTLevel = {type : 'handlePropertyWrite', id : 10191, inParams : {'val': <int32_t> undefined,
                             'val_min': <int32_t> undefined, 'val_max': <int32_t> undefined}};
export let ReadFluidLevels = {type : 'handlePropertyRead', id : 10192, outParams : {'levels': <TFluidLevels> undefined}};
export let ReadPrintHeightCalibrationMetric = {type : 'handlePropertyRead', id : 10193,
                                             inParams : {'metric_id': <tPrintHeightCalibrationQualityMetric> undefined,
                                             'jetid': <uint8_t> undefined}, outParams : {'achieved': <bool> undefined,
                                             'val': <float> undefined, 'target': <float> undefined, 'accuracy': <float> undefined}};
export let WritePrintHeightCalibrationMetric = {type : 'handlePropertyWrite', id : 10193,
                                             inParams : {'metric_id': <tPrintHeightCalibrationQualityMetric> undefined,
                                             'jetid': <uint8_t> undefined, 'achieved': <bool> undefined, 'val': <float> undefined,
                                              'target': <float> undefined, 'accuracy': <float> undefined}};
export let AbortBleedHeadSequence = {type : 'handleActivateFunction', id : 10194 };
export let StartBleedHeadSequence = {type : 'handleActivateFunction', id : 10195 };
export let ReadBleedHeadSequenceCompleted = {type : 'handlePropertyRead', id : 10196, outParams : {'completed': <bool> undefined}};
export let ReadPeltierCurrentState = {type : 'handlePropertyRead', id : 10113, outParams : {'bValue': <bool> undefined}};
export let ReadPeltierMode = {type : 'handlePropertyRead', id : 10068, outParams : {'Mode': <tPeltierMode> undefined}};
export let WritePeltierMode = {type : 'handlePropertyWrite', id : 10068, inParams : {'Mode': <tPeltierMode> undefined}};
export let ReadInkSystemVariant = {type : 'handlePropertyRead', id : 18320, outParams : {'systemType': <uint32_t> undefined}};
export let WriteInkSystemVariant = {type : 'handlePropertyWrite', id : 18320, inParams : {'systemType': <uint32_t> undefined}};
export let ReadInkSystemVariantNameList = {type : 'handlePropertyRead', id : 18321, outParams : {'name': <QString[]> undefined}};
export let GeneratePreviewBitmap = {type : 'handleActivateFunction', id : 16000, inParams : {'ContentLocation': <char> undefined,
                                     'ContentName': <char> undefined}, outParams : {'bmpImageData': <quint8[]> undefined}};
export let GetContentDefaults = {type : 'handleActivateFunction', id : 16001, outParams : {'contentDefaults': <QString[]> undefined}};
export let GetDirectoryListing = {type : 'handleActivateFunction', id : 16002, inParams : {'ContentLocation': <char> undefined,
                                 'filter': <ContentTypeFilter> undefined}, outParams : {'directories': <QString[]> undefined}};
export let GetFileListing = {type : 'handleActivateFunction', id : 16003, inParams : {'ContentLocation': <char> undefined,
                             'filter': <ContentTypeFilter> undefined}, outParams : {'files': <QString[]> undefined}};
export let GetDevices = {type : 'handleActivateFunction', id : 16004, outParams : {'devices': <QString[]> undefined}};
export let ContentCopy = {type : 'handleActivateFunction', id : 16005, inParams : {'srcContentLocation': <char> undefined,
                         'srcContentName': <char> undefined, 'dstContentLocation': <char> undefined, 'dstContentName': <char> undefined},
                          outParams : {'uuid': <char> undefined}};
export let GetProgress = {type : 'handleActivateFunction', id : 16006, inParams : {'uuid': <char> undefined},
                         outParams : {'FileProgressData': <FileProgressT> undefined}};
export let GetContentAttributes = {type : 'handleActivateFunction', id : 16007, inParams : {'ContentLocation': <char> undefined,
                                     'ContentName': <char> undefined}, outParams : {'nAttributes': <uint32_t> undefined}};
export let GetContentDetails = {type : 'handleActivateFunction', id : 16008, inParams : {'ContentLocation': <char> undefined,
                         'ContentName': <char> undefined, 'bExtended': <bool> undefined}, outParams : {'details': <QString[]> undefined}};
export let ContentDelete = {type : 'handleActivateFunction', id : 16009, inParams : {'ContentLocation': <char> undefined,
                             'ContentName': <char> undefined}, outParams : {'uuid': <char> undefined}};
export let PutMessageOnline = {type : 'handleActivateFunction', id : 16010, inParams : {'ContentLocation': <char> undefined,
                                 'ContentName': <char> undefined}, outParams : {'result': <ErrorType> undefined}};
export let CreateFolder = {type : 'handleActivateFunction', id : 16011, inParams : {'ContentLocation': <char> undefined,
                             'FolderName': <char> undefined}, outParams : {'AlreadyExist': <bool> undefined}};
export let ContentImport = {type : 'handleActivateFunction', id : 16012, inParams : {'srcContentLocation': <char> undefined,
                            'srcContentName': <char> undefined, 'type': <TContentType> undefined, 'dstContentLocation': <char> undefined
                            , 'dstContentName': <char> undefined}};
export let ContentExport = {type : 'handleActivateFunction', id : 16013, inParams : {'srcContentLocation': <char> undefined,
                             'srcContentName': <char> undefined, 'type': <TContentType> undefined, 'dstContentLocation': <char> undefined,
                              'dstContentName': <char> undefined}};
export let GetImportExportProgress = {type : 'handleActivateFunction', id : 16014, outParams : {'nStatus': <uint32_t> undefined}};
export let ReadLabelMonitor = {type : 'handlePropertyRead', id : 16015, outParams : {'ItemType': <char> undefined,
                             'ContentLocation': <char> undefined, 'ContentName': <char> undefined, 'bmpImageData': <quint8[]> undefined,
                              'Printed': <bool> undefined}};
export let ReadPromptFields = {type : 'handlePropertyRead', id : 16016, inParams : {'ContentLocation': <char> undefined,
                                 'ContentName': <char> undefined}, outParams : {'details': <TPromptedFieldData[]> undefined}};
export let PutPromptedFieldMessageOnline = {type : 'handleActivateFunction', id : 16017, inParams : {'ContentLocation': <char> undefined,
                                             'ContentName': <char> undefined, 'variables': <TPromptedFieldInput[]> undefined},
                                              outParams : {'result': <ErrorType> undefined}};
export let ContentMove = {type : 'handleActivateFunction', id : 16018, inParams : {'srcContentLocation': <char> undefined,
                         'srcContentName': <char> undefined, 'dstContentLocation': <char> undefined, 'dstContentName': <char> undefined},
                          outParams : {'uuid': <char> undefined}};
export let ContentRename = {type : 'handleActivateFunction', id : 16019, inParams : {'ContentLocation': <char> undefined,
                             'ContentName': <char> undefined, 'newContentName': <char> undefined}};
export let GetFileAndDirectoryListing = {type : 'handleActivateFunction', id : 16020,
                                         inParams : {'ContentLocation': <char> undefined, 'filter': <ContentTypeFilter> undefined},
                                          outParams : {'directories': <QString[]> undefined, 'files': <QString[]> undefined}};
export let CreateNetworkConnection = {type : 'handleActivateFunction', id : 16021,
                                        inParams : {'strStoreName': <char> undefined, 'strNetworkPath': <char> undefined,
                                    'strUserName': <char> undefined, 'strUserPassword': <char> undefined, 'strDomain': <char> undefined}};
export let DeleteNetworkConnection = {type : 'handleActivateFunction', id : 16022, inParams : {'strStoreName': <char> undefined}};
export let CreateContent = {type : 'handleActivateFunction', id : 16023,
                             inParams : {'ContentLocation': <char> undefined, 'ContentName': <char> undefined, 'data': <quint8[]> undefined,
                              'type': <TContentType> undefined}};
export let RetrieveContent = {type : 'handleActivateFunction', id : 16024, inParams : {'ContentLocation': <char> undefined,
                             'ContentName': <char> undefined}, outParams : {'data': <quint8[]> undefined}};
export let ReadLabelMapping = {type : 'handlePropertyRead', id : 16025, inParams : {'indirectAccessId': <uint64_t> undefined},
                                 outParams : {'mappingInfo': <TLabelMappingInfo> undefined}};
export let UpdateLabelMapping = {type : 'handleActivateFunction', id : 16026, inParams : {'indirectAccessId': <uint64_t> undefined,
                                 'labelLocation': <char> undefined, 'labelName': <char> undefined}};
export let DoesFileExist = {type : 'handleActivateFunction', id : 16027,
                             inParams : {'location': <char> undefined, 'name': <char> undefined},
                             outParams : {'doesExist': <bool> undefined}};
export let ReadCounterStatistics = {type : 'handlePropertyRead', id : 16100, outParams : {'counters': <PrintCounterStatisticsT> undefined}};
export let ResetCounter = {type : 'handleActivateFunction', id : 16101, inParams : {'counterID': <ResettableCounterID_t> undefined}};
export let GetLabelCounters = {type : 'handleActivateFunction', id : 16102, inParams : {'labelID': <char> undefined},
                                 outParams : {'counters': <LabelPrintCounterStatisticsT> undefined}};
export let SynchroniseLabel = {type : 'handleActivateFunction', id : 16104, inParams : {'label': <quint8[]> undefined},
                                 outParams : {'sync_label': <quint8[]> undefined}};
export let GetDefaultLabelStore = {type : 'handleActivateFunction', id : 16105, outParams : {'labelStore': <char> undefined}};
export let PutDirectMessageOnline = {type : 'handleActivateFunction', id : 16106, inParams : {'cilf': <utf8> undefined},
                                     outParams : {'result': <ErrorType> undefined}};
export let ReadGoodPrintsForCurrentLabel = {type : 'handlePropertyRead', id : 16107, outParams : {'counter': <uint32_t> undefined}};
export let PutPromptedFieldDirectMessageOnline = {type : 'handleActivateFunction', id : 16108, inParams : {'cilf': <utf8> undefined,
                                         'variables': <TPromptedFieldInput[]> undefined}, outParams : {'result': <ErrorType> undefined}};
export let UpdateLabelMappingFromStore = {type : 'handleActivateFunction', id : 16109, inParams : {'labelLocation': <char> undefined,
                                         'indirectAccessLowerId': <uint64_t> undefined, 'indirectAccessUpperId': <uint64_t> undefined}};
export let LoadPrintJob = {type : 'handleActivateFunction', id : 16110, inParams : {'location': <char> undefined,
                     'job_ref': <char> undefined}, outParams : {'result': <tPJErrorType> undefined, 'data': <TPrintJob> undefined}};
export let StorePrintJob = {type : 'handleActivateFunction', id : 16111, inParams : {'location': <char> undefined,
                         'job_ref': <char> undefined, 'data': <TPrintJob> undefined}, outParams : {'result': <tPJErrorType> undefined}};
export let PutPrintJobOnline = {type : 'handleActivateFunction', id : 16112,
                                 inParams : {'location': <char> undefined, 'job_ref': <char> undefined},
                                 outParams : {'result': <tPJErrorType> undefined}};
export let ValidatePrintJob = {type : 'handleActivateFunction', id : 16113, inParams : {'data': <TPrintJob> undefined},
                                 outParams : {'validation_result': <bool> undefined, 'pj_vdata': <TPrintJobValidationData> undefined,
                                  'err_log': <TPrintJobValidationErrorLogEntry[]> undefined}};
export let ReadPrintJobContentDefault = {type : 'handlePropertyRead', id : 16114, outParams : {'default_data': <TPrintJob> undefined}};
export let ReadPrintJobContentMin = {type : 'handlePropertyRead', id : 16115, outParams : {'min_data': <TPrintJob> undefined}};
export let ReadPrintJobContentMax = {type : 'handlePropertyRead', id : 16116, outParams : {'max_data': <TPrintJob> undefined}};
export let AppendToOnlinePrintJob = {type : 'handleActivateFunction', id : 16117, inParams : {'step': <TPrintJobStep> undefined},
                                     outParams : {'result': <tPJErrorType> undefined}};
export let PutDirectPrintJobOnline = {type : 'handleActivateFunction', id : 16118, inParams : {'job_data': <TPrintJob> undefined},
                                     outParams : {'result': <tPJErrorType> undefined}};
export let ReadRasterQualityOption = {type : 'handlePropertyRead', id : 20300, outParams : {'option': <tRasterQuality> undefined}};
export let WriteRasterQualityOption = {type : 'handlePropertyWrite', id : 20300, inParams : {'option': <tRasterQuality> undefined}};
export let ReadTestPrintEnabled = {type : 'handlePropertyRead', id : 20302,
                                    inParams : {'raster_name': <char> undefined, 'raster_hight': <int32_t> undefined},
                                    outParams : {'enabled': <bool> undefined}};
export let WriteTestPrintEnabled = {type : 'handlePropertyWrite', id : 20302,
                     inParams : {'raster_name': <char> undefined, 'raster_hight': <int32_t> undefined, 'enabled': <bool> undefined}};
export let ConvertLegacyLabel = {type : 'handleActivateFunction', id : 20303,
                    inParams : {'label_to_convert': <quint8[]> undefined, 'product': <tLabelType> undefined, 'store': <bool> undefined},
                    outParams : {'name': <utf8> undefined, 'content': <utf8> undefined}};
export let ReadSkipBlankStrokes = {type : 'handlePropertyRead', id : 20304, outParams : {'skip': <bool> undefined}};
export let WriteSkipBlankStrokes = {type : 'handlePropertyWrite', id : 20304, inParams : {'skip': <bool> undefined}};
export let ReadLabelCounterNames = {type : 'handlePropertyRead', id : 20305, outParams : {'counter_name': <QString[]> undefined}};
export let ResetLabelCounter = {type : 'handleActivateFunction', id : 20306, inParams : {'counter_name': <utf8> undefined}};
export let ReadLabelCounterValue = {type : 'handlePropertyRead', id : 20307, inParams : {'counter_name': <utf8> undefined},
                                     outParams : {'counter_value': <utf8> undefined}};
export let WriteLabelCounterValue = {type : 'handlePropertyWrite', id : 20307,
                                     inParams : {'counter_name': <utf8> undefined, 'counter_value': <utf8> undefined}};
export let ReadLabelCounterEnable = {type : 'handlePropertyRead', id : 20308,
                                     inParams : {'counter_name': <utf8> undefined}, outParams : {'counter_state': <bool> undefined}};
export let WriteLabelCounterEnable = {type : 'handlePropertyWrite', id : 20308,
                                     inParams : {'counter_name': <utf8> undefined, 'counter_state': <bool> undefined}};


