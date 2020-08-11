import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ShareAndFavorite from './ShareAndFavorite';

function FavoriteCards({ favoriteRecipe, from }) {
  const RouteGeneration = (recipe) => {
    if (recipe.type === 'comida') return `comidas/${recipe.id}`;
    if (recipe.type === 'bebida') return `bebidas/${recipe.id}`;
    return '/notfound';
  };

  const Tags = (recipe, index) => {
    const TagRecipe = recipe.tags.split(',');
    (recipe.type === 'comida')(
      TagRecipe.map((tag) => <p data-testid={`${index}-${tag}-horizontal-tag`}>tag</p>),
    );
  };

  return (
    <div>
      {favoriteRecipe.map((recipe, index) => (
        <div key={recipe.id}>
          <Link to={() => RouteGeneration(recipe)}>
            <img data-testid={`${index}-horizontal-image`} src={recipe.image} alt={recipe.name} />
            <h3 data-testid={`${index}-horizontal-name`}>{recipe.name}</h3>
          </Link>
          <p data-testid={`${index}-horizontal-top-text`}>
            {(recipe.type === 'comida') && `${recipe.area} - ${recipe.category}`}
            {(recipe.type === 'bebida') && recipe.alcoholicOrNot}
          </p>
          <ShareAndFavorite
            food={recipe} path={`http://localhost:3000/comidas/${recipe.id}`}
            Type={recipe.type} favid={`${index}-horizontal-favorite-btn`}
            shareid={`${index}-horizontal-share-btn`}
          />
          {(from === 'done') &&
            <p data-testid={`${index}-horizontal-done-date`}>{`Feita em: ${recipe.doneDate}`}</p>}
          {(from === 'done') && Tags(recipe, index)}
        </div>
      ))}
    </div>
  );
}

FavoriteCards.propTypes = {
  favoriteRecipe: PropTypes.objectOf(PropTypes.string).isRequired,
  from: PropTypes.string.isRequired,
};

export default FavoriteCards;
