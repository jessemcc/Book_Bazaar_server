const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cartController");

router
  .route("/")
  .get(cartController.getItems)
  .delete(cartController.deleteItems);

module.exports = router;
