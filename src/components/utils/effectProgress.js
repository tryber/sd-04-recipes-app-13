const effectProgress = (recipe, setIngredients) =>
  Object.keys(recipe).map(
    (_, index) =>
      recipe[`strIngredient${index + 1}`] &&
      setIngredients((prevState) => [
        ...prevState,
        {
          id: index,
          ingredient: recipe[`strIngredient${index + 1}`],
          measure: recipe[`strMeasure${index + 1}`],
          isCompleted: false,
        },
      ]),
  );
