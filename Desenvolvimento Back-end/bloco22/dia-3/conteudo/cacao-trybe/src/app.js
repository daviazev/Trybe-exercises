const express = require('express');

const app = express();
const cacaoTrybe = require('./cacaoTrybe');

const OK = 200;

app.get('/chocolates', async (_req, res) => {
  const chocolates = await cacaoTrybe.getAllChocolates();
  res.status(OK).json({ chocolates });
});

// EXERCÍCIO

app.get('/chocolates/total', async (_req, res) => {
  const chocolates = await cacaoTrybe.getAllChocolates();
  res.status(OK).json({ total: chocolates.length });
});

// EXERCÍCIO - O CÓDIGO FICOU AQUI PORQUE ESTAVA DANDO CONFLITO NAS ROTAS!

app.get('/chocolates/:id', async (req, res) => {
  const { id } = req.params;
  // Usamos o Number para converter o id em um inteiro
  const chocolate = await cacaoTrybe.getChocolateById(Number(id));
  res.status(OK).json({ chocolate });
});

app.get('/chocolates/brand/:brandId', async (req, res) => {
  const { brandId } = req.params;
  const chocolates = await cacaoTrybe.getChocolatesByBrand(Number(brandId));
  res.status(OK).json({ chocolates });
});

module.exports = app;
