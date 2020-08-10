import React, { useState, useEffect } from 'react';
import { getById } from '../services/drinkApi';
import HeaderDetails from '../components/HeaderDetails';
import RenderInput from '../components/utils/Input';

function DrinkProgress() {
  const [recipe, setRecipe] = useState('');
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    const pathName = window.location.pathname.slice(9);
    const id = pathName.replace(/\D/g, '');
    getById(id).then((data) => setRecipe(data[0]));
  }, []);



  return (
    <div>
      <HeaderDetails recipe={recipe} />
      <div>
        <h1>Ingredientes</h1>
        {Object.keys(recipe).map(
          (_, index) =>
            recipe[`strIngredient${index + 1}`] && (
              <div>
                <label htmlFor={recipe[`strIngredient${index + 1}`]}>
                  <RenderInput
                    type="checkbox"
                    id={recipe[`strIngredient${index + 1}`]}
                    value={recipe[`strIngredient${index + 1}`]}
                    key={recipe[`strIngredient${index + 1}`]}
                    data-testid={`${index}-ingredient-step`}
                  />
                  {`${recipe[`strIngredient${index + 1}`]} - ${
                    recipe[`strMeasure${index + 1}`]
                  }`}
                </label>
              </div>
            ),
        )}
      </div>
    </div>
  );
}

export default DrinkProgress;
