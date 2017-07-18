import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeModule }    from './home/home.module';
import { HeadModule } from './head/head.module';
import { PrintoptimisationModule } from './home/printoptimisation/printoptimisation.module';
import { AppRoutingModule } from './app-routing.module';

import { MenusService } from './service/menus.service';
import { EditedFileService } from './service/edited-file.service';
import { NavigationService } from './service/navigation.service';
import { SecurityService } from './service/security.service';
import { SelectService } from './service/select.service';
import { IntercommService } from './service/intercomm.service';
import { LongpollingService } from './service/longpolling.service';
import { FootComponent } from './foot/foot.component';
import { SharedModule } from './shared/shared.module';

import { TranslateService }   from './translate/translate.service';
import { InputDialogService }   from './service/inputdialog.service';

@NgModule({
    imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule,
    HomeModule,
    PrintoptimisationModule,
    HeadModule,
    SharedModule],
  declarations: [
    AppComponent,
    FootComponent
  ],
  providers: [MenusService,
  NavigationService, IntercommService, SelectService, EditedFileService,
  LongpollingService, SecurityService, TranslateService, InputDialogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
