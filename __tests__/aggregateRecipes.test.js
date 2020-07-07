import { AggregateRecipes } from './../src/aggregateRecipes.js';
import { Recipe } from '../src/recipe-object.js';

describe('instantiate new AggregateRecipe object and add recipes', () => {
  let RecipeIndex;
  let recipe;

  beforeEach(() => {
    RecipeIndex = new AggregateRecipes();
    recipe = new Recipe("pie");
  });

  test('should correctly instantiate new AggregateRecipe object', () => {
    expect(RecipeIndex.recipes).toEqual([]);
  });

  test('should correctly add recipe to AggregateRecipe object', () => {
    RecipeIndex.addRecipe(recipe);
    expect(RecipeIndex.recipes).toEqual([recipe]);
  });

  test('assigns id to recipe object when added to AggregateRecipes', ()=>{
    RecipeIndex.addRecipe(recipe);
    expect(recipe.id).toEqual(1);
  })

  test('deletes recipe from AggregateRecipes', ()=>{
    let recipe2 = new Recipe('Pot Roast');
    RecipeIndex.addRecipe(recipe);
    RecipeIndex.addRecipe(recipe2);
    RecipeIndex.deleteRecipe(recipe.id);
    expect(RecipeIndex.recipes).toEqual([undefined, recipe2]);
  })
});