import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { getById } from '../services/foodApi';
import FoodAndDrinkCard from '../components/FoodAndDrinkCard';
import { getByName } from '../services/drinkApi';
import HeaderDetails from '../components/HeaderDetails';
// import ShareAndFavorite from '../components/ShareAndFavorite';
// import '../styles/DetailsPage.css';

function FoodDetails() {
  const [food, setFood] = useState('');
  const [Drink, setDrink] = useState([]);
  // const [path, setPath] = useState('');
  // const [copied, setCopied] = useState(false);

  useEffect(() => {
    const foodId = window.location.pathname.slice(9);
    getById(foodId).then((Datafood) => setFood(Datafood[0]));
    getByName('').then((resp) => setDrink(resp));
    // setPath(window.location.pathname);
  }, []);

  console.log(food);
  return (
    <div className="details-container">
      <HeaderDetails recipe={food} foods />
      <div className="ingredients">
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
      <div className="ingredients">
        <h1 className="titles">Instructions</h1>
        <p data-testid="instructions">{food.strInstructions}</p>
      </div>
      <div>
        <h1 className="titles">Video</h1>
        <ReactPlayer className="video" url={food.strYoutube} data-testid="video" />
      </div>
      <div>
        <h1 className="titles">Recomended</h1>
        <FoodAndDrinkCard data={Drink} info="drink" slice="6" test="recomendation" />
      </div>
      <button type="button" data-testid="start-recipe-btn">Iniciar Receita</button>
    </div>
  );
}

export default FoodDetails;
