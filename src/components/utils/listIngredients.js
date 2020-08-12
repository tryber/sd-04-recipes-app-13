import React from 'react';

export default function listIngredients(recipe) {
  Object.keys(recipe).map((ing, index) => (
    (recipe[`strIngredient${index + 1}`]) && (
      <li key={ing} data-testid={`${index}-ingredient-name-and-measure`}>
        {`${recipe[`strIngredient${index + 1}`]} - ${recipe[`strMeasure${index + 1}`]}`}
      </li>
    )
  ));
}
