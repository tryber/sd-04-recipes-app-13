import React from 'react';

const FoodCard = ({ data, info }) => {
  if (info === 'food') {
    return (
      <div>
        {data.slice(0, 12).map((food) => (
          <div>
            <h3>{food.strMeal}</h3>
            <img src={food.strMealThumb} alt={food.strMeal} width={'60px'} />
          </div>
        ))}
      </div>
    );
  } else {
    return (
      <div>
        {data.slice(0, 12).map((food) => (
          <div>
            <h3>{food.strDrink}</h3>
            <img src={food.strDrinkThumb} alt={food.strDrink} width={'60px'} />
          </div>
        ))}
      </div>
    );
  }
};

export default FoodCard;
