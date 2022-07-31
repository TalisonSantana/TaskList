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
    const task = await this.model.updateTask(id, body);
    return task;
  }

  async createTask(body: ITask): Promise<ITask> {
    const task = await this.model.createTask(body);
    return task;
  }
}
