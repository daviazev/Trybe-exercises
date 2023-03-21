// 🚀 6 - Faça uma função que retorne true, se algum livro foi lançado na década de 80, e false, caso contrário.

const books = require("./books");

const someBookWasReleaseOnThe80s = (array) => {
  return array.some(
    (element) => element.releaseYear >= 1980 && element.releaseYear <= 1989
  );
};

console.log(someBookWasReleaseOnThe80s(books));
