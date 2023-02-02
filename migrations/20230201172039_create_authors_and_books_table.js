exports.up = function (knex) {
  return knex.schema
    .createTable("authors", (table) => {
      table.increments("id").primary();
      table.string("name").notNullable();
      table.text("about").notNullable();
      table.string("image");
      table.integer("number_of_books").notNullable();
      table.timestamps(true, true);
    })
    .createTable("books", (table) => {
      table.increments("id").primary();
      table
        .integer("author_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("authors")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.string("book_name").notNullable();
      table.text("description").notNullable();
      table.string("language").notNullable();
      table.string("genre").notNullable();
      table.string("image").notNullable();
      table.decimal("price").notNullable();
      table.integer("stock").notNullable();
      table.integer("page_numbers").notNullable();
      table.timestamps(true, true);
    });
};

exports.down = function (knex) {
  return knex.schema.dropTable("books").dropTable("authors");
};