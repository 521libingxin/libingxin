import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { ConnectionpageComponent } from './connectionpage/connectionpage.component';
import { LivestatuspageComponent } from './livestatuspage/livestatuspage.component';
import { OeepageComponent } from './oeepage/oeepage.component';
import { AlertlistComponent } from './alertlist/alertlist.component';
import { HeadComponent } from './head.component';
import { SharedModule }        from '../shared/shared.module';

@NgModule({
  imports:      [CommonModule, FormsModule, SharedModule],
  declarations: [ConnectionpageComponent, HeadComponent, LivestatuspageComponent, OeepageComponent, AlertlistComponent],
  exports:      [CommonModule, ConnectionpageComponent, HeadComponent, LivestatuspageComponent, OeepageComponent,  AlertlistComponent]
})
export class HeadModule { }
