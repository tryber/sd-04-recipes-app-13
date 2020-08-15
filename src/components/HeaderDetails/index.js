import PropTypes from 'prop-types';
import React from 'react';

const HeaderDetails = ({ recipe, foods }) => (
  foods ? (
    <div className="header-details">
      <img
        data-testid="recipe-photo"
        className="details-img"
        src={recipe.strMealThumb}
        alt="food-img"
      />
      <div className="header-details-title">
      <h1 data-testid="recipe-title" className="details-title">
        {recipe.strMeal}
      </h1>
      <h4 data-testid="recipe-category" className="details-sub">
        {recipe.strCategory}
      </h4>
      </div>
    </div>
  ) : (
    <div className="header-details">
      <img data-testid="recipe-photo" src={recipe.strDrinkThumb} alt="drink-img" />
      <div className="header-details-title">
      <h1 data-testid="recipe-title" className="details-title">
        {recipe.strDrink}
      </h1>
      <h4 data-testid="recipe-category" className="details-sub">
        {recipe.strAlcoholic}
      </h4>
      </div>
    </div>
  )
);

HeaderDetails.propTypes = {
  foods: PropTypes.bool.isRequired,
  recipe: PropTypes.shape({
    strAlcoholic: PropTypes.string.isRequired,
    strCategory: PropTypes.string.isRequired,
    strDrink: PropTypes.string.isRequired,
    strDrinkThumb: PropTypes.string.isRequired,
    strMeal: PropTypes.string.isRequired,
    strMealThumb: PropTypes.string.isRequired,
  }).isRequired,
};

export default HeaderDetails;
