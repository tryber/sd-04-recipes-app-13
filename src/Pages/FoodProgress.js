import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getById } from '../services/foodApi';
import HeaderDetails from '../components/HeaderDetails';
import ListIngredientsProgress from '../components/utils/ListIngredientsProgress';
import ShareAndFavorite from '../components/ShareAndFavorite';
import RenderButton from '../components/utils/Button';
import effectProgress from '../components/utils/effectProgress';
import effectProgress2 from '../components/utils/effectProgress2';
import effectProgress3 from '../components/utils/effectProgress3';
import inProgressStorage from '../components/utils/inProgressStorage';

import '../styles/Details-InProgress.css';
import { loadStorage, saveStorage } from '../services/localStorage';

const saveDone = (recipe) => {
  const now = new Date();
  const newState = {
    id: recipe.idMeal || recipe.idDrink,
    type: recipe.idMeal ? 'comida' : 'bebida',
    area: recipe.strArea || '',
    category: recipe.strCategory || '',
    alcoholicOrNot: recipe.strAlcoholic || '',
    name: recipe.strMeal || recipe.StrDrink,
    image: recipe.strMealThumb || recipe.strDrinkThumb,
    doneDate: `${now.getDay()}/${now.getMonth()}/${now.getFullYear()}`,
    tags: recipe.strTags || [],
  };
  const oldState = loadStorage('doneRecipes')
    ? JSON.parse(loadStorage('doneRecipes'))
    : [];
  if (oldState.length > 0) {
    saveStorage('doneRecipes', [...oldState, newState]);
  } else {
    saveStorage('doneRecipes', [newState]);
  }
  console.log(recipe);
};

function FoodProgress() {
  const [path, setPath] = useState('');
  const [copied, setCopied] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [recipe, setRecipe] = useState('');
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    effectProgress2(getById, setRecipe, setPath);
  }, []);

  useEffect(() => {
    effectProgress(recipe, setIngredients);
  }, [recipe]);

  useEffect(() => {
    effectProgress3(ingredients, setIsDisabled);
    inProgressStorage(ingredients, recipe);
  }, [ingredients]);

  return (
    <div>
      <HeaderDetails recipe={recipe} foods />
      <ShareAndFavorite
        food={recipe}
        path={path}
        copied={copied}
        setCopied={setCopied}
        Type="comida"
      />
      <div className="container-ingredient">
        <h1 className="titles">Ingredientes</h1>
        {ListIngredientsProgress(ingredients, setIngredients)}
      </div>
      <div className="intructions-container">
        <h1 className="titles">Instruções</h1>
        <p data-testid="instructions">{recipe.strInstructions}</p>
      </div>
      <div className="button-start">
        <Link to="/receitas-feitas">
          <RenderButton
            data-testid="finish-recipe-btn"
            type="button"
            isDisabled={isDisabled}
            onClick={() => saveDone(recipe)}
          >
            Finalizar receita
          </RenderButton>
        </Link>
      </div>
    </div>
  );
}

export default FoodProgress;
