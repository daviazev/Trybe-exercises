// 1 - Dada uma matriz, transforme em um array.

const arrays = [["1", "2", "3"], [true], [4, 5, 6]];

const flatten = (array) =>
  array.reduce((acc, element) => acc.concat(element), []);

console.log(flatten(arrays));
