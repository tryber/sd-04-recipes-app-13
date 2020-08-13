import React from 'react';

const createButtonCategories = (RenderButton, changeCategory, strCategory) => (
  <RenderButton
    type="button"
    className="category-btn"
    onClick={() => changeCategory(strCategory)}
    data-testid={`${strCategory}-category-filter`}
    key={strCategory}
  >
    {strCategory}
  </RenderButton>
);

export default createButtonCategories;
