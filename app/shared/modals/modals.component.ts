import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.css']
})
export class ModalsComponent {
  @Input()  modalopen: Object;
  @Output() modalopenChange = new EventEmitter<Object>();
  constructor() {}
  closemodule() {
    this.modalopen = false;
    this.modalopenChange.emit(this.modalopen);
  }
}
