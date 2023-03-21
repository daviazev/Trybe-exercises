import { Router } from 'express';
import BooksController from '../controllers/books.controller';

const router = Router();

const booksController = new BooksController();

const BOOKS_SLASH_ID = '/books/:id';

router.get('/books', booksController.getAll);

router.get(BOOKS_SLASH_ID, booksController.getById);

router.post('/books', booksController.create);

router.put(BOOKS_SLASH_ID, booksController.update);

router.delete(BOOKS_SLASH_ID, booksController.remove);

export default router;
