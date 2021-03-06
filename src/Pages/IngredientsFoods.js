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
    <div>
      <Header title="Explorar Ingredientes" />
      {ingred.slice(0, 12).map((ing, index) => (
        <div data-testid={`${index}-ingredient-card`} key={ing.idIngredient}>
          <button
            style={{ width: '100%' }}
            onClick={() => {
              handleIngredientes(ing.strIngredient);
            }}
          >
            <h4 data-testid={`${index}-card-name`}>{ing.strIngredient}</h4>
            <img
              data-testid={`${index}-card-img`}
              src={`https://www.themealdb.com/images/ingredients/${ing.strIngredient}-Small.png`}
              alt={ing.strMeal}
              width="80px"
            />
          </button>
        </div>
      ))}
      <Footer />
    </div>
  );
};

export default IngredientsFoods;
