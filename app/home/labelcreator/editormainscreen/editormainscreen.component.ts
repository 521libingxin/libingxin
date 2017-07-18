
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, /* Params,*/ Router } from '@angular/router';
import { NavigationService } from '../../../service/navigation.service';

@Component({
  moduleId: module.id,
  selector: 'editormainscreen',
  templateUrl: './editormainscreen.component.html',
  styleUrls: ['./editormainscreen.component.css']
})
export class EditormainscreenComponent implements OnInit {

  mouse_obj = {
    'clickOrMove': 0,
    'mouseStartX': 0,
    'mouseStartY': 0
  };

  canvas_list: any[] = [{
    'id': 'canvas',
    'enlarge': 1,
    'modelv': 1,
    'width': 400,
    'height': 300,
    'right_list': ','
  }];

  element_list: any[] = [];
  change_step = 0;
  change_list: any[] = [];
  fontSizeList = ['40', '50', '60'];
  canvasLineHeightList = ['1', '2', '3'];
  /**
   * right tools box object
   */
  toolsBox = {
    'toolsIndex': 0,
    'toolsChange': function(type: any){
      this.toolsIndex = type;
    }
  };

  constructor(
        private router: Router,
        private route: ActivatedRoute,
        private navservice: NavigationService,
  ) { }
  ngOnInit() {
    this.navservice.sendPathInfo(this.router.url.split('/'));
    let id = this.route.snapshot.params['id'];
    console.log(id);
    /*this.aroute.params
      .switchMap((params: Params) => this.getHeroc(+params['id']))
      .subscribe(hero => console.log(hero));*/
  }
  /**
   * Mouse event Object
   */
  getHeroc(id: any) {
    return id;
  }

  /**
   * By default, drag the picture can open a new window to display the picture.
   * So we must clear the event
   */
  clearDefaultDrag() {
    return false;
  }
  /**
   * Avoid the collision caused by parallel reading and writing operation.
   */
  copyObj(obj: any ): Object {
    return {__proto__: obj};
    //return JSON.parse( JSON.stringify( obj ));
  }
  /**
   * When we click the Add button to add a new element.
   */
  addNewElement() {
    let nowTime = new Date();
    let elementId = nowTime.getTime();
    /**
     * create the element object about add
     */
    let elementObj = {
      'id': elementId,
      'img': 'abc.png',
      'width': 80,
      'height': 40,
      't_x_start': 100,
      't_y_start': 70,
      't_end_x': 100,
      't_end_y': 70,
      'z_index': 1,
      'ischecked': 'checkboxoff',
      'lock': true
    };
    /**
     * create the element object about remove
     */
    let elementObj_remove = {
      'id': elementId,
      'isold': '0',
      'remove': 'remove'
    };
    this.clearHistory();
    this.change_step = this.change_step + 1;
    this.element_list.push(this.copyObj(elementObj));
    elementObj['remove'] = 'add';
    this.insertPrevHistory(this.copyObj(elementObj_remove), this.change_step - 1);
    this.change_list.push([elementObj]);
  }




  /**
   * Clear backward history
   */
  clearHistory() {
    if (this.change_list !== undefined && this.change_list.length > this.change_step + 1) {
      let t_lens = this.change_list.length - this.change_step - 1;
      if (t_lens > 0) {
        this.change_list.splice(this.change_step + 1, t_lens);
      }
    }
  }
  /**
   * You can zoom inand zoom out the view as required
   */
  zoomSize(num: any) {
    this.clearHistory();
    this.change_step = this.change_step + 1;
    let t_old_canvas = this.copyObj(this.canvas_list[0]);
    this.canvas_list[0].enlarge = (this.canvas_list[0].enlarge + num) < 0 ? num : (this.canvas_list[0].enlarge + num);
    this.insertPrevHistory(this.copyObj(t_old_canvas), this.change_step - 1);
    this.change_list.push([this.copyObj(this.canvas_list[0])]);
  }
  /**
   * pageright element checkbox
   */
  rightCheckbox(id: any) {

    this.clearHistory();
    this.change_step = this.change_step + 1;
    let t_old_canvas = this.copyObj(this.canvas_list[0]);
    let t_check_o = this.element_list[id];
    let t_check = t_check_o['ischecked'] === 'checkboxon' ? 'checkboxoff' : 'checkboxon';
    // let t_uncheck = t_check === 'checkboxon' ? 'checkboxoff' : 'checkboxon';
    if (t_check === 'checkboxon') {
      if (this.canvas_list[0].right_list.indexOf(',' + id + ',') < 0) {
        this.canvas_list[0].right_list = this.canvas_list[0].right_list + id + ',';
      }
    }else {
      if (this.canvas_list[0].right_list.indexOf(',' + id + ',') > -1) {
        this.canvas_list[0].right_list = this.canvas_list[0].right_list.replace(',' + id + ',', ',');
      }
    }
    t_check_o['ischecked'] = t_check;

    this.insertPrevHistory(this.copyObj(t_old_canvas), this.change_step - 1);
    this.change_list.push([this.copyObj(this.canvas_list[0])]);
  }
  /**
   * Change the canvas line height
   */
  changeCanvasLineHeight(event: any) {
    this.clearHistory();
    this.change_step = this.change_step + 1;
    let t_old_canvas = this.copyObj(this.canvas_list[0]);
    this.canvas_list[0].modelv = event.target.value;

    this.insertPrevHistory(this.copyObj(t_old_canvas), this.change_step - 1);
    this.change_list.push([this.copyObj(this.canvas_list[0])]);
  }
  /**
   * Change the element font size
   */
  changeElementFontSize(event: any, id: any) {
    this.clearHistory();
    this.change_step = this.change_step + 1;
    let t_old_height = this.element_list[id];
    let t_f_v = event.target.value;
    this.element_list[id]['height'] = t_f_v;

    this.insertPrevHistory(this.copyObj(t_old_height), this.change_step - 1);
    this.change_list.push([this.copyObj(this.element_list[id])]);
  }
  /**
   * When the mouse is pressed
   */
  mouseClickDown(event: any, id: any) {
      if (this.element_list[id]['lock'] ) {
        this.mouse_obj['clickOrMove'] = 1;
        this.mouse_obj['mouseStartX'] = event.pageX;
        this.mouse_obj['mouseStartY'] = event.pageY;
        for (let j = 0; j < this.element_list.length; j++) {
          if (this.canvas_list[0].right_list.indexOf(',' + j + ',') < 0) {
            this.element_list[j]['ischecked'] = 'checkboxoff';
          }
        }
        this.element_list[id]['ischecked'] = 'checkboxon';
      }
  }
  /**
   * When the mouse moves
   */
  mouseMove(event: any) {
    if (this.mouse_obj['clickOrMove'] === 1 || this.mouse_obj['clickOrMove'] === 2) {
      let mouseEndX = event.pageX;
      let mouseEndY = event.pageY;
      for (let i = 0; i < this.element_list.length; i++) {
        let nowlist = this.element_list[i];
        if (nowlist['ischecked'] === 'checkboxon' && nowlist['lock']) {
          let t_xs = nowlist['t_x_start'] + (mouseEndX - this.mouse_obj['mouseStartX']) / this.canvas_list[0].enlarge;
          let t_ys = nowlist['t_y_start'] + (mouseEndY - this.mouse_obj['mouseStartY']) / this.canvas_list[0].enlarge;
          let t_x_min = nowlist['width'] / 2;
          let t_x_max = this.canvas_list[0]['width'] - t_x_min;
          let t_y_min = nowlist['height'] / 2;
          let t_y_max = this.canvas_list[0]['height'] - t_y_min;
          if (t_xs < t_x_min) {
            t_xs = t_x_min;
          }else if (t_xs > t_x_max) {
            t_xs = t_x_max;
          }

          if (t_ys < t_y_min) {
            t_ys = t_y_min;
          }else if (t_ys > t_y_max) {
            t_ys = t_y_max;
          }
          nowlist['t_end_x'] = t_xs;
          nowlist['t_end_y'] = t_ys;
        }
      }
      this.mouse_obj['clickOrMove'] = 2;
    }
  }
  /**
   * When the mouse up
   */
  mouseUp() {
    if (this.mouse_obj['clickOrMove'] === 1) {
        this.mouse_obj['clickOrMove'] = 0;
      }else if (this.mouse_obj['clickOrMove'] === 2) {
        this.mouse_obj['clickOrMove'] = 0;
        this.clearHistory();
        this.change_step = this.change_step + 1;
        let t_uplist: Object[] = [];
        for (let i = 0; i < this.element_list.length; i++) {
          let nowlist = this.element_list[i];
          if (nowlist['ischecked'] === 'checkboxon' && nowlist['lock']) {
            // Determine whether the element is on the line
            let t_top = nowlist['t_end_y'] * this.canvas_list[0].enlarge;
            let t_hei = nowlist['height'] * this.canvas_list[0].enlarge / 2;
            let t_li_hei = this.canvas_list[0]['height'] * this.canvas_list[0].enlarge / this.canvas_list[0].modelv;
            if ((t_top + t_hei) % t_li_hei < t_hei * 2 && (t_top + t_hei) % t_li_hei !== 0) {
              if (t_top === 0) {
                t_top = 1;
              }
              let t_end = Math.floor(t_top / t_li_hei) * t_li_hei + t_hei + 5;
              nowlist['t_end_y'] = t_end;
            }

            let t_old_ele = this.copyObj(nowlist);
            let t_old_startx = t_old_ele['t_x_start'];
            let t_old_starty = t_old_ele['t_y_start'];
            t_old_ele['t_end_x'] = t_old_startx;
            t_old_ele['t_end_y'] = t_old_starty;
            t_old_ele['isold'] = '0';

            let t_new_startx = nowlist['t_end_x'];
            let t_new_starty = nowlist['t_end_y'];
            nowlist['t_x_start'] = t_new_startx;
            nowlist['t_y_start'] = t_new_starty;
            let t_new_ele = this.copyObj(nowlist);

            // Determine whether the previous history contains this element
            this.insertPrevHistory(this.copyObj(t_old_ele), this.change_step - 1);
            t_uplist.push(this.copyObj(t_new_ele));
          }
        }
        this.change_list.push(t_uplist);
      }
  }
  /**
   * insert into prev history
   */
  insertPrevHistory(obj: any, step: any) {
    let t_beforehistory = this.change_list[step];
    if (t_beforehistory !== undefined) {
      let have_old = 0;
      for (let i = 0; i < t_beforehistory.length; i++) {
        if (t_beforehistory[i].id === obj['id']) {
          have_old++;
        }
      }
      if (have_old === 0) {
        t_beforehistory.push(obj);
      }
    }else {
      this.change_list.push([obj]);
    }
  }
  /**
   * lock the element
   */
  lockElement(id: any) {

  }
  /**
   * Backward history
   */
  backwardhistory() {
    if (this.change_step > 0) {
    console.log(this.change_list);
      this.change_step = this.change_step - 1;
      let t_new_list = this.change_list[this.change_step];

      for (let i = 0; i < t_new_list.length; i++) {
        let t_new_list_for = t_new_list[i];
        let t_id = t_new_list_for['id'];

        for (let j = 0; j < this.element_list.length; j++) {
          if (this.element_list[j]['id'] === t_id) {
            if (t_new_list_for['remove'] === 'remove') {
              this.element_list.splice(j, 1);
            }else {
              this.element_list[j] = this.copyObj(t_new_list_for);
            }
          }
        }
        for (let k = 0; k < this.canvas_list.length; k++) {
          if (this.canvas_list[k]['id'] === t_id) {
            this.canvas_list[k] = this.copyObj(t_new_list_for);
          }
        }
      }
    }
  }
  /**
   * forward history
   */
  forwardHistory() {
    if (this.change_step > this.change_list.length - 2) {

    }else {
      this.change_step = this.change_step + 1;
      let t_new_list = this.change_list[this.change_step];
      for (let i = 0; i < t_new_list.length; i++) {
        let t_new_list_for = t_new_list[i];
        let t_id = t_new_list_for['id'];
        if (t_new_list_for['remove'] === 'add') {
          let t_new_ele = this.copyObj(t_new_list_for);
          t_new_ele['remove'] = 'none';
          this.element_list.push(t_new_ele);
        }else {
          for (let j = 0; j < this.element_list.length; j++) {
            if (this.element_list[j]['id'] === t_id) {
              this.element_list[j] = this.copyObj(t_new_list_for);
            }
          }
          for (let k = 0; k < this.canvas_list.length; k++) {
            if (this.canvas_list[k]['id'] === t_id) {
              this.canvas_list[k] = this.copyObj(t_new_list_for);
            }
          }
        }
      }
    }
  }

}
