export default class TaskService {
  constructor(private model: any) {
    this.model = model;
  }

  async getAllTasks() {
    const tasks = await this.model.getAllTasks();
    return tasks;
  }
}