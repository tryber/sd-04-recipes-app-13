import React, { useState, useEffect } from 'react';
import { getById } from '../services/foodApi';
import HeaderDetails from '../components/HeaderDetails';

function DrinkProgress() {
  const [recipe, setRecipe] = useState('');

  useEffect(() => {
    const pathName = window.location.pathname.slice(9);
    const id = pathName.replace(/\D/g, '');
    getById(id).then((data) => setRecipe(data[0]));
  }, []);

  return (
    <div>
      <HeaderDetails recipe={recipe} />
    </div>
  );
}

export default DrinkProgress;
