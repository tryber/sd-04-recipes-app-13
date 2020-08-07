import React from 'react';
import copy from 'clipboard-copy';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
// import { loadStorage } from '../services/localStorage';
// tentar colocar em ação esse codigo

function ShareAndFavorite({ path, copied, setCopied }) {

  const ShareClick = () => {
    copy(path);
    setCopied(true);
  };
  console.log(copied);
  return (
    <div>
      <button type="button" onClick={() => ShareClick()}>
        <img src={shareIcon} alt="share-icon" />
      </button>
      {copied && <span>Link copiado!</span>}
    </div>
  );
}

export default ShareAndFavorite;
