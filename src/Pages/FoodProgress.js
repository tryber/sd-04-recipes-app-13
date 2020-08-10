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
            id: index,
            ingredient: recipe[`strIngredient${index + 1}`],
            measure: recipe[`strMeasure${index + 1}`],
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
        {ingredients.map(({ ingredient, id, measure }) => (
          <div>
            <RenderInput
              type="checkbox"
              id={ingredient}
              value={ingredient}
              key={ingredient}
              data-testid={`${id}-ingredient-step`}
              // onClick={() => completedStep(index, recipe)}
            />
            <label htmlFor={ingredient}>{`${ingredient} - ${measure}`}</label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FoodProgress;
