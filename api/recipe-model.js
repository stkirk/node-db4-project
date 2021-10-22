const db = require("../data/db-config");

const getRecipes = async () => {
  return db("recipes");
};

const getRecipeById = async (recipe_id) => {
  return db("recipes").where("recipe_id", recipe_id);
};

module.exports = {
  getRecipeById,
  getRecipes,
};
