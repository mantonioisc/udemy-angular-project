import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a test', 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/2007feb-sushi-odaiba-manytypes.jpg/640px-2007feb-sushi-odaiba-manytypes.jpg'),
    new Recipe('Another Test Recipe', 'This is a test', 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Terrine_de_saumon_au_basilic.JPG/800px-Terrine_de_saumon_au_basilic.JPG')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
