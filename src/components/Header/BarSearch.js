import React, { useContext, useState } from 'react';
import { RecipeContext } from '../../context';
import renderInput from '../utils/Input';
import RenderButton from '../utils/Button';

const BarSearch = () => {
  const [radio, setRadio] = useState('');
  const [input, setInput] = useState('');
  return (
    <div>
      <div>
        <input
          type="text"
          data-testid="search-input"
          placeholder="Buscar Receita"
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="ingredient-search-radio">
          {renderInput('ingredient-search-radio', 'radio', 'ingrediente', setRadio, '', 'radioBtn')}
          Ingrediente
        </label>
        <label htmlFor="name-search-radio">
          {renderInput('name-search-radio', 'radio', 'nome', setRadio, '', 'radioBtn')}
          Nome
        </label>
        <label htmlFor="first-letter-search-radio">
          {renderInput(
            'first-letter-search-radio',
            'radio',
            'first-letter',
            setRadio,
            '',
            'radioBtn'
          )}
          Primeira letra
        </label>
      </div>
      <div>
        <RenderButton type="button" data-test="first-letter-search-radio">
          Buscar
        </RenderButton>
      </div>
    </div>
  );
};

export default BarSearch;
