import { Request, Response } from 'express';
import statusCodes from '../../statusCodes';
import UserService from '../service/user.service';
import User from '../interfaces/user.interface';

export default class UserController {
  constructor(private userService = new UserService()) {}

  public getAll = async (_req: Request, res: Response) => {
    const users = await this.userService.getAll();
    return res.status(statusCodes.OK).json(users);
  };

  public getById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const user = await this.userService.getById(Number(id));

    if (!user) {
      return res
        .status(statusCodes.NOT_FOUND)
        .json({ message: 'User not found' });
    }

    return res.status(statusCodes.OK).json(user);
  };

  public create = async (req: Request, res: Response) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res
        .status(statusCodes.BAD_REQUEST)
        .json({ message: 'some fields are missing' });
    }

    const userCreated = await this.userService.create(req.body);

    return res.status(statusCodes.CREATED).json(userCreated);
  };
}
