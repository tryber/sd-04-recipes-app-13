import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { CopyToClipboard } from 'clipboard-copy';
import { getById } from '../services/foodApi';
import FoodAndDrinkCard from '../components/FoodAndDrinkCard';
import { getByName } from '../services/drinkApi';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import { loadStorage } from '../services/localStorage';
// import '../styles/DetailsPage.css';

function shareandfavorite(path, copied, setCopied) {
  const foodId = window.location.pathname.slice(9);
  const localStorage = JSON.parse(loadStorage('favoriteRecipes'));
  const favoritada = (localStorage) ? localStorage.some((recipe) => recipe.id === foodId) : false;

  return (
    <div>
      <CopyToClipboard text={path} onCopy={() => setCopied(true)}>
        <img src={shareIcon} alt="share-icon" />
      </CopyToClipboard>
      {(favoritada) ? <img src={blackHeartIcon} alt="coração-cheio" /> : <img src={whiteHeartIcon} alt="coração-vazio" />}
      <img src={whiteHeartIcon} alt="coração-vazio" />
      <div>
        {copied ? <span>Link copiado!</span> : null}
      </div>
    </div>
  );
}

function FoodDetails() {
  const [food, setFood] = useState('');
  const [Drink, setDrink] = useState([]);
  const [path, setPath] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const foodId = window.location.pathname.slice(9);
    getById(foodId).then((Datafood) => setFood(Datafood[0]));
    getByName('').then((resp) => setDrink(resp));
    setPath(window.location.pathname);
  }, []);

  return (
    <div className="details-container">
      <img data-testid="recipe-photo" className="details-img" src={food.strMealThumb} alt="food-img" />
      <h1 data-testid="recipe-title" className="details-title">{food.strMeal}</h1>
      <h4 data-testid="recipe-category" className="details-sub">{food.strCategory}</h4>
      {shareandfavorite(path, copied, setCopied)}
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
