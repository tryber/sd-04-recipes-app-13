const URL = 'https://www.thecocktaildb.com/api/json/v1/1';

// Pega a bebida por nome
async function getByName(name) {
  const drink = await fetch(`${URL}/search.php?s=${name}`).then((r) => r.json());
  return drink.drinks;
}

export async function getById(id) {
  const drink = await fetch(`${URL}/lookup.php?i=${id}`).then((r) => r.json());
  return drink.drinks;
}

export async function listAllCategories() {
  const categories = await fetch(`${URL}/filter.php?c=list`).then((r) => r.json());
  return categories.drinks;
}

export async function getByCategories(category) {
  const categories = await fetch(`${URL}/filter.php?c=${category}`).then((r) => r.json());
  return categories.drinks;
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
