import { Router } from 'express';
import entityTask from '../entities/entityTask';

const routeUser = Router();

routeUser.get('/', entityTask().getAllTasks);
routeUser.post('/', entityTask().createTask);
routeUser.put('/:id', entityTask().updateTask);
routeUser.delete('/:id', entityTask().deleteTask);

export default routeUser;