import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { loadStorage } from '../../services/localStorage';

function RecipeButton({type, recipe}) {
  const [doneRecipe, setDoneRecipe] = useState([]);
  const [doingRecipe, setDoingRecipe] = useState([]);
  const [message, setMessage] = useState('Iniciar Receita');
  const [visible, setVisible] = useState(true)

  const searchtypebutton = () => {
    const isDone = doneRecipe
      .filter((done) => done.id === (recipe.idMeal || recipe.idDrink));
    const isDoing = doingRecipe[type]
      .filter((doing) => doing === (recipe.idMeal || recipe.idDrink));

    (isDone.lengh > 0) && setVisible(false);
    (isDoing.lengh > 0) && setMessage('Continuar Receita');
  };

  useEffect(() => {
    setDoneRecipe(JSON.parse(loadStorage('doneRecipes')) || []);
    setDoingRecipe(JSON.parse(loadStorage('inProgressRecipes')) || []);
    searchtypebutton();
  }, []);

  return (
    <div>
      {visible && (
        <Link to="/comidas/:id/in-progress">
          <button type="button" data-testid="start-recipe-btn">{message}</button>
        </Link>
      )}
    </div>
  );
}

RecipeButton.propTypes = {
  type: PropTypes.string.isRequired,
  recipe: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default RecipeButton;
