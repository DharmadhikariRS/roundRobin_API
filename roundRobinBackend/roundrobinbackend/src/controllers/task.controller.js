import HttpStatus from 'http-status-codes';
import * as UserService from '../services/user.service';
import * as TaskService from '../services/tasks.service';


export const newTask = async (req, res, next) => {
    try {
      const data = await TaskService.addTask(req.body);
      res.status(HttpStatus.CREATED).json({
        code: HttpStatus.CREATED,
        data: data,
        message: 'User created successfully'
      });
    } catch (error) {
      next(error);
    }
  };