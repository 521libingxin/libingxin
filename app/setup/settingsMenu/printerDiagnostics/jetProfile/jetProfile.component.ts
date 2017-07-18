
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from '../../../../service/navigation.service';
import { ReadOverallSystemStatus, SelectOffState, PasswordRequiredForNextState,
InitiateJetCharacterisation, ReadLastJetProfileData, ReadLastJetProfileTime } from '../../../../model/IntercommCommonActivateRequest';
import { IntercommService } from '../../../../service/intercomm.service';

declare var Flotr: any;

@Component({
  moduleId: module.id,
  selector: 'app-Jetprofile',
  templateUrl: './Jetprofile.component.html',
  styleUrls: ['./Jetprofile.component.css']
})

export class JetprofileComponent implements OnInit , OnDestroy {
  CIJ_JET_PROFILE_DATA_JET1 = 1;
  CIJ_JET_PROFILE_DATA_JET2 = 2;
  CIJ_JET_PROFILE_DATA_JET1_LAST = 3;
  CIJ_JET_PROFILE_DATA_JET2_LAST = 4;

  jetRunning: boolean = false;
  changeStateButtonName: string = '';
  jetCharData: any = undefined;
  profileTime: string;
  jetCurrentValue: any;

  jet1Value: any;
  jet2Value: any;
  jet1LastValue: any;
  jet2LastValue: any;
  timeValue: string;

  jet1BtnVisible: boolean = false;
  jet2BtnVisible: boolean = false;
  updataJetButtonInterval: any;
  updataDrawGraphInterval: any;

  jetPopupOpen = false;

  btnName: string = 'Show table';

  xMin: number = 0;
  xMax: number = 0;
  yMin: number = 0;
  yMax: number = 0;
  hasXValues: boolean = false;
  xValues: any;
  yValues: any;
  xStep: number;
  yStep: number;

  constructor(
        private router: Router,
        private navservice: NavigationService,
        private icService: IntercommService
  ) { }

  ngOnInit() {
      this.icService.remoteProcedureCall(ReadOverallSystemStatus, { }).subscribe(
        (res: any) => {
          if (res.InterCommState === 'Success') {
            this.jetRunning = res.Payload.state;

            if (res.Payload.state === 8) {// jet running
              this.jetRunning = true;
            } else {
              this.jetRunning = false;
            }

            let element: any  = document.getElementById('profile_jet_id');
            if (this.jetRunning) {
              element.disabled = false;
              element.style.opacity = 1;
              this.changeStateButtonName = 'Sequence jet off';
            } else {
              element.disabled = true;
              element.style.opacity = 0.5;
              this.changeStateButtonName = 'Sequence jet on';
            }
          }
      });
      this.icService.remoteProcedureCall(ReadLastJetProfileTime, {}).subscribe(
        (res: any) => {
          this.timeValue = res.Payload.time;
          this.jet1Value = this.getJetValue(this.CIJ_JET_PROFILE_DATA_JET1, false);
          this.jet2Value = this.getJetValue(this.CIJ_JET_PROFILE_DATA_JET2, false);
          this.jet1LastValue = this.getJetValue(this.CIJ_JET_PROFILE_DATA_JET1_LAST, true);
          this.jet2LastValue = this.getJetValue(this.CIJ_JET_PROFILE_DATA_JET2_LAST, true);
          if ( (this.jet1Value !== undefined && !this.jet1Value.isEmpty()) || (this.jet2Value !== undefined && !this.jet2Value.isEmpty()) ||
              (this.jet1LastValue !== undefined && !this.jet1LastValue.isEmpty()) ||
              (this.jet2LastValue !== undefined && !this.jet2LastValue.isEmpty())) {
            if (this.timeValue !== '' ) {
              this.profileTime = 'Results  (' + this.timeValue + ')';
            } else {
              this.profileTime = 'No results available. Profile jet to generate the data';
            }
          } else {
            this.profileTime = 'No results available. Profile jet to generate the data';
          }
      });
      //
       this.updataJetButtonInterval = setInterval(() => {
            this.updateAll();
        }, 1000);
      this.navservice.sendPathInfo(this.router.url.split('/'));
  }

  ngOnDestroy() {
    clearInterval(this.updataJetButtonInterval);
    clearInterval(this.updataDrawGraphInterval);
  }

  updateAll() {
    this.jet1Value = this.getJetValue(this.CIJ_JET_PROFILE_DATA_JET1, false);
    this.jet2Value = this.getJetValue(this.CIJ_JET_PROFILE_DATA_JET2, false);
    this.jet1LastValue = this.getJetValue(this.CIJ_JET_PROFILE_DATA_JET1_LAST, true);
    this.jet2LastValue = this.getJetValue(this.CIJ_JET_PROFILE_DATA_JET2_LAST, true);
    if ((this.jet1Value !== undefined && !this.jet1Value.isEmpty()) ||
     (this.jet1LastValue !== undefined && !this.jet1LastValue.isEmpty())) {
      this.jet1BtnVisible = true;
    } else {
      this.jet1BtnVisible = false;
    }
    if ((this.jet2Value !== undefined && !this.jet2Value.isEmpty()) ||
     (this.jet2LastValue !== undefined && !this.jet2LastValue.isEmpty()) ) {
      this.jet2BtnVisible = true;
    } else {
      this.jet2BtnVisible = false;
    }
  }

  onChangeState() {
    if (this.jetRunning) {
        this.icService.remoteProcedureCall(SelectOffState, { }).subscribe(
          (res: any) => {
        });
    } else {
        this.icService.remoteProcedureCall(PasswordRequiredForNextState, {'state': 2}).subscribe(
          (res: any) => {
        });
    }
  }

  onProfileJet() {
    this.icService.remoteProcedureCall(ReadOverallSystemStatus, { }).subscribe(
      (res: any) => {
        this.icService.remoteProcedureCall(InitiateJetCharacterisation, {'state': 2}).subscribe(
          (resSub: any) => {
        });
    });
  }

  getJetValue(dataId: number, last: boolean): any {
      if (this.jetCharData === undefined || this.jetCharData.isEmpty()) {
          if (last) {
            this.icService.remoteProcedureCall(ReadLastJetProfileData, { }).subscribe(
              (res: any) => {
                  this.jetCharData = res.Payload.JetData;
            });
          }
      }
      let value: any;
      let k_numDataPerJet = 101;
      if (this.jetCharData !== undefined && !this.jetCharData.isEmpty()) {
        // When the printer has 2 jets, the data will come concatenated (100 elements per jet)
         let initRow = 0;
        let jetNo: number = (this.CIJ_JET_PROFILE_DATA_JET1 === dataId || this.CIJ_JET_PROFILE_DATA_JET1_LAST === dataId) ? 1 : 2;
        if ((this.jetCharData.size() === (2 * k_numDataPerJet)) && (2 === jetNo)) {
          // This would be the case when the printer has 2 jets and the data for the jet 2 is being read before the data of the jet 1
          initRow = k_numDataPerJet;
        }
        let tableData: any;
        for (let row: number = initRow; row < (initRow + k_numDataPerJet); ++row){
          let columns: any ;
          columns.push_back(this.jetCharData.at(row).Modulation);
          columns.push_back(this.jetCharData.at(row).Average);
          columns.push_back(this.jetCharData.at(row).Minimum);
          columns.push_back(this.jetCharData.at(row).Maximum);
          columns.push_back(this.jetCharData.at(row).Detection);

          tableData.push_back(columns);
        }
        if (this.jetCharData.size() >= (2 * k_numDataPerJet)) {
          // If we still have the data for the other jet to be read, we only remove the data that is being sent to the QS core
          this.jetCharData.remove(initRow, k_numDataPerJet);
        } else {
          this.jetCharData.clear(); // Just clear the whole vector
        }
        value = tableData;
      }
      return value;
  }

  closeJetPopup() {
    this.jetPopupOpen = false;
  }

  showGraphOrTable() {
    if (this.btnName === 'Show table') {
      this.btnName = 'Show graph';
    } else if (this.btnName === 'Show graph') {
      this.btnName = 'Show table';
    }
  }

  jetClick(jetType: number) {
    this.jetPopupOpen = true;
    // get Value
    if (jetType === 1) {
        if (this.jet1Value !== undefined && !this.jet1Value.isEmpty()) {
          this.jetCurrentValue = this.jet1Value;
        } else {
           this.jetCurrentValue = this.jet1LastValue;
        }
    }
    if (jetType === 2) {
        if (this.jet2Value !== undefined && !this.jet2Value.isEmpty()) {
          this.jetCurrentValue = this.jet2Value;
        } else {
           this.jetCurrentValue = this.jet2LastValue;
        }
    }
    // show 
    this.getTableData(this.jetCurrentValue);
    this.drawGraph();

    this.updataDrawGraphInterval = setInterval(() => {
      if (jetType === 1) {
          if (this.jet1Value !== undefined && !this.jet1Value.isEmpty()) {
            this.jetCurrentValue = this.jet1Value;
          } else {
            this.jetCurrentValue = this.jet1LastValue;
          }
      }
      if (jetType === 2) {
          if (this.jet2Value !== undefined && !this.jet2Value.isEmpty()) {
            this.jetCurrentValue = this.jet2Value;
          } else {
            this.jetCurrentValue = this.jet2LastValue;
          }
      }
      this.getTableData(this.jetCurrentValue);
      this.drawGraph();
    }, 1000);
  }

  getTableData(jetValue: any) {
    this.xMin = 0;
    this.xMax = 0;
    this.yMin = 0;
    this.yMax = 0;
    this.hasXValues = true;

    // these will be the rows of data so add the data into the list and also keep track of the min/max x and y values	
    let curXVal = 0;
    this.xValues = new Array();
    this.yValues = new Array();
    for (let i = 1; i < jetValue.length; i++) {
      let xVal = 0;
      let yVal = 0;

      if (this.hasXValues) {
        xVal = parseInt(jetValue[i][0], 0);
        yVal = parseInt(jetValue[i][1], 0);
      } else {
        xVal = curXVal++;
        yVal = parseInt(jetValue[i][1], 0);
      }

      if (xVal < this.xMin) { this.xMin = xVal; }
      if (xVal > this.xMax) { this.xMax = xVal; }
      if (yVal < this.yMin) { this.yMin = yVal; }
      if (xVal > this.yMin) { this.yMax = yVal; }

      this.xValues.push(xVal);
      this.yValues.push(yVal);
      // If we don't have any data set the x/y min max to be 1 just so we draw empty axis that look okay
      if (this.xValues.length === 0) {
        this.xMin = this.xMax = 1;
        this.yMin = this.yMax = 1;
      }
      // If min/max are equal then space them by 1 so the graph looks okay
      if (this.xMin === this.xMax) {
        this.xMin = this.xMax - 1;
        this.xMax = this.xMax + 1;
      }

      if (this.yMin === this.yMax) {
        this.yMin = this.yMin - 1;
        this.yMax = this.yMax + 1;
      }
    }
    this.xMin = parseInt(this.xMin.toFixed(0), 0);
    this.xMax = parseInt(this.xMax.toFixed(0), 0);
    this.yMin = parseInt(this.yMin.toFixed(0), 0);
    this.yMax = parseInt(this.yMax.toFixed(0), 0);

    this.xStep = (this.xMax - this.xMin) / 5;
    this.xStep = parseFloat(this.xStep.toFixed(1));
    this.yStep = (this.yMax - this.yMin) / 10;
    this.yStep = parseFloat(this.yStep.toFixed(1));
  }

  drawGraph() {
    let draw = document.getElementById('draw_wave_graph_id');
    let graph: any;
    let jetList: any;
    jetList = new Array();
    if (this.xValues !== undefined && this.yValues !== undefined) {
      if (this.xValues.length !== 0 && this.yValues.length !== 0 ) {
        for (let i = 0; i < this.xValues.length; i++) {
          jetList.push([ this.xValues[i], this.yValues[i] ]);
        }
      }
    }

    graph = Flotr.draw(draw, [ jetList ], {
      colors: ['#218868'],
      grid: {
        tickColor: '#696969',
        verticalLines: true,
        horizontalLines: true,
      },
      yaxis : {
        // ticks: [ [1,"0"], [2,"10"], [3,"20"], [4,"30"],[5,"40"],[6,"50"],[7,"60"],[8,"70"],[9,"80"],[10,"90"],[11,"100"]],
        ticks: [[this.yMin, this.yMin.toFixed(1)], [this.yMin + this.yStep * 1, (this.yMin + this.yStep * 1).toFixed(1)],
         [this.yMin + this.yStep * 2, (this.yMin + this.yStep * 2).toFixed(1)],
         [this.yMin + this.yStep * 3 ,(this.yMin + this.yStep * 3).toFixed(1)],
         [this.yMin + this.yStep * 4, (this.yMin + this.yStep * 4).toFixed(1)],
         [this.yMin + this.yStep * 5 ,(this.yMin + this.yStep * 5).toFixed(1)],
         [this.yMin + this.yStep * 6, (this.yMin + this.yStep * 6).toFixed(1)],
         [this.yMin + this.yStep * 7 ,(this.yMin + this.yStep * 7).toFixed(1)],
         [this.yMin + this.yStep * 8, (this.yMin + this.yStep * 8).toFixed(1)],
         [this.yMin + this.yStep * 9 ,(this.yMin + this.yStep * 9).toFixed(1)],
         [this.yMin + this.yStep * 10, (this.yMin + this.yStep * 10).toFixed(1)]],
        max : this.yMin + this.yStep * 10,
        min : this.yMin,
        showLabels : true,
        title: 'Avg',
      },
      xaxis: {
        // ticks:  [[1,"0"], [2,"10"], [3,"20"], [4,"30"], [5,"40"], [6,"50"]],
        ticks: [[this.xMin, this.xMin.toFixed(1)], [(this.xMin + this.xStep * 1), (this.xMin + this.xStep * 1).toFixed(1)],
        [this.xMin + this.xStep * 2, (this.xMin + this.xStep * 2).toFixed(1)],
        [this.xMin + this.xStep * 3, (this.xMin + this.xStep * 3).toFixed(1)],
        [this.xMin + this.xStep * 4, (this.xMin + this.xStep * 4).toFixed(1)],
        [this.xMin + this.xStep * 5, (this.xMin + this.xStep * 5).toFixed(1)]],
        max : this.xMin + this.xStep * 5,
        min : this.xMin,
        showLabels : true,
        title: 'Mod',
      }
    });
  }
}