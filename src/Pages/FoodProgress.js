import React from 'react';

function FoodProgress() {
  const test = [{
    id: 18765,
    type: 'comida',
    area: 'Irlanda',
    category: 'lunch',
    alcoholicOrNot: '',
    name: 'Irish stew',
    image: 'nsfhjnghmdn',
    doneDate: '11/08/2020',
    tags: ['gostoso', 'carneiro'],
  }];

  localStorage.setItem('doneRecipes', JSON.stringify(test));
  return (
    <div>
      <h1>oi</h1>
    </div>
  );
}

export default FoodProgress;
