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

import '../../styles/Header.css';

const CaseName = async (inputValue, history, text) => {
  const foods = await getByName(inputValue).then((food) => food);
  if (!foods) alert(text);
  else if (foods.length === 1) {
    history.push(`/comidas/${foods[0].idMeal}`);
  }
  return foods;
};

const CaseIng = async (inputValue, history, text) => {
  const foods = await getByIngredientsFood(inputValue).then((food) => food);
  if (!foods) return alert(text);
  if (foods.length === 1) history.push(`/comidas/${foods[0].idMeal}`);
  return foods;
};

const CaseLetter = async (inputValue, history) => {
  const foods = await getByFirstLetterFood(inputValue).then((food) => food);
  if (foods.length === 1) {
    history.push(`/comidas/${foods[0].idMeal}`);
  }
  return foods;
};

const changeData = async (history, setData, data, radio, inputValue) => {
  let foods = [];
  const text = 'Sinto muito, não encontramos nenhuma receita para esses filtros.';
  switch (radio) {
    case 'nome':
      foods = await CaseName(inputValue, history, text);
      break;
    case 'ingrediente':
      foods = await CaseIng(inputValue, history, text);
      break;
    case 'primeira-letra':
      if (inputValue.length > 1) return alert('Sua busca deve conter somente 1 (um) caracter');
      foods = await CaseLetter(inputValue, history);
      break;
    default:
      setData(data);
  }

  return setData(foods);
};

const FoodBarSearch = () => {
  const history = useHistory();
  const { setData, data } = useContext(RecipeContext);
  const [radio, setRadio] = useState('');
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="search-container">
      <div className="input-container">
        <RenderInput
          type="text" data-testid="search-input" placeholder="Buscar Receita"
          onChange={(e) => setInputValue(e.target.value)} name="food-search"
        />
      </div>
      <div className="radio-container">
        <label className="radio" htmlFor="ingredient-search-radio">
          <RenderInput
            data-testid="ingredient-search-radio" type="radio" value="ingrediente"
            onChange={(e) => setRadio(e.target.value)} name="radioBtn"
          />
          <span className="radio-span">Ingrediente</span>
        </label>
        <label className="radio" htmlFor="name-search-radio">
          <RenderInput
            data-testid="name-search-radio" type="radio" value="nome"
            onChange={(e) => setRadio(e.target.value)} name="radioBtn"
          />
          <span className="radio-span">Nome</span>
        </label>
        <label className="radio" htmlFor="first-letter-search-radio">
          <RenderInput
            data-testid="first-letter-search-radio" type="radio" value="primeira-letra"
            onChange={(e) => setRadio(e.target.value)} name="radioBtn"
          />
          <span className="radio-span">Primeira Letra</span>
        </label>
      </div>
      <RenderButton
        type="button" data-testid="exec-search-btn" className='btn-search'
        onClick={() => changeData(history, setData, data, radio, inputValue)}
      >
        Buscar
      </RenderButton>
    </div>
  );
};

export default FoodBarSearch;
