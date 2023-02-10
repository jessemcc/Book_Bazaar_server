const knex = require("knex")(require("../knexfile"));

// GET SINGLE BOOK ====================================
exports.getSingleBook = (req, res) => {
  knex("books")
    .join("authors", "books.author_id", "=", "authors.id")
    .select("books.*", "authors.first_name", "authors.last_name")
    .where({ "books.id": req.params.bookid })
    .then((data) => {
      res.json(data);
    });
};

// GET ALL BOOKS ====================================
exports.index = (_req, res) => {
  knex
    .select("books.*", "authors.first_name", "authors.last_name")
    .from("books")
    .innerJoin("authors", "authors.id", "=", "books.author_id")
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.status(400).json({
        error: true,
        message: "Server cannot be reached",
        specific: error,
      });
    });
};
