const URL = 'https://www.themealdb.com/api/json/v1/1';

// Pega a lista completa e detalhada de todas as categorias
export async function getAllCategories() {
  const category = await fetch(`${URL}/categories.php`).then((r) => r.json());
  return category.categories;
}

// Call a single random meal
export async function getRandomMeal() {
  const meal = await fetch(`${URL}/random.php`).then((r) => r.json());
  return meal.meals;
}
// Search meal by name
export async function getByName(name) {
  const meal = await fetch(`${URL}/search.php?s=${name}`).then((r) => r.json());
  console.log(meal);
  return meal.meals;
}

// List all meals by first letter
export async function getByFirstLetter(letter) {
  const meal = await fetch(`${URL}/search.php?f=${letter}`).then((r) => r.json());
  return meal.meals;
}

// Filter by main ingredient
export async function getByIngredients(ingredient) {
  const meal = await fetch(`${URL}/filter.php?i=${ingredient}`).then((r) => r.json());
  return meal.meals;
}

// Filter by Category
export async function getByCategory(category) {
  const meal = await fetch(`${URL}/filter.php?c=${category}`).then((r) => r.json());
  return meal.meals;
}

// Filter by Area
export async function getByArea(area) {
  const meal = await fetch(`${URL}/filter.php?a=${area}`).then((r) => r.json());
  return meal.meals;
}
