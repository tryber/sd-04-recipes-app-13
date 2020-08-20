import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { listFoodIngredients, getByIngredientsFood } from '../services/foodApi';
import { RecipeContext } from '../context';
import Footer from '../components/Footer';
import Header from '../components/Header/Header';

const IngredientsFoods = () => {
  const { setIngredients } = useContext(RecipeContext);
  const [ingred, setIngred] = useState([]);
  const history = useHistory();
  useEffect(() => {
    listFoodIngredients().then((resp) => setIngred(resp));
  }, []);

  const handleIngredientes = async (ingredient) => {
    await getByIngredientsFood(ingredient).then((resp) => {
      setIngredients(resp);
    });
    history.push('/comidas');
  };

  return (
    <div className="general-container">
      <Header title="Explorar Ingredientes" />
      <div className="card-general-container">
        {ingred.slice(0, 12).map((ing, index) => (
          <div
            className="card-container"
            data-testid={`${index}-ingredient-card`}
            key={ing.idIngredient}
          >
            <button
              type="button"
              onClick={() => {
                handleIngredientes(ing.strIngredient);
              }}
            >
              <img
                className="card-img"
                data-testid={`${index}-card-img`}
                src={`https://www.themealdb.com/images/ingredients/${ing.strIngredient}-Small.png`}
                alt={ing.strMeal}
              />
              <h4 className="card-name" data-testid={`${index}-card-name`}>
                {ing.strIngredient}
              </h4>
            </button>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default IngredientsFoods;
