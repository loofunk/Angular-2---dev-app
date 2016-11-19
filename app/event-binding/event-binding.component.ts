import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'fa-event-binding',
    templateUrl: 'event-binding.component.html'    
})
export class EventBindingComponent {

    @Output() clicked = new EventEmitter<string>();

    onClicked(){
        this.clicked.emit('Eventbindingcomponent says...it works!');
    }

}
