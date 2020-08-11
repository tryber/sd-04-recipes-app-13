import React, { useState, useEffect } from 'react';
import { loadStorage } from '../services/localStorage';
import Header from '../components/Header/Header';
import FilterButton from '../components/utils/FilterButton';
import FavoriteCards from '../components/FavoriteCards';

function RecipesDone() {
  const [filter, setFilter] = useState('');
  const [doneRecipe, setDoneRecipe] = useState([]);
  const [storageFilter, setstorageFilter] = useState([]);

  useEffect(() => {
    const doneRecipeStorage = JSON.parse(loadStorage('doneRecipes')) || [];
    setDoneRecipe(doneRecipeStorage);
    setstorageFilter(doneRecipeStorage);
  }, []);

  useEffect(() => {
    if (filter.length > 0) {
      setstorageFilter(doneRecipe.filter((recipe) => recipe.type === filter));
    }
  }, [filter]);

  return (
    <div>
      <Header title="Receitas Feitas" />
      <FilterButton setFilter={setFilter} />
      <FavoriteCards favoriteRecipe={storageFilter} from="done" />
    </div>
  );
}

export default RecipesDone;
