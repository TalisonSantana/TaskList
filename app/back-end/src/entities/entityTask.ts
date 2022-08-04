import TaskController from "../controllers/taskController";
import TaskRepository from "../repositories/taskRepository";
import TaskService from "../services/taskService";

const EntityTask = () => {
  const repository = new TaskRepository();
  const service = new TaskService(repository);
  const controller = new TaskController(service);
  return controller;
};

export default EntityTask;
