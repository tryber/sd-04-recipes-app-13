import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer';
import { loadStorage } from '../services/localStorage';


function ProfileScreen() {
  const cleanAndBack = () => {
    localStorage.clear();
  };

  return (
    <Fragment>
      {console.log(loadStorage('user'))}
      <Header title="Perfil" />
      <div>
        <h2 data-testid="profile-email">{loadStorage('user').email}</h2>
        <Link to="/receitas-favoritas">
          <button type="button" data-testid="profile-favorite-btn">Receitas Favoritas</button>
        </Link>
        <Link to="/receitas-feitas">
          <button type="button" data-testid="profile-done-btn">Receitas Feitas</button>
        </Link>
        <Link to="/">
          <button type="button" data-testid="profile-logout-btn" onClick={() => cleanAndBack()}>
            Sair
          </button>
        </Link>
      </div>
      <Footer />
    </Fragment>
  );
}

export default ProfileScreen;
