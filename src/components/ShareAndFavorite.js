import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import copy from 'clipboard-copy';
import { RecipeContext } from '../context/index';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import { saveStorage, loadStorage } from '../services/localStorage';

const searchFavoriteFood = (favoriteStorage, food) => {
  const foodIsFavorite = favoriteStorage
    .filter((fav) => fav.id === (food.idMeal || food.idDrink || food.id));
  if (foodIsFavorite.length > 0) return true;
  return false;
};

const HandleFavoriteClick = (favoriteStorage, isFavorite, recipe, setFavoriteStorage) => {
  if (!isFavorite && favoriteStorage) {
    saveStorage('favoriteRecipes', [...favoriteStorage, recipe]);
  } else saveStorage('favoriteRecipes', [recipe]);

  if (isFavorite) {
    const favoriteFilter = favoriteStorage.filter((fav) => fav.id !== recipe.id);
    saveStorage('favoriteRecipes', favoriteFilter);
    setFavoriteStorage(JSON.parse(loadStorage('favoriteRecipes')));
  }
};

const ShareAndFavorite = ({ food, path, Type, favid, shareid }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [favoriteStorage, setFavoriteStorage] = useState([]);
  const [copied, setCopied] = useState(false);
  const { track, setTrack } = useContext(RecipeContext);

  useEffect(() => {
    const favorite = JSON.parse(loadStorage('favoriteRecipes')) || [];
    setFavoriteStorage(favorite);
    setIsFavorite(searchFavoriteFood(favorite, food));
  }, [food]);

  const recipe = {
    id: food.idMeal || food.idDrink || food.id,
    type: Type || food.type,
    area: food.strArea || food.area || ' ',
    category: food.strCategory || food.category,
    name: food.strMeal || food.strDrink || food.name,
    image: food.strMealThumb || food.strDrinkThumb || food.image,
    alcoholicOrNot: food.strAlcoholic || food.alcoholicOrNot || ' ',
  };

  const handleFavorite = () => {
    HandleFavoriteClick(favoriteStorage, isFavorite, recipe, setFavoriteStorage);
    setIsFavorite(!isFavorite);
    setTrack(!track);
  };

  const ShareClick = () => {
    copy(path);
    setCopied(true);
  };

  return (
    <div>
      <button onClick={() => handleFavorite()} type="button">
        <img
          data-testid={favid}
          src={isFavorite ? blackHeartIcon : whiteHeartIcon}
          alt="whiteHeart"
        />
      </button>

      <button type="button" onClick={() => ShareClick()}>
        <img src={shareIcon} data-testid={shareid} alt="share-icon" />
      </button>
      {copied && <span>Link copiado!</span>}
    </div>
  );
};

ShareAndFavorite.propTypes = {
  food: PropTypes.objectOf(PropTypes.string).isRequired,
  path: PropTypes.string.isRequired,
  favid: PropTypes.string,
  shareid: PropTypes.string,
  Type: PropTypes.string.isRequired,
};

ShareAndFavorite.defaultProps = {
  favid: 'favorite-btn',
  shareid: 'share-btn',
};

export default ShareAndFavorite;
