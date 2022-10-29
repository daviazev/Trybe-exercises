const express = require('express');

const {
  readMoviesData,
  fetchMovieById,
  addMovie,
  updateMovie,
  deleteMovie,
} = require('./funcs');

const app = express();
app.use(express.json());

const OK = 200;
const CREATED = 201;

app.get('/movies/:id', async (req, res) => {
  const { id } = req.params;
  const movie = await fetchMovieById(id);
  res.status(OK).json({ movie });
});

app.get('/movies', async (_req, res) => {
  const movies = await readMoviesData();
  res.status(OK).json({ movies });
});

app.post('/movies', async (req, res) => {
  const { movie, price } = req.body;
  try {
    await addMovie({ movie, price });
    res.status(CREATED).json({ movie, price });
  } catch (error) {
    console.log('erro');
  }
});

app.put('/movies/:id', async (req, res) => {
  const { id } = req.params;
  const { movie, price } = req.body;

  try {
    await updateMovie(id, { movie, price });
    res.status(OK).json({ movie, price });
  } catch (error) {
    res.status(400).json({ message: 'deu ruim' });
  }
});

app.delete('/movies/:id', async (req, res) => {
  const { id } = req.params;
  const removedMovie = await deleteMovie(id);
  res.status(200).json(removedMovie);
});

module.exports = app;
