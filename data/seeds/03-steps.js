exports.seed = function (knex) {
  return knex("steps")
    .truncate()
    .then(function () {
      return knex("steps").insert([
        {
          instruction:
            "add oil to skillet, preheat over medium-high heat until oil is shimmering",
          step_number: 1,
          recipe_id: 1,
        },
        {
          instruction:
            "lay tortilla on a flat surface, arrange monterey jack cheese and sliced green onion on one half of the tortilla and fold the other half over",
          step_number: 2,
          recipe_id: 1,
        },
        {
          instruction:
            "place folded tortilla in the preheated skillet swirling the pan until the tortilla is browned on one side, flip the tortilla and repeat",
          step_number: 3,
          recipe_id: 1,
        },
        {
          instruction:
            "cut the quesadilla into slices, season with salt to taste, plate and enjoy!",
          step_number: 4,
          recipe_id: 1,
        },
        //recipe 2
        {
          instruction:
            "boil two cups of water over high heat, season with salt",
          step_number: 1,
          recipe_id: 2,
        },
        {
          instruction:
            "once water is at a boil, add elbow macaroni, boil according the package directions",
          step_number: 2,
          recipe_id: 2,
        },
        {
          instruction:
            "drain the water and add the noodles back to the hot pan, add butter, mixing until melted",
          step_number: 3,
          recipe_id: 2,
        },
        {
          instruction:
            "mix in milk and cheese packet, stirring until a smooth cheese sauce forms",
          step_number: 4,
          recipe_id: 2,
        },
        {
          instruction:
            "serve hot in your favorite bowl. optional: a little fresh cracked black pepper never hurt anyone",
          step_number: 5,
          recipe_id: 2,
        },
        //recipe 3
        {
          instruction:
            "open ramen packet, boil noodles in 2 cups of water for 3 minutes",
          step_number: 1,
          recipe_id: 3,
        },
        {
          instruction: "add seasoning packet and serve",
          step_number: 2,
          recipe_id: 3,
        },
      ]);
    });
};
