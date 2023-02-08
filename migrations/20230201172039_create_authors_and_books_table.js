exports.up = function (knex) {
  return knex.schema
    .createTable("authors", (table) => {
      table.increments("id").primary();
      table.string("first_name").notNullable();
      table.string("last_name").notNullable();
      table.string("email").notNullable();
      table.string("address").notNullable();
      table.string("city").notNullable();
      table.string("province").notNullable();
      table.string("postal_code").notNullable();
      table.string("password").notNullable();
      table.text("about").notNullable();
      table.string("portrait").notNullable();
      table.string("portrait_path").notNullable();
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
      table.decimal("price").notNullable();
      table.integer("stock").notNullable();
      table.integer("page_numbers").notNullable();
      table.string("cover").notNullable();
      table.string("cover_path").notNullable();
      table.timestamps(true, true);
    });
};

exports.down = function (knex) {
  return knex.schema.dropTable("books").dropTable("authors");
};
