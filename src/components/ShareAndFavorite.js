import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import copy from 'clipboard-copy';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import { saveStorage, loadStorage } from '../services/localStorage';

const searchFavoriteFood = (favoriteStorage, recipe) => {
  const foodIsFavorite = favoriteStorage.filter((fav) => fav.id === recipe.id);
  if (foodIsFavorite.length > 0) return true;
};

const HandleFavoriteClick = (favoriteStorage, isFavorite, recipe, setFavoriteStorage) => {
  if (!isFavorite && favoriteStorage) {
    saveStorage('favoriteRecipes', [...favoriteStorage, recipe]);
  } else saveStorage('favoriteRecipes', [recipe]);

  console.log(isFavorite);
  if (isFavorite) {
    const favoriteFilter = favoriteStorage.filter((fav) => fav.id !== recipe.id);
    saveStorage('favoriteRecipes', favoriteFilter);
    setFavoriteStorage(JSON.parse(loadStorage('favoriteRecipes')));
  }
};

const ShareAndFavorite = ({ food, path, copied, setCopied, Type }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [favoriteStorage, setFavoriteStorage] = useState([]);

  useEffect(() => {
    const favorite = JSON.parse(loadStorage('favoriteRecipes')) || [];
    setFavoriteStorage(favorite);
    setIsFavorite(searchFavoriteFood(favoriteStorage, recipe));
  }, [food]);

  const recipe = {
    id: food.idMeal || food.idDrink,
    type: Type,
    area: food.strArea,
    category: food.strCategory,
    name: food.strMeal || food.strDrink,
    image: food.strMealThumb || food.strDrinkThumb,
    alcoholicOrNot: '' || food.strAlcoholic,
  };

  const handleFavorite = () => {
    HandleFavoriteClick(favoriteStorage, isFavorite, recipe, setFavoriteStorage);
    setIsFavorite(!isFavorite);
  };

  const ShareClick = () => {
    copy(path);
    setCopied(true);
  };

  return (
    <div>
      <button onClick={() => handleFavorite()} type="button">
        <img
          data-testid="favorite-btn"
          src={isFavorite ? blackHeartIcon : whiteHeartIcon}
          alt="whiteHeart"
        />
      </button>

      <button data-testid="share-btn" type="button" onClick={() => ShareClick()}>
        <img src={shareIcon} alt="share-icon" />
      </button>
      {copied && <span>Link copiado!</span>}
    </div>
  );
};

ShareAndFavorite.propTypes = {
  food: PropTypes.objectOf(PropTypes.string).isRequired,
  path: PropTypes.string.isRequired,
  copied: PropTypes.bool.isRequired,
  setCopied: PropTypes.func.isRequired,
};

export default ShareAndFavorite;
