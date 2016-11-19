import {Component } from '@angular/core';
import { PropertyBindingComponent } from './property-binding-component/property-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';

@Component({
    moduleId:module.id,
    selector:'fa-databinding',
    templateUrl:'data-binding.component.html'

})

export class DataBindingComponent{

    onClick(value: string)
    {
        alert(value);
    }
    
}