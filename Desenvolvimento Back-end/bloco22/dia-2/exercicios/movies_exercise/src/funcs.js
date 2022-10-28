const fs = require('fs').promises;
const path = require('path');

const MOVIE_DATA_PATH = './data/movies.json';

const readMoviesData = async () => {
  try {
    const movies = await fs.readFile(path.resolve(__dirname, MOVIE_DATA_PATH));
    const parseMovies = JSON.parse(movies);
    return parseMovies;
  } catch (error) {
    console.log('erro');
  }
};

const fetchMovieById = async (id) => {
  const allMovies = await readMoviesData();
  const findMovie = allMovies.find((movie) => movie.id === Number(id));
  return findMovie;
};

module.exports = { readMoviesData, fetchMovieById };
