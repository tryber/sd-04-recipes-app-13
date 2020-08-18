import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { getById } from '../services/foodApi';
import FoodAndDrinkCard from '../components/FoodAndDrinkCard';
import { getByName } from '../services/drinkApi';
import ShareAndFavorite from '../components/ShareAndFavorite';
import RecipeButton from '../components/utils/RecipeButton';
import HeaderDetails from '../components/HeaderDetails';
import listIngredients from '../components/utils/listIngredients';

function FoodDetails() {
  const [food, setFood] = useState('');
  const [Drink, setDrink] = useState([]);
  const [path, setPath] = useState('');

  useEffect(() => {
    const foodId = window.location.pathname.slice(9);
    getById(foodId).then((Datafood) => setFood(Datafood[0]));
    getByName('').then((resp) => setDrink(resp));
    setPath(window.location.href);
  }, []);

  return (
    <div className="details-container">
      <HeaderDetails recipe={food} foods />
      <ShareAndFavorite food={food} path={path} Type="comida" />
      <div className="container-details">
        <div className="container-ingredient">
          <h1 className="titles">Ingredients</h1>
          <ul>{listIngredients(food)}</ul>
        </div>
        <div className="intructions-container">
          <h1 className="titles">Instructions</h1>
          <p data-testid="instructions">{food.strInstructions}</p>
        </div>
        <div className="video-container">
          <h1 className="titles">Video</h1>
          <ReactPlayer
            width="90vw"
            height="90%"
            url={food.strYoutube}
            data-testid="video"
          />
        </div>
        <div className="recomment-container">
          <h1 className="titles">Recomended</h1>
          <FoodAndDrinkCard
            data={Drink}
            info="drink"
            slice="6"
            test1="recomendation-card"
            test2="recomendation-img"
            test3="recomendation-title"
          />
        </div>
        <RecipeButton type="meals" recipe="food" path={path} />
      </div>
    </div>
  );
}

export default FoodDetails;
