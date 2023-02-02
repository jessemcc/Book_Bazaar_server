const express = require("express");
const router = express.Router();
const authorController = require("../controllers/authorController");

router.route("/").get(authorController.index);

router
  .route("/:authorid")
  .get(authorController.getSingleAuthor)
  .post(authorController.addBook);

module.exports = router;
