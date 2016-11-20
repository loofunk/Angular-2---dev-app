import { Component } from '@angular/core';
import { LifecycleComponent } from './lifecycle/lifecycle.component';

@Component({

  // NOTE need a module ID if your using a template
  moduleId:module.id,
  selector: 'my-app',  
  templateUrl: 'app.component.html'

})
export class AppComponent { 

  delete = false;
  test= 'starting value';
  boundValue = 10;

  onClicked()
  {    
      this.delete = true;    
  }
  
}
