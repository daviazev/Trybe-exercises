const books = require("./books");

const everyoneWasBornOnSecXX = (array) => {
  return array.every((element) => element.author.birthYear >= 1901);
};

console.log(everyoneWasBornOnSecXX(books));
