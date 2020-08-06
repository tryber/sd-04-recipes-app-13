import React from 'react';

<<<<<<< HEAD
const renderInput = (datatest, type, value, onChange, label, name) => (
  <div>
    <input
      onChange={(e) => onChange(e.target.value)}
      data-testid={datatest}
      type={type}
      value={value}
=======
const RenderInput = ({ ...props }) => <input {...props} />;

export default RenderInput;

/*
>>>>>>> a5de0d46ca75e21e0fa1f6886a3bdc34e8963459
      required
      size="30"
 */

// onChange={(e) => onChange(e.target.value)}
// data-testid={datatest}
// value={value}
// className={`input-login-${type}`}
// placeholder={label}
// name={name}
