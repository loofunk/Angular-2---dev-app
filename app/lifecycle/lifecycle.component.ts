import { 
    Component,
    OnInit, 
    OnChanges, 
    DoCheck, 
    AfterContentInit, 
    AfterContentChecked, 
    AfterViewInit,
    AfterViewChecked,
    OnDestroy ,
    Input
    } 
from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'lifecycle',
    templateUrl: 'lifecycle.component.html'
  
})

export class LifecycleComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, 
AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

    @Input() bindable = 1000;

    constructor(){        
    }

    ngOnChanges()
    {
        this.Log('ngOnChanges');        
    }

    ngOnInit(){
        this.Log('ngOnInit'); 
    }

    ngDoCheck()
    {
        this.Log('ngDoCheck'); 
    }

    ngAfterContentInit()
    {
        this.Log('ngAfterContentInit'); 
    }

    ngAfterContentChecked()
    {
        this.Log('ngAfterContentChecked'); 
    }

    ngAfterViewInit()
    {
        this.Log('ngAfterViewInit'); 
    }

    ngAfterViewChecked()
    {
        this.Log('ngAfterViewChecked'); 
    }

    ngOnDestroy()
    {
        this.Log('ngOnDestroy');
        this.Log('It has been destroyed!!'); 
    }

    ngAfterDestroy()
    {
        this.Log('ngAfterDestroy'); 
    }

    private Log(hook:string)
    {
        console.log(hook);
    }
}
