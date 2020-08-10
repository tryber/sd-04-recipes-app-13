import React, { useState, useEffect } from 'react';
import { getById } from '../services/foodApi';
import HeaderDetails from '../components/HeaderDetails';
import RenderInput from '../components/utils/Input';

function FoodProgress() {
  const [recipe, setRecipe] = useState('');
  const [completed, setCompleted] = useState('');

  useEffect(() => {
    const pathName = window.location.pathname.slice(9);
    const id = pathName.replace(/\D/g, '');
    getById(id).then((data) => setRecipe(data[0]));
  }, []);

  // useEffect(() => {
  //   setCompleted(prevState => [
  //     ...prevState,
  //     {
  //       isCompleted}
  //   ]);
  // }, [recipe]);

  const completedStep = (index, recipe) => {
    // e.target.checked === true ? setCompleted(true) : setCompleted(false);
    
  };

  return (
    <div>
      <HeaderDetails recipe={recipe} foods />
      <div>
        <h1>Ingredientes</h1>
        {Object.keys(recipe).map(
          (ingredient, index) =>
            recipe[`strIngredient${index + 1}`] && (
              <div>
                <RenderInput
                  type="checkbox"
                  id={ingredient}
                  value={ingredient}
                  key={ingredient}
                  data-testid={`${index}-ingredient-step`}
                  onClick={() => completedStep(index, recipe)}
                />
                <label
                  htmlFor={ingredient}
                  style={{ textDecoration: completed ? 'line-through' : '' }}
                >
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

export default FoodProgress;
