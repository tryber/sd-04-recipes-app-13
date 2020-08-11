import React, { useState, useEffect, useContext } from 'react';
import { RecipeContext } from '../context/index';
import Header from '../components/Header/Header';
import { loadStorage } from '../services/localStorage';
import FavoriteCards from '../components/FavoriteCards';

function RecipesFavorites() {
  const [favoriteStorage, setFavoriteStorage] = useState([]);
  const [filter, setFilter] = useState('');
  const [storageFilter, setstorageFilter] = useState([]);
  const { track, setTrack } = useContext(RecipeContext);

  useEffect(() => {
    const favorite = JSON.parse(loadStorage('favoriteRecipes')) || [];
    setFavoriteStorage(favorite);
    setstorageFilter(favorite);
  }, [track]);

  useEffect(() => {
//    console.log(favoriteStorage);
    if (filter.length > 0) {
      setstorageFilter(favoriteStorage.filter((recipe) => recipe.type === filter));
    } else setTrack(!track);
  }, [filter]);

  return (
    <div>
      <Header title="Receitas Favoritas" />
      <div>
        <button data-testid="filter-by-all-btn" type="button" onClick={() => setFilter('')}>All</button>
        <button data-testid="filter-by-food-btn" type="button" onClick={() => setFilter('comida')}>Food</button>
        <button data-testid="filter-by-drink-btn" type="button" onClick={() => setFilter('bebida')}>Drinks</button>
      </div>
      {console.log(storageFilter)}
      <FavoriteCards favoriteRecipe={storageFilter} />
    </div>
  );
}

export default RecipesFavorites;
