import { Router } from 'express';
import * as routerControllers from './../controllers/userController';

const router = Router();

router
  .route('/')
  .get(routerControllers.getAllUsers)
  .post(routerControllers.createUser);

router
  .route('/:id')
  .get(routerControllers.getUser)
  .patch(routerControllers.updateUser)
  .delete(routerControllers.deleteUser);

export default router;