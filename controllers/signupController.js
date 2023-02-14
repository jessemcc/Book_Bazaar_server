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

  const portrait = req.files.portrait;

  if (
    !firstName ||
    !lastName ||
    !email ||
    !address ||
    !city ||
    !province ||
    !postal ||
    !password ||
    !about ||
    !portrait
  ) {
    return res.status(405).json({
      error: true,
      message: "Missing information to add new Author",
    });
  }

  const uploadPath = `public/images/portraits/${portrait.name}`;
  const portrait_path = `/images/portraits/${portrait.name}`;
  portrait.mv(uploadPath, (error) => {
    if (error) {
      return console.error(error);
    }
  });

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
      portrait: portrait.name,
      portrait_path,
    })
    .then(([id]) => {
      if (!id) {
        return res.status(500).json({
          error: true,
          message: "Failed to add new Author",
        });
      }

      const newAuthorURL = `authors/${id}`;
      res.status(200).location(newAuthorURL).send(newAuthorURL);
      console.log(newAuthorURL);
    })
    .catch((error) => {
      return res.status(500).json({
        error: true,
        message: "Failed to add new Author",
        specific: error,
      });
    });
};
