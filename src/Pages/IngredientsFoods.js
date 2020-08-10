import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header/Header';
import { getFoodByIngredients } from '../services/foodApi';
import { Link } from 'react-router-dom';

const IngredientsFoods = () => {
  const [ingred, setIngred] = useState([]);
  useEffect(() => {
    getFoodByIngredients().then((resp) => setIngred(resp));
  }, []);

  console.log(ingred.slice(0, 12));
  return (
    <div>
      <Header title="Explorar Ingredientes" />
      {ingred.slice(0, 12).map((ing, index) => (
        <Link data-testid={`${index}-ingredient-card`} key={ing.idMeal}>
          <h2 data-testid={`${index}-card-name`}>{ing.strMeal}</h2>
          <img
            data-testid={`${index}-card-img`}
            src={ing.strMealThumb}
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
