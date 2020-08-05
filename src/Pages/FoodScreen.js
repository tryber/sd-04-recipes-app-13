import React, { useEffect, useState, useContext } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header/Header';
import { RecipeContext } from '../context/index';
import { getByName, listAllCategories } from '../services/foodApi';
import Loading from '../components/Loading';
import FoodAndDrinkCard from '../components/FoodAndDrinkCard';
import '../styles/FoodAndDrinkCards.css';

const FoodScreen = () => {
  const { data, setData } = useContext(RecipeContext);
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState('');

  useEffect(() => {
    getByName(name).then((Datafoods) => {
      setData(Datafoods);
    });

    listAllCategories().then((Datacategories) => {
      setCategories(Datacategories);
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
        <button onClick={() => setName('')}>Voltar</button>
      </div>
    );
  } else if (data.length === 0) return <Loading />;

  return !data ? (
    <Loading />
  ) : (
    <div className="general-container">
      <Header title="Comidas" />
      <div className="category-btn-div">
        <button className="category-btn" onClick={() => setName('')}>All</button>
        {categories.slice(0, 5).map(({ strCategory }) => (
          <button
            onClick={() => changeCategory(strCategory)}
            data-tesid={`${strCategory}-category-filter`}
            key={strCategory} className="category-btn"
          >
            {strCategory}
          </button>
        ))}
      </div>
      <FoodAndDrinkCard data={data} info="food" />
      <Footer />
    </div>
  );
};

export default FoodScreen;
