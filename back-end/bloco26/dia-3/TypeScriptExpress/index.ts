import express, { NextFunction, Request, Response } from 'express';
import statusCodes from './statusCodes';
import 'express-async-errors';
import UserRouter from './src/routes/user.routes';

const app = express();

app.use(express.json());

const PORT = 3001;

app.get('/', (_req: Request, res: Response) => {
  res.status(statusCodes.OK).json('tá fundando');
});

app.use(UserRouter);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
