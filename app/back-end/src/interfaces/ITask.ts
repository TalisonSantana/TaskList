export default interface ITask {
  id: number | string;
  taskName: string;
  description: string;
  inProgress: boolean | string;
}

export interface IService {
  getAllTasks(): Promise<ITask[]>;
  deleteTask(id: string): Promise<number>;
  updateTask(task: ITask): Promise<[affectedCount: number]>;
  createTask(task: ITask): Promise<ITask>;
}

export interface IModel {
  getAllTasks(): Promise<ITask[]>;
  deleteTask(id: string): Promise<number>;
  updateTask(task: ITask): Promise<[affectedCount: number]>;
  createTask(task: ITask): Promise<ITask>;
}
