import PropTypes from 'prop-types';
import { loadStorage, saveStorage } from '../../services/localStorage';

const StorageFood = (id, recipeIds, loadIngStorage) => {
  console.log(loadIngStorage);
  if (loadIngStorage) {
    const saveMeals = { ...loadIngStorage.meals, [id]: recipeIds };
    console.log('saveMeals', saveMeals);
    saveStorage('inProgressRecipes', { cocktails: { ...loadIngStorage.cocktails }, meals: saveMeals });
  } else {
    saveStorage('inProgressRecipes', { cocktails: {}, meals: { [id]: recipeIds } });
  }
};

const StorageDrink = (id, recipeIds, loadIngStorage) => {
  console.log(loadIngStorage);
  if (loadIngStorage) {
    const saveDrinks = { ...loadIngStorage.cocktails, [id]: recipeIds };
    console.log('saveMeals', saveDrinks);
    saveStorage('inProgressRecipes', { meals: { ...loadIngStorage.meals }, cocktails: saveDrinks });
  } else {
    saveStorage('inProgressRecipes', { meals: {}, cocktails: { [id]: recipeIds } });
  }
};

export const firstRead = (setIngredients, ingredients, recipe, setReadStorage) => {
  const recipeId = recipe.idMeal || recipe.idDrink;
  const loadIngStorage = JSON.parse(loadStorage('inProgressRecipes')) || [];
  const newIngredients = [...ingredients];
  console.log(newIngredients);
  let usedIngredients = [];
  if (recipe.idMeal) {
    const ingredientKey = Object.keys(loadIngStorage.meals).filter((meal) => meal === recipeId);
    usedIngredients = loadIngStorage.meals[ingredientKey];
  } else {
    const ingredientKey = Object.keys(loadIngStorage.cocktails).filter((drink) => (
      drink === recipeId));
    usedIngredients = loadIngStorage.cocktails[ingredientKey];
  }
  if (usedIngredients && usedIngredients.length > 0) {
    usedIngredients.map((numb) => {
      newIngredients[numb].isCompleted = true;
    });
  }
  setIngredients(newIngredients);
  setReadStorage(false);
};

function inProgressStorage(ingredients, recipe) {
  const id = recipe.idMeal || recipe.idDrink;
  const doneIngredients = ingredients.filter(({ isCompleted }) => (isCompleted === true));
  const recipeIds = doneIngredients.map((ing) => ing.id);

  const loadIngStorage = JSON.parse(loadStorage('inProgressRecipes')) || [];
  if (recipe.idMeal) StorageFood(id, recipeIds, loadIngStorage);
  if (recipe.idDrink) StorageDrink(id, recipeIds, loadIngStorage);
}

inProgressStorage.propTypes = {
  recipe: PropTypes.objectOf(PropTypes.string).isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
};

export default inProgressStorage;
