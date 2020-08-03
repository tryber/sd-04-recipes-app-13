import React from 'react';

const FoodCard = ({ foods }) => {
  return (
    <div>
      <h3>{foods.strMeal}</h3>
      <img src={foods.strMealThumb} alt={foods.strMeal} />
    </div>
  );
};

export default FoodCard;
