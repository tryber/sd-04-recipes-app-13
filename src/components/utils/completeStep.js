const completedStep = (id, setIngredients, ingredients) => {
  const newIngredients = [...ingredients];
  newIngredients[id].isCompleted = !ingredients[id].isCompleted;
  setIngredients(newIngredients);
};

export default completedStep;
