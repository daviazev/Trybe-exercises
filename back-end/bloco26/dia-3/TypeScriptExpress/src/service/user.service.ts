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

  public async getById(id: number): Promise<User> {
    const user = await this.model.getById(id);
    return user;
  }

  public create(user: User): Promise<User> {
    return this.model.create(user);
  }
}
