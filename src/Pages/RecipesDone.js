import React, { useState, useEffect, useContext } from 'react';
import { RecipeContext } from '../context/index';
import { loadStorage } from '../services/localStorage';
import Header from '../components/Header/Header';
import FilterButton from '../components/utils/FilterButton';
import FavoriteCards from '../components/FavoriteCards';

function RecipesDone() {
  const [filter, setFilter] = useState('');
  const [doneRecipe, setDoneRecipe] = useState([]);
  const [storageFilter, setstorageFilter] = useState([]);
  const { track, setTrack } = useContext(RecipeContext);

  useEffect(() => {
    const doneRecipeStorage = JSON.parse(loadStorage('doneRecipes')) || [];
    setDoneRecipe(doneRecipeStorage);
    setstorageFilter(doneRecipeStorage);
  }, [track]);

  useEffect(() => {
    if (filter.length > 0) {
      setstorageFilter(doneRecipe.filter((recipe) => recipe.type === filter));
    } else setTrack(!track);
  }, [filter]);
  console.log(storageFilter);

  return (
    <div>
      <Header title="Receitas Feitas" />
      <FilterButton setFilter={setFilter} />
      <FavoriteCards favoriteRecipe={storageFilter} from="done" />
    </div>
  );
}

export default RecipesDone;
