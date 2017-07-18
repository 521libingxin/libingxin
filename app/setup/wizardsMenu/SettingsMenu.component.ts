import { Component, OnInit,OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { SettingsButton } from '../../model/setting-button';
import { NavigationService } from '../../service/navigation.service';
import { MenusService } from '../../service/menus.service';


@Component({
  selector: 'menus',
    template: `
        <ul class="setting_left">
            <li *ngFor="let i of tabSettings">
                <nav-icon-button [button]='i' (click)="go(i.destination)" ></nav-icon-button>
            </li>
        </ul>
        <div class="wizard_right">
            <router-outlet></router-outlet>
        </div>
    `
  })
export class SettingsMenuComponent implements OnInit , OnDestroy {
  tabSettings: SettingsButton[];
    destroy: any;
    constructor(
        private router: Router,
        private navservice: NavigationService,
        private menuservice: MenusService
    ) { }
    ngOnInit() {
        this.navservice.sendPathInfo(this.router.url.split('/'));
       this.destroy = this.navservice.pageOpened$.subscribe(
        (list) => {
          this.tabSettings = this.menuservice.getTabBar(list);
          console.log(this.tabSettings);
        });
    }
    ngOnDestroy() {
        this.destroy.unsubscribe();
    }
    go(i: any) {
      console.log(i);
        if (i === '') {return false;}
        this.router.navigate([i]);
    }

}
