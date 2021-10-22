const db = require("../data/db-config");

module.exports = {
  getRecipeById,
};

const getRecipeById = (recipe_id) => {
  return db("recipes").where("recipe_id", recipe_id);
};
