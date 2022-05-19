// 🚀 5- Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const names = [
  "Aanemarie",
  "Adervandes",
  "Akifusa",
  "Abegildo",
  "Adicellia",
  "Aladonata",
  "Abeladerco",
  "Adieidy",
  "Alarucha",
];

const containsA = (array) => {
  return array
    .reduce((acc, curr) => acc + curr)
    .split("")
    .filter((letter) => letter === "a" || letter === "A").length;
};

console.log(containsA(names));
