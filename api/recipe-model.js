const db = require("../data/db-config");

const getRecipes = async () => {
  return db("recipes");
};

const getRecipeById = async (recipe_id) => {
  //   const recipeRows = await db("steps as s")
  //     .join("recipes as r", "r.recipe_id", "s.recipe_id")
  //     .select("r.recipe_name", "s.step_id", "s.step_number", "s.instruction")
  //     .where("r.recipe_id", recipe_id);

  const stepsRows = await db("steps as s")
    .leftJoin("steps_ingredients as si", "s.step_id", "si.step_id")
    .join("recipes as r", "s.recipe_id", "r.recipe_id")
    .select("s.step_id", "s.step_number", "s.instruction", "r.recipe_name")
    .where("s.recipe_id", recipe_id)
    .groupBy("s.step_number")
    .orderBy("s.step_number");

  const stepsArray = stepsRows.map((step) => {
    return {
      step_id: step.step_id,
      step_number: step.step_number,
      step_instructions: step.instruction,
      ingredients: [],
    };
  });

  //   const ingredientsArray = stepsRows.map(row => {
  //       if (row.ingredient_id) {
  //           return
  //       }
  //   })

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

//RAW SQL
//RECIPES:
// select r.recipe_name, s.step_id, s.step_number, s.instruction
// from steps as s
// join recipes as r on r.recipe_id = s.recipe_id
// where r.recipe_id = 2
// order by s.step_number;

//STEPS
// select s.step_id, s.step_number, s.instruction, r.recipe_name
// from steps as s
// left join steps_ingredients as si
// on s.step_id = si.step_id
// join recipes as r
// on s.recipe_id = r.recipe_id
// where s.recipe_id = 1
// group by s.step_number
// order by s.step_number
