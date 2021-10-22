exports.up = function (knex) {
  return knex.schema
    .createTable("recipes", (tbl) => {
      tbl.increments("recipe_id");
      tbl.string("recipe_name", 128).notNullable().unique();
    })
    .createTable("steps", (tbl) => {
      tbl.increments("step_id");
      tbl.string("instructions", 1028).notNullable();
      tbl.integer("step_order").notNullable();
    })
    .createTable("ingredients", (tbl) => {
      tbl.increments("ingredient_id");
      tbl.string("ingredient_name", 256).notNullable().unique();
    })
    .createTable("recipe_steps_ingredients", (tbl) => {
      tbl.increments("recipe_step_ingredient_id");
      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("recipe_id")
        .inTable("recipes")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      tbl
        .integer("step_id")
        .unsigned()
        .notNullable()
        .references("step_id")
        .inTable("steps")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      tbl
        .integer("ingredient_id")
        .unsigned()
        .references("ingredient_id")
        .inTable("ingredients")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      tbl.string("ingredient_quantity", 64);
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("recipe_steps_ingredients")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("steps")
    .dropTableIfExists("recipes");
};
