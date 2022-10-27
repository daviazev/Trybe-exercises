const path = require('path');
const { resolve } = require('path');

const fs = require('fs').promises;

const SIMPSOMS_DATA_PATH = './simpsons.json';

const readSimpsomsData = async () => {
  try {
    const theSimpsoms = await fs.readFile(
      path.resolve(__dirname, SIMPSOMS_DATA_PATH)
    );
    return JSON.parse(theSimpsoms);
  } catch (error) {
    console.log(`Erro na leitura do arquivo: ${error}`);
  }
};

module.exports = readSimpsomsData;
