import TaskController from "../controllers/TaskController";
import TaskRepository from "../repositories/TaskRepository";
import TaskService from "../services/TaskService";

const entityTask = () => {
  const repository = new TaskRepository();
  const service = new TaskService(repository);
  const controller = new TaskController(service);
  return controller;
};

export default entityTask;
