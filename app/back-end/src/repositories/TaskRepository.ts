import Task from "../database/models/Task";

export default class TaskRepository {
  constructor(private tasks = Task) {
    this.tasks = tasks;
  }
  async getAllTasks() {
    const tasks = await this.tasks.findAll();
    return tasks;
  }

  async deleteTask(id: number) {
    const task = await this.tasks.destroy({
      where: {
        id,
      },
    });
    return task;
  }
}
