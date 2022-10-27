const readSimpsomsData = require('./index');

const findSimpsomById = async (id) => {
  const data = await readSimpsomsData();

  const findSimpsom = data.find((cha) => Number(cha.id) === id);

  console.log(findSimpsom);

  if (!findSimpsom) throw new Error('id não encontrado :(');
};

findSimpsomById(10); // { id: '10', name: 'Milhouse Van Houten' }
findSimpsomById(100); // id não encontrado :(
