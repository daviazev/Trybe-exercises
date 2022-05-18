const books = require("./books");

// 🚀 3 - Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.

// Dica: use a função filter;

const fantasyOrScienceFiction = (array) =>
  array.filter(
    (book) => book.genre === "Fantasia" || book.genre === "Ficção Científica"
  );

console.log(fantasyOrScienceFiction(books));
