import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { getById } from '../services/foodApi';
import FoodAndDrinkCard from '../components/FoodAndDrinkCard';
import { getByName } from '../services/drinkApi';

async function alternateDrinks() {
  const Drinks = await getByName('').then((resp) => resp);
  console.log(Drinks);
  return (
    <div>
      <h1>Recomended</h1>
      <FoodAndDrinkCard data={Drinks} info="drink" slice="6" test="recomendation" />
    </div>
  );
}

function FoodDetails() {
  const [food, setFood] = useState('');

  useEffect(() => {
    const foodId = window.location.pathname.slice(9);
    getById(foodId).then((Datafood) => {
      setFood(Datafood[0]);
    });
  }, []);

  return (
    <div>
      <img data-testid="recipe-photo" src={food.strMealThumb} alt="food-img" />
      <h1 data-testid="recipe-title" className="food-title">{food.strMeal}</h1>
      <h4 data-testid="recipe-category">{food.strCategory}</h4>
      <div>
        <h1>Ingredients</h1>
        <ul>
          {Object.keys(food).map((ing, index) => (
            (food[`strIngredient${index + 1}`]) && (
              <li key={ing} data-testid={`${index}-ingredient-name-and-measure`}>
                {`${food[`strIngredient${index + 1}`]} - ${food[`strMeasure${index + 1}`]}`}
              </li>
            )
          ))}
        </ul>
      </div>
      <div>
        <h1>Instructions</h1>
        <p data-testid="instructions">{food.strInstructions}</p>
      </div>
      <div>
        <h1>Video</h1>
        <ReactPlayer url={food.strYoutube} data-testid="video" />
      </div>
      <div>{() => alternateDrinks()}</div>
    </div>
  );
}

export default FoodDetails;
