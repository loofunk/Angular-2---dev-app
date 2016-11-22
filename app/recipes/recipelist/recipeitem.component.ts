import { Component,Input } from '@angular/core';
import {Recipe} from '../recipe';

@Component({
    moduleId: module.id,
    selector: 'rb-recipe-item',
    templateUrl: 'recipeitem.component.html'
    
})
export class RecipeitemComponent {

   @Input() recipe:Recipe;
    recipeId:number;
}
