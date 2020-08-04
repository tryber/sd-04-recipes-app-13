import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ProfileIcon from '../../images/profileIcon.svg';
import SearchIcon from '../../images/searchIcon.svg';
import './styles.css';

const Header = ({ title, search }) => {
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
        <div>
          <Link to="/perfil" data-testid="profile-top-btn">
            <img src={ProfileIcon} alt="Ícone do Perfil" />
          </Link>
        </div>
        <h1 data-testid="page-title" className="pageTitle">
          {title}
        </h1>
        {search ? (
          <button type="button" data-testid="search-top-btn" onClick={searchBtn}>
            <img src={SearchIcon} alt="Ícone de Pesquisa" />
          </button>
        ) : (
          <div />
        )}
      </header>
      <div id="barSearch" className="hidden">
        Barra de Busca
      </div>
    </Fragment>
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
