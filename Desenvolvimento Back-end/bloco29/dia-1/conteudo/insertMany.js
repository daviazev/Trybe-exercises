// como inserir muitos dados usando mongoDB

db.carros.insertMany([
  { nome: 'Gol', preco: 10000 },
  { nome: 'Fusca', preco: 10000 },
  { nome: 'Ferrari Enzo', preco: 3000000 },
  { nome: 'Camaro', preco: 250000 },
  { nome: 'Ford Fiest', preco: 40000 },
]);

db.carros.insertMany(
  [
    { _id: 2, nome: 'Geep Regegado', preco: 80000 }, // será adicionado
    { _id: 2, nome: 'Mercedes A200', preco: 100000 }, // não será adicionado
    { _id: 2, nome: 'Mercedes C200', preco: 100000 }, // não será adicionado
    { _id: 3, nome: 'Mercedes xablau', preco: 100000 }, // será adicionado
    { _id: 3, nome: 'Onix', preco: 50000 }, // não será adicionado
  ],
  { ordered: false } // mas ele continua inserindo dados, com exceção dos que tem id igual
);
