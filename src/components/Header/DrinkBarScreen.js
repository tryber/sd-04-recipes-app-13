import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { RecipeContext } from '../../context';
import RenderInput from '../utils/Input';
import RenderButton from '../utils/Button';
import { getByIngredients, getByFirstLetter, getByName } from '../../services/drinkApi';

const CaseName = async (inputValue, history, text) => {
  const Drinks = await getByName(inputValue).then((drink) => drink);
  if (!Drinks) return alert(text);
  if (Drinks.length === 1) {
    history.push(`/bebidas/${Drinks[0].idDrink}`);
  }
  return Drinks;
};

const CaseIng = async (inputValue, history, text) => {
  const Drinks = await getByIngredients(inputValue).then((drink) => drink);
  if (!Drinks) alert(text);
  if (Drinks.length === 1) {
    history.push(`/bebidas/${Drinks[0].idDrink}`);
  }
  return Drinks;
};

const CaseLetter = async (inputValue, history, text) => {
  const Drinks = await getByFirstLetter(inputValue).then((drink) => drink);
  if (!Drinks) return alert(text);
  if (Drinks.length === 1) {
    history.push(`/bebidas/${Drinks[0].idDrink}`);
  }
  return Drinks;
};
const changeData = async (history, setData, data, radio, inputValue) => {
  const text = 'Sinto muito, não encontramos nenhuma receita para esses filtros.';
  let Drinks = [];
  switch (radio) {
    case 'nome':
      Drinks = await CaseName(inputValue, history, text);
      break;
    case 'ingrediente':
      Drinks = await CaseIng(inputValue, history, text);
      break;
    case 'primeira-letra':
      if (inputValue.length > 1) return alert('Sua busca deve conter somente 1 (um) caracter');
      Drinks = await CaseLetter(inputValue, history, text);
      break;
    default:
      setData(data);
  }

  return setData(Drinks);
};

const DrinkBarSearch = () => {
  const history = useHistory();
  const { setData, data } = useContext(RecipeContext);
  const [radio, setRadio] = useState('');
  const [inputValue, setInputValue] = useState('');
  return (
    <div>
      <RenderInput
        type="text"
        data-testid="search-input"
        placeholder="Buscar Receita"
        onChange={(e) => setInputValue(e.target.value)}
        name="drink-search"
      />
      <div>
        <label htmlFor="ingredient-search-radio">
          <RenderInput
            type="radio" data-testid="ingredient-search-radio" value="ingrediente"
            onChange={(e) => setRadio(e.target.value)} name="radioBtn"
          />
          Ingrediente
        </label>
        <label htmlFor="name-search-radio">
          <RenderInput
            type="radio" data-testid="name-search-radio" value="nome"
            onChange={(e) => setRadio(e.target.value)} name="radioBtn"
          />
          Nome
        </label>
        <label htmlFor="first-letter-search-radio">
          <RenderInput
            type="radio" data-testid="first-letter-search-radio"
            id="first-letter-search-radio" value="primeira-letra"
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

export default DrinkBarSearch;
