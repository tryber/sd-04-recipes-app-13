import React, { useEffect, useState, useContext } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header/Header';
import { getByName, listAllCategories } from '../services/drinkApi';
import Loading from '../components/Loading';
import FoodAndDrinkCard from '../components/FoodAndDrinkCard';
import '../styles/FoodAndDrinkCards.css';
import { RecipeContext } from '../context';

const DrinkScreen = () => {
  const { data } = useContext(RecipeContext);
  const [drinks, setDrinks] = useState([]);
  const [name, setName] = useState('');
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getByName(name)
      .then((drink) => {
        setDrinks(drink);
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

  if (!data) {
    return (
      <div>
        <h2>Nada encontrado</h2>
        <button type="button" onClick={() => setName('')}>
          Voltar
        </button>
      </div>
    );
  }
  if (data.length === 0) return <Loading />;

  return !data ? (
    <Loading />
  ) : (
    <div className="general-container">
      <Header title="Bebidas" search />
      <div className="category-btn-div">
        <button type="button" className="category-btn" onClick={() => setName('')}>
          All
        </button>
        {categories.slice(0, 5).map(({ strCategory }) => (
          <button
            type="button"
            className="category-btn"
            onClick={() => changeCategory(strCategory)}
            data-tesid={`${strCategory}-category-filter`}
            key={strCategory}
          >
            {strCategory}
          </button>
        ))}
      </div>
      <FoodAndDrinkCard data={data} info="drink" />
      <Footer />
    </div>
  );
};

export default DrinkScreen;
