// Imports like relative paths
import { Component, Input } from '@angular/core';
import { SettingsButton } from '../../model/setting-button';
import { SecurityService } from '../../service/security.service';

// templateUrl and style properties like absolute paths from project root
@Component({
  moduleId: module.id,
  selector: 'nav-icon-button',
  template: `
    <button *ngIf="securityService.userGrantList[button.grant]" class="{{button.styleclass}}">
      <img class="button_img_show" src="{{button.icon}}" />
      <img class="button_img_hover" src="{{button.selectedIcon}}" />
      <div class="button_text">{{button.caption | translate }}</div>
    </button>
  `,
  styleUrls: [ 'settingbtn.component.css' ]
})
export class SettingbtnComponent {
  @Input() button?: SettingsButton;
  constructor(
    private securityService: SecurityService
  ) {}
}