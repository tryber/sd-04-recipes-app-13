import React from 'react';

const RenderButton = ({ type, datatest, onClick, children }) => (
  <div>
    <button type={type} data-testid={datatest} onClick={onClick}>
      {children}
    </button>
  </div>
);

export default RenderButton;
