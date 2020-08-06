import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { RecipeContext } from '../../context';
import RenderButton from '../utils/Button';
import {
  getByIngredientsFood,
  getByFirstLetterFood,
  getByName,
} from '../../services/foodApi';
import RenderInput from '../utils/Input';

const changeData = async (history, setData, data, radio, inputValue) => {
  let foods = [];
  const text = 'Sinto muito, não encontramos nenhuma receita para esses filtros.';
  switch (radio) {
    case 'nome':
      foods = await getByName(inputValue).then((foods) => foods);
      if (foods.length === 1) {
        history.push(`/comidas/${foods[0].idMeal}`);
      }
      break;
    case 'ingrediente':
      foods = await getByIngredientsFood(inputValue).then((foods) => foods);
      if (foods.length === 1) history.push(`/comidas/${foods[0].idMeal}`);
      break;
    case 'primeira-letra':
      foods = await getByFirstLetterFood(inputValue).then((foods) => foods);
      if (inputValue.length > 1) alert('Sua busca deve conter somente 1 (um) caracter');
      if (foods.length === 1) {
        history.push(`/comidas/${foods[0].idMeal}`);
      }
      break;
    default:
      setData(data);
  }

  if (!foods) alert(text);

  return setData(foods);
};

const FoodBarSearch = () => {
  const history = useHistory();
  const { setData, data } = useContext(RecipeContext);
  const [radio, setRadio] = useState('');
  const [inputValue, setInputValue] = useState('');

  return (
    <div>
      <div>
        <RenderInput
          type="text" data-testid="search-input" placeholder="Buscar Receita"
          onChange={(e) => setInputValue(e.target.value)} name="food-search"
        />
      </div>
      <div>
        <label htmlFor="ingredient-search-radio">
          <RenderInput
            data-testid="ingredient-search-radio" type="radio" value="ingrediente"
            onChange={(e) => setRadio(e.target.value)} name="radioBtn"
          />
          Ingrediente
        </label>
        <label htmlFor="name-search-radio">
          <RenderInput
            data-testid="name-search-radio" type="radio" value="nome"
            onChange={(e) => setRadio(e.target.value)} name="radioBtn"
          />
          Nome
        </label>
        <label htmlFor="first-letter-search-radio">
          <RenderInput
            data-testid="first-letter-search-radio" type="radio" value="primeira-letra"
            onChange={(e) => setRadio(e.target.value)} name="radioBtn"
          />
          Primeira letra
        </label>
      </div>
      <RenderButton
        type="button" data-testid="exec-search-btn"
        onClick={() => changeData(history, setData, data, radio, inputValue)}
      >
        Buscar
      </RenderButton>
    </div>
  );
};

export default FoodBarSearch;
