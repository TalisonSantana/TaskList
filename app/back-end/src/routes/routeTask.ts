import { Router } from 'express';
// import entityTask from '../entities/entityTask';
import TaskController from '../controllers/TaskController';
import TaskRepository from '../repositories/TaskRepository';
import TaskService from '../services/TaskService';

 const entityTask = () => {
    const repository = new TaskRepository();
    const service = new TaskService(repository);
    const controller = new TaskController(service);
    return controller;
  }

const routeUser = Router();

routeUser.get('/', entityTask().getAllTasks);
// routeUser.post('/', entityTask().getAllTasks);
routeUser.put('/', entityTask().updateTask);
routeUser.delete('/:id', entityTask().deleteTask);

export default routeUser;