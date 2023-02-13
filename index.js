const express = require("express");
const app = express();
const cors = require("cors");
const fileUpload = require("express-fileupload");
require("dotenv").config();
const PORT = process.env.PORT || 8080;
const bookRoute = require("./routes/bookRoute");
const authorRoute = require("./routes/authorRoute");
const signupRoute = require("./routes/signupRoute");
const cartRoute = require("./routes/cartRoute");
const deleteRoute = require("./routes/deleteRoute");
const loginRoute = require("./routes/loginRoute");
const profileRoute = require("./routes/profileRoute");

app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.use(fileUpload());

app.use("/authors", authorRoute);
app.use("/books", bookRoute);
app.use("/signup", signupRoute);
app.use("/login", loginRoute);
app.use("/cart", cartRoute);
app.use("/delete", deleteRoute);
app.use("/profile", profileRoute);

app.listen(PORT, () => {
  console.log("Server is running on port: ", PORT);
});
