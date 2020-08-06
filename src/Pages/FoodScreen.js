import React, { useEffect, useState, useContext } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header/Header';
import { RecipeContext } from '../context/index';
import { getByName, listAllCategories } from '../services/foodApi';
import Loading from '../components/Loading';
import FoodAndDrinkCard from '../components/FoodAndDrinkCard';
import '../styles/FoodAndDrinkCards.css';
import RenderButton from '../components/utils/Button';

const FoodScreen = () => {
  const { data, setData } = useContext(RecipeContext);
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState('');
  // const text = 'Sinto muito, não encontramos nenhuma receita para esses filtros.';
  useEffect(() => {
    getByName(name).then((Datafoods) => {
      setData(Datafoods);
    });

    listAllCategories().then((Datacategories) => {
      setCategories(Datacategories);
    });
  }, [name]);
  const changeCategory = (strCategory) => (
    name === strCategory ? setName('') : setName(strCategory)
  );

  if (!data) {
    return (
      <div>
        <Header title="Comidas" search />
        {/* {alert(text) && setName(name)} */}
        <Footer />
      </div>
    );
  }
  if (data.length === 0) return <Loading />;
  return (
    <div className="general-container">
      <Header title="Comidas" search />
      <div className="category-btn-div">
        <RenderButton type="button" className="category-btn" onClick={() => setName('')}>
          All
        </RenderButton>
        {categories.slice(0, 5).map(({ strCategory }) => (
          <RenderButton
            type="button"
            onClick={() => changeCategory(strCategory)}
            className="category-btn"
            data-testid={`${strCategory}-category-filter`}
            key={strCategory}
          >
            {strCategory}
          </RenderButton>
        ))}
      </div>
      <FoodAndDrinkCard data={data} info="food" test="card" geralTest="recipe" />
      <Footer />
    </div>
  );
};

export default FoodScreen;
