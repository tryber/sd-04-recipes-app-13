import React from 'react';
import RenderInput from './Input';
import completedStep from './completeStep';

import '../../styles/Checkbox.css';

function listIngredientsProgress(ingredients, setIngredients) {
  return (
    <div>
      {ingredients.map(({ ingredient, id, measure, isCompleted }) => (
        <label htmlFor={ingredient} className="checkbox">
          <span className="checkbox__input" data-testid={`${id}-ingredient-step`}>
            <RenderInput
              type="checkbox"
              id={ingredient}
              value={ingredient}
              key={ingredient}
              onClick={() => completedStep(id, setIngredients, ingredients)}
              checked={isCompleted}
            />
            <span className="checkbox__control">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                aria-hidden="true"
                focusable="false"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  d="M1.73 12.91l6.37 6.37L22.79 4.59"
                />
              </svg>
            </span>
          </span>
          <span
            className="radio__label"
            style={{ textDecoration: isCompleted ? 'line-through' : '' }}
          >
            {`${ingredient} - ${measure}`}
          </span>
        </label>
      ))}
    </div>
  );
}

export default listIngredientsProgress;
