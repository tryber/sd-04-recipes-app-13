import React from 'react';
import { CopyToClipboard } from 'clipboard-copy';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import { loadStorage } from '../services/localStorage';

function ShareAndFavorite(path, copied, setCopied, foodId) {
  const localfavorite = (localStorage.getItem('favoriteRecipes'));
  let favoritada = false;
  if (localfavorite.length > 0) {
    favoritada = localfavorite.some((recipe) => recipe.id === foodId);
  }

  return (
    <div>
      <CopyToClipboard text={path} onCopy={() => setCopied(true)}>
        <img src={shareIcon} alt="share-icon" />
      </CopyToClipboard>
      {(favoritada) && <img src={blackHeartIcon} alt="coração-cheio" />}
      {(!favoritada) && <img src={whiteHeartIcon} alt="coração-vazio" />}
      <div>
        {copied && <span>Link copiado!</span>}
      </div>
    </div>
  );
}

export default ShareAndFavorite;
