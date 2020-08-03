import React from 'react';
import { Link } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';

function Footer() {
  return (
    <footer>
      <div>
        <Link to="/bebidas" data-testid="drinks-bottom-btn"><img src={drinkIcon} alt="Drink path" /></Link>
      </div>
      <div>
        <Link to="/explorar" data-testid="explore-bottom-btn"><img src={exploreIcon} alt="Explore path" /></Link>
      </div>
      <div>
        <Link to="/comidas" data-testid="food-bottom-btn"><img src={mealIcon} alt="Meal path" /></Link>
      </div>
    </footer>
  );
}

export default Footer;
