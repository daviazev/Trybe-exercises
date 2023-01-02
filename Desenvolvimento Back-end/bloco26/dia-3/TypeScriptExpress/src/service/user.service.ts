import connection from '../model/connection';
import UserModel from '../model/user.model';
import User from '../interfaces/user.interface';

export default class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async getAll(): Promise<User[]> {
    const books = await this.model.getAll();
    return books;
  }
}
