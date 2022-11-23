const express = require('express');

const booksController = require('./controller/books.controller');

const app = express();

app.use(express.json());

// esse aqui eu fiz com a ajuda do amigo gabarito hehe
app.get('/books', booksController.getAll);

// esse eu fiz sozinho e usei o gabarito para comparar - tava bem parecido :D
app.get('/books/:id', booksController.getById);

// fiz totalmente sozinho aaaaaaa - to feliz
app.post('/books', booksController.createBook);

app.put('/books/:id', booksController.updateBook);

app.delete('/books/:id', booksController.deleteBook);

module.exports = app;
