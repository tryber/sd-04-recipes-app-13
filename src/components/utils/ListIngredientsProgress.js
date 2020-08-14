import React from 'react';
import RenderInput from './Input';
import completedStep from './completeStep';

function listIngredientsProgress(ingredients, setIngredients) {
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
              checked={((isCompleted))}
            />{`${ingredient} - ${measure}`}</label>
        </li>
      ))}
    </ul>
  );
}

export default listIngredientsProgress;
