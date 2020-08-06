import React, { useEffect, useState, useContext } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header/Header';
import { getByName, listAllCategories } from '../services/drinkApi';
import Loading from '../components/Loading';
import FoodAndDrinkCard from '../components/FoodAndDrinkCard';
import '../styles/FoodAndDrinkCards.css';
import { RecipeContext } from '../context';
import RenderButton from '../components/utils/Button';

const DrinkScreen = () => {
  const { data, setData } = useContext(RecipeContext);
  const [name, setName] = useState('');
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getByName(name)
      .then((drink) => {
        setData(drink);
      })
      .catch((err) => console.error(err));
    listAllCategories().then((category) => {
      setCategories(category);
    });
  }, [name]);
  const changeCategory = (strCategory) => {
    return name === strCategory ? setName('') : setName(strCategory);
  };
  if (!data) {
    return (
      <div>
        <Header title="Bebidas" search />
        <h3>Nada Encontrado</h3>
        <Footer />
      </div>
    );
  }
  if (data.length === 0) return <Loading />;
  return (
    <div className="general-container">
      <Header title="Bebidas" search />
      <div className="category-btn-div">
        <RenderButton type="button" className="category-btn" onClick={() => setName('')}>
          All
        </RenderButton>
        {categories.slice(0, 5).map(({ strCategory }) => (
          <RenderButton
            type="button"
            className="category-btn"
            onClick={() => changeCategory(strCategory)}
            data-testid={`${strCategory}-category-filter`}
            key={strCategory}
          >
            {strCategory}
          </RenderButton>
        ))}
      </div>
      <FoodAndDrinkCard data={data} info="drink" test="card" geralTest="recipe" />
      <Footer />
    </div>
  );
};

export default DrinkScreen;
