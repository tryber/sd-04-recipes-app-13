import React, { useEffect, useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { listFoodIngredients, getByIngredientsFood } from '../services/foodApi';
import Footer from '../components/Footer';
import Header from '../components/Header/Header';
import { RecipeContext } from '../context';

const IngredientsFoods = () => {
  const { ingredients, setIngredients } = useContext(RecipeContext);
  const [ingred, setIngred] = useState([]);
  const history = useHistory();
  useEffect(() => {
    listFoodIngredients().then((resp) => setIngred(resp));
  }, []);

  const handleIngredientes = (ingredient) => {
    getByIngredientsFood(ingredient).then((resp) => {
      setIngredients(resp);
    });
    history.push('/comidas');
  };
  console.log('essas são as receitas do ingrediente escolhido: ', ingredients);

  return (
    <div>
      <Header title="Explorar Ingredientes" />
      {ingred.slice(0, 12).map((ing, index) => (
        <div data-testid={`${index}-ingredient-card`} key={ing.idIngredient}>
          <h4
            onClick={() => {
              handleIngredientes(ing.strIngredient);
              console.log('fui clicado');
            }}
            data-testid={`${index}-card-name`}
          >
            {ing.strIngredient}
          </h4>
          <img
            data-testid={`${index}-card-img`}
            src={`https://www.themealdb.com/images/ingredients/${ing.strIngredient}-Small.png`}
            alt={ing.strMeal}
            width="80px"
          />
        </div>
      ))}
      <Footer />
    </div>
  );
};

export default IngredientsFoods;
