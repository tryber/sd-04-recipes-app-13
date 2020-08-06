import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { RecipeContext } from '../../context';
import RenderInput from '../utils/Input';
import RenderButton from '../utils/Button';
import { getByIngredients, getByFirstLetter, getByName } from '../../services/drinkApi';

const changeData = async (history, setData, data, radio, inputValue) => {
  const text = 'Sinto muito, não encontramos nenhuma receita para esses filtros.';
  const changedDataNome = await getByName(inputValue)
    .then((drink) => drink)
    .catch((error) => console.log(error));

  if (radio === 'nome') {
    if (!changedDataNome) return alert(text);
    if (changedDataNome.length === 1) {
      history.push(`/bebidas/${changedDataNome[0].idDrink}`);
    }
    return setData(changedDataNome);
  }

  const changedDataIng = await getByIngredients(inputValue)
    .then((drink) => drink)
    .catch((error) => console.log(error));

  if (radio === 'ingrediente') {
    if (!changedDataIng) alert(text);
    if (changedDataIng.length === 1) {
      history.push(`/bebidas/${changedDataIng[0].idDrink}`);
    }
    setData(changedDataIng);
  }

  const changedDataLetter = await getByFirstLetter(inputValue)
    .then((drink) => drink)
    .catch((error) => console.log(error));

  if (radio === 'primeira-letra') {
    if (inputValue.length > 1) alert('Sua busca deve conter somente 1 (um) caracter');
    if (!changedDataLetter) alert(text);
    if (changedDataLetter.length === 1) {
      history.push(`/bebidas/${changedDataLetter[0].idDrink}`);
    }
    setData(changedDataLetter);
  }
  return setData(data);
};

const DrinkBarSearch = () => {
  const history = useHistory();
  const { setData, data } = useContext(RecipeContext);
  const [radio, setRadio] = useState('');
  const [inputValue, setInputValue] = useState('');
  return (
    <div>
      <RenderInput
        type="text" data-testid="search-input" placeholder="Buscar Receita"
        onChange={(e) => setInputValue(e.target.value)} name="drink-search"
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
            type="radio" data-testid="first-letter-search-radio" id="first-letter-search-radio"
            value="primeira-letra" onChange={(e) => setRadio(e.target.value)} name="radioBtn"
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
