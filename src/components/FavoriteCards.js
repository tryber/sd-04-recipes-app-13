import React from 'react';
import PropTypes from 'prop-types';
import ShareAndFavorite from './ShareAndFavorite';

function FavoriteCards({ favoriteRecipe }) {
  const favoriteMeals = favoriteRecipe.filter((recipe) => recipe.type === 'comida');
  const favoriteDrinks = favoriteRecipe.filter((recipe) => recipe.type === 'bebida');
  return (
    <div>
      {favoriteMeals.map((recipe, index) => (
        <div key={recipe.id}>
          <img data-testid={`${index}-horizontal-image`} src={recipe.image} alt={recipe.name} />
          <h3 data-testid={`${index}-horizontal-name`}>{recipe.name}</h3>
          <p data-testid={`${index}-horizontal-top-text`}>
            {recipe.category}, {recipe.area}
          </p>
          <h4>{recipe.area}</h4>
          <ShareAndFavorite
            food={recipe} path={`http://localhost:3000/comidas/${recipe.id}`}
            Type="comida" favid={`${index}-horizontal-favorite-btn`}
            shareid={`${index}-horizontal-share-btn`}
          />
        </div>
      ))}
      {favoriteDrinks.map((recipe,index) => (
        <div key={recipe.id}>
          <img data-testid={`${index}-horizontal-image`} src={recipe.image} alt={recipe.name} />
          <h3 data-testid={`${index}-horizontal-name`}>{recipe.name}</h3>
          <p data-testid={`${index}-horizontal-top-text`}>{recipe.alcoholicOrNot}</p>
          <ShareAndFavorite
            food={recipe} path={`http://localhost:3000/comidas/${recipe.id}`}
            Type="bebida" favid={`${index}-horizontal-favorite-btn`}
            shareid={`${index}-horizontal-share-btn`}
          />
        </div>
      ))}
    </div>
  );
}

FavoriteCards.propTypes = {
  favoriteRecipe: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default FavoriteCards;
