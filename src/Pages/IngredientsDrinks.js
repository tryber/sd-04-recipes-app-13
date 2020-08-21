import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { getDrinkByIngredients, getByIngredients } from '../services/drinkApi';
import { RecipeContext } from '../context';
import Footer from '../components/Footer';
import Header from '../components/Header/Header';

const IngredientsDrinks = () => {
  const { setIngredients } = useContext(RecipeContext);
  const history = useHistory();
  const [ingred, setIngred] = useState([]);
  useEffect(() => {
    getDrinkByIngredients().then((resp) => setIngred(resp));
  }, []);

  const handleIngredientes = async (ingredient) => {
    await getByIngredients(ingredient).then((resp) => {
      setIngredients(resp);
    });
    history.push('/bebidas');
  };

  return (
    <div className="general-container">
      <Header title="Explorar Ingredientes" />
      <div className="card-general-container">
        {ingred.slice(0, 12).map((ing, index) => (
          <div
            className="card-container"
            data-testid={`${index}-ingredient-card`}
            key={ing.strIngredient1}
          >
            <button type="button" onClick={() => handleIngredientes(ing.strIngredient1)}>
              <img
                className="card-img"
                data-testid={`${index}-card-img`}
                src={`https://www.thecocktaildb.com/images/ingredients/${ing.strIngredient1}-Small.png`}
                alt={ing.strIngredient1}
              />
              <h2 className="card-name" data-testid={`${index}-card-name`}>
                {ing.strIngredient1}
              </h2>
            </button>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default IngredientsDrinks;
