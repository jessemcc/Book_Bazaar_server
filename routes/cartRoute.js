const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cartController");

router
  .route("/")
  .post(cartController.addToCart)
  .get(cartController.getItems)
  .delete(cartController.deleteItem);

module.exports = router;
