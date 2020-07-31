import React, { createContext } from 'react';

export const RecipeContext = createContext();

const ProviderRecipe = ({ children }) => {
  const context = {

  };

  return <RecipeContext.Provider value={context}>{children}</RecipeContext.Provider>;
};

export default ProviderRecipe;
