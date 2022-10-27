const { writeFile } = require('fs').promises;
const path = require('path');
const { readSimpsomsFamily } = require('./index');

const newJson = async () => {
  const data = await readSimpsomsFamily();

  const addNelson = JSON.stringify([
    ...data,
    { id: '5', name: 'Nelson Muntz' },
  ]);

  await writeFile(path.resolve(__dirname, './simpsonFamily.json'), addNelson);

  console.log(await readSimpsomsFamily());
};

newJson();
