const knex = require("knex")(require("../knexfile"));

// GET SINGLE BOOK ====================================
exports.getSingleBook = (req, res) => {
  knex("books")
    .where({ id: req.params.bookid })
    .then((data) => {
      res.json(data);
    });
};

// GET ALL BOOKS ====================================
exports.index = (_req, res) => {
  knex("books")
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
