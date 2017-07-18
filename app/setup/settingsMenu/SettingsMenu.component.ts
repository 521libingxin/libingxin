import { Component, OnInit, OnDestroy } from '@angular/core';
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
        <div class="setting_right">
            <router-outlet></router-outlet>
        </div>
    `
  })
export class SettingsMenuComponent implements OnInit , OnDestroy {
  tabSettings: SettingsButton[];
    destroy: any;
    constructor(
        private router: Router,
        private navService: NavigationService,
        private menuService: MenusService
    ) { }
    ngOnInit() {
        // this.alertservice.setopentype("open");
        // this.alertservice.setobj({"name": "123123", "id": "456456"});
        this.navService.sendPathInfo(this.router.url.split('/'));
       this.destroy = this.navService.pageOpened$.subscribe(
        (list) => {
           this.tabSettings = this.menuService.getTabBar(list);
        });
    }
    ngOnDestroy() {
        this.destroy.unsubscribe();
    }
    go(i: any) {
        if (i === '') {return false; }
        this.router.navigate([i]);
    }

}
