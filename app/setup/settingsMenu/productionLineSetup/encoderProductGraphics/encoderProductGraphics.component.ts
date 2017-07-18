import { Component, OnInit, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { ReadCurrentPDState, ReadCurrentEncoderFreq } from '../../../../model/IntercommCommonActivateRequest';
import { IntercommService } from '../../../../service/intercomm.service';

declare var Flotr: any;

@Component({
    moduleId: module.id,
    selector: 'encoder-product-graphics',
    templateUrl: './encoderProductGraphics.component.html',
    styleUrls: [ 'encoderProductGraphics.component.css' ]
})

export class EncoderProductGraphicsComponent implements OnInit, OnChanges, OnDestroy {
    encoderData: number[][] = [];
    productData: number[][] = [];
    encoderDataSize: number = 0;
    productDataSize: number = 0;
    encoderFrame: number = 1; // units of ms
    productFrame: number = 1; // unit of s
    stepCount: number = 1;
    encoderValue: number = 0;
    intFrequency: number = 0;

    currentLevel: number = 0;
    currentState: boolean = false;

    closetime0: NodeJS.Timer;
    closetime1: NodeJS.Timer;

    ngOnInit() {
        this.initialDrawingData();
        this.closetime0 = setInterval(() => {this.drawEncoderWave(); }, 400);
        this.closetime1 = setInterval(() => {this.drawProductWave(); }, 400);
    }

    ngOnChanges(changes: SimpleChanges) {
        // changes.prop contains the old and the new value...
    }

    ngOnDestroy() {
        clearInterval(this.closetime0);
        clearInterval(this.closetime1);
    }

    constructor(private icService: IntercommService) {
        let initEncoderFrequency = 0;
        this.icService.remoteProcedureCall(ReadCurrentEncoderFreq, {}).subscribe (
            (res: any) => {
                initEncoderFrequency = res.Payload.freq;
            }
        );
        this.intFrequency = Math.round(initEncoderFrequency / 1000);
    }

    initialDrawingData() {
        this.initialEncoderDrawingData();
        this.initialProductDrawingData();
    }

    initialEncoderDrawingData() {
        this.encoderData.splice(0, this.encoderData.length); // clear all
        let draw = document.getElementById('draw_wave_encoder');
        this.encoderDataSize = draw.clientWidth;
        for (let i = 0; i < this.encoderDataSize; i++) {
            this.encoderData.push([i, 0]);
        }
    }

    initialProductDrawingData() {
        this.productData.splice(0, this.productData.length); // clear all
        let draw = document.getElementById('draw_wave_product');
        this.productDataSize = draw.clientWidth;
        for (let i = 0; i < this.productDataSize; i++) {
            this.productData.push([i, 0]);
        }
    }

    drawEncoderWave() {
        let draw = document.getElementById('draw_wave_encoder');
        if (draw === null) {
            clearInterval(this.closetime0);
            return false;
        }

        let NewDataLength = 20;
        for (let i = 0; i < NewDataLength; i++) {
            // pop up the first data point(s)
            if (this.encoderData[0][1] === this.encoderData[1][1]) {
                this.encoderData.shift();
                for (let index = 0; index < this.encoderData.length; index++) {
                    this.encoderData[index][0] = this.encoderData[index][0] - 1;
                }
            } else if ((this.encoderData[0][0] === this.encoderData[1][0])) {
                this.encoderData.shift();
                this.encoderData.shift();
                for (let index = 0; index < this.encoderData.length; index++) {
                    this.encoderData[index][0] = this.encoderData[index][0] - 1;
                }
            }
        }

        let frequency = 0;
        let encoderFrequency = 0;
        this.icService.remoteProcedureCall(ReadCurrentEncoderFreq, {}).subscribe (
            (res: any) => {
                encoderFrequency = res.Payload.freq;
            }
        );
        // QSShared.requestValueData([cij_ENCODER_FREQUENCY], function(s, d) {
        //     var dat = QSShared.transform(d);
        //         encoderFrequency = dat[cij_ENCODER_FREQUENCY]; 
        // });

        if (encoderFrequency === undefined) {
            frequency = 0;
        }else {
            frequency = encoderFrequency / 1000; // tranfer units to kHz
        }

        // frequency = 10; // dummy data for testing
        let squareNum =  frequency * (this.encoderFrame * 2);
        let widthPerWave = (squareNum !== 0) ? draw.clientWidth / (2 * squareNum) : draw.clientWidth;

        for (let i = 0; i < NewDataLength; i++) {
            // 200 is the max square waves allowed in plot
            if (squareNum > 200 || widthPerWave < 1) {
                this.encoderValue = (this.encoderValue === 0) ? 1 : 0;
            } else if (squareNum === 0) {
                this.encoderValue = 0;
            } else if ( this.stepCount % widthPerWave === 0) { // parseInt(widthPerWave)
                // reset stepCount
                this.stepCount = 1;
                // reverse values
                this.encoderValue = (this.encoderValue === 0) ? 1 : 0;
            }

            this.stepCount++;
            console.log('num of squares is ' + squareNum);
            // console.log('encoder value is ' + this.encoderValue + ' | step count is ' + this.stepCount);
            // console.log('width per wave is ' + widthPerWave);

            if (this.encoderValue === this.encoderData[this.encoderData.length - 1][1]) {
                this.encoderData.push([this.encoderData[this.encoderData.length - 1][0] + 1, this.encoderValue]);
            } else if (this.encoderValue > this.encoderData[this.encoderData.length - 1][1]) {
                this.encoderData.push([this.encoderData[this.encoderData.length - 1][0], this.encoderValue]);
                this.encoderData.push([this.encoderData[this.encoderData.length - 1][0] + 1, this.encoderValue]);
            } else {
                this.encoderData.push([this.encoderData[this.encoderData.length - 1][0], 0]);
                this.encoderData.push([this.encoderData[this.encoderData.length - 1][0] + 1, this.encoderValue]);
            }
        }

        let encoderGraph: any;
        encoderGraph = Flotr.draw (draw, [ this.encoderData ], {
            colors: ['#218868'],
            grid: {
                tickColor: '#696969'
            },
            yaxis : {
                max : 2,
                min : 0,
                showLabels : false
            },
            xaxis : {
                max : this.encoderDataSize,
                min : 0,
                showLabels : false
            }
        });
    }

    drawProductWave() {
        let draw = document.getElementById('draw_wave_product');
        if (draw === null) {
            clearInterval(this.closetime1);
            return false;
        }

        if (this.productData[0][1] === this.productData[1][1]) {
            this.productData.shift();
            for (let index = 0; index < this.productData.length; index++) {
                this.productData[index][0] = this.productData[index][0] - 1;
            }
        }else if ((this.productData[0][0] === this.productData[1][0])) {
            this.productData.shift();
            this.productData.shift();
            for (let index = 0; index < this.productData.length; index++) {
                this.productData[index][0] = this.productData[index][0] - 1;
            }
        }

        // let productValue = Math.round(Math.random()); // Dummy data for testing purpose
        let productValue = 0;
        this.icService.remoteProcedureCall(ReadCurrentPDState, {'currentState': this.currentState}).subscribe (
            (res: any) => {
                this.currentState = res.Payload.state;
                if (this.currentState === false) {
                    this.currentLevel = 0;
                } else {
                    this.currentLevel = 1;
                }
            }
        );
        // QSShared.requestValueData([PrinterData_LINESETUP_TRIGGER_CURRENT_LEVEL], function(s, d) {
        //     var dat = QSShared.transform(d);
        //     scope.currentLevel = dat[PrinterData_LINESETUP_TRIGGER_CURRENT_LEVEL].Value;
        // });

        if (this.currentLevel === undefined) {
            productValue = 0;
        } else {
            productValue = this.currentLevel;
        }

        if (productValue === this.productData[this.productData.length - 1][1]) {
            this.productData.push([this.productData[this.productData.length - 1][0] + 1, productValue]);
        } else if (productValue > this.productData[this.productData.length - 1][1]) {
            this.productData.push([this.productData[this.productData.length - 1][0], productValue]);
            this.productData.push([this.productData[this.productData.length - 1][0] + 1, productValue]);
        } else {
            this.productData.push([this.productData[this.productData.length - 1][0], 0]);
            this.productData.push([this.productData[this.productData.length - 1][0] + 1, productValue]);
        }

        let productGragh: any;
        productGragh = Flotr.draw (draw, [ this.productData ], {
            colors: ['#218868'],
            grid: {
                tickColor: '#696969'
            },
            yaxis : {
                max : 2,
                min : 0,
                showLabels : false
            },
            xaxis : {
                max : this.productDataSize,
                min : 0,
                showLabels : false
            }
        });
    };

    timeFrameEncoderDown() {
        if (this.encoderFrame > 1) {
            this.encoderFrame--;
        }
    }

    timeFrameEncoderUp() {
        if (this.encoderFrame < 10) {
            this.encoderFrame++;
        }
    }

    timeFrameProductDown() {
        if (this.productFrame > 1) {
            this.productFrame--;
        }
    }

    timeFrameProductUp() {
        if (this.productFrame < 10) {
            this.productFrame++;
        }
    }

}
