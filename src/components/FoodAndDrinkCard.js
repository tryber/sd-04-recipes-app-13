import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const FoodAndDrinkCard = ({ data, info, slice = 12, test, geralTest }) => {
  if (info === 'food') {
    return (
      <div className="card-general-container">
        {data.slice(0, Number(slice)).map((food, index) => (
          <div className="card-container">
            <Link
              to={`/comidas/${food.idMeal}`}
              data-testid={`${index}-${geralTest}-card`}
              key={food.idMeal}
            >
              <img className="card-img" data-testid={`${index}-${test}-img`} src={food.strMealThumb} alt={food.strMeal} width={'60px'} />
              <h3 className="card-name" data-testid={`${index}-${test}-name`}>{food.strMeal}</h3>
            </Link>
          </div>
        ))}
      </div>
    );
  }
  return (
    <div className="card-general-container">
      {data.slice(0, Number(slice)).map((drink, index) => (
        <div className="card-container">
          <Link
            to={`/bebidas/${drink.idDrink}`}
            data-testid={`${index}-${geralTest}-card`}
            key={drink.idDrink}
          >
            <img className="card-img" src={drink.strDrinkThumb} data-testid={`${index}-${test}-img`} alt={drink.strDrink} width={'60px'} />
            <h3 className="card-name" data-testid={`${index}-${test}-name`}>{drink.strDrink}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
};

FoodAndDrinkCard.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  info: PropTypes.string.isRequired,
  slice: PropTypes.string.isRequired,
  test: PropTypes.string.isRequired,
};

export default FoodAndDrinkCard;
