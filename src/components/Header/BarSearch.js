import React from 'react'

const BarSearch = () => {
  return (
    <div>
      <div>
        <input type="text" name="" id="" placeholder="Buscar Receita"/>
      </div>
      <div>
        <label htmlFor=""><input type="checkbox" name="" id=""/>Ingrediente</label>
        <label htmlFor=""><input type="checkbox" name="" id=""/>Nome</label>
        <label htmlFor=""><input type="checkbox" name="" id=""/>Primeira letra</label>
      </div>
      <div>
        <button type="button">Buscar</button>
      </div>
    </div>
  );
};

export default BarSearch;
