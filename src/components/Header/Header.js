import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import ProfileIcon from '../../assets/images/profileIcon.png';
import SearchIcon from '../../assets/images/searchIcon.png';
import RenderButton from '../utils/Button';
import FoodBarSearch from './FoodBarScreen';
import DrinkBarSearch from './DrinkBarScreen';
import '../../styles/Header.css';

const Header = ({ title, search }) => {
  const history = useHistory();
  const [isHidden, setIsHidden] = useState(true);

  const searchBtn = () => (isHidden === true ? setIsHidden(false) : setIsHidden(true));

  return (
    <Fragment>
      <header className="header-container">
        <div>
          <Link to="/perfil">
            <img
              className="profileIcon"
              data-testid="profile-top-btn"
              src={ProfileIcon}
              alt="Ícone do Perfil"
            />
          </Link>
        </div>
        <h1 data-testid="page-title" className="pageTitle">
          {title}
        </h1>
        {search ? (
          <RenderButton className="searchIcon" type="button" onClick={searchBtn}>
            <img data-testid="search-top-btn" src={SearchIcon} alt="Ícone de Pesquisa" />
          </RenderButton>
        ) : (
          <div />
        )}
        {!isHidden &&
          (history.location.pathname === '/comidas' ? (
            <FoodBarSearch />
          ) : (
            <DrinkBarSearch />
          ))}
      </header>
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
