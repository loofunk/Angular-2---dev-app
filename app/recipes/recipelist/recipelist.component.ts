import { Component } from '@angular/core';
import {Recipe} from '../recipe';
import {RecipeitemComponent} from './recipeitem.component';

@Component({
    moduleId: module.id,
    selector: 'rb-list',
    templateUrl: 'recipelist.component.html'
    
})
export class RecipelistComponent {

    recipeList:Recipe[] = [];
    recipe = new Recipe('Dummy','Dummy','http://previews.123rf.com/images/yavuzunlu/yavuzunlu1210/yavuzunlu121000017/15804975-D-Baby-s-dummy-on-white-isolated-background-Stock-Photo-baby-pacifier.jpg');
}
