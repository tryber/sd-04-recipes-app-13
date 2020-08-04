import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const FoodAndDrinkCard = ({ data, info, slice = 12, test = 'recipe' }) => {
  if (info === 'food') {
    return (
      <div className="card-general-container">
        {data.slice(0, 12).map((food, index) => (
          <div className="card-container">
            <Link
              to={`/comidas/${food.idMeal}`}
              data-testid={`${index}-${test}-card`}
              key={food.idMeal}
            >
              <h3 className="card-name">{food.strMeal}</h3>
              <img className="card-img" src={food.strMealThumb} alt={food.strMeal} width={'60px'} />
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
            data-testid={`${index}-r${test}-card`}
            key={drink.idDrink}
          >
            <h3 className="card-name">{drink.strDrink}</h3>
            <img className="card-img" src={drink.strDrinkThumb} alt={drink.strDrink} width={'60px'} />
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
