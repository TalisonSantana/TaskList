import ITask from "../interfaces/ITask";
import Task from "../database/models/Task";

export default class TaskRepository {
  constructor(private tasks = Task) {
    this.tasks = tasks;
  }
  async getAllTasks(): Promise<ITask[]> {
    console.log('entrou');
    
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
    const { taskName, description, inProgress } = body;
    const status = inProgress === "true" ? true : false;
    const task = await this.tasks.update(
      { taskName, description, inProgress: status },
      {
        where: {
          id,
        },
      }
    );
    return task;
  }

  async createTask(body: ITask): Promise<ITask> {
    const { taskName, description, inProgress } = body;
    const status = typeof inProgress === "string" ? inProgress === "true" ? true : false : inProgress;
    const task = await this.tasks.create({
      taskName,
      description,
      inProgress: status,
    });
    return task;
  }
}
