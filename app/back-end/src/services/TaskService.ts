export default class TaskService {
  constructor(private model: any) {
    this.model = model;
  }

  async getAllTasks() {
    const tasks = await this.model.getAllTasks();
    return tasks;
  }

  async deleteTask(id: number) {
    const task = await this.model.deleteTask(id);
    return task;
  }
}
