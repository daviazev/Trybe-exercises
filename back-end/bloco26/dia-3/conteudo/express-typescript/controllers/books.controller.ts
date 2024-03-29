// ./controllers/books.controller.ts

import { Request, Response } from 'express';
import statusCodes from '../statusCodes';
import BookService from '../services/books.service';

class BooksController {
  constructor(private bookService = new BookService()) {}

  public getAll = async (_req: Request, res: Response) => {
    const books = await this.bookService.getAll();
    res.status(statusCodes.OK).json(books);
  };

  public getById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const book = await this.bookService.getById(Number(id));

    if (!book) {
      return res
        .status(statusCodes.NOT_FOUND)
        .json({ message: 'Book not found' });
    }

    res.status(statusCodes.OK).json(book);
  };

  public create = async (req: Request, res: Response) => {
    const book = req.body;

    const bookCreated = await this.bookService.create(book);
    res.status(statusCodes.CREATED).json(bookCreated);
  };

  public update = async (req: Request, res: Response) => {
    const { id } = req.params;
    const book = req.body;
    await this.bookService.update(book, Number(id));

    res.status(statusCodes.NO_CONTENT).end();
  };

  public remove = async (req: Request, res: Response) => {
    const { id } = req.params;
    await this.bookService.remove(Number(id));

    res.status(statusCodes.NO_CONTENT).end();
  };
}

export default BooksController;
