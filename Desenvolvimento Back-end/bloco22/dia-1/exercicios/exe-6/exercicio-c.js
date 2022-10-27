// o exercício pedia pra retirar os personagens com ids 6 e 10, mas eu fiz de outro jeito
const fs = require('fs').promises;
const path = require('path');
const readSimpsomsData = require('./index');

const SIMPSOMS_DATA_PATH = './simpsons.json';

const removeCharacterById = async (id) => {
  const json = await readSimpsomsData();

  const newArray = JSON.stringify(
    json.filter((char) => Number(char.id) !== id)
  );

  await fs.writeFile(path.resolve(__dirname, SIMPSOMS_DATA_PATH), newArray);

  console.log(await readSimpsomsData());
};

removeCharacterById(10);

// [
//   { id: '1', name: 'Homer Simpson' },
//   { id: '2', name: 'Marge Simpson' },
//   { id: '3', name: 'Bart Simpson' },
//   { id: '4', name: 'Lisa Simpson' },
//   { id: '5', name: 'Maggie Simpson' },
//   { id: '6', name: 'Ned Flanders' },
//   { id: '7', name: 'Montgomery Burns' },
//   { id: '8', name: 'Nelson Muntz' },
//   { id: '9', name: 'Krusty' },
// ];
