import ITask from "../interfaces/ITask";
import Task from "../database/models/task";

export default class TaskRepository {
  constructor(private tasks = Task) {
    this.tasks = tasks;
  }
  async getAllTasks(): Promise<ITask[]> {
    const tasks = await this.tasks.findAll();
    return tasks;
  }

  async deleteTask(id: string): Promise<number> {
    const task = await this.tasks.destroy({
      where: {
        id,
      },
    });
    return task;
  }

  async updateTask(id: number, body: ITask): Promise<[affectedCount: number]> {
    const { name, description, inProgress } = body;
    const status = inProgress === "true" ? true : false;
    const task = await this.tasks.update(
      { name, description, inProgress: status },
      {
        where: {
          id,
        },
      }
    );
    return task;
  }

  async createTask(body: ITask): Promise<ITask> {
    const { name, description, inProgress } = body;
    const status = inProgress === "true" ? 1 : 0;
    const task = await this.tasks.create({
      name,
      description,
      inProgress: status,
    });
    return task;
  }
}
