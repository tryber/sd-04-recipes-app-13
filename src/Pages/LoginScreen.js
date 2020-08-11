import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { saveStorage } from '../services/localStorage';
import '../styles/LoginScreen.css';
import RenderButton from '../components/utils/Button';
import RenderInput from '../components/utils/Input';

function verifyFields(email, password) {
  let valid = false;
  let disable = true;
  const user = email.slice(0, email.indexOf('@'));
  const dom = email.slice(email.indexOf('@') + 1, email.indexOf('.'));
  if (
    email.length > 6 &&
    email.includes('@') &&
    email.includes('.') &&
    user.length > 1 &&
    dom.length > 1
  ) {
    valid = true;
  }
  if (password.length > 6 && valid) {
    disable = false;
  }
  return disable;
}

function LoginScreen() {
  const [disableButton, setDisableButton] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    setDisableButton(verifyFields(email, password));
  }, [email, password]);

  const localSaves = () => {
    saveStorage('mealsToken', '1');
    saveStorage('cocktailsToken', '1');
    saveStorage('user', { email });
  };

  return (
    <div className="div-body">
      <div className="div-inputs-login">
        <div className="title-container">
          <span className="title-login">Recipe App</span>
        </div>

        <RenderInput
          data-testid="email-input"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
          size="30"
          className="input-login-email"
        />
        <RenderInput
          data-testid="password-input"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Senha"
          required
          size="30"
          className="input-login-password"
        />

        <br />

        <Link to="/comidas">
          <RenderButton
            type="button"
            data-testid="login-submit-btn"
            disabled={disableButton}
            className="btn-login"
            onClick={() => localSaves()}
          >
            Login
          </RenderButton>
        </Link>
        <br />
        <div className="container-icons">
          <img
            className="icons"
            src="https://download.seaicons.com/download/i97515/sicons/basic-round-social/sicons-basic-round-social-facebook.ico"
          />
          <img
            className="icons"
            src="https://lh3.googleusercontent.com/proxy/hYLaRtLCwitj7wFHMqOHd-qh9rodOKzv8_4KEtikpZHRH-Uk9Yvff-DibQLfqRkhZTKBWUyyYbch_mqdKRsPLIlhp8Ma_b2P4dfdE0Gev0Ath11tkzeF710-AjRMQzn8KhWibjzPrxlVt1wU9Y77rgVOqMCn5riT82kj"
          />
          <img
            className="icons"
            src="https://icon-library.com/images/twiter-icon/twiter-icon-29.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
