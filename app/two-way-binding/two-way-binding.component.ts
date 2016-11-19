import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'two-way-binding',
    templateUrl: 'two-way-binding.component.html'

    
})
export class TwoWayBindingComponent {

    person = {
        name: 'Louis',
        age:34
    };
}
