import { Injectable } from '@angular/core';

@Injectable()
export class EditedFileService {
   // TODO put a empty string check method here
   currentEditedName: string = '';
   currentPreviewedName: string = '';
   currentLiveName: string = '';
   currentEditedPath: string = '';
   currentList: any = [];
   constructor() { }
   /*
     setCurrentEditedName(currentEditedName: string): void {
       this.currentEditedName = currentEditedName;
     }
   
     getCurrentEditedName(): string {
       return this.currentEditedName;
     }
   
     setCurrentEditedPath(currentEditedPath: string): void {
       this.currentEditedPath = currentEditedPath;
     }
   
     getCurrentEditedPath(): string {
       return this.currentEditedPath;
     }
     */
}