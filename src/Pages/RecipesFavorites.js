import React, { useState, useEffect } from 'react';
import Header from '../components/Header/Header';
import { loadStorage } from '../services/localStorage';
import FavoriteCards from '../components/FavoriteCards';

function RecipesFavorites() {
  const [favoriteStorage, setFavoriteStorage] = useState([]);
  const [filter, setFilter] = useState('');
  const [storageFilter, setstorageFilter] = useState([]);

  useEffect(() => {
    const favorite = JSON.parse(loadStorage('favoriteRecipes')) || [];
    setFavoriteStorage(favorite);
    setstorageFilter(favorite);
  }, []);

  useEffect(() => {
    console.log("filter", filter)
    console.log(favoriteStorage)
    if (filter === 'All') {
      const salvandoGeral = favoriteStorage;
      console.log('filter geral', salvandoGeral)
      setstorageFilter(salvandoGeral);
    }
    if (filter.length > 0) {
      setstorageFilter(favoriteStorage.filter((recipe) => recipe.type === filter));
    }
  }, [filter]);

  return (
    <div>
      <Header title="Receitas Favoritas" />
      <div>
        <button data-testid="filter-by-all-btn" type="button" onClick={() => setFilter('All')}>All</button>
        <button data-testid="filter-by-food-btn" type="button" onClick={() => setFilter('comida')}>Food</button>
        <button data-testid="filter-by-drink-btn" type="button" onClick={() => setFilter('bebida')}>Drinks</button>
      </div>
      <FavoriteCards favoriteRecipe={storageFilter} />
    </div>
  );
}

export default RecipesFavorites;
