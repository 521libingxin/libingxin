
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params , Router } from '@angular/router';
import { NavigationService } from '../../../../service/navigation.service';
import { IntercommService } from '../../../../service/intercomm.service';
import { getLabelPreview } from '../../../../model/plugin-request';
import { EditedFileService } from '../../../../service/edited-file.service';
import { PutMessageOnline } from '../../../../model/IntercommCommonActivateRequest';

@Component({
  moduleId: module.id,
  selector: 'labelPreview',
  templateUrl: './labelPreview.component.html',
  styleUrls: ['./labelPreview.component.css']
})
export class LabelPreviewComponent implements OnInit {
  scale: any = 700;
  imgurl: any;
  labellist: any;
  prev: any;
  after: any;
  fileName: any;
  fileParent: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private icService: IntercommService,
    private editedFileService: EditedFileService,
    private navservice: NavigationService
  ) { }
  ngOnInit() {
    this.navservice.sendPathInfo(this.router.url.split('/'));
    this.start(this.route.snapshot.params['id']);
  }
  edit() {
    this.router.navigate(['/labelfinder/selectmessage/editormainscreen', this.fileName]);
  }
  print(){
    this.icService.remoteProcedureCall(PutMessageOnline,
     { 'ContentLocation': this.editedFileService.currentEditedPath, 'ContentName': this.fileName }).subscribe(
        (res: any) => {
          this.router.navigate(['home']);
        },
        (error) => {
            console.log(error);
        }
      );
  }
  big() {
    this.scale = this.scale + 100;
  }
  small() {
    this.scale = this.scale - 100;
  }
  resize() {
    this.scale = 700;
  }
  start(id: any) {
    this.fileName = id;
    this.labellist = this.editedFileService.currentList;
    this.fileParent = this.editedFileService.currentEditedPath;
    for (let j = 0; j < this.labellist.length; j++) {
      if (this.labellist[j] === id){
        if (j === 0) {
          this.prev = '';
        }else{
          this.prev = this.labellist[j - 1];
        }
        if (j === this.labellist.length - 1){
          this.after = '';
        }else{
          this.after = this.labellist[j + 1];
        }
      }
    }
    this.icService.remoteProcedureCall(getLabelPreview,
     { contentLocation: this.editedFileService.currentEditedPath, contentName: id }).subscribe(
        (res: any) => {
          this.imgurl = 'data:image/png;base64,' + res.image;
        },
        (error) => {
          console.log(error);
        }
    );
  }
  preview(fileName: string) {
    this.router.navigate(['/labelfinder/selectmessage/labelPreview', fileName]);
    this.start(fileName);
  }

}