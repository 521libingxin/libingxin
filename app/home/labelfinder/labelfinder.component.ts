
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IntercommService } from '../../service/intercomm.service';
import { NavigationService } from '../../service/navigation.service';
import { GetDefaultLabelStore, /*GetFileListing, ContentTypeFilter, PutMessageOnline*/ } from '../../model/IntercommCommonActivateRequest';

@Component({
  moduleId: module.id,
  selector: 'app-labelfinder',
  templateUrl: './labelfinder.component.html',
  styleUrls: ['./labelfinder.component.css']
})
export class LabelfinderComponent implements OnInit {
  selectmessage = '';

  selectObj: Object = {
    'caption': '',
    'unit': '',
    'key': 'A_Z',
    'val': '',
    'list': [
    {'key': 'A_Z', 'val': 'Order by A-Z'},
    {'key': 'Z_A', 'val': 'Order by Z-A'}]
  };

  constructor(
      private router: Router,
      private icService: IntercommService,
      private navservice: NavigationService
  ) { }

  selectChange(Obj: any) {
    console.log('back', Obj);
  }

  ngOnInit() {
    this.navservice.sendPathInfo(this.router.url.split('/'));

    this.icService.remoteProcedureCall(GetDefaultLabelStore, {}).subscribe(
         (res: any) => {
            // console.log('store', res);
            this.selectmessage = res.Payload.labelStore;
         },
         (error) => {
            console.log(error);
         }
      );
  }

  go(i: any) {
    if (i === '') {return false; }
    this.router.navigate(['/' + i]);
  }

}