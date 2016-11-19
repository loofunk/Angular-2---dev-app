import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }   from './app.component';
import { DataBindingComponent }   from './data-binding.component';
import {PropertyBindingComponent} from './property-binding-component/property-binding.component';
import { EventBindingComponent }   from './event-binding/event-binding.component';


@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ 
   AppComponent,
   DataBindingComponent,
   PropertyBindingComponent,
   EventBindingComponent
   ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/