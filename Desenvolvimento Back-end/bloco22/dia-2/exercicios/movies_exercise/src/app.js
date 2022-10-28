const express = require('express');

const { readMoviesData, fetchMovieById } = require('./funcs');

const app = express();

const OK = 200;

app.get('/movies/:id', async (req, res) => {
  const { id } = req.params;
  const movie = await fetchMovieById(id);
  res.status(OK).json({ movie });
});

app.get('/movies', async (_req, res) => {
  const movies = await readMoviesData();
  res.status(OK).json({ movies });
});

module.exports = app;
