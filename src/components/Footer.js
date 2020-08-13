import React from 'react';
import { Link } from 'react-router-dom';
import foodIcon from '../assets/icons/Comida.png';
import drinkIcon from '../assets/icons/bebida.png';
import exploreIcon from '../assets/icons/Explorar.png';
import '../styles/footerStyle.css';

function Footer() {
  return (
    <footer data-testid="footer" className="footer">
      <div className="footer-drink">
        <Link to="/bebidas">
          <img src={drinkIcon} data-testid="drinks-bottom-btn" alt="Drink path" />
        </Link>
      </div>
      <div className="footer-explore">
        <Link to="/explorar">
          <img src={exploreIcon} data-testid="explore-bottom-btn" alt="Explore path" />
        </Link>
      </div>
      <div className="footer-meal">
        <Link to="/comidas">
          <img src={foodIcon} data-testid="food-bottom-btn" alt="Meal path" />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
