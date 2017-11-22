import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
    current = 0;
    
    recipes: Recipe[] = [
        new Recipe("Cheese", "Fat-Free", "http://maxpixel.freegreatpicture.com/static/photo/640/Vegetables-Meat-Mushrooms-Meat-Skewer-Gemuesepiess-1440105.jpg")
    ];

    pushNewItem(){
        return this.recipes.push(new Recipe("Ham", "Fat-Free", ""));
    }
    
    constructor() {}

    ngOnInit() {}
}
