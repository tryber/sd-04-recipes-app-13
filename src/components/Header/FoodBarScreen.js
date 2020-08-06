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

const changedDataNome = (inputValue) =>
  getByName(inputValue)
    .then((foods) => foods)
    .catch((error) => console.log(error));

const changedDataIng = (inputValue) =>
  getByIngredientsFood(inputValue)
    .then((foods) => foods)
    .catch((error) => console.log(error));

const changedDataLetter = (inputValue) =>
  getByFirstLetterFood(inputValue)
    .then((foods) => foods)
    .catch((error) => console.log(error));

const changeData = async (history, setData, data, radio, inputValue) => {
  const text = 'Sinto muito, não encontramos nenhuma receita para esses filtros.';

  changedDataNome(inputValue);

  if (radio === 'nome') {
    if (!changedDataNome) alert(text);
    if (changedDataNome.length === 1) {
      history.push(`/comidas/${changedDataNome[0].idMeal}`);
    }
    setData(changedDataNome);
  }

  changedDataIng(inputValue);

  if (radio === 'ingrediente') {
    if (!changedDataIng) alert(text);
    if (changedDataIng.length === 1) history.push(`/comidas/${changedDataIng[0].idMeal}`);
    setData(changedDataIng);
  }

  changedDataLetter(inputValue);

  if (radio === 'primeira-letra') {
    if (inputValue.length > 1) alert('Sua busca deve conter somente 1 (um) caracter');
    if (!changedDataLetter) alert(text);
    if (changedDataLetter.length === 1) {
      history.push(`/comidas/${changedDataLetter[0].idMeal}`);
    }
    return setData(changedDataLetter);
  }
  return setData(data);
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
