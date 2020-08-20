import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header/Header';
import '../styles/ExploreScreen.css';

function ExploreScreen() {
  return (
    <div className="general-container">
      <Header title="Explorar" />
      <Link to="/explorar/comidas">
        <button type="button" data-testid="explore-food" className="button-start">
          Explorar Comidas
        </button>
      </Link>
      <Link to="/explorar/bebidas">
        <button type="button" data-testid="explore-drinks" className="button-start">
          Explorar Bebidas
        </button>
      </Link>
      <Footer />
    </div>
  );
}

export default ExploreScreen;
