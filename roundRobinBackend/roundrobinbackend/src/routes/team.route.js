import express from 'express';
import * as userController from '../controllers/user.controller';
import { newUserValidator } from '../validators/user.validator';
import { userAuth } from '../middlewares/auth.middleware';
import * as TaskController from '../controllers/task.controller';


const router = express.Router();
//route to get all users
router.get('', TaskController.getAllteams);

//route to create a new user
router.post('', TaskController.newTask);
export default router;