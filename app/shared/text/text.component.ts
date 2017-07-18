import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'text',
    templateUrl: './text.component.html',
    styleUrls: [ 'text.component.css' ]
})

export class TextComponent implements OnInit, OnChanges {
    @Input() textObj: Object;
    ngOnInit() {
    }

    ngOnChanges(changes: SimpleChanges) {
        // changes.prop contains the old and the new value...
        this.textObj['value'] = changes['textObj']['currentValue']['value'];
        // console.log('current value is ' + changes.value.currentValue);
    }
    constructor() {
    }
}
