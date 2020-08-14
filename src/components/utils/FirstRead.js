import { loadStorage } from '../../services/localStorage';

const firstReadMeal = (loadIngStorage, recipeId) => {
  console.log('entrou no Meal');
  const ingredientKey = Object.keys(loadIngStorage.meals).filter((meal) => meal === recipeId);
  return loadIngStorage.meals[ingredientKey];
};

const firstReadDrink = (loadIngStorage, recipeId) => {
  console.log('entrou no Drink');
  const ingredientKey = Object.keys(loadIngStorage.cocktails).filter((drink) => (
    drink === recipeId));
  return loadIngStorage.cocktails[ingredientKey];
};

const firstRead = (setIngredients, ingredients, recipe, setReadStorage, type) => {
  const recipeId = recipe.idMeal || recipe.idDrink;
  const loadIngStorage = JSON.parse(loadStorage('inProgressRecipes')) || [];
  const newIngredients = [...ingredients];
  let usedIngredients = [];
  console.log(type);
  usedIngredients = (type === 'meal')
    ? firstReadMeal(loadIngStorage, recipeId)
    : firstReadDrink(loadIngStorage, recipeId);
  console.log(loadIngStorage);
  if (usedIngredients && usedIngredients.length > 0) {
    usedIngredients.map((numb) => {
      newIngredients[numb].isCompleted = true;
      return console.log('procopsrulls');
    });
  }
  setIngredients(newIngredients);
  setReadStorage(false);
};

export default firstRead;
