/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("authors", (table) => {
    table.increments("id").primary().notNullable();
    table.string("name").notNullable();
    table.string("about").notNullable();
    table.string("image");
    table.integer("number_of_books");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("authors");
};
