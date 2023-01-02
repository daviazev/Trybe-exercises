import { Router } from 'express';
import UserController from '../controller/user.controller';

const router = Router();

const userController = new UserController();

// router.get('/users', (req, res) => {
//   res.status(200).json('qhswqiuhquhw');
// });

router.get('/users', userController.getAll);

export default router;
