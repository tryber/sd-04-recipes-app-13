import React from 'react';
import PropTypes from 'prop-types';

const RenderButton = ({ children, ...props }) => <button {...props}>{children}</button>;

RenderButton.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RenderButton;
