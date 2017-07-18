// Imports like relative paths
import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from '../service/navigation.service';
import { IntercommService } from '../service/intercomm.service';
import { LongpollingService } from '../service/longpolling.service';
// TODO shouldnt be here
import { MenusService } from '../service/menus.service';
import { SettingsButton } from '../model/setting-button';
import { // Login, Logout,
         // GetCurrentGrants, GetCurrentUserId,
         ReadSystemDateTime } from '../model/IntercommCommonActivateRequest';
//declare var ga: any;
@Component({
  moduleId: module.id,
  selector: 'footer',
  templateUrl: 'foot.component.html',
  styleUrls: [ 'foot.component.css' ]
})
export class FootComponent implements OnInit {
  isHome: boolean = true;
  listButtons: SettingsButton[];
  home = this.menuservice.getButtonByName('home', 'button_style_sma_dis');
  login = this.menuservice.getButtonByName('login', 'button_style_sma');
  //ga: any;

  // InfoBar values
  infoBarDateTime: string = '';

  homemodal = false;
  homelogin = false;
  username: any;
  password: any;
  constructor(
    private router: Router,
    private navservice: NavigationService,
    private menuservice: MenusService,
    private intercommService: IntercommService,
    private longpollingService: LongpollingService
  ) {
    // this.ga = require(" ../../css/ga.js ");
   }

  ngOnInit() {
    this.navservice.pageOpened$.subscribe(
      (list) => {
        /*ga('create', 'UA-92678890-1', 'auto');
        ga('send', {
          'hitType': 'pageview',
          'page': list.join('/')
        });*/

        // this.dialogservice.setopentype('', false, {});
        this.isHome = list[1] === 'home';
        if (!this.isHome) {
          if (list[1] !== 'printoptimisation' ) {
             this.listButtons = this.menuservice.getBreadCrumb(list);
          }else {
            this.isHome = true;
            this.home = this.menuservice.getButtonByName('home', 'button_style_sma');
            // this.listButtons = this.menuservice.gethomelist();
          }
        }else {
          this.home = this.menuservice.getButtonByName('home', 'button_style_sma_dis');
          this.listButtons = this.menuservice.getContentButton('home');
        }
      });

      this.longpollingService.subscribePolling(ReadSystemDateTime, {}).subscribe(
        (res: any) => {
          if (res) {
            // info bar time
            let dateTimeInfo: any = res.dateTimeInfo;
            if (dateTimeInfo !== undefined) {
              let objDate = new Date(dateTimeInfo.year, dateTimeInfo.month - 1, dateTimeInfo.day);
              let dayMothYear = objDate.toDateString();
              let timeList = dayMothYear.split(' ');
              let hourMM = String(dateTimeInfo.hour) + ':' + String(dateTimeInfo.minute);

              this.infoBarDateTime = hourMM + '|' + timeList[2] + ' ' + timeList[1] + ' ' + timeList[3];
            }
          }
        },
        (error: any) => {
          console.log(error);
        }
      );

  }
  closelogin() {
    this.homelogin = false;
  }
  open() {
    this.homemodal = true;
      //this.dialogservice.setopentype('homemodal', true, {});
      /*this.icService.remoteProcedureCall(Login, { "UserId": "admin", "Password": "admin" }).subscribe(
        (res: any) => {
          // TODO proper checks
          console.log(res);
          //this.loginModal.close();
        },
        (err: any) => {
          console.log(err);
        }
      );*/
  }
  closemodal() {
    this.homemodal = false;
    //this.alertservice.setopentype('', false, {});
  }
  loginin() {
    this.homelogin = true;
    this.homemodal = false;
    //this.alertservice.setopentype('homelogin', true, {});
  }
  loginout() {
    /*this.icService.remoteProcedureCall(Logout, {}).subscribe (
      (res: any) => {
        // TODO proper checks
          this.alertservice.setopentype('', false, {});
      },
      (err: any) => {
        console.log(err);
      }
    );*/
  }
  go(i: any) {
    if (i === '') { return false; }
    this.router.navigate(['/' + i]);
  }

}
