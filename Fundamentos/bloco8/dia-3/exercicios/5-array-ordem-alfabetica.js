const books = require("./books");

const fantasyOrScienceFictionAuthors = (array) => {
  return array
    .filter(
      (book) => book.genre === "Fantasia" || book.genre === "Ficção Científica"
    )
    .map((book) => book.author.name)
    .sort();
};

console.log(fantasyOrScienceFictionAuthors(books));
