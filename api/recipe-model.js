const db = require("../data/db-config");

const getRecipes = async () => {
  return db("recipes");
};

const getRecipeById = async (recipe_id) => {
  //Raw SQL - Steps:
  // select s.step_id, s.step_number, s.instruction, r.recipe_name
  // from steps as s
  // left join steps_ingredients as si
  // on s.step_id = si.step_id
  // join recipes as r
  // on s.recipe_id = r.recipe_id
  // where s.recipe_id = 1
  // group by s.step_number
  // order by s.step_number
  const stepsRows = await db("steps as s")
    .leftJoin("steps_ingredients as si", "s.step_id", "si.step_id")
    .join("recipes as r", "s.recipe_id", "r.recipe_id")
    .select("s.step_id", "s.step_number", "s.instruction", "r.recipe_name")
    .where("s.recipe_id", recipe_id)
    .groupBy("s.step_number")
    .orderBy("s.step_number");

  //Raw SQL - Ingredients:
  // select s.step_id, i.ingredient_id, i.ingredient_name, si.ingredient_quantity
  // from steps as s
  // join steps_ingredients as si on si.step_id = s.step_id
  // join ingredients as i on i.ingredient_id = si.ingredient_id
  // where s.recipe_id = 1
  const ingredientsRows = await db("steps as s")
    .join("steps_ingredients as si", "si.step_id", "s.step_id")
    .join("ingredients as i", "i.ingredient_id", "si.ingredient_id")
    .select(
      "s.step_id",
      "i.ingredient_id",
      "i.ingredient_name",
      "si.ingredient_quantity"
    )
    .where("s.recipe_id", recipe_id)
    .orderBy("s.step_number");

  const stepsArray = stepsRows.map((step) => {
    return {
      step_id: step.step_id,
      step_number: step.step_number,
      step_instructions: step.instruction,
      ingredients: ingredientsRows.map((ingredient) => {
        if (ingredient.step_id == step.step_id) {
          return {
            ingredient_id: ingredient.ingredient_name,
            ingredient_name: ingredient.ingredient_name,
            quantity: ingredient.ingredient_quantity,
          };
        } else {
          return;
        }
      }),
    };
  });

  const recipeReturn = {
    recipe_id: recipe_id,
    recipe_name: stepsRows[0].recipe_name,
    steps: stepsArray,
  };

  return recipeReturn;
};

module.exports = {
  getRecipeById,
  getRecipes,
};
