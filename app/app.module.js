"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var app_component_1 = require('./app.component');
var data_binding_component_1 = require('./data-binding.component');
var property_binding_component_1 = require('./property-binding-component/property-binding.component');
var event_binding_component_1 = require('./event-binding/event-binding.component');
var two_way_binding_component_1 = require('./two-way-binding/two-way-binding.component');
var forms_1 = require('@angular/forms');
var lifecycle_component_1 = require('./lifecycle/lifecycle.component');
var header_component_1 = require('./header/header.component');
var recipe_book_component_1 = require('./recipe-book/recipe-book.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule],
            declarations: [
                app_component_1.AppComponent,
                data_binding_component_1.DataBindingComponent,
                property_binding_component_1.PropertyBindingComponent,
                event_binding_component_1.EventBindingComponent,
                two_way_binding_component_1.TwoWayBindingComponent,
                lifecycle_component_1.LifecycleComponent,
                header_component_1.HeaderComponent,
                recipe_book_component_1.RecipeBookComponent
            ],
            bootstrap: [app_component_1.AppComponent, recipe_book_component_1.RecipeBookComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map