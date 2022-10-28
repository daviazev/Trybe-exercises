const express = require('express');

const { readMoviesData } = require('./funcs');

const app = express();

const OK = 200;

app.get('/movies', async (_req, res) => {
  const movies = await readMoviesData();
  res.status(OK).json({ movies });
});

module.exports = app;
