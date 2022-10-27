const readSimpsomsData = require('./index');

const simpsoms = async () => {
  const data = await readSimpsomsData();
  console.log(data);
};

simpsoms();
