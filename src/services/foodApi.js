const URL = 'https://www.themealdb.com/api/json/v1/1';

// Pega a lista completa e detalhada de todas as categorias
export async function getAllCategories() {
  const category = await fetch(`${URL}/categories.php`).then((r) => r.json());
  return category.categories;
}

export async function listAllCategories() {
  const categories = await fetch(`${URL}/list.php?c=list`).then((r) => r.json());
  return categories.meals;
}

// Filtro por categoria
export async function getCategoryFilter(category) {
  const categories = await fetch(`${URL}/filter.php?c=${category}`).then((r) => r.json());
  return categories.meals;
}

// Call a single random meal
export async function getRandomMeal() {
  const meal = await fetch(`${URL}/random.php`).then((r) => r.json());
  return meal.meals;
}
// Search meal by name
export async function getByName(name) {
  const meal = await fetch(`${URL}/search.php?s=${name}`).then((r) => r.json());
  return meal.meals;
}

// List meal by id
export async function getById(id) {
  const meal = await fetch(`${URL}/lookup.php?i=${id}`).then((r) => r.json());
  return meal.meals;
}

// List all meals by first letter
export async function getByFirstLetterFood(letter) {
  const meal = await fetch(`${URL}/search.php?f=${letter}`).then((r) => r.json());
  return meal.meals;
}

// Filter by main ingredient
export async function getByIngredientsFood(ingredient) {
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
