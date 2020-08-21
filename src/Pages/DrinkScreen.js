import React, { useEffect, useState, useContext } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header/Header';
import { getByName, listAllCategories, getCategoryFilter } from '../services/drinkApi';
import Loading from '../components/Loading';
import FoodAndDrinkCard from '../components/FoodAndDrinkCard';
import '../styles/FoodAndDrinkCards.css';
import { RecipeContext } from '../context';
import RenderButton from '../components/utils/Button';
import AllIcon from '../assets/icons/shot.png';
import OrdinaryIcon from '../assets/icons/Ordinary-Drink.png';
import CocktailIcon from '../assets/icons/cocktail.png';
import MilkIcon from '../assets/icons/milk-shake.png';
import OtherIcon from '../assets/icons/Other.png';
import CocoaIcon from '../assets/icons/cocoa.png';

import createButtonSearch from '../components/utils/createButtonSearch';
import createButtonCategories from '../components/utils/createButtonCategories';

const iconsDrink = {
  'Ordinary Drink': OrdinaryIcon,
  Cocktail: CocktailIcon,
  'Milk / Float / Shake': MilkIcon,
  'Other/Unknown': OtherIcon,
  Cocoa: CocoaIcon,
};

const DrinkScreen = () => {
  const { data, setData, ingredients } = useContext(RecipeContext);
  const [name, setName] = useState('');
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    listAllCategories().then((category) => setCategories(category));
  }, []);
  useEffect(() => {
    if (name.length === 0) getByName('').then((DataDrinks) => setData(DataDrinks));
    if (name.length > 0) {
      getCategoryFilter(name).then((categoryData) => setData(categoryData));
    }
  }, [name]);
  const changeCategory = (strCategory) => {
    return name === strCategory ? setName('') : setName(strCategory);
  };
  if (!data) {
    return (
      <div>
        <Header title="Bebidas" search />
        <Footer />
      </div>
    );
  }
  if (data.length === 0) return <Loading />;
  return (
    <div className="general-container">
      <Header title="Bebidas" search />
      <div className="category-btn-div">
        {createButtonSearch(RenderButton, changeCategory, AllIcon)}
        {categories.slice(0, 5).map(({ strCategory }) => (
          createButtonCategories(RenderButton, changeCategory, strCategory, iconsDrink)
        ))}
      </div>

      <FoodAndDrinkCard
        data={ingredients.length === 0 ? data : ingredients} geralTest="recipe" info="drink"
        test="card"
      />

      <Footer />
    </div>
  );
};

export default DrinkScreen;
