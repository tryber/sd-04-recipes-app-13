import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer';
import { loadStorage } from '../services/localStorage';
import '../styles/ProfileScreen.css';

function ProfileScreen() {
  const cleanAndBack = () => {
    localStorage.clear();
  };

  return (
    <div className="div-body-profile">
      <div style={{ display: 'none' }}>
        <Header title="Perfil" />
      </div>
      <div className="box-container">
        <h2 data-testid="profile-email">{loadStorage('user').email}</h2>
        <div className="container-buttons">
          <Link to="/receitas-favoritas">
            <button
              type="button"
              data-testid="profile-favorite-btn"
              className="profile-btn"
            >
              Receitas Favoritas
            </button>
          </Link>
          <Link to="/receitas-feitas">
            <button type="button" data-testid="profile-done-btn" className="profile-btn">
              Receitas Feitas
            </button>
          </Link>
          <Link to="/">
            <button
              type="button"
              data-testid="profile-logout-btn"
              className="profile-btn"
              onClick={() => cleanAndBack()}
            >
              Sair
            </button>
          </Link>
        </div>
      </div>
      <div style={{ display: 'none' }}>
        <Footer />
      </div>
    </div>
  );
}

export default ProfileScreen;
