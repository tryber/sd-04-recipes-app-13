import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import copy from 'clipboard-copy';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import { saveStorage, loadStorage } from '../services/localStorage';

const searchFavoriteFood = (favoriteStorage, food, setIsFavorite) => {
  const foodIsFavorite = favoriteStorage.filter((fav) => fav.id === food.idMeal);
  if (foodIsFavorite.length > 0) setIsFavorite(true);
};

const ShareAndFavorite = ({ food, path, copied, setCopied }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [favoriteStorage, setFavoriteStorage] = useState([]);

  useEffect(() => {
    const favorite = JSON.parse(loadStorage('favoriteRecipes')) || [];
    setFavoriteStorage(favorite);
    searchFavoriteFood(favoriteStorage, food, setIsFavorite);
  }, [food]);

  const saveFood = {
    id: food.idMeal,
    type: 'comida',
    area: food.strArea,
    category: food.strCategory,
    name: food.strMeal,
    image: food.strMealThumb,
  };

  const handleFavorite = () => {
    !isFavorite && favoriteStorage
      ? saveStorage('favoriteRecipes', [...favoriteStorage, saveFood])
      : saveStorage('favoriteRecipes', [saveFood]);

    if (isFavorite) {
      const favoriteFilter = favoriteStorage.filter((fav) => fav.id !== food.idMeal);
      saveStorage('favoriteRecipes', favoriteFilter);
      setFavoriteStorage(JSON.parse(loadStorage('favoriteRecipes')));
    }
    setIsFavorite(!isFavorite);
  };

  const ShareClick = () => {
    copy(path);
    setCopied(true);
  };

  return (
    <div>
      <button  onClick={() => handleFavorite()}>
        <img data-testid="favorite-btn" src={isFavorite ? blackHeartIcon : whiteHeartIcon} alt="whiteHeart" />
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
