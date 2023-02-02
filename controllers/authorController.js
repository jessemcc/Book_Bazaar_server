const knex = require("knex")(require("../knexfile"));

// GET SINGLE AUTHOR ========================================
exports.getSingleAuthor = (req, res) => {
  knex("authors")
    .where({ id: req.params.authorid })
    .then((author) => {
      res.json(author);
    })
    .catch((error) => {
      res.status(404).send("Author not found.");
      console.log(error);
    });
};

// ADD BOOK =========================================
exports.addBook = (req, res) => {
  const {
    book_name,
    description,
    language,
    genre,
    image,
    price,
    stock,
    page_numbers,
  } = req.body;

  const author_id = req.params.authorid;

  if (
    !author_id ||
    !book_name ||
    !description ||
    !language ||
    !genre ||
    !image ||
    !price ||
    !stock ||
    !page_numbers
  ) {
    return res.status(405).json({
      error: true,
      message: "Missing information to upload book",
      specific: error,
    });
  }

  knex("books")
    .insert({
      id,
      author_id,
      book_name,
      description,
      language,
      genre,
      image,
      price,
      stock,
      page_numbers,
    })
    .then((book) => {
      const newBookURL = `books/${book}`;
      res.status(201).location(newBookURL).send(newBookURL);
      console.log(newBookURL);
    });
};

// GET ALL AUTHORS ====================================
exports.index = (_req, res) => {
  knex("authors")
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => res.status(400).send(`Error retrieving Warehouses ${err}`));
};
