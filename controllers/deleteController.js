const knex = require("knex")(require("../knexfile"));

// DELETE ALL ITEMS FROM CART ===========================================================
exports.deleteItems = (_req, res) => {
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
