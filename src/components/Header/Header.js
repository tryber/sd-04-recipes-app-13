import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import ProfileIcon from '../../images/profileIcon.png';
import SearchIcon from '../../images/searchIcon.svg';
import RenderButton from '../utils/Button';
import FoodBarSearch from './FoodBarScreen';
import DrinkBarSearch from './DrinkBarScreen';

const Header = ({ title, search }) => {
  const history = useHistory();
  const [isHidden, setIsHidden] = useState(true);

  const searchBtn = () => (isHidden === true ? setIsHidden(false) : setIsHidden(true));

  return (
    <Fragment>
      <header>
        <div>
          <Link to="/perfil">
            <img data-testid="profile-top-btn" src={ProfileIcon} alt="Ícone do Perfil" />
          </Link>
        </div>
        <h1 data-testid="page-title" className="pageTitle">
          {title}
        </h1>
        {search ? (
          <RenderButton type="button" onClick={searchBtn}>
            <img data-testid="search-top-btn" src={SearchIcon} alt="Ícone de Pesquisa" />
          </RenderButton>
        ) : (
          <div />
        )}
      </header>
      {!isHidden && (
        <div>
          {history.location.pathname === '/comidas' ? (
            <FoodBarSearch />
          ) : (
            <DrinkBarSearch />
          )}
        </div>
      )}
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
