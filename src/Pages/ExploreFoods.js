import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header/Header';
import '../styles/ExploreScreen.css';

function ExploreFoods() {
  return (
    <div className="general-container">
      <Header title="Explorar Comidas" />
      <div className="conteiner-btn">
        <Link to="/explorar/comidas/ingredientes">
          <button
            type="button"
            data-testid="explore-by-ingredient"
            className="button-explore"
          >
            Por Ingredientes
          </button>
        </Link>
        <Link to="/explorar/comidas/area">
          <button type="button" data-testid="explore-by-area" className="button-explore">
            Por Local de Origem
          </button>
        </Link>
        <Link to="/comidas/52771">
          <button type="button" data-testid="explore-surprise" className="button-explore">
            Me Surpreenda!
          </button>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default ExploreFoods;
