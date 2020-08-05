import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getAllCategories } from '../services/foodApi';

export const RecipeContext = createContext();

const ProviderRecipe = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getAllCategories().then((result) => setData(result));
  }, []);

  const context = {
    data,
    setData,
  };

  return <RecipeContext.Provider value={context}>{children}</RecipeContext.Provider>;
};

ProviderRecipe.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element])
    .isRequired,
};

export default ProviderRecipe;
