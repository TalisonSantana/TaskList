import ITask from "./ITask";

export interface IConextTask {
  tasks: ITask[];
  setTasks: (tasks: ITask[]) => void;
  inputSearch: (value: string) => void;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  loadTasks: () => void;
  statusSearch: (value: null | boolean) => void;
  task: ITask;
  setTask: (task: ITask) => void;
  isDeleteTaskModal: boolean;
  setIsDeleteTaskModal: (isDeleteTaskModal: boolean) => void;
  isCreateTaskModal: boolean;
  setIsCreateTaskModal: (isCreateTaskModal: boolean) => void;
  isEditTaskModal: boolean;
  setIsEditTaskModal: (isEditTaskModal: boolean) => void;
}
