const fs = require('fs').promises;
const { join } = require('path');

const readCacaoTrybeFile = async () => {
  const path = '/files/cacaoTrybeFile.json';

  try {
    const contentFile = await fs.readFile(join(__dirname, path), 'utf-8');
    return JSON.parse(contentFile);
  } catch (error) {
    return null;
  }
};

const getAllChocolates = async () => {
  cacaoTrybe = await readCacaoTrybeFile();
  return cacaoTrybe.chocolates;
};

const getChocolateById = async (id) => {
  const { chocolates } = await readCacaoTrybeFile();
  return chocolates.filter((obj) => obj.id === id);
};

const getChocolatesByBrand = async (brandId) => {
  const { chocolates } = await readCacaoTrybeFile();
  return chocolates.filter((chocolate) => chocolate.brandId === brandId);
};

module.exports = { getAllChocolates, getChocolateById, getChocolatesByBrand };
