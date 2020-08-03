import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const FoodAndDrinkCard = ({ data, info }) => {
  if (info === 'food') {
    return (
      <div>
        {data.slice(0, 12).map((food, index) => (
          <Link
            to={`/comidas/${food.idMeal}`}
            data-testid={`${index}-recipe-card`}
            key={food.idMeal}
          >
            <h3>{food.strMeal}</h3>
            <img src={food.strMealThumb} alt={food.strMeal} width={'60px'} />
          </Link>
        ))}
      </div>
    );
  }
  return (
    <div>
      {data.slice(0, 12).map((drink, index) => (
        <Link
          to={`/bebidas/${drink.idDrink}`}
          data-testid={`${index}-recipe-card`}
          key={drink.idDrink}
        >
          <h3>{drink.strDrink}</h3>
          <img src={drink.strDrinkThumb} alt={drink.strDrink} width={'60px'} />
        </Link>
      ))}
    </div>
  );
};

FoodAndDrinkCard.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  info: PropTypes.string.isRequired,
};

export default FoodAndDrinkCard;
