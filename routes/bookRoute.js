const express = require("express");
const router = express.Router();
const bookController = require("../controllers/bookController");
const cartController = require("../controllers/cartController");

router.route("/").get(bookController.index);

router
  .route("/:bookid")
  .get(bookController.getSingleBook)
  .post(cartController.addToCart);

module.exports = router;
