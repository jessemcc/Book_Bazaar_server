const express = require("express");
const router = express.Router();
const authorController = require("../controllers/authorController");

router.route("/").get(authorController.index).post(authorController.addAuthor);

router
  .route("/:authorid")
  .get(authorController.getSingleAuthor)
  .post(authorController.addBook)
  .delete(authorController.deleteAuthor);

router.route("/:authorid/books").get(authorController.getBooksFromAuthor);

router.route("/:authorid/:bookid").delete(authorController.deleteBook);

module.exports = router;
