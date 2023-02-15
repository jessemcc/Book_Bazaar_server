const express = require("express");
const router = express.Router();
const authorController = require("../controllers/authorController");

router.route("/").get(authorController.index);

router.route("/books").get(authorController.getAuthorsWithBooks);

router
  .route("/:authorid")
  .get(authorController.getSingleAuthor)
  .post(authorController.addBook)
  .patch(authorController.editAuthor);

router.route("/:authorid/books").get(authorController.getBooksFromAuthor);

router.route("/:authorid/:bookid").patch(authorController.editBook);

module.exports = router;
