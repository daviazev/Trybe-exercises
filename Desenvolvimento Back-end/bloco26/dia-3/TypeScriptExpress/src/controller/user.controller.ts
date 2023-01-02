import { Request, Response } from 'express';
import statusCodes from '../../statusCodes';
import UserService from '../service/user.service';

export default class UserController {
  constructor(private userService = new UserService()) {}

  public getAll = async (_req: Request, res: Response) => {
    const books = await this.userService.getAll();
    return res.status(statusCodes.OK).json(books);
  };
}
