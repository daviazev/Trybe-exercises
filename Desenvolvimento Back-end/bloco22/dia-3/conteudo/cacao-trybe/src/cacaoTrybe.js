const fs = require('fs').promises;
const { join } = require('path');

const readCacaoTrybeFIle = async () => {
  const path = '/files/cacaoTrybeFile.json';

  try {
    const contentFile = await fs.readFile(join(__dirname, path), 'utf-8');
    return JSON.parse(contentFile);
  } catch (error) {
    return null;
  }
};

const getAllChocolates = async () => {
  cacaoTrybe = await readCacaoTrybeFIle();
  return cacaoTrybe.chocolates;
};

module.exports = { getAllChocolates };
