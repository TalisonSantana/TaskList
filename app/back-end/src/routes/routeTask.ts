import { Router } from 'express';
import EntityTask from '../entities/entityTask';

const routeUser = Router();

routeUser.get('/', EntityTask().getAllTasks);
routeUser.post('/', EntityTask().createTask);
routeUser.put('/:id', EntityTask().updateTask);
routeUser.delete('/:id', EntityTask().deleteTask);

export default routeUser;