const books = require("./books");

const averageAge = (array) =>
  array
    .map((book) => book.releaseYear - book.author.birthYear) // [ 43, 62, 31, 45, 39, 38 ]
    .reduce((acc, curr) => acc + curr) / array.length; // 258 / 6 = 43

console.log(averageAge(books));
