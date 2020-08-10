import React, { useState, useEffect } from 'react';
import { getByName } from '../services/foodApi';
import FoodAndDrinkCard from '../components/FoodAndDrinkCard';
import { getById } from '../services/drinkApi';
import HeaderDetails from '../components/HeaderDetails';
import ShareAndFavorite from '../components/ShareAndFavorite';
import RecipeButton from '../components/utils/RecipeButton';

function DrinkDetails() {
  const [food, setFood] = useState([]);
  const [drink, setDrink] = useState([]);
  const [path, setPath] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const drinkId = window.location.pathname.slice(9);
    getById(drinkId).then((Datadrink) => setDrink(Datadrink[0]));
    getByName('').then((resp) => setFood(resp));
    setPath(window.location.href);
  }, []);

  return (
    <div>
      <HeaderDetails recipe={drink} />
      <ShareAndFavorite
        food={drink} path={path} copied={copied} setCopied={setCopied} Type="bebida"
      />
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
        <FoodAndDrinkCard data={food} info="food" slice="6" geraltest="recomendation" />
      </div>
      <RecipeButton type="cocktails" recipe="drink" path={path} />
    </div>
  );
}

export default DrinkDetails;
