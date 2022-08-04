import { log } from "console";
import ITask, { IModel } from "../interfaces/ITask";
import ValidDescription from "./validators/validDescription";
import ValidName from "./validators/validName";

export default class TaskService {
  constructor(private model: IModel) {
    this.model = model;
  }

  async getAllTasks(): Promise<ITask[]> {
    const tasks = await this.model.getAllTasks();
    return tasks;
  }

  async deleteTask(id: string): Promise<number> {
    const task = await this.model.deleteTask(id);
    return task;
  }

  async updateTask(id: number, body: ITask): Promise<[affectedCount: number]> {
    const { name, description } = body;

    new ValidName(name).valid();
    new ValidDescription(description).valid();
    const task = await this.model.updateTask(id, body);
    return task;
  }

  async createTask(body: ITask): Promise<ITask> {
    const { name, description } = body;

    new ValidName(name).valid();
    new ValidDescription(description).valid();

    const task = await this.model.createTask(body);
    return task;
  }
}
