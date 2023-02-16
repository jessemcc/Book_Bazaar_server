const knex = require("knex")(require("../knexfile"));
const fs = require("fs");

// DELETE ALL ITEMS FROM CART ===========================================================
exports.deleteItems = (_req, res) => {
  knex("cart")
    .delete()
    .then(() => {
      res.send("Succesfully deleted all items from cart");
    })
    .catch((error) => {
      res.status(400).json({
        error: true,
        message: "Could not delete cart items",
        specific: error,
      });
    });
};

// DELETE AUTHOR =====================================================
exports.deleteAuthor = (req, res) => {
  const authorId = req.params.authorid;

  knex("authors")
    .where({ id: authorId })
    .first()
    .then((author) => {
      if (!author) {
        return res.status(404).send("Author not found");
      }

      const portraitPath = `public/images/portraits/${author.portrait}`;
      fs.unlink(portraitPath, (error) => {
        if (error) {
          console.error(error);
        }
      });

      return knex("authors")
        .delete()
        .where({ id: authorId })
        .then(() => {
          res.status(204).send("Successfully deleted author");
        });
    })
    .catch((error) => {
      res.status(400).send(`Failed to delete account: ${error}`);
    });
};

// DELETE BOOK FROM AUTHOR ===============================================
exports.deleteBook = (req, res) => {
  const bookId = req.params.bookid;
  const authorId = req.params.authorid;

  knex("books")
    .where({ id: bookId, author_id: authorId })
    .first()
    .then((book) => {
      if (!book) {
        return res.status(404).send("Book not found");
      }

      const coverPath = `public/images/covers/${book.cover}`;
      fs.unlink(coverPath, (error) => {
        if (error) {
          console.error(error);
        }
      });

      return knex("books")
        .delete()
        .where({ id: bookId, author_id: authorId })
        .then(() => {
          res.status(204).send("Successfully deleted Book");
        });
    })
    .catch((error) => {
      res.status(400).send(`Failed to delete Book: ${error}`);
    });
};
