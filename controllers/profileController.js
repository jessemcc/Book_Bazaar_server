const knex = require("knex")(require("../knexfile"));
const jwt = require("jsonwebtoken");

const checkAuth = (req, res, next) => {
  const { authorization } = req.headers;
  const token = authorization.split(" ")[1];
  jwt.verify(token, "happy123", (error, decoded) => {
    if (error) {
      res.status(401).json("Not authorized");
    } else {
      req.payload = decoded;
    }
  });
};

exports.profile = async (req, res) => {
  await knex.get(checkAuth, (req, res) => {
    res.json(req.payload);
  });
};
