const effectProgress3 = (ingredients, setIsDisabled) => {
  const disabled = ingredients.length
    ? ingredients.every(({ isCompleted }) => isCompleted)
    : false;
  if (disabled) {
    setIsDisabled(false);
  }
};

export default effectProgress3;
