exports.seed = function (knex) {
  return knex("ingredients")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("ingredients").insert([
        { ingredient_name: "tortilla" },
        { ingredient_name: "monterey jack cheese" },
        { ingredient_name: "elbow noodles" },
        { ingredient_name: "cheddar cheese" },
        { ingredient_name: "milk" },
        { ingredient_name: "butter" },
        { ingredient_name: "flour" },
        { ingredient_name: "Maruchan Ramen Packet" },
        { ingredient_name: "water" },
        { ingredient_name: "green onion" },
        { ingredient_name: "chicken" },
        { ingredient_name: "red bell pepper" },
      ]);
    });
};
