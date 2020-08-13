import React, { useEffect, useState, useContext } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header/Header';
import { getByName, listAllCategories, getCategoryFilter } from '../services/drinkApi';
import Loading from '../components/Loading';
import FoodAndDrinkCard from '../components/FoodAndDrinkCard';
import '../styles/FoodAndDrinkCards.css';
import { RecipeContext } from '../context';
import RenderButton from '../components/utils/Button';
import OrdinaryIcon from '../assets/icons/Ordinary-Drink.png';
import CocktailIcon from '../assets/icons/cocktail.png';
import MilkIcon from '../assets/icons/milk-shake.png';
import OtherIcon from '../assets/icons/Other.png';
import CocoaIcon from '../assets/icons/cocoa.png';
import All from '../assets/icons/shot.png';

const iconsDrink = {
  'Ordinary Drink': OrdinaryIcon,
  Cocktail: CocktailIcon,
  'Milk / Float / Shake': MilkIcon,
  'Other/Unknown': OtherIcon,
  Cocoa: CocoaIcon,
};

const DrinkScreen = () => {
  const { data, setData } = useContext(RecipeContext);
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

  const changeCategory = (strCategory) =>
    name === strCategory ? setName('') : setName(strCategory);
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
        <RenderButton
          type="button"
          className="category-btn"
          onClick={() => changeCategory('')}
          data-testid="All-category-filter"
        >
          <img src={All} alt={All} />
          <span className="drink-title">All</span>
        </RenderButton>
        {categories.slice(0, 5).map(({ strCategory }) => (
          <RenderButton
            type="button"
            className="category-btn"
            onClick={() => changeCategory(strCategory)}
            data-testid={`${strCategory}-category-filter`}
            key={strCategory}
          >
            {Object.keys(iconsDrink)
              .filter((icon) => icon === strCategory)
              .map((category) => (
                <img src={iconsDrink[category]} alt={category} />
              ))}
            <span className="drink-title">{strCategory}</span>
          </RenderButton>
        ))}
      </div>
      <FoodAndDrinkCard data={data} info="drink" />
      <Footer />
    </div>
  );
};

export default DrinkScreen;
