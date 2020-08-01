import React from 'react';

const Icons = ({ testId, src, alt, onClick}) => (
  <button type="button" data-testid={testId} onClick={onClick}>
    <img src={src} alt={alt} />
  </button>
);

export default Icons;
