const books = require("./books");

const oldBooksOrdered = (array) =>
  array
    .filter((book) => 2022 - book.releaseYear > 60)
    .sort((obj1, obj2) => obj1.releaseYear - obj2.releaseYear);

console.log(oldBooksOrdered(books));
