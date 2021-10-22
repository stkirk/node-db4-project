const express = require("express");
const Recipes = require("./recipe-model");
const { checkRecipeId } = require("./recipe-middleware");

const router = express.Router();

router.get("/", (req, res, next) => {
  Recipes.getRecipes()
    .then((recipes) => {
      res.json(recipes);
    })
    .catch(next);
});

router.get("/:recipe_id", checkRecipeId, async (req, res, next) => {
  const { recipe_id, recipe_name } = req.recipe;
  try {
    const recipesArray = await Recipes.getRecipeById(recipe_id);
    res.json(recipesArray);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
