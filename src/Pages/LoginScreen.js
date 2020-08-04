import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { saveStorage } from '../services/localStorage';
import '../styles/LoginScreen.css';

function verifyFields(email, password) {
  let valid = false;
  let disable = true;
  const user = email.slice(0, email.indexOf('@'));
  const dom = email.slice(email.indexOf('@') + 1, email.indexOf('.'));
  if ((email.length > 6)
    && (email.includes('@'))
    && (email.includes('.'))
    && (user.length > 1)
    && (dom.length > 1)) {
    valid = true;
  }
  if (password.length > 5 && valid) {
    disable = false;
  }
  return disable;
}

const renderInput = (label, datatest, type, value, onChange) => (
  <div>
    <input
      onChange={(e) => onChange(e.target.value)}
      data-testid={datatest}
      type={type}
      value={value}
      required
      size="30"
      className={`input-login-${type}`}
      placeholder={label}
    />
  </div>
);

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
    <div className="div-inputs-login">
      <span className="title-login">Login</span>
      <div>
        {renderInput('Email', 'email-input', 'email', email, setEmail)}
        {renderInput('Senha', 'password-input', 'password', password, setPassword)}
      </div>
      <div>
        <Link to="/comidas">
          <button
            type="button"
            data-testid="login-submit-btn"
            disabled={disableButton}
            className="btn-login"
            onClick={() => localSaves()}
          >
            Login
          </button>
        </Link>
      </div>
    </div>
  );
}

export default LoginScreen;
