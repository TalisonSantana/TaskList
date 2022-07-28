import * as express from 'express';
import TaskController from './controllers/TaskController';
import errorMiddleware from './middlewares/middlewareError';
import TaskRepository from './repositories/TaskRepository';
import TaskService from './services/TaskService';

  const entityTask = () => {
    const repository = new TaskRepository();
    const service = new TaskService(repository);
    const controller = new TaskController(service);
    return controller;
  }

class App {

  public app: express.Express;

  constructor() {
    this.app = express();

    this.config();

    this.app.get('/', (req, res) => res.json({ ok: true }));
    this.app.get('/tasks', entityTask().getAllTasks);
    this.app.use(errorMiddleware);
  }


  private config():void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(express.json());
    this.app.use(accessControl);
  }

  public start(PORT: string | number):void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}


export { App };
export const { app } = new App();
