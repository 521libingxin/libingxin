// Exact copy except import UserService from core
import { Component, OnInit }      from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from '../service/navigation.service';
import { IntercommService } from '../service/intercomm.service';
// import { HomemodalComponent } from '../shared/modal/homemodal/homemodal.component';
import { /*ReadOverallSystemStatus,  ReadActiveEvents, GenerateDiagQRCode, tDiagType*/
   ReadLabelMonitor, } from '../model/IntercommCommonActivateRequest';
import { LongpollingService } from '../service/longpolling.service';
import { TranslateService }   from '../translate/translate.service';

@Component({
  moduleId: module.id,
  selector: 'home',
  templateUrl: 'home.component.html',
  styleUrls: [ 'home.component.css' ]
})
export class HomeComponent implements OnInit {
  scale = 500;
  showimg = true;
  imgurl: any;
  imgname: any;
  showalert() {
    console.log(123123);
  }
  showimgclick() {
    this.showimg = false;
  }
  hideimgclick() {
    this.showimg = true;
  }
  zoomOut() {
    this.scale = this.scale + 100;
  }
  zoomIn() {
    this.scale = this.scale - 100;
  }
  edit() {
    this.router.navigate(['/labelfinder/selectmessage/editormainscreen', this.imgname]);
  }
  constructor(
    private router: Router,
    private navservice: NavigationService,
    private icService: IntercommService,
    private longpolling: LongpollingService,
    private _translate: TranslateService
  ) {

   }
  go(i: any) {
    if (i === '') {return false; }
    this.router.navigate(['/' + i]);
  }
  ngOnInit() {
    this.longpolling.subscribePolling(ReadLabelMonitor, {}).subscribe(
         (res: any) => {
            let imgurls = btoa(String.fromCharCode.apply(null, res.bmpImageData));
            this.imgurl = 'data:image/png;base64,' + imgurls;
            this.imgname = res.ContentName;
         },
         (error) => {
            console.log(error);
         }
      );
    // let ga = require("../../css/ga.js");
      /*var config = {
			    authDomain: "lvheng.wilddog.com",
			    syncURL: "https://lvheng.wilddogio.com"
			};
      let wilddog=require("../../css/wilddog.js");
      wilddog.initializeApp(config, "DEFAULT");
      wilddog.auth().signInWithEmailAndPassword("xiajibaqi@aixiangqin.com", "521tjj").then(function(res){
				
				console.log(res.uid);
			}).catch(function (error) {
			     console.log(error)
			 });*/
      this.navservice.sendPathInfo(this.router.url.split('/'));
      /*this.icService.remoteProcedureCall(Login, { "UserId": "admin", "Password": "admin" }).subscribe(
        (res: any) => {
          // TODO proper checks
          console.log(res);
          //this.loginModal.close();
        },
        (err: any) => {
          console.log(err);
        }
      );
      this.longpolling.subscribePolling(GetCurrentUserId, {}).subscribe(
        (res: any) => {
          //console.log(res);
        },
        (err: any) => {
          console.log(err);
        }
      );*/
  }

}
