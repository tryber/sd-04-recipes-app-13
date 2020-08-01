import PropTypes from 'prop-types';
import React from 'react';
import { Redirect } from 'react-router-dom';
import Icons from '../Icons';
import ProfileIcon from '../../images/profileIcon.svg';
import SearchIcon from '../../images/searchIcon.svg';

const Header = ({ title, search }) => {
  const profileBtn = () => <Redirect to="/perfil" />;

  const searchBtn = () => {
    // Ao clicar no botão de busca pela primeira vez a barra de busca aparece;
    // Ao clicar no botão de busca pela segunda vez a barra de busca desaparece.
  };

  return (
    <header>
      <div>
        <Icons
          testid="profile-top-btn"
          src={ProfileIcon}
          alt="Ícone do Perfil"
          onClick={profileBtn}
        />
        <h1 data-testid="page-title">{title}</h1>
        {search ? (
          <Icons
            testid="search-top-btn"
            src={SearchIcon}
            alt="Ícone de Pesquisa"
            onClick={searchBtn}
          />
        ) : null}
      </div>
    </header>
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
