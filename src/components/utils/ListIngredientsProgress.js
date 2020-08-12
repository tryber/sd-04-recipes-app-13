import React from 'react';

function listIngredientsProgress(ingredients, setIngredients, RenderInput, completedStep) {
  console.log(ingredients);
  return (
    <ul>
      {ingredients.map(({ ingredient, id, measure, isCompleted }) => (
        <li data-testid={`${id}-ingredient-step`}>
          <label
            htmlFor={ingredient}
            style={{ textDecoration: isCompleted ? 'line-through' : '' }}
          >
            <RenderInput
              type="checkbox" id={ingredient} value={ingredient} key={ingredient}
              onClick={() => completedStep(id, setIngredients, ingredients)}
              checked={((isCompleted) && 'checked')}
            />{`${ingredient} - ${measure}`}</label>
        </li>
      ))}
    </ul>
  );
}

export default listIngredientsProgress.js
