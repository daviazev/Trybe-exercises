const books = require("./books");

const reduceNames = (acc, curr) =>
  acc === curr.author.name ? `${acc}, ` : `${acc} ${curr.author.name},`;

const result = books.reduce(reduceNames, "George R. R. Martin");

console.log(result);

console.log(
  "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft."
);
