import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/LoginScreen.css';

function LoginScreen() {
  const [disableButton, setDisableButton] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleChange(e, field) {
    await field(e.target.value);
    let valid = false;
    const user = email.slice(0, email.indexOf('@'));
    const dom = email.slice(email.indexOf('@') + 1, email.indexOf('.'));
    if ((email.length > 6)
      && (email.includes('@'))
      && (email.includes('.'))
      && (user.length > 1)
      && (dom.length > 1)) {
      valid = true;
    }
    if (password.length > 4 && valid) {
      setDisableButton(false);
    }
  }

  const renderInput = (label, datatest, type, value, onChange) => {
    return (
      <div>
        <input
          onChange={(e) => handleChange(e, onChange)}
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
  };

  return (
    <div className="div-inputs-login">
      <span className="title-login">Login</span>
      <div>
        {renderInput('Email', 'email-input', 'email', email, setEmail)}
        {renderInput('Senha', 'password-input', 'password', password, setPassword)}
      </div>
      <div>
        <Link to="/explorar">
          <button
            type="button"
            data-testid="login-submit-button"
            disabled={disableButton}
            className="btn-login"
          >
            Login
          </button>
        </Link>
      </div>
    </div>
  );
}

export default LoginScreen;
