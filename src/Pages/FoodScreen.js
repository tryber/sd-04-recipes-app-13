import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header/Header';
import { getByName } from '../services/foodApi';
import Loading from '../components/Loading';
import FoodCard from '../components/FoodCard';

const FoodScreen = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    getByName('')
      .then((data) => {
        setFoods(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return foods.length === 0 ? (
    <Loading />
  ) : (
    <div>
      <h2>Food Screen</h2>
      <Header title="Comidas" />
      <FoodCard data={foods} info="food" />
      <Footer />
    </div>
  );
};

export default FoodScreen;
