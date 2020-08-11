import React, { useState, useEffect, useContext } from 'react';
import { RecipeContext } from '../context/index';
import Header from '../components/Header/Header';
import { loadStorage } from '../services/localStorage';
import FavoriteCards from '../components/FavoriteCards';
import FilterButton from '../components/utils/FilterButton';

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
      <FilterButton setFilter={setFilter} />
      <FavoriteCards favoriteRecipe={storageFilter} from="favorite" />
    </div>
  );
}

export default RecipesFavorites;
