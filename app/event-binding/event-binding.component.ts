import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'fa-event-binding',
    templateUrl: 'event-binding.component.html'    
})
export class EventBindingComponent {

    onClicked(){
        alert('mooooooooo!!!');
    }

}
