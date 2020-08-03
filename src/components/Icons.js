import React from 'react';
import PropTypes from 'prop-types';

const Icons = ({ testId, src, alt, onClick }) => (
  <div>
    <button type="button" submit data-testid={testId} onClick={onClick}>
      <img src={src} alt={alt} />
    </button>
  </div>
);

Icons.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  testId: PropTypes.string.isRequired,
};

export default Icons;
