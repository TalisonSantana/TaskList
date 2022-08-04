import { Router } from 'express';
import routeTask from './routeTask';


const route = Router();

route.use('/tasks', routeTask);

export default route;