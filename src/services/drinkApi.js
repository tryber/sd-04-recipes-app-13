const URL = 'https://www.thecocktaildb.com/api/json/v1/1';

// Pega a bebida por nome
async function getByName(name) {
  const drink = await fetch(`${URL}/search.php?s=${name}`).then((r) => r.json());
  return drink.drinks;
}

// Pega por Letra
async function getByFirstLetter(letter) {
  const drink = await fetch(`${URL}/search.php?f=${letter}`).then((r) => r.json());
  return drink.drinks;
}

// Pega por Ingrediente
async function getByIngredients(ingredient) {
  const drink = await fetch(`${URL}/filter.php?i=${ingredient}`).then((r) => r.json());
  return drink.drinks;
}

export { getByName, getByFirstLetter, getByIngredients };
