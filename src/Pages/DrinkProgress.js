import React, { useState, useEffect } from 'react';
import { getById } from '../services/drinkApi';
import HeaderDetails from '../components/HeaderDetails';
import RenderInput from '../components/utils/Input';

function DrinkProgress() {
  const [recipe, setRecipe] = useState('');

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
          (ingredient, index) => recipe[`strIngredient${index + 1}`] && (
            <div>
              <label htmlFor={ingredient}>
                <RenderInput
                  type="checkbox"
                  id={ingredient}
                  value={ingredient}
                  key={ingredient}
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
