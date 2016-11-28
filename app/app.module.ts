import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }   from './app.component';
import { DataBindingComponent }   from './data-binding.component';
import {PropertyBindingComponent} from './property-binding-component/property-binding.component';
import { EventBindingComponent }   from './event-binding/event-binding.component';
import { TwoWayBindingComponent }   from './two-way-binding/two-way-binding.component';
import { FormsModule } from '@angular/forms';
import {LifecycleComponent } from './lifecycle/lifecycle.component';



// with an index file which specifies which files to export
import { WithindexfileComponent } from './withindexfile/withindexfile.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ 
   AppComponent,
   DataBindingComponent,
   PropertyBindingComponent,
   EventBindingComponent,
   TwoWayBindingComponent,
   LifecycleComponent,
   
 
   WithindexfileComponent
   ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }

