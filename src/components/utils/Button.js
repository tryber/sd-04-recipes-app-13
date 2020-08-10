import React from 'react';
import PropTypes from 'prop-types';

const RenderButton = ({ isDisabled, children, ...props }) => {
  if (isDisabled) {
    return <button {...props} disabled>{children}</button>;
  }
  return <button {...props}>{children}</button>;
};

RenderButton.propTypes = {
  isDisabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

RenderButton.defaultProps = {
  isDisabled: false,
};

export default RenderButton;
