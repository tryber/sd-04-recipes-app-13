import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { listFoodIngredients } from '../services/foodApi';
import Footer from '../components/Footer';
import Header from '../components/Header/Header';

const IngredientsFoods = () => {
  const [ingred, setIngred] = useState([]);
  useEffect(() => {
    listFoodIngredients().then((resp) => setIngred(resp));
  }, []);

  return (
    <div>
      <Header title="Explorar Ingredientes" />
      {ingred.slice(0, 12).map((ing, index) => (
        <Link data-testid={`${index}-ingredient-card`} key={ing.strIngredient}>
          <h4 data-testid={`${index}-card-name`}>{ing.strIngredient}</h4>
          <img
            data-testid={`${index}-card-img`}
            src={`https://www.themealdb.com/images/ingredients/${ing.strIngredient}.png`}
            alt={ing.strMeal}
            width="80px"
          />
        </Link>
      ))}
      <Footer />
    </div>
  );
};

export default IngredientsFoods;
