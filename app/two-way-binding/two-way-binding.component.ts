import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'two-way-binding',
    templateUrl: 'two-way-binding.component.html'
    // template: '<input type="text" [(ngModel])="person.name" />'
    
})
export class TwoWayBindingComponent {

    person = {
        name: 'Louis',
        age:34
    };
}
