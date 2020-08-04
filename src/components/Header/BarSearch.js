import React from 'react';
import renderInput from '../utils/Input';
import RenderButton from '../utils/Button';

const BarSearch = () => (
  <div>
    <div>{renderInput('Buscar Receita', 'search-input', 'text')}</div>
    <div>
      <label htmlFor="ingredient-search-radio">
        {renderInput('ingredient-search-radio', 'radio', 'ingrediente')}
        Ingrediente
      </label>
      <label htmlFor="name-search-radio">
        {renderInput('name-search-radio', 'radio', 'nome')}
        Nome
      </label>
      <label htmlFor="first-letter-search-radio">
        {renderInput('first-letter-search-radio', 'radio', 'first-letter')}
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

export default BarSearch;
