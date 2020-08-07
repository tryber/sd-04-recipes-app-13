import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header/Header';
import '../styles/ExploreScreen.css';

function ExploreFoods() {
  return (
    <div>
      <Header title="Explorar Comidas" />
      <Link to="">
        <button
          type="button"
          data-testid="explore-by-ingredient"
          className="btn-explore-by-ingredient"
        >
          Por Ingredientes
        </button>
      </Link>
      <button
        type="button"
        data-testid="explore-surprise"
        className="btn-explore-surprise"
      >
        Me Surpreenda!
      </button>
      <Footer />
    </div>
  );
}

export default ExploreFoods;
