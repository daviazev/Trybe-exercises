const { writeFile } = require('fs').promises;
const path = require('path');
const readSimpsomsData = require('./index');

const newJson = async () => {
  const data = await readSimpsomsData();

  const filt = data.filter((char) => Number(char.id) <= 4);

  const addNelson = [...filt];

  await writeFile(path.resolve(__dirname, './simpsonFamily.json'));

  console.log(filt);
};

newJson();
