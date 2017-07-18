
import { Injectable } from '@angular/core';
import { requestObjects } from '../model/requestObjects';
import { IntercommService } from './intercomm.service';
@Injectable()
export class InputDialogService {
    constructor(private intercommService: IntercommService) { }
    createObj(name: string , obj: Object) {
        /*let new_obj = {
            __proto__: requestObjects[name]
        };*/
        let new_obj = JSON.parse( JSON.stringify( requestObjects[name] ));
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                new_obj[key] = obj[key];
            }
        }
        return new_obj;
    }
    groupSubmit(t_list: any, dosometing: any) {
        let allCallBack = 1;
        for (let i = 0; i < t_list.length; i++) {
            this.intercommService.remoteProcedureCall(t_list[i]['setkey'], t_list[i]['setinParams']).subscribe(
                (res: any) => {
                    allCallBack++;
                    if (res.InterCommState === 'Success') {
                        if (allCallBack === t_list.length) {
                            dosometing();
                        }
                    }
                }
            )
        }
    }
}
