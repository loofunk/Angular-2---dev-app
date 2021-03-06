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
var LifecycleComponent = (function () {
    function LifecycleComponent() {
        this.bindable = 1000;
    }
    LifecycleComponent.prototype.ngOnChanges = function () {
        this.Log('ngOnChanges');
    };
    LifecycleComponent.prototype.ngOnInit = function () {
        this.Log('ngOnInit');
    };
    LifecycleComponent.prototype.ngDoCheck = function () {
        this.Log('ngDoCheck');
    };
    LifecycleComponent.prototype.ngAfterContentInit = function () {
        this.Log('ngAfterContentInit');
        console.log(this.boundContent);
    };
    LifecycleComponent.prototype.ngAfterContentChecked = function () {
        this.Log('ngAfterContentChecked');
    };
    LifecycleComponent.prototype.ngAfterViewInit = function () {
        this.Log('ngAfterViewInit');
        console.log(this.boundParagraph);
    };
    LifecycleComponent.prototype.ngAfterViewChecked = function () {
        this.Log('ngAfterViewChecked');
    };
    LifecycleComponent.prototype.ngOnDestroy = function () {
        this.Log('ngOnDestroy');
        this.Log('It has been destroyed!!');
    };
    LifecycleComponent.prototype.ngAfterDestroy = function () {
        this.Log('ngAfterDestroy');
    };
    LifecycleComponent.prototype.Log = function (hook) {
        console.log(hook);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], LifecycleComponent.prototype, "bindable", void 0);
    __decorate([
        core_1.ViewChild('boundParagraph'), 
        __metadata('design:type', HTMLElement)
    ], LifecycleComponent.prototype, "boundParagraph", void 0);
    __decorate([
        core_1.ContentChild('boundContent'), 
        __metadata('design:type', HTMLElement)
    ], LifecycleComponent.prototype, "boundContent", void 0);
    LifecycleComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'lifecycle',
            templateUrl: 'lifecycle.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], LifecycleComponent);
    return LifecycleComponent;
}());
exports.LifecycleComponent = LifecycleComponent;
//# sourceMappingURL=lifecycle.component.js.map