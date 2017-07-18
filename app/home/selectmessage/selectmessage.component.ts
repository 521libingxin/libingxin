
import { Component, OnInit } from '@angular/core';
import { IntercommService } from '../../service/intercomm.service';
import { GetDefaultLabelStore, GetFileListing, ContentTypeFilter, PutMessageOnline } from '../../model/IntercommCommonActivateRequest';

@Component({
  moduleId: module.id,
  selector: 'selectmessage',
  templateUrl: './selectmessage.component.html',
  styleUrls: ['./selectmessage.component.css']
})
export class SelectmessageComponent implements OnInit {
  currentEditedPath: any;
  messagelist: any;
   constructor(
      private icService: IntercommService
  ) {}

  ngOnInit() {
    this.icService.remoteProcedureCall(GetDefaultLabelStore, {}).subscribe(
         (res: any) => {
            // console.log('store', res);
            this.currentEditedPath = res.Payload.labelStore.replace(/\\\\/g, '\\');
            this.icService.remoteProcedureCall(GetFileListing, { 'ContentLocation': this.currentEditedPath,
            'filter': ContentTypeFilter.eEverything }).subscribe(
               (resSub: any) => {
                 this.messagelist = res.Payload.files;
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
  print(fileName: string) {
    console.log('sfsdfsdf' + fileName);
    this.icService.remoteProcedureCall(PutMessageOnline, { 'ContentLocation': this.currentEditedPath, 'ContentName': fileName }).subscribe(
        (res: any) => {
          console.log(res);
        },
        (error) => {
            console.log(error);
        }
      );
  }
}
