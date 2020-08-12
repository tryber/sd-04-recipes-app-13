import React from 'react';
import Button from './Button';

const createButtonSearch = (RenderButton, changeCategory) => (
  <RenderButton
    type="button"
    className="category-btn"
    onClick={() => changeCategory('')}
    data-testid="All-category-filter"
  >
    All
  </RenderButton>
);

export default createButtonSearch;
