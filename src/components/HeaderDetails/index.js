import React, { Fragment } from 'react';

const HeaderDetails = ({ recipe, foods }) => (
  foods ? (
    <Fragment>
      <img
        data-testid="recipe-photo"
        className="details-img"
        src={recipe.strMealThumb}
        alt="food-img"
      />
      <h1 data-testid="recipe-title" className="details-title">{recipe.strMeal}</h1>
      <h4 data-testid="recipe-category" className="details-sub">{recipe.strCategory}</h4>
    </Fragment>
  )
    : (
      <Fragment>
        <img
          data-testid="recipe-photo"
          src={recipe.strDrinkThumb}
          alt="drink-img"
        />
        <h1 data-testid="recipe-title" className="details-title">{recipe.strDrink}</h1>
        <h4 data-testid="recipe-category" className="details-sub">{recipe.strAlcoholic}</h4>
      </Fragment>
    )
);

export default HeaderDetails;
