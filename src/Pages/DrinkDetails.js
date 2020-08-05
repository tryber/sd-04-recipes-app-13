import React, { useState, useEffect } from 'react';
import { getByName } from '../services/foodApi';
import FoodAndDrinkCard from '../components/FoodAndDrinkCard';
import { getById } from '../services/drinkApi';

function DrinkDetails() {
  const [food, setFood] = useState([]);
  const [drink, setDrink] = useState([]);

  useEffect(() => {
    const drinkId = window.location.pathname.slice(9);
    getById(drinkId).then((Datadrink) => setDrink(Datadrink[0]));
    getByName('').then((resp) => setFood(resp));
  }, []);

  return (
    <div>
      <img data-testid="recipe-photo" src={drink.strDrinkThumb} alt="drink-img" />
      <h1 data-testid="recipe-title" className="drink-title">{drink.strDrink}</h1>
      <h4 data-testid="recipe-category">{drink.strAlcoholic}</h4>
      <div>
        <h1>Ingredients</h1>
        <ul>
          {Object.keys(drink).map((ing, index) => (
            (drink[`strIngredient${index + 1}`]) && (
              <li key={ing} data-testid={`${index}-ingredient-name-and-measure`}>
                {`${drink[`strIngredient${index + 1}`]} - ${drink[`strMeasure${index + 1}`]}`}
              </li>
            )
          ))}
        </ul>
      </div>
      <div>
        <h1>Instructions</h1>
        <p data-testid="instructions">{drink.strInstructions}</p>
      </div>
      <div>
        <h1>Recomended</h1>
        <FoodAndDrinkCard data={food} info="food" slice="6" test="recomendation" />
      </div>
    </div>
  );
}

export default DrinkDetails;
