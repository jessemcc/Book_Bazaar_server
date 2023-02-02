const express = require("express");
const knex = require("knex")(require("./knexfile"));
const app = express();
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT || 8080;
const bookRoute = require("./routes/bookRoute");
const authorRoute = require("./routes/authorRoute");

app.use(cors());
app.use(express.json());

app.use("/authors", authorRoute);
app.use("/books", bookRoute);

app.listen(PORT, () => {
  console.log("Server is running on port: ", PORT);
});
