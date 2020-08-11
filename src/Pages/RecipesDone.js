import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { loadStorage } from '../services/localStorage';
import ShareAndFavorite from '../components/ShareAndFavorite';
import Header from '../components/Header/Header';
import FilterButton from '../components/utils/FilterButton';

const RouteGeneration = (recipe) => {
  if (recipe.type === 'comida') return `comidas/${recipe.id}`;
  if (recipe.type === 'bebida') return `bebidas/${recipe.id}`;
  return '/notfound';
};

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
    //    console.log(favoriteStorage);
    if (filter.length > 0) {
      setstorageFilter(doneRecipe.filter((recipe) => recipe.type === filter));
    }
  }, [filter]);

  const Tags = (recipe, index) => {
    const tagArray = recipe.tags.split(',');
    tagArray.map((tag) => (
      <p data-testid={`${index}-${tag}-horizontal-tag`}>tag</p>
    ));
  };

  return (
    <div>
      <Header title="Receitas Feitas" />
      <FilterButton setFilter={setFilter} />
      <div>
        {storageFilter.map((recipe, index) => (
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
            <p data-testid={`${index}-horizontal-done-date`}>{`Feita em: ${recipe.doneDate}`}</p>
            {(recipe.type === 'comida') && Tags(recipe, index)}
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecipesDone;
