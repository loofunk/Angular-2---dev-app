import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'property-binding',
    templateUrl: 'property-binding.component.html'    
})

export class PropertyBindingComponent {

  // Makes property bindable from the outside
  @Input() result:number = 0;

}
