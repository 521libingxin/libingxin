import { Layouts, menuData } from '../model/menus';
import { SettingsButton } from '../model/setting-button';
import { Injectable } from '@angular/core';

@Injectable()
export class MenusService {
  copyObj(obj: any ): Object {
    // return {__proto__: obj};
    return JSON.parse( JSON.stringify( obj ));
  }
  // get footlist button by routerList in setup page
  getBreadCrumb(routerList: any ): SettingsButton[] {
    let thome = menuData['home'];
    thome['styleclass'] = 'button_style_sma';
    let buttonList: SettingsButton[] = [thome];
    let routerListLength = routerList.length;
    if (routerList[1] === 'setup') {
      routerListLength = routerListLength - 1;
    }
    for (let i = 1; i < routerListLength; i++) {
        buttonList.push(menuData['betw']);
        let tmenus = this.copyObj(menuData[routerList[i]]);
        if (i === routerListLength - 1 || routerList[i] === 'editormainscreen' || routerList[i] === 'labelPreview') {
          tmenus['styleclass'] = 'button_style_depth_dis';
          tmenus['destination'] = '';
          buttonList.push(tmenus);
          if (i !== routerListLength - 1) {
            break;
          }
        }else {
          tmenus['styleclass'] = 'button_style_sma';
          buttonList.push(tmenus);
        }
    }
    return buttonList;
  }
  // get leftsize button by routerList in setup page
  getTabBar(routerList: any ): SettingsButton[] {
    let routerListLength = routerList.length;
    let curUrl = routerList[routerListLength - 1];
    let parentUrl = routerList[routerListLength - 2];
    let peerList = Layouts[parentUrl];
    let buttonList: SettingsButton[] = [];
    let baseStyle = 'button_style_big';
    if (routerListLength > 3) {
      baseStyle = 'button_style_big_noicon';
    }
    for (let i = 0; i < peerList.length; i++) {
          let tmenus = this.copyObj(menuData[peerList[i]]);
          if (peerList[i] === curUrl) {
            tmenus['styleclass'] = baseStyle + ' button_style_big_hover';
          }else {
            tmenus['styleclass'] = baseStyle;
          }
          buttonList[i] = tmenus;
      }
      return buttonList;
  }
  // get rightsize button by routerList in setup page
  getContentButton(routerList: any ): SettingsButton[] {
    let childList = Layouts[routerList];
    let buttonList: SettingsButton[] = [];
    let buttonStyle = 'button_style_mid';
    if (routerList === 'home') {
        buttonStyle = 'button_style_depth';
    }
    for (let i = 0; i < childList.length; i++) {
        buttonList[i] = this.getButtonByName(childList[i], buttonStyle);
    }
    return buttonList;
  }
  // get menu button by name and style
  getButtonByName(name: any , style: any ): SettingsButton {
    let newButton = this.copyObj(menuData[name]);
     newButton['styleclass'] = style;
     return newButton;
  }
}