
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IntercommService } from '../../../service/intercomm.service';
import { NavigationService } from '../../../service/navigation.service';
import { EditedFileService } from '../../../service/edited-file.service';
import { GetDefaultLabelStore, GetFileListing, ContentTypeFilter, PutMessageOnline } from '../../../model/IntercommCommonActivateRequest';

@Component({
  moduleId: module.id,
  selector: 'selectmessage',
  templateUrl: './selectmessage.component.html',
  styleUrls: ['./selectmessage.component.css']
})
export class SelectmessageComponent implements OnInit {
    currentEditedPath: any;
    messagelist: any;
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
      private icService: IntercommService,
      private router: Router,
      private editedFileService: EditedFileService,
      private navservice: NavigationService
  ) {}

  selectChange(Obj: any) {
    console.log('back', Obj);
  }

  ngOnInit() {
    this.navservice.sendPathInfo(this.router.url.split('/'));
    this.icService.remoteProcedureCall(GetDefaultLabelStore, {}).subscribe(
         (res: any) => {
            // console.log('store', res);
            this.currentEditedPath = res.Payload.labelStore.replace(/\\\\/g, '\\');
            this.icService.remoteProcedureCall(GetFileListing, {'ContentLocation': this.currentEditedPath,
            'filter': ContentTypeFilter.eEverything }).subscribe(
               (resSub: any) => {
                 this.messagelist = resSub.Payload.files;
                 this.editedFileService.currentList = resSub.Payload.files;
                  // console.log(res);
                  // this.fileNames = res.Payload.files;
               },
               (error) => {
                  console.log(error);
               }
            );
         },
         (error) => {
            console.log(error);
         }
      );
  }
  edit(fileName: string) {
    this.router.navigate(['/labelfinder/selectmessage/editormainscreen', fileName]);
  }
  preview(fileName: string) {
    this.router.navigate(['/labelfinder/selectmessage/labelPreview', fileName]);
  }
  print(fileName: string) {
    console.log('sfsdfsdf' + fileName);
    this.icService.remoteProcedureCall(PutMessageOnline, { 'ContentLocation': this.currentEditedPath, 'ContentName': fileName }).subscribe(
        (res: any) => {
          this.router.navigate(['home']);
        },
        (error) => {
            console.log(error);
        }
      );
  }
}