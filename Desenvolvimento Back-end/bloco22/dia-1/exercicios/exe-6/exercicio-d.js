const { writeFile } = require('fs').promises;
const path = require('path');
const readSimpsomsData = require('./index');

const newJson = async () => {
  const data = await readSimpsomsData();

  const filt = data.filter((char) => Number(char.id) <= 4);

  await writeFile(
    path.resolve(__dirname, './simpsonFamily.json'),
    JSON.stringify(filt)
  );

  console.log(filt);
};

newJson();
