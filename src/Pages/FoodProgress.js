import React, { useState, useEffect} from 'react';
import setById from '../services/utils';
import { getById } from '../services/foodApi';
import HeaderDetails from '../components/HeaderDetails';

function FoodProgress() {
  const [recipe, setRecipe] = useState('');

  useEffect(() => {
    setById(getById, setRecipe);
  }, []);

  return (
    <div>
      <HeaderDetails recipe={recipe} foods />
    </div>
  );
}

export default FoodProgress;
