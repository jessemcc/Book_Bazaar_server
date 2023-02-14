const knex = require("knex")(require("../knexfile"));
const jwt = require("jsonwebtoken");

// LOGIN ACCOUNT =====================================
exports.postToken = async (req, res) => {
  const { email, password } = req.body;

  const author = await knex("authors").where({ email }).first();
  if (author && author.password === password) {
    const authorName = `${author.first_name} ${author.last_name}`;
    const token = jwt.sign(
      {
        id: author.id,
        name: authorName,
      },
      "happy123"
    );
    res.json({ token });
  } else {
    res.status(401).json({
      error: true,
      message: "Failed to login",
    });
  }
};
