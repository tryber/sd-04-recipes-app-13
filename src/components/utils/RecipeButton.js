import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { loadStorage } from '../../services/localStorage';

const searchtypebutton = (
  doingRecipe,
  doneRecipe,
  recipe,
  setVisible,
  setMessage,
  type,
) => {
  const isDoingArray = doingRecipe[type] || [];

  const isDone = Object.keys(doneRecipe)
    .filter((done) => done.id === (recipe.idMeal || recipe.idDrink));

  const isDoing = Object.keys(isDoingArray)
    .filter((doing) => doing === (recipe.idMeal || recipe.idDrink));

  if (isDone.length > 0) setVisible(false);
  if (isDoing.length > 0) setMessage('Continuar Receita');
};

function RecipeButton({ type, recipe, path }) {
  const [doneRecipe, setDoneRecipe] = useState([]);
  const [doingRecipe, setDoingRecipe] = useState({});
  const [message, setMessage] = useState('Iniciar Receita');
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setDoneRecipe(JSON.parse(loadStorage('doneRecipes')) || []);
    setDoingRecipe(JSON.parse(loadStorage('inProgressRecipes')) || { cocktails: [], meals: [] });
  }, []);

  useEffect(() => {
    searchtypebutton(doingRecipe, doneRecipe, recipe, setVisible, setMessage, type);
  }, [doingRecipe, recipe]);

  return (
    <div className="button-start">
      {visible && (
        <Link to={`${path.slice(21)}/in-progress`}>
          <button
            type="button" data-testid="start-recipe-btn" visibility={visible ? 'visible' : 'hidden'}
          >{message}</button>
        </Link>
      )}
    </div>
  );
}

RecipeButton.propTypes = {
  type: PropTypes.string.isRequired,
  recipe: PropTypes.objectOf(PropTypes.string).isRequired,
  path: PropTypes.string.isRequired,
};

export default RecipeButton;
