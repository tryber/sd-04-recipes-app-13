import React from 'react';
import PropTypes from 'prop-types';

const FoodAndDrinkCard = ({ data, info }) => {
  if (info === 'food') {
    return (
      <div>
        {data.slice(0, 12).map((food, index) => (
          <div data-testid={`${index}-recipe-card`} key={food.idMeal}>
            <h3>{food.strMeal}</h3>
            <img src={food.strMealThumb} alt={food.strMeal} width={'60px'} />
          </div>
        ))}
      </div>
    );
  }
  return (
    <div>
      {data.slice(0, 12).map((food, index) => (
        <div data-testid={`${index}-recipe-card`} key={food.idDrink}>
          <h3>{food.strDrink}</h3>
          <img src={food.strDrinkThumb} alt={food.strDrink} width={'60px'} />
        </div>
      ))}
    </div>
  );
};

FoodAndDrinkCard.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  info: PropTypes.string.isRequired,
};

export default FoodAndDrinkCard;
