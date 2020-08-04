import React, { useState, useEffect } from 'react';
import { RecipeContext } from '../context/index';
import { getById } from '../services/foodApi';

function FoodDetails() {
  const [food, setFood] = useState('');

  useEffect(() => {
    const foodId = window.location.pathname.slice(9);
    getById(foodId).then((Datafood) => {
      setFood(Datafood[0]);
    });
  }, []);

  return (
    <div>
      <img src={food.strMealThumb} alt="food-img" />
      <h1 className="food-title">{food.strMeal}</h1>
      <h4>{food.strCategory}</h4>
      <div>
        <h1>Ingredientes</h1>
        <ul>
          {Object.keys(food).map((ing, index) => (
            <li>{food[`${ing}${index}`]}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default FoodDetails;
