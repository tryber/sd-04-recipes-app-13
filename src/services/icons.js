import React, { Fragment } from 'react';
import BeefIcon from '../assets/icons/Beef.png';
import BreakfastIcon from '../assets/icons/breakfast.png';
import ChickenIcon from '../assets/icons/Chicken.png';
import DessertIcon from '../assets/icons/dessert1.png';
import GoatIcon from '../assets/icons/goat.png';
import OrdinaryIcon from '../assets/icons/Ordinary-Drink.png';
import CocktailIcon from '../assets/icons/cocktail.png';
import MilkIcon from '../assets/icons/milk-shake.png';
import OtherIcon from '../assets/icons/Other.png';
import CocoaIcon from '../assets/icons/cocoa.png';

const iconsDrink = {
  'Ordinary Drink': OrdinaryIcon,
  Cocktail: CocktailIcon,
  'Milk / Float / Shake': MilkIcon,
  'Other/Unknown': OtherIcon,
  Cocoa: CocoaIcon,
};

const iconsFood = {
  Beef: BeefIcon,
  Breakfast: BreakfastIcon,
  Chicken: ChickenIcon,
  Dessert: DessertIcon,
  Goat: GoatIcon,
};

const categoryIcon = (obj, strCategory) => {
  Object.keys(obj)
    .filter((icon) => icon === strCategory)
    .map((category) => <img src={obj[category]} alt={category} />);
};

export const DrinkIcon = (strCategory) => (
  <Fragment>
    <span className="drink-title">{strCategory}</span>
    {categoryIcon(iconsDrink, strCategory)}
  </Fragment>
);

export const FoodIcon = (strCategory) => (
  <Fragment>
    <span className="food-title">{strCategory}</span>
    {categoryIcon(iconsFood, strCategory)}
    {console.log(categoryIcon(iconsFood, strCategory))}
  </Fragment>
);
