import { Component } from '@angular/core';
import { LifecycleComponent } from './lifecycle/lifecycle.component';

@Component({

  // NOTE need a module ID if your using a template
  moduleId:module.id,
  selector: 'my-app',
  // template: '<h1>Hello Angular!</h1>  <fa-databinding></fa-databinding>'
  templateUrl: 'app.component.html'

})
export class AppComponent { 

  delete = false;

  onClicked()
  {    
    this.delete = true;    
  }
}
