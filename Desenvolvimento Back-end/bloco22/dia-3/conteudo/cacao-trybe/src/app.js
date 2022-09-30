const express = require('express');

const app = express();
const cacaoTrybe = require('./cacaoTrybe');

const OK = 200;

app.get('/chocolates', async (_req, res) => {
  const chocolates = await cacaoTrybe.getAllChocolates();
  res.status(OK).json({ chocolates });
});

app.get('/chocolates/:id', async (req, res) => {
  const { id } = req.params;

  const response = await getChocolateById(Number(id));
  res.status(OK).json({ response });
});

app.get('/chocolates/brand/:brandId', async (req, res) => {
  const { brandId } = req.params;

  const response = await getBrandById(Number(brandId));
  res.status(OK).json({ response });
});

module.exports = app;
