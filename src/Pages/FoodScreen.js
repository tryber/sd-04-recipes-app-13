import React, { useEffect, useState, useContext } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header/Header';
import { RecipeContext } from '../context/index';
import { getByName, listAllCategories, getCategoryFilter } from '../services/foodApi';
import Loading from '../components/Loading';
import FoodAndDrinkCard from '../components/FoodAndDrinkCard';
import '../styles/FoodAndDrinkCards.css';
import RenderButton from '../components/utils/Button';
import createButtonSearch from '../components/utils/createButtonSearch';

const FoodScreen = () => {
  const { data, setData, ingredients } = useContext(RecipeContext);
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState('');
  useEffect(() => {
    listAllCategories().then((Data) => setCategories(Data));
  }, []);
  useEffect(() => {
    if (name.length === 0) {
      getByName('').then((Datafoods) => setData(Datafoods));
    }
    getCategoryFilter(name).then((categoryData) => setData(categoryData));
  }, [name]);
  const changeCategory = (strCategory) => {
    console.log('Procopio Rules!');
    return name === strCategory ? setName('') : setName(strCategory);
  };
  if (!data) {
    return (
      <div>
        <Header title="Comidas" search />
        <Footer />
      </div>
    );
  }
  if (data.length === 0) return <Loading />;
  return (
    <div className="general-container">
      <Header title="Comidas" search />
      <div className="category-btn-div">
      {createButtonSearch(RenderButton, changeCategory)}
        {categories.slice(0, 5).map(({ strCategory }) => (
          <RenderButton
            type="button"
            onClick={() => changeCategory(strCategory)} key={strCategory} className="category-btn"
            data-testid={`${strCategory}-category-filter`}
          >
            {strCategory}
          </RenderButton>
        ))}
      </div>
      <FoodAndDrinkCard
        data={ingredients.length === 0 ? data : ingredients} info="food" test="card"
        geralTest="recipe"
      />
      <Footer />
    </div>
  );
};

export default FoodScreen;
