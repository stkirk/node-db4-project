const Recipes = require("./recipe-model");

const checkRecipeId = (req, res, next) => {
  Recipes.getRecipes()
    .then((recipes) => {
      const recipeWithId = recipes.filter((recipe) => {
        return recipe.recipe_id.toString() === req.params.recipe_id.toString();
      });
      if (!recipeWithId[0]) {
        next({
          status: 404,
          message: `no recipe with id ${req.params.recipe_id}`,
        });
      } else {
        req.recipe = recipeWithId;
        next();
      }
    })
    .catch(next);
};

module.exports = {
  checkRecipeId,
};
