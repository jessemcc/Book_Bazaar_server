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

// GET LIST OF ALL AUTHORS ================================================================
exports.index = (_req, res) => {
  knex("authors")
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.status(400).json({
        error: true,
        message: "Server cannot be reached",
        specific: error,
      });
    });
};

// GET REQUEST FOR ALL AUTHORS WITH LIST OF BOOKS BY THAT AUTHOR ==============================
exports.getAuthorsWithBooks = (_req, res) => {
  knex
    .select("authors.*", "books.*")
    .from("authors")
    .join("books", "authors.id", "books.author_id")
    .then((rows) => {
      const authors = rows.reduce((acc, row) => {
        const author = acc.find((author) => author.id === row.author_id);
        if (!author) {
          acc.push({
            id: row.author_id,
            first_name: row.first_name,
            last_name: row.last_name,
            email: row.email,
            address: row.address,
            city: row.city,
            province: row.province,
            postal_code: row.postal_code,
            password: row.password,
            about: row.about,
            portrait: row.portrait,
            portrait_path: row.portrait_path,
            books: [
              {
                id: row.id,
                book_name: row.book_name,
                description: row.description,
                language: row.language,
                genre: row.genre,
                price: row.price,
                stock: row.stock,
                page_numbers: row.page_numbers,
                cover: row.cover,
                cover_path: row.cover_path,
              },
            ],
          });
        } else {
          author.books.push({
            id: row.id,
            book_name: row.book_name,
            description: row.description,
            language: row.language,
            genre: row.genre,
            price: row.price,
            stock: row.stock,
            page_numbers: row.page_numbers,
            cover: row.cover,
            cover_path: row.cover_path,
          });
        }
        return acc;
      }, []);
      res.send(authors);
    })
    .catch((err) =>
      res.status(400).send(`Error retrieving authors and books: ${err}`)
    );
};
