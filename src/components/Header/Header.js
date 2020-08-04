import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import ProfileIcon from '../../images/profileIcon.svg';
import SearchIcon from '../../images/searchIcon.svg';
import RenderButton from '../utils/Button';
import './styles.css';
import FoodBarSearch from './FoodBarScreen';
import DrinkBarSearch from './DrinkBarScreen';

const Header = ({ title, search }) => {
  const history = useHistory();
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
          <RenderButton type="button" datatest="search-top-btn" onClick={searchBtn}>
            <img src={SearchIcon} alt="Ícone de Pesquisa" />
          </RenderButton>
        ) : (
          <div />
        )}
      </header>
      <div id="barSearch" className="hidden">
        {history.location.pathname === '/comidas' ? <FoodBarSearch /> : <DrinkBarSearch />}
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
