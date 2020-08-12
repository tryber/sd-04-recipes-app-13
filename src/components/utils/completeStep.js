const completedStep = (id, setIngredients, ingredients) => {
  const newIngredients = [...ingredients];
  newIngredients[id].isCompleted = true;
  setIngredients(newIngredients);
};

export default completedStep;
