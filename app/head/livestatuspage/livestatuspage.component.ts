
import { Component, OnInit } from '@angular/core';
import { LongpollingService } from '../../service/longpolling.service';
import { ReadVacuumActual, ReadBleedValve, ReadFeedValve, ReadInkLevel, ReadInkState, ReadPressureActual, ReadGutterPumpSpeed,
  ReadSolventState, ReadSolventLevel, ReadSolventValve, ReadFeedPumpSpeed, ReadViscosityActual,
  ReadViscosityExpected, ReadViscosityLimits, ReadInkTemperature, ReadHeaterEnable, ReadWashValve,
  ReadViscometerValve, ReadModulationLevel, ReadModulationMode, ReadBUPTime, ReadHeaterTemperature,
  ReadNozzleValve } from '../../model/IntercommCommonActivateRequest';


@Component({
  moduleId: module.id,
  selector: 'liveStatusPage',
  templateUrl: './livestatuspage.component.html',
  styleUrls: ['./livestatuspage.component.css']
})
export class LivestatuspageComponent implements OnInit {
  // Ink level
  inkStatus: string = 'Undefined';
  inkLevelCaption: string = 'Ink level';
  // Ink sensor level value
  inkLevel: number = 0;
  inkSensorLevelCaption: string = 'Ink sensor level value';
  // Pressure
  pressure: number = 0;
  pressureCaption: string = 'Pressure(mBar)';
  // Actual viscosity
  viscosity: string = '';
  actualViscosityCaption: string = 'Actual viscosity(cP)';
  // Viscosity upper limit
  viscosityUpperLimit: string = '';
  viscosityUpperCaption: string = 'Viscosity upper limit(cP)';
  // Heater state
  heaterState: string = '';
  heaterStateCaption: string = 'Heater state';
  // GUTTER PUMP SPEED
  gutterPumpSpeed: number = 0;
  gutterSpeedCaption: string = 'Gutter pump speed(rpm)';
  // Make up level
  makeUpLevelCaption: string = 'Make-up level';
  makeUpLevel: string = '';
  // Make up sensor level
  makeUpSensorLevelCaption: string = 'Make-up sensor level value';
  makeUpSensorLevel: number = 0;
  // PUMP SPEED
  speedCaption: string = 'Pump speed(rpm)';
  pumpSpeed: number = 0;
  // Target viscosity
  targetViscosityCaption: string = 'Target viscosity(cP)';
  targetViscosity: string = '';

  // column2
  viscosityLowerLimit: string = '';
  viscosityLowerLimitCaption: string = 'Viscosity lower limit(cP)';
  // Ink Temperature
  inkTemperature: string = '';
  inkTemperatureCaption: string = 'Ink Temperature';
  // Ink Temperature
  VacuumPressure: number = 0;
  VacuumPressureCaption: string = 'Vacuum pressure(mBar)';
  // feed 
  feedValve: string = '';
  feedValveCaption: string = 'Bleed valve';
  // bleed
  bleedValve: string = '';
  bleedValveCaption: string = 'Bleed valve';
  // wash
  washValve: string = '';
  washValveCaption: string = 'Flush valve';
  // Viscometer valve
  viscometerValve: string = '';
  viscometerValveCaption: string = 'Viscometer valve';
  // Make-up valve
  makeupValve: string = '';
  makeupValveCaption: string = 'Make-up valve';
  viscosityTarget: number = 0;

  // Jet 1
  // ReadModulationLevel
  modulationLevel1: number = 0;
  modulationLevelCaption1: string = 'Modulation level(V)';
  // ReadModulationMode
  modulationMode1: string = '';
  modulationModeCaption1: string = 'Modulation mode';
  // ReadBUPTime
  BUPTime1: number = 0;
  BUPTimeCaption1: string = 'BUP time';
  // ReadHeaterTemperature
  heaterTemperature1: string = '';
  heaterTemperatureCaption1: string = 'Head temperature';
  // ReadNozzleValve
  nozzleValve1: string = '';
  nozzleValveCaption1: string = 'Nozzle valve';

  // Jet 2
  // ReadModulationLevel
  modulationLevel2: number = 0;
  modulationLevelCaption2: string = 'Modulation level(V)';
  // ReadModulationMode
  modulationMode2: string = '';
  modulationModeCaption2: string = 'Modulation mode';
  // ReadBUPTime
  BUPTime2: number = 0;
  BUPTimeCaption2: string = 'BUP time';
  // ReadHeaterTemperature
  heaterTemperature2: string = '';
  heaterTemperatureCaption2: string = 'Head temperature';
  // ReadNozzleValve
  nozzleValve2: string = '';
  nozzleValveCaption2: string = 'Nozzle valve';

  constructor(private longpollingService: LongpollingService) { }

  ngOnInit() {
      // Ink level
      this.longpollingService.subscribePolling(ReadInkState, {}).subscribe(
         (res: any) => {
           switch (res.level) {
              case 0 :
              {
                this.inkStatus = 'Empty';
              }
              break;
              case 1 :
              {
                this.inkStatus = 'Low';
              }
              break;
              case 2:
              {
                this.inkStatus = 'Ok';
              }
              break;
              case 3:
              {
                this.inkStatus = 'High';
              }
              break;
              case 4:
              {
                this.inkStatus = 'Undefined';
              }
              break;
              default:
              {
                this.inkStatus = 'Undefined';
              }
           }
         },
         (error: any) => {
            console.log(error);
         }
      );
      // Ink sensor level value
      this.longpollingService.subscribePolling(ReadInkLevel, {}).subscribe(
         (res: any) => {
            if (res) {
              this.inkLevel = res.level;
            }
         },
         (error: any) => {
            console.log(error);
         }
      );
      // Pressure
      this.longpollingService.subscribePolling(ReadPressureActual, {}).subscribe(
         (res: any) => {
            if (res) {
               this.pressure = res.iValue;
            }
         },
         (error: any) => {
            console.log(error);
         }
      );
      // Actual viscosity
      this.longpollingService.subscribePolling(ReadViscosityActual, {}).subscribe(
         (res: any) => {
            if (res) {
              this.viscosity = this.numberToString(res.uVisco, 2);
            }
         },
         (error: any) => {
            console.log(error);
         }
      );
      // Viscosity upper limit
      this.longpollingService.subscribePolling(ReadViscosityLimits, {}).subscribe(
         (res: any) => {
            if (res) {
               this.viscosityLowerLimit = this.numberToString(res.lowerLimit, 2);
               this.viscosityUpperLimit = this.numberToString(res.upperLimit, 2);

            }
         },
         (error: any) => {
            console.log(error);
         }
      );
      // Heater state
      this.longpollingService.subscribePolling(ReadHeaterEnable, {}).subscribe(
         (res: any) => {
            if (res) {
              if (res.state) {
                this.heaterState = 'Enabled';
              } else {
                this.heaterState = 'Disabled';
              }
            }
         },
         (error: any) => {
            console.log(error);
         }
      );
      // GUTTER PUMP SPEED
      this.longpollingService.subscribePolling(ReadGutterPumpSpeed, {}).subscribe(
         (res: any) => {
            if (res) {
              this.gutterPumpSpeed = res.iValue;
            }
         },
         (error: any) => {
            console.log(error);
         }
      );
      // makeUpLevel
       this.longpollingService.subscribePolling(ReadSolventState, {}).subscribe(
         (res: any) => {
           switch (res.level) {
              case 0 :
              {
                this.makeUpLevel = 'Empty';
              }
              break;
              case 1:
              {
                this.makeUpLevel = 'Low';
              }
              break;
              case 2:
              {
                this.makeUpLevel = 'Ok';
              }
              break;
              case 3:
              {
                this.makeUpLevel = 'High';
              }
              break;
              case 4:
              {
                this.makeUpLevel = 'Undefined';
              }
              break;
              default:
              {
                this.makeUpLevel = 'Undefined';
              }
           }
         },
         (error: any) => {
            console.log(error);
         }
      );
      // ReadSolventLevel
      this.longpollingService.subscribePolling(ReadSolventLevel, {}).subscribe(
         (res: any) => {
            if (res) {
              this.makeUpSensorLevel = res.level;
            }
         },
         (error: any) => {
            console.log(error);
         }
      );
      // PUMP SPEED
      this.longpollingService.subscribePolling(ReadFeedPumpSpeed, {}).subscribe(
         (res: any) => {
            if (res) {
              this.pumpSpeed = res.iValue;
            }
         },
         (error: any) => {
            console.log(error);
         }
      );
      // Ink Temperature
      this.longpollingService.subscribePolling(ReadInkTemperature, {}).subscribe(
         (res: any) => {
            if (res) {
              this.inkTemperature = this.numberToString(res.iValue / 1000, 1);
            }
         },
         (error: any) => {
            console.log(error);
         }
      );

      // Vacuum pressure
      this.longpollingService.subscribePolling(ReadVacuumActual, {}).subscribe(
         (res: any) => {
            if (res) {
              this.VacuumPressure = res.iActual;
            }
         },
         (error: any) => {
            console.log(error);
         }
      );
      // Feed valve
      this.longpollingService.subscribePolling(ReadFeedValve, {}).subscribe(
         (res: any) => {
            if (res) {
              if (res.bState) {
                this.feedValve = 'open';
              } else {
                 this.feedValve = 'closed';
              }
            }
         },
         (error: any) => {
            console.log(error);
         }
      );
      // BleedValve
      this.longpollingService.subscribePolling(ReadBleedValve, {}).subscribe(
         (res: any) => {
            if (res) {
              if (res.bState) {
                this.bleedValve = 'open';
              } else {
                 this.bleedValve = 'closed';
              }
            }
         },
         (error: any) => {
            console.log(error);
         }
      );
      // Wash valve
      this.longpollingService.subscribePolling(ReadWashValve, {}).subscribe(
         (res: any) => {
            if (res) {
              if (res.bState) {
                this.washValve = 'open';
              } else {
                 this.washValve = 'closed';
              }
            }
         },
         (error: any) => {
            console.log(error);
         }
      );
      // Viscometer valve
      this.longpollingService.subscribePolling(ReadViscometerValve, {}).subscribe(
         (res: any) => {
            if (res) {
              if (res.bState) {
                this.viscometerValve = 'open';
              }else {
                 this.viscometerValve = 'closed';
              }
            }
         },
         (error: any) => {
            console.log(error);
         }
      );
      // ReadSolventValve
      this.longpollingService.subscribePolling(ReadSolventValve, {}).subscribe(
         (res: any) => {
            if (res) {
              if (res.bState) {
                this.makeupValve = 'open';
              }else {
                 this.makeupValve = 'closed';
              }
            }
         },
         (error: any) => {
            console.log(error);
         }
      );

      // Jet 1
      // ReadModulationLevel
      this.longpollingService.subscribePolling(ReadModulationLevel, {'ucJetID': 1}).subscribe(
         (res: any) => {
            if (res) {
              this.modulationLevel1 = res.iValue;
            }
         },
         (error: any) => {
            console.log(error);
         }
      );
      // ReadModulationMode
      this.longpollingService.subscribePolling(ReadModulationMode, {'ucJetID': 1}).subscribe(
         (res: any) => {
            if (res) {
              if (res.modulation_mode) {
                this.modulationMode1 = 'Auto';
              }else {
                this.modulationMode1 = 'Fixed';
              }
            }
         },
         (error: any) => {
            console.log(error);
         }
      );
      // eadBUPTime
      this.longpollingService.subscribePolling(ReadBUPTime, {'ucJetID': 1}).subscribe(
         (res: any) => {
            if (res) {
              this.BUPTime1 = res.AvBUTime;
            }
         },
         (error: any) => {
            console.log(error);
         }
      );
      // ReadHeaterTemperature
      this.longpollingService.subscribePolling(ReadHeaterTemperature, {'jetID': 0}).subscribe(
         (res: any) => {
            if (res) {
              this.heaterTemperature1 = this.numberToString(res.currentTemperature / 1000, 1);
            }
         },
         (error: any) => {
            console.log(error);
         }
      );
      // ReadNozzleValve
      this.longpollingService.subscribePolling(ReadNozzleValve, {'ucNozzleID' : 1}).subscribe(
         (res: any) => {
            if (res) {
              if (res.bState) {
                this.nozzleValve1 = 'open';
              }else {
                 this.nozzleValve1 = 'closed';
              }
            }
         },
         (error: any) => {
            console.log(error);
         }
      );

      // Jet2
      // ReadModulationLevel
      this.longpollingService.subscribePolling(ReadModulationLevel, {'ucJetID': 2}).subscribe(
         (res: any) => {
            if (res) {
              this.modulationLevel2 = res.iValue;
            }
         },
         (error: any) => {
            console.log(error);
         }
      );
      // ReadModulationMode
      this.longpollingService.subscribePolling(ReadModulationMode, {'ucJetID': 2}).subscribe(
         (res: any) => {
            if (res) {
              if (res.modulation_mode) {
                this.modulationMode2 = 'Auto';
              }else {
                this.modulationMode2 = 'Fixed';
              }
            }
         },
         (error: any) => {
            console.log(error);
         }
      );
      // ReadBUPTime
      this.longpollingService.subscribePolling(ReadBUPTime, {'ucJetID': 2}).subscribe(
         (res: any) => {
            if (res) {
              this.BUPTime2 = res.AvBUTime;
            }
         },
         (error: any) => {
            console.log(error);
         }
      );
      // ReadHeaterTemperature
      this.longpollingService.subscribePolling(ReadHeaterTemperature, {'jetID': 1}).subscribe(
         (res: any) => {
            if (res) {
              this.heaterTemperature2 = this.numberToString(res.currentTemperature / 1000, 1);
            }
         },
         (error: any) => {
            console.log(error);
         }
      );
      // ReadNozzleValve
      this.longpollingService.subscribePolling(ReadNozzleValve, {'ucNozzleID': 2}).subscribe(
         (res: any) => {
            if (res) {
              if (res.bState) {
                this.nozzleValve2 = 'open';
              }else {
                 this.nozzleValve2 = 'closed';
              }
            }
         },
         (error: any) => {
            console.log(error);
         }
      );

      this.longpollingService.subscribePolling(ReadViscosityExpected, {}).subscribe(
         (res: any) => {
            if (res) {
              this.viscosityTarget = res.uVisco;
            }
         },
         (error: any) => {
            console.log(error);
         }
      );
      this.longpollingService.subscribePolling(ReadViscosityExpected, {}).subscribe(
         (res: any) => {
            if (res) {
              this.targetViscosity = this.numberToString(res.uVisco, 2);
            }
         },
         (error: any) => {
            console.log(error);
         }
      );
  }

  numberToString(value: number, incrementer: number): string {
    let ret: string ;
    let temp = parseFloat(<string><any>value);
    temp.toFixed(2);
    ret =   temp.toFixed(incrementer);
    return ret;
  }
}
