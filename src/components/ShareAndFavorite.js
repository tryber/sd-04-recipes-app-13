import React, { useState, useEffect } from 'react';
import copy from 'clipboard-copy';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import { saveStorage, loadStorage } from '../services/localStorage';
import PropTypes from 'prop-types';

function ShareAndFavorite({ food, path, copied, setCopied }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [favoriteStorage, setFavoriteStorage] = useState([]);

  const searchFavoriteFood = () => {
    const foodIsFavorite = favoriteStorage.filter((fav) => fav.id === food.idMeal);
    console.log('oi', foodIsFavorite);
    foodIsFavorite.length > 0 && setIsFavorite(true);
  };

  useEffect(() => {
    const favorite = JSON.parse(loadStorage('favoriteRecipes')) || [];
    setFavoriteStorage(favorite);
    searchFavoriteFood();
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
      <button onClick={() => handleFavorite()}>
        <img src={isFavorite ? blackHeartIcon : whiteHeartIcon} alt="whiteHeart" />
      </button>

      <button type="button" onClick={() => ShareClick()}>
        <img src={shareIcon} alt="share-icon" />
      </button>
      {copied && <span>Link copiado!</span>}
    </div>
  );
}

ShareAndFavorite.propTypes = {
  food: PropTypes.objectOf(PropTypes.objectOf(string)).isRequired,
  path: PropTypes.string.isRequired,
  copied: PropTypes.bool.isRequired,
  setCopied: PropTypes.func.isRequired,
};

export default ShareAndFavorite;
