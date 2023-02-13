const express = require("express");
const router = express.Router();
const bookController = require("../controllers/bookController");

router.route("/").get(bookController.index);

router.route("/:bookid").get(bookController.getSingleBook);

module.exports = router;
