const URL = 'https://www.themealdb.com/api/json/v1/1';

// Pega a lista completa e detalhada de todas as categorias
async function getAllCategories() {
  const category = await fetch(`${URL}/categories.php`).then((r) => r.json());
  return category.categories;
}

// Call a single random meal
async function getRandomMeal() {
  const meal = await fetch(`${URL}/random.php`).then((r) => r.json());
  return meal.meals;
}
// Search meal by name
async function getByName(name) {
  const meal = await fetch(`${URL}/search.php?s=${name}`).then((r) => r.json());
  return meal.meals;
}

// List all meals by first letter
async function getByFirstLetter(letter) {
  const meal = await fetch(`${URL}/search.php?f=${letter}`).then((r) => r.json());
  return meal.meals;
}

// Filter by main ingredient
async function getByIngredients(ingredient) {
  const meal = await fetch(`${URL}/filter.php?i=${ingredient}`).then((r) => r.json());
  return meal.meals;
}

// Filter by Category
async function getByCategory(category) {
  const meal = await fetch(`${URL}/filter.php?c=${category}`).then((r) => r.json());
  return meal.meals;
}

// Filter by Area
async function getByArea(area) {
  const meal = await fetch(`${URL}/filter.php?a=${area}`).then((r) => r.json());
  return meal.meals;
}

export default {
  getAllCategories,
  getRandomMeal,
  getByName,
  getByFirstLetter,
  getByIngredients,
  getByCategory,
  getByArea,
};
