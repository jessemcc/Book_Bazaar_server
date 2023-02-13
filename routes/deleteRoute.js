const express = require("express");
const router = express.Router();
const deleteController = require("../controllers/deleteController");

router.route("/").delete(deleteController.deleteItems);

module.exports = router;
