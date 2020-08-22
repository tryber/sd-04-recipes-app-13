import { loadStorage } from '../../services/localStorage';

const firstRead = (setIngredients, ingredients, recipe, setReadStorage) => {
  const recipeId = recipe.idMeal || recipe.idDrink;
  const loadIngStorage = JSON.parse(loadStorage('inProgressRecipes')) || [];
  console.log(loadIngStorage);
  const loadMealStorage = loadIngStorage.meals;
  const loadDrinkStorage = loadIngStorage.cocktails;
  const newIngredients = [...ingredients];
  const usedIngredients = loadMealStorage[recipeId] || loadDrinkStorage[recipeId] || [];
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
