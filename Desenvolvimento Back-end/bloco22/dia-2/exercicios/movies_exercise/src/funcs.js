const fs = require('fs').promises;
const path = require('path');

const MOVIE_DATA_PATH = './data/movies.json';

const avengers = {
  movie: 'the simpsoms',
  price: 99,
};

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

const addMovie = async (obj) => {
  const data = await readMoviesData();
  const lastId = data[data.length - 1].id;

  const allMovies = JSON.stringify([...data, { id: lastId + 1, ...obj }]);

  await fs.writeFile(path.resolve(__dirname, MOVIE_DATA_PATH), allMovies);
};

const updateMovie = async (id, obj) => {
  const data = await readMoviesData();

  const updating = data.map((movie) => {
    if (movie.id === Number(id)) return { id: movie.id, ...obj };

    return movie;
  });

  const updated = JSON.stringify(updating);
  await fs.writeFile(path.resolve(__dirname, MOVIE_DATA_PATH), updated);
};

// addMovie({
//   movie: 'Vingadores',
//   price: 6,
// });

module.exports = { readMoviesData, fetchMovieById, addMovie, updateMovie };
