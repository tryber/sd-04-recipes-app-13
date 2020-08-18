import React from 'react';

const createButtonSearch = (RenderButton, changeCategory, AllIcon) => (
  <RenderButton
    type="button"
    className="category-btn"
    onClick={() => changeCategory('')}
    data-testid="All-category-filter"
  >
    <span>All</span>
    <img src={AllIcon} alt={AllIcon} />
  </RenderButton>
);

export default createButtonSearch;
