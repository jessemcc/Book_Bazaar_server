const knex = require("knex")(require("../knexfile"));

// ADD BOOK TO CART ==============================================================
exports.addToCart = (req, res) => {
  const {
    book_name,
    author_id,
    description,
    language,
    genre,
    price,
    stock,
    page_numbers,
    cover,
    cover_path,
  } = req.body;

  if (
    !book_name ||
    !author_id ||
    !description ||
    !language ||
    !genre ||
    !price ||
    !stock ||
    !page_numbers ||
    !cover ||
    !cover_path
  ) {
    return res.status(405).json({
      error: true,
      message: "Failed to add to cart",
      specific: error,
    });
  }

  knex("cart")
    .insert({
      book_name,
      author_id,
      description,
      language,
      genre,
      price,
      stock,
      page_numbers,
      cover,
      cover_path,
    })
    .then((item) => {
      res.status(201).send(`${book_name} successfully added to cart`);
    });
};

// GET ITEMS FROM CART ========================================================
exports.getItems = (_req, res) => {
  knex
    .select("cart.*", "authors.first_name", "authors.last_name")
    .from("cart")
    .innerJoin("authors", "authors.id", "=", "cart.author_id")
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

// DELETE ITEMS FROM CART ===========================================================
exports.deleteItems = (req, res) => {
  knex("cart")
    .delete()
    .then(() => {
      res.send("Succesfully deleted all items from cart");
    })
    .catch((error) => {
      res.status(400).json({
        error: true,
        message: "Could not delete cart items",
        specific: error,
      });
    });
};
