const bookService = require('../service/book.service');

const getAll = async (req, res) => {
  const books = await bookService.getAll();

  return res.status(200).json(books);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const book = await bookService.getById(id);

  if (!book) return res.status(404).json({ message: 'book not found' });

  return res.status(200).json(book);
};

const createBook = async (req, res) => {
  const { title, author, pageQuantity } = req.body;

  const newBook = await bookService.createBook(title, author, pageQuantity);

  console.log(newBook);

  return res.status(201).json(newBook);
};

const updateBook = async (req, res) => {
  const { id } = req.params;
  const { title, author, pageQuantity } = req.body;

  const updatedBook = await bookService.updateBook(
    id,
    title,
    author,
    pageQuantity
  );

  if (!updatedBook) return res.status(404).json({ message: 'book not found' });

  return res.status(200).json({ message: 'book updated' });
};

const deleteBook = async (req, res) => {
  const { id } = req.params;

  try {
    bookService.deleteBook(id);
    return res.status(200).json({ message: 'xablou' });
  } catch (error) {
    return res.status(500).json({ message: 'deu ruim ai' });
  }
};

module.exports = {
  getAll,
  getById,
  createBook,
  updateBook,
  deleteBook,
};
