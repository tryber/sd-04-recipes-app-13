import React from 'react';

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
