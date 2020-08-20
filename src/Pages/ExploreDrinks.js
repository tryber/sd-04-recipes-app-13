import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header/Header';
import '../styles/ExploreScreen.css';

function ExploreDrinks() {
  return (
    <div className="general-container">
      <Header title="Explorar Bebidas" />
      <div className="conteiner-btn">
        <Link to="/explorar/bebidas/ingredientes">
          <button
            type="button"
            data-testid="explore-by-ingredient"
            className="button-explore"
          >
            Por Ingredientes
          </button>
        </Link>
        <Link to="/bebidas/178319">
          <button type="button" data-testid="explore-surprise" className="button-explore">
            Me Surpreenda!
          </button>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default ExploreDrinks;
