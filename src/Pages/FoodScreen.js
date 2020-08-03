import React, { useEffect, useContext } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header/Header';
import getByName from '../services/foodApi';
import Loading from '../components/Loading';
import FoodCard from '../components/FoodCard';

const FoodScreen = () => {
  useEffect(() => {
    getByName()
      .then((data) => {
        console.log(data);
        const foods = data;
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h2>Food Screen</h2>
      <FoodCard foods />
      <Header />
      <Footer />
    </div>
  );
};

export default FoodScreen;
