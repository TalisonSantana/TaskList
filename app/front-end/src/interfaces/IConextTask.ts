import ITask from "./ITask";

export interface IConextTask {
  tasks: ITask[];
  setTasks: (tasks: ITask[]) => void;
  inputSearch: (value: string) => void;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  loadTasks: () => void;
  statusSearch: (value: null | boolean) => void;
}