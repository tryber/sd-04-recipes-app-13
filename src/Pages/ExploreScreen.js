import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header/Header';
import '../styles/ExploreScreen.css';

function ExploreScreen() {
  return (
    <div className="general-container">
      <Header title="Explorar" />
      <div className="conteiner-btn">
        <Link to="/explorar/comidas">
          <button type="button" data-testid="explore-food" className="button-explore">
            Explorar Comidas
          </button>
        </Link>
        <Link to="/explorar/bebidas">
          <button type="button" data-testid="explore-drinks" className="button-explore">
            Explorar Bebidas
          </button>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default ExploreScreen;
