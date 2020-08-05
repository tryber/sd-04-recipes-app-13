import React from 'react';
import PropTypes from 'prop-types';

const RenderButton = ({ children, ...props }) => (
  <div>
    <button {...props}>{children}</button>
  </div>
);

RenderButton.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RenderButton;
