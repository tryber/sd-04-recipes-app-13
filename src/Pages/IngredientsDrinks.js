import React, { useState, useEffect } from 'react';
import { getDrinkByIngredients } from '../services/drinkApi';
import { Link } from 'react-router-dom';
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
        <Link data-testid={`${index}-ingredient-card`} key={ing.idDrink}>
          <h2 data-testid={`${index}-card-name`}>{ing.strDrink}</h2>
          <img
            data-testid={`${index}-card-img`}
            src={ing.strDrinkThumb}
            alt={ing.strDrink}
            width="80px"
          />
        </Link>
      ))}
      <Footer />
    </div>
  );
};

export default IngredientsDrinks;
