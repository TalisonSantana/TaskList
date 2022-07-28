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

  async updateTask(body: any) {
    const { id, taskName, description, inProgress } = body;
    const status = inProgress === "true" ? true : false;
    const task = await this.model.updateTask(id, taskName, description, status);
    return task;
  }
}
