import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getDrinkByIngredients } from '../services/drinkApi';
import Footer from '../components/Footer';
import Header from '../components/Header/Header';

const IngredientsDrinks = () => {
  const [ingred, setIngred] = useState([]);
  useEffect(() => {
    getDrinkByIngredients().then((resp) => setIngred(resp));
  }, []);
  return (
    <div>
      <Header title="Explorar Ingredientes" />
      {ingred.slice(0, 12).map((ing, index) => (
        <Link to="/bebidas" data-testid={`${index}-ingredient-card`} key={ing.strIngredient1}>
          <h2 data-testid={`${index}-card-name`}>{ing.strIngredient1}</h2>
          <img
            data-testid={`${index}-card-img`}
            src={`https://www.thecocktaildb.com/images/ingredients/${ing.strIngredient1}-Small.png`}
            alt={ing.strIngredient1}
            width="80px"
          />
        </Link>
      ))}
      <Footer />
    </div>
  );
};

export default IngredientsDrinks;
