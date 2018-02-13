import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('Sushi', 'Raw fished in single portions', 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/2007feb-sushi-odaiba-manytypes.jpg/640px-2007feb-sushi-odaiba-manytypes.jpg', [
      new Ingredient('Salmon', 1),
      new Ingredient('Tuna', 1),
      new Ingredient('Shrimp', 1)
    ]),
    new Recipe('Terrine', 'French forcemeat loaf', 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Terrine_de_saumon_au_basilic.JPG/800px-Terrine_de_saumon_au_basilic.JPG', [
      new Ingredient('Salmon', 2)
    ])
  ];

  constructor(private shoppingListServive: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice(); //don't leak "recipes" reference
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListServive.addIngredients(ingredients);
  }
}
