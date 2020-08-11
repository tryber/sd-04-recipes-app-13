const completedStep = (id) => {
  const newIngredients = [...ingredients];
  newIngredients[id].isCompleted = true;
  setIngredients(newIngredients);
};

export default completedStep;
