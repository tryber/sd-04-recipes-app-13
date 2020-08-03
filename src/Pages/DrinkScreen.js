import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header/Header';
import { getByName } from '../services/drinkApi';
import Loading from '../components/Loading';
import FoodAndDrinkCard from '../components/FoodAndDrinkCard';

const searchCategory = () => {

}

const DrinkScreen = () => {
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    getByName('')
      .then((data) => {
        setDrinks(data);
      })
      .catch((err) => console.error(err));
      
  }, []);

  return drinks.length === 0 ? (
    <Loading />
  ) : (
    <div>
      <Header title="Bebidas" />
      <FoodAndDrinkCard data={drinks} info="drink" />
      <Footer />
    </div>
  );
};

export default DrinkScreen;
