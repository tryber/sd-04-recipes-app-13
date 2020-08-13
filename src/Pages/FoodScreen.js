import React, { useEffect, useState, useContext } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header/Header';
import { RecipeContext } from '../context/index';
import { getByName, listAllCategories, getCategoryFilter } from '../services/foodApi';
import Loading from '../components/Loading';
import FoodAndDrinkCard from '../components/FoodAndDrinkCard';
import '../styles/FoodAndDrinkCards.css';
import RenderButton from '../components/utils/Button';
import All from '../assets/icons/All1.png';
import BeefIcon from '../assets/icons/Beef.png';
import BreakfastIcon from '../assets/icons/breakfast.png';
import ChickenIcon from '../assets/icons/Chicken.png';
import DessertIcon from '../assets/icons/dessert1.png';
import GoatIcon from '../assets/icons/goat.png';
// import { FoodIcon } from '../services/icons';

const iconsFood = {
  Beef: BeefIcon,
  Breakfast: BreakfastIcon,
  Chicken: ChickenIcon,
  Dessert: DessertIcon,
  Goat: GoatIcon,
};

const FoodScreen = () => {
  const { data, setData } = useContext(RecipeContext);
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

  const changeCategory = (strCategory) =>
    name === strCategory ? setName('') : setName(strCategory);

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
        <RenderButton
          type="button"
          className="category-btn"
          onClick={() => changeCategory('')}
          data-testid="All-category-filter"
        >
          <span className="food-title">All</span>
          <img src={All} alt={All} />
        </RenderButton>
        {categories.slice(0, 5).map(({ strCategory }) => (
          <RenderButton
            type="button"
            onClick={() => changeCategory(strCategory)}
            key={strCategory}
            className="category-btn"
            data-testid={`${strCategory}-category-filter`}
          >
            <span className="food-title">{strCategory}</span>
            {Object.keys(iconsFood)
              .filter((icon) => icon === strCategory)
              .map((category) => (
                <img src={iconsFood[category]} alt={category} />
              ))}
          </RenderButton>
        ))}
      </div>
      <FoodAndDrinkCard data={data} info="food" />
      <Footer />
    </div>
  );
};

export default FoodScreen;
