import React from 'react';
import { loadStorage, saveStorage } from '../services/localStorage';

function DoneLocalStorage(recipe) {
  const now = new Date();
  const newState = {
    id: recipe.idMeal || recipe.idDrink,
    type: (recipe.idMeal) ? 'comida' : 'bebida',
    area: recipe.strArea || '',
    category: recipe.strCategory || '',
    alcoholicOrNot: recipe.strAlcoholic || '',
    name: recipe.strMeal || recipe.StrDrink,
    image: recipe.strMealThumb || recipe.strDrinkThumb,
    doneDate: `${now.getDay()}/${now.getMonth()}/${now.getFullYear()}`,
    tags: recipe.strTags.split(',') || [],
  };
  const oldState = loadStorage('doneRecipes') ? JSON.parse(loadStorage('doneRecipes')) : [];
  if (oldState.length > 0) {
    saveStorage('doneRecipes', [...oldState, newState]);
  } else {
    saveStorage('doneRecipes', [newState]);
  }
}

export default DoneLocalStorage;
