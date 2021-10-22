const db = require("../data/db-config");

const getRecipeById = async (recipe_id) => {
  return db("recipes").where("recipe_id", recipe_id);
};

module.exports = {
  getRecipeById,
};
