exports.seed = function (knex) {
  return knex("steps_ingredients")
    .truncate()
    .then(function () {
      return knex("steps_ingredients").insert([
        {
          step_id: 2,
          ingredient_id: 1,
          ingredient_quantity: "1",
        },
        {
          step_id: 2,
          ingredient_id: 2,
          ingredient_quantity: "3 oz",
        },
        {
          step_id: 2,
          ingredient_id: 10,
          ingredient_quantity: "1",
        },
        {
          step_id: 5,
          ingredient_id: 9,
          ingredient_quantity: "6 cups",
        },
        {
          step_id: 6,
          ingredient_id: 3,
          ingredient_quantity: "6 oz",
        },
        {
          step_id: 7,
          ingredient_id: 6,
          ingredient_quantity: "2 tbsp",
        },
        {
          step_id: 8,
          ingredient_id: 5,
          ingredient_quantity: "1/4 cup",
        },
        {
          step_id: 8,
          ingredient_id: 4,
          ingredient_quantity: "4 oz",
        },
        {
          step_id: 10,
          ingredient_id: 8,
          ingredient_quantity: "1",
        },
      ]);
    });
};
