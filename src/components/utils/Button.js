import React from 'react';

const RenderButton = ({ children, ...props }) => (
  <div>
    <button {...props}>{children}</button>
  </div>
);

export default RenderButton;
