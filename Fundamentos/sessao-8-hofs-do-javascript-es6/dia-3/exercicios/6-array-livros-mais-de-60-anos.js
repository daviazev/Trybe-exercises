const books = require("./books");

const oldBooks = (array) =>
  array.filter((book) => 2022 - book.releaseYear > 60).map((book) => book.name);

console.log(oldBooks(books));
