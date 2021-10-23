exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("recipes")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("recipes").insert([
        { recipe_name: "Quesadillas" },
        { recipe_name: "Macaroni and Cheese" },
        { recipe_name: "Ramen Noodles" },
      ]);
    });
};
