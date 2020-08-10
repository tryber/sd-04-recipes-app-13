import React, { useState, useEffect } from 'react';
import { getById } from '../services/foodApi';
import { saveStorage } from '../services/localStorage';

function FoodProgress() {
  const [food, setFood] = useState('');
  const [foodId, setFoodId] = useState('')

  useEffect(() => {
    const foodId = window.location.pathname.slice(9, 14);
    setFoodId(foodId)
    getById(foodId).then((Datafood) => setFood(Datafood[0]));
    console.log(food)
    saveStorage('inProgressrecipes', { meals: { foodId } });
  }, []);

  useEffect(() => {
    console.log(food)
    const meals = { foodId: [] }
    saveStorage('inProgressrecipes', { meals });
  }, [food]);

  return (
    <div>
      <h1>oi</h1>
    </div>
  );
}

export default FoodProgress;
