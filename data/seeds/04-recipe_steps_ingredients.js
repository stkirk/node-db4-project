exports.seed = function (knex) {
  return knex("recipe_steps_ingredients")
    .truncate()
    .then(function () {
      return knex("recipe_steps_ingredients").insert([
        { recipe_id: 1, step_id: 1 },
        {
          recipe_id: 1,
          step_id: 2,
          ingredient_id: 1,
          ingredient_quantity: "1",
        },
        {
          recipe_id: 1,
          step_id: 2,
          ingredient_id: 2,
          ingredient_quantity: "3 oz",
        },
        {
          recipe_id: 1,
          step_id: 2,
          ingredient_id: 10,
          ingredient_quantity: "1",
        },
        { recipe_id: 1, step_id: 3 },
        { recipe_id: 1, step_id: 4 },

        {
          recipe_id: 2,
          step_id: 5,
          ingredient_id: 9,
          ingredient_quantity: "6 cups",
        },
        {
          recipe_id: 2,
          step_id: 6,
          ingredient_id: 3,
          ingredient_quantity: "6 oz",
        },
        {
          recipe_id: 2,
          step_id: 7,
          ingredient_id: 6,
          ingredient_quantity: "2 tbsp",
        },
        {
          recipe_id: 2,
          step_id: 8,
          ingredient_id: 5,
          ingredient_quantity: "1/4 cup",
        },
        {
          recipe_id: 2,
          step_id: 8,
          ingredient_id: 4,
          ingredient_quantity: "4 oz",
        },
        { recipe_id: 2, step_id: 9 },

        {
          recipe_id: 3,
          step_id: 10,
          ingredient_id: 8,
          ingredient_quantity: "1",
        },
        { recipe_id: 3, step_id: 11 },
      ]);
    });
};
