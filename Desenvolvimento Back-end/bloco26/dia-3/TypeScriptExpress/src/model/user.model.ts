import { Pool, ResultSetHeader } from 'mysql2/promise';
import User from '../interfaces/user.interface';

export default class UserModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<User[]> {
    const result = await this.connection.execute('SELECT * FROM Users;');
    const [rows] = result;
    return rows as User[];
  }

  public async getById(id: number): Promise<User> {
    const result = await this.connection.execute(
      'SELECT * FROM Users WHERE id = ?',
      [id]
    );

    const [rows] = result;
    const [user] = rows as User[];
    return user;
  }

  public async create(user: User): Promise<User> {
    const { name, email, password } = user;

    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Users (name, email, password) VALUES (?, ?, ?)',
      [name, email, password]
    );

    console.log(result);

    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { id: insertId, ...user };
  }
}
