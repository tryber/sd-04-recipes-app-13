import { loadStorage } from '../../services/localStorage';

const firstReadMeal = (loadIngStorage, recipeId) => {
  const ingredientKey = Object.keys(loadIngStorage.meals).filter((meal) => meal === recipeId);
  return loadIngStorage.meals[ingredientKey];
};

const firstReadDrink = (loadIngStorage, recipeId) => {
  const ingredientKey = Object.keys(loadIngStorage.cocktails).filter((drink) => (
    drink === recipeId));
  return loadIngStorage.cocktails[ingredientKey];
};

const firstRead = (setIngredients, ingredients, recipe, setReadStorage) => {
  const recipeId = recipe.idMeal || recipe.idDrink;
  const loadIngStorage = JSON.parse(loadStorage('inProgressRecipes')) || [];
  const newIngredients = [...ingredients];
  let usedIngredients = [];
  usedIngredients = (recipe.idMeal)
    ? firstReadMeal(loadIngStorage, recipeId)
    : firstReadDrink(loadIngStorage, recipeId);
  console.log(usedIngredients);
  if (usedIngredients && usedIngredients.length > 0) {
    usedIngredients.map((numb) => {
      newIngredients[numb].isCompleted = true;
    });
  }
  setIngredients(newIngredients);
  setReadStorage(false);
};

export default firstRead;
