import React from 'react';

const renderInput = (datatest, type, value, onChange, label, name) => (
  <div>
    <input
      onChange={e => onChange(e.target.value)}
      data-testid={datatest}
      type={type}
      value={value}
      required
      size="30"
      className={`input-login-${type}`}
      placeholder={label}
      id={datatest}
      name={name}
    />
  </div>
);

export default renderInput;
