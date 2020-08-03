import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header/Header';
import { getByName, listAllCategories } from '../services/drinkApi';
import Loading from '../components/Loading';
import FoodAndDrinkCard from '../components/FoodAndDrinkCard';

const DrinkScreen = () => {
  const [drinks, setDrinks] = useState([]);
  const [name, setName] = useState('');
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getByName(name)
      .then((data) => {
        setDrinks(data);
      })
      .catch((err) => console.error(err));

    listAllCategories().then((category) => {
      setCategories(category);
    });
  }, [name]);

  const changeCategory = (strCategory) => {
    if (name === strCategory) return setName('');
    return setName(strCategory);
  };

  if (!drinks) {
    return (
      <div>
        <h2>Nada encontrado</h2>
        <button onClick={() => setName('')}>Voltar</button>
      </div>
    );
  } else if (drinks.length === 0) return <Loading />;

  return !drinks ? (
    <Loading />
  ) : (
    <div>
      <Header title="Bebidas" />
      <button onClick={() => setName('')}>All</button>
      {categories.slice(0, 5).map(({ strCategory }) => (
        <button
          onClick={() => changeCategory(strCategory)}
          data-tesid={`${strCategory}-category-filter`}
          key={strCategory}
        >
          {strCategory}
        </button>
      ))}
      <FoodAndDrinkCard data={drinks} info="drink" />
      <Footer />
    </div>
  );
};

export default DrinkScreen;
