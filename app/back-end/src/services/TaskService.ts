import { log } from "console";
import ITask, { IModel } from "../interfaces/ITask";

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
    const { taskName, description } = body;

    if (taskName === undefined || description === undefined) {
      throw Object.assign(new Error("Name and description are required"), {
        code: 401,
      });
    }
    if (taskName.length < 3) {
      throw Object.assign(
        new Error("Name must be at least 3 characters long"),
        { code: 401 }
      );
    }
    if (description.length < 5) {
      throw Object.assign(
        new Error("Description must be at least 5 characters long"),
        { code: 401 }
      );
    }
    const task = await this.model.updateTask(id, body);
    return task;
  }

  async createTask(body: ITask): Promise<ITask> {
    const { taskName, description } = body;

    if (taskName === undefined || description === undefined) {
      throw Object.assign(new Error("Name and description are required"), {
        code: 401,
      });
    }
    if (taskName.length < 3) {
      throw Object.assign(
        new Error("Name must be at least 3 characters long"),
        { code: 401 }
      );
    }
    if (description.length < 5) {
      throw Object.assign(
        new Error("Description must be at least 5 characters long"),
        { code: 401 }
      );
    }

    const task = await this.model.createTask(body);
    return task;
  }
}
