import React from 'react';

const createButtonCategories = (
  RenderButton,
  changeCategory,
  strCategory,
  iconsArray,
) => (
  <RenderButton
    type="button"
    className="category-btn"
    onClick={() => changeCategory(strCategory)}
    data-testid={`${strCategory}-category-filter`}
    key={strCategory}
  >
    <span>{strCategory}</span>
    {Object.keys(iconsArray)
      .filter((icon) => icon === strCategory)
      .map((category) => (
        <img src={iconsArray[category]} alt={category} />
      ))}
  </RenderButton>
);

export default createButtonCategories;
