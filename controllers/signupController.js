const knex = require("knex")(require("../knexfile"));

// ADD AUTHOR ========================================
exports.addAuthor = (req, res) => {
  const {
    firstName,
    lastName,
    email,
    address,
    city,
    province,
    postal,
    password,
    about,
  } = req.body;

  console.log(req.files.portrait);

  const { name, data } = portrait;

  console.log(name, data);

  if (
    !firstName ||
    !lastName ||
    !email ||
    !address ||
    !city ||
    !province ||
    !postal ||
    !password ||
    !about
  ) {
    return res.status(405).json({
      error: true,
      message: "Missing information to add new Author",
      specific: error,
    });
  }

  if (err) {
    return console.error(err);
  } else {
    knex("authors")
      .insert({
        first_name: firstName,
        last_name: lastName,
        email,
        address,
        city,
        province,
        postal_code: postal,
        password,
        about,
      })
      .then((author) => {
        const newAuthorURL = `authors/${author}`;
        res.status(200).location(newAuthorURL).send(newAuthorURL);
        console.log(newAuthorURL);
      });
    knex("author_portrait").insert({
      name,
      image: data,
    });
  }
};
