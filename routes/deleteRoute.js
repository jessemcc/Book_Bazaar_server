const express = require("express");
const router = express.Router();
const deleteController = require("../controllers/deleteController");

router.route("/").delete(deleteController.deleteItems);

router.route("/:authorid").delete(deleteController.deleteAuthor);
router.route("/:authorid/:bookid").delete(deleteController.deleteBook);

module.exports = router;
