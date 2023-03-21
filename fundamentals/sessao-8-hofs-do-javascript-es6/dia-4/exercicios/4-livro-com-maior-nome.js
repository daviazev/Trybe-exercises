const books = require("./books");

// 🚀 4- Encontre o livro com o maior nome.

const longestNamedBook = (array) => {
  return array.reduce((acc, curr) => {
    return acc.name.length > curr.name.length ? acc : curr;
  });
};

console.log(longestNamedBook(books));

// const expectedResult = {
//   id: 1,
//   name: 'As Crônicas de Gelo e Fogo',
//   genre: 'Fantasia',
//   author: {
//     name: 'George R. R. Martin',
//     birthYear: 1948,
//   },
//   releaseYear: 1991,
// };
