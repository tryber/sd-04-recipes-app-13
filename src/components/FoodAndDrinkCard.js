import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const FoodAndDrinkCard = ({ data, info, slice, test1, test2, test3 }) => {
  if (info === 'food') {
    return (
      <div className="card-general-container">
        {data.slice(0, Number(slice)).map((food, index) => (
          <div
            data-testid={`${index}-${test1}`}
            key={food.idMeal}
            className="card-container"
          >
            <Link to={`/comidas/${food.idMeal}`}>
              <img
                className="card-img"
                data-testid={`${index}-${test2}`}
                src={food.strMealThumb}
                alt={food.strMeal}
                width="60px"
              />
              <h3 className="card-name" data-testid={`${index}-${test3}`}>
                {food.strMeal}
              </h3>
            </Link>
          </div>
        ))}
      </div>
    );
  }
  return (
    <div className="card-general-container">
      {data.slice(0, Number(slice)).map((drink, index) => (
        <div
          data-testid={`${index}-${test1}`}
          key={drink.idDrink}
          className="card-container"
        >
          <Link
            to={`/bebidas/${drink.idDrink}`}
          >
            <img
              className="card-img"
              src={drink.strDrinkThumb}
              data-testid={`${index}-${test2}`}
              alt={drink.strDrink}
              width="60px"
            />
            <h3 className="card-name" data-testid={`${index}-${test3}`}>
              {drink.strDrink}
            </h3>
          </Link>
        </div>
      ))}
    </div>
  );
};

FoodAndDrinkCard.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  info: PropTypes.string.isRequired,
  slice: PropTypes.string,
  test1: PropTypes.string,
  test2: PropTypes.string,
  test3: PropTypes.string,
};

FoodAndDrinkCard.defaultProps = {
  test1: 'recipe-card',
  test2: 'card-img',
  test3: 'card-name',
  slice: 12,
};

export default FoodAndDrinkCard;
