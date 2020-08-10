import React, { useState, useEffect } from 'react';
import { getById } from '../services/foodApi';
import HeaderDetails from '../components/HeaderDetails';
import RenderInput from '../components/utils/Input';

function FoodProgress() {
  const [recipe, setRecipe] = useState('');
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    const pathName = window.location.pathname.slice(9);
    const id = pathName.replace(/\D/g, '');
    getById(id).then((data) => setRecipe(data[0]));
  }, []);

  useEffect(() => {
    Object.keys(recipe).map(
      (_, index) =>
        recipe[`strIngredient${index + 1}`] &&
        setIngredients((prevState) => [
          ...prevState,
          {
            ingredient: recipe[`strIngredient${index + 1}`],
            isCompleted: false,
          },
        ]),
    );
  }, [recipe]);

  const completedStep = (index, recipe) => {};

  return (
    <div>
      {console.log(ingredients)}
      {console.log(recipe)}
      <HeaderDetails recipe={recipe} foods />
      <div>
        <h1>Ingredientes</h1>
        {Object.keys(recipe).map(
          (_, index) =>
            recipe[`strIngredient${index + 1}`] && (
              <div>
                <RenderInput
                  type="checkbox"
                  id={recipe[`strIngredient${index + 1}`]}
                  value={recipe[`strIngredient${index + 1}`]}
                  key={recipe[`strIngredient${index + 1}`]}
                  data-testid={`${index}-ingredient-step`}
                  onClick={() => completedStep(index, recipe)}
                />
                <label htmlFor={recipe[`strIngredient${index + 1}`]}>
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
