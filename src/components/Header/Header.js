import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import Icons from '../Icons';
import ProfileIcon from '../../images/profileIcon.svg';
import SearchIcon from '../../images/searchIcon.svg';
import './styles.css';

const Header = ({ title, search }) => {
  const profileBtn = () => <Redirect to="/perfil" />;

  const searchBtn = () => {
    if (document.getElementById('barSearch').style.display === 'block') {
      document.getElementById('barSearch').style.display = 'none';
    } else {
      document.getElementById('barSearch').style.display = 'block';
    }
  };

  return (
    <Fragment>
      <header>
        <Icons
          testid="profile-top-btn"
          src={ProfileIcon}
          alt="Ícone do Perfil"
          onClick={profileBtn()}
        />
        <h1 data-testid="page-title" className="pageTitle">
          {title}
        </h1>
        {search ? (
          <Icons
            testid="search-top-btn"
            src={SearchIcon}
            alt="Ícone de Pesquisa"
            onClick={searchBtn}
          />
        ) : (
          <div />
        )}
      </header>
      <div id="barSearch" className="hidden">
        Barra de Busca
      </div>
    </>
  );
};

Header.defaultProps = {
  search: false,
};

Header.propTypes = {
  search: PropTypes.bool,
  title: PropTypes.string.isRequired,
};

export default Header;
