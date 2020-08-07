import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header/Header';
import '../styles/ExploreScreen.css';

function ExploreFoods() {
  return (
    <div>
      <Header title="Explorar Comidas" />
      <Link to="/explorar/comidas/ingredientes">
        <button
          type="button"
          data-testid="explore-by-ingredient"
          className="btn-explore-by-ingredient"
        >
          Por Ingredientes
        </button>
      </Link>

      <Link to="/explorar/comidas/area">
        <button
          type="button"
          data-testid="explore-by-area"
          className="btn-explore-by-area"
        >
          Por Local de Origem
        </button>
      </Link>

      <Link to="/comidas/52771">
      <button
        type="button"
        data-testid="explore-surprise"
        className="btn-explore-surprise"
      >
        Me Surpreenda!
      </button>
      </Link>
      <Footer />
    </div>
  );
}

export default ExploreFoods;
