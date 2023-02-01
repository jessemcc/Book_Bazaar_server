/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("books", (table) => {
    table.increments("id").primary.notNullable();
    table
      .increments("author_id")
      .references("authors.id")
      .onUpdate("CASCADE")
      .onDelete("CASCADE")
      .notNullable();
    table.string("book_name").notNullable();
    table.string("description").notNullable();
    table.string("language").notNullable();
    table.string("genre").notNullable();
    table.string("image").notNullable();
    table.integer("price").notNullable();
    table.integer("stock").notNullable();
    table.integer("page_numbers").notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("books");
};
