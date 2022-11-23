const { Book } = require('../models');

const getAll = async () => {
  const books = await Book.findAll();

  return books;
};

const getById = async (bookId) => {
  const book = await Book.findByPk(bookId);

  return book;
};

const createBook = async (title, author, pageQuantity) => {
  const newBook = await Book.create({ title, author, pageQuantity });

  return newBook;
};

const updateBook = async (id, title, author, pageQuantity) => {
  const [updatedBook] = await Book.update(
    { title, author, pageQuantity },
    { where: { id } }
  );

  return updatedBook;
};

// const deleteUser = async (id) => {
//   const user = await User.destroy({ where: { id } });

//   console.log(user); // confira o que é retornado quando o user com o id é ou não encontrado;
//   return user;
// };

const deleteBook = async (id) => {
  const book = await Book.destroy({ where: { id } });

  console.log('>>>>>>>>>', book);

  return book;
};

module.exports = {
  getAll,
  getById,
  createBook,
  updateBook,
  deleteBook,
};
