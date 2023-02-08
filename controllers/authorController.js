const knex = require("knex")(require("../knexfile"));

// GET SINGLE AUTHOR ========================================
exports.getSingleAuthor = (req, res) => {
  knex("authors")
    .where({ id: req.params.authorid })
    .then((author) => {
      res.json(author);
    })
    .catch((error) => {
      res.status(404).send("Author not found.");
      console.log(error);
    });
};

// DELETE AUTHOR =====================================================
exports.deleteAuthor = (req, res) => {
  knex("authors")
    .delete()
    .where({ id: req.params.authorid })
    .then(() => {
      res.status(204).send("Successfully deleted author");
    })
    .catch((error) => {
      res.status(400).send(`Failed to delete account: ${error}`);
    });
};

// GET ALL BOOKS FROM ONE AUTHOR =================================
exports.getBooksFromAuthor = (req, res) => {
  knex("books")
    .where({ author_id: req.params.authorid })
    .then((books) => {
      res.json(books);
    })
    .catch((error) => {
      res.status(404).send("No Books found at by this author.");
      console.log(error);
    });
};

// ADD BOOK TO AUTHOR =========================================
exports.addBook = (req, res) => {
  const {
    book_name,
    description,
    language,
    genre,
    image,
    price,
    stock,
    page_numbers,
  } = req.body;

  const author_id = req.params.authorid;

  if (
    !book_name ||
    !description ||
    !language ||
    !genre ||
    !image ||
    !price ||
    !stock ||
    !page_numbers
  ) {
    return res.status(405).json({
      error: true,
      message: "Missing information to upload book",
      specific: error,
    });
  }

  knex("books")
    .insert({
      author_id,
      book_name,
      description,
      language,
      genre,
      image,
      price,
      stock,
      page_numbers,
    })
    .then((book) => {
      const newBookURL = `books/${book}`;
      res.status(201).location(newBookURL).send(newBookURL);
      console.log(newBookURL);
    });
};

// DELETE BOOK FROM AUTHOR ===============================================
exports.deleteBook = (req, res) => {
  knex("authors")
    .delete()
    .where({ id: req.params.bookid })
    .where({ author_id: req.params.authorid })
    .then(() => {
      res.status(204).send("Successfully deleted Book");
    })
    .catch((error) => {
      res.status(400).send(`Failed to delete Book: ${error}`);
    });
};

// EDIT AUTHOR INFO ================================================
exports.editAuthor = (req, res) => {
  const {
    first_name,
    last_name,
    email,
    address,
    city,
    province,
    postal_code,
    password,
    about,
    image,
  } = req.body;

  const updatedAuthor = {
    first_name,
    last_name,
    email,
    address,
    city,
    province,
    postal_code,
    password,
    about,
    image,
  };

  knex("authors")
    .where({ id: req.params.authorid })
    .update(updatedAuthor)
    .then((updatedRow) => {
      res.json("Author update was successful");
    })
    .catch((error) => {
      res.status(400).send(`Error updating Author: ${error}`);
    });
};

// EDIT BOOK INFO ===========================================
exports.editBook = (req, res) => {
  const {
    book_name,
    description,
    language,
    genre,
    image,
    price,
    stock,
    page_numbers,
  } = req.body;

  const updatedBook = {
    book_name,
    description,
    language,
    genre,
    image,
    price,
    stock,
    page_numbers,
  };

  knex("books")
    .where({ id: req.params.bookid })
    .where({ author_id: req.params.authorid })
    .update(updatedBook)
    .then((updatedRow) => {
      res.json(`Book update was successful`);
    })
    .catch((error) => {
      res.status(400).send(`Error updating book: ${error}`);
    });
};

// GET ALL AUTHORS ====================================
// exports.index = (_req, res) => {
//   knex
//     .select("*")
//     .from("authors")
//     .innerJoin("books", "books.author_id", "=", "authors.id")
//     .then((data) => {
//       res.status(200).json(data);
//     })
//     .catch((err) => res.status(400).send(`Error retrieving Warehouses ${err}`));
// };

// exports.index = (_req, res) => {
//   knex
//     .select("*")
//     .from("authors")
//     .join(knex.raw("natural full join books"))
//     .where("books.author_id", "=", "authors.id")
//     .then((data) => {
//       res.status(200).json(data);
//     })
//     .catch((err) => res.status(400).send(`Error retrieving Warehouses ${err}`));
// };

exports.index = (_req, res) => {
  knex
    .select("authors.*", "books.*")
    .from("authors")
    .leftJoin("books", "authors.id", "books.author_id")
    .then((data) => {
      const authors = data.reduce((acc, curr) => {
        const author = curr.first_name + " " + curr.last_name;
        const email = curr.email;
        const address = curr.address;
        const city = curr.city;
        const province = curr.province;
        const postal_code = curr.postal_code;
        const password = curr.password;
        const about = curr.about;
        const portrait = curr.portrait;
        const img_path = curr.img_path;
        if (!acc[author]) {
          acc[author] = {
            author,
            email,
            address,
            city,
            province,
            postal_code,
            password,
            about,
            portrait,
            img_path,
            books: [
              {
                id: curr.id,
                book_name: curr.book_name,
                description: curr.description,
                language: curr.language,
                genre: curr.genre,
                price: curr.price,
                stock: curr.stock,
                page_numbers: curr.page_numbers,
                cover: curr.cover,
                img_path: curr.img_path,
              },
            ],
          };
        } else {
          acc[author].books.push({
            id: curr.id,
            book_name: curr.book_name,
            description: curr.description,
            language: curr.language,
            genre: curr.genre,
            price: curr.price,
            stock: curr.stock,
            page_numbers: curr.page_numbers,
            cover: curr.cover,
            img_path: curr.img_path,
          });
        }
        return acc;
      }, {});
      res.status(200).json(Object.values(authors));
    })
    .catch((err) =>
      res.status(400).send(`Error retrieving authors and books: ${err}`)
    );
};
