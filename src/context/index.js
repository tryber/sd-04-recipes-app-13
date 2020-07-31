import React, { createContext, useState, useEffect } from 'react';
import { getAllCategories } from '../services/foodApi';

export const RecipeContext = createContext();

const ProviderRecipe = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getAllCategories().then((result) => setData(result));
  }, []);

  const context = {
    data,
  };

  return <RecipeContext.Provider value={context}>{children}</RecipeContext.Provider>;
};

export default ProviderRecipe;