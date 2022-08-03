import React, { useState } from "react";
import ITask from "../interfaces/ITask";
import { getTasks } from "../services/rest/taskService";
import MyContext from "./index";

function MyProvider({ children }: { children: React.ReactNode }) {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [tasksFilter, setTasksFilter] = useState<ITask[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [task, setTask] = useState<ITask>({} as ITask);
  const [isDeleteTaskModal, setIsDeleteTaskModal] = useState<boolean>(false);
  const [isCreateTaskModal, setIsCreateTaskModal] = useState<boolean>(false);
  const [isEditTaskModal, setIsEditTaskModal] = useState<boolean>(false);

  async function loadTasks() {
    try {
      const response = await getTasks();
      setTasks(response);
      setTasksFilter(response);
    } catch (error: any) {
      window.alert(error.message);
    }

    setIsLoading(false);
  }

  function inputSearch(value: string) {
    if (value.length > 0) {
      const newTasks = tasksFilter.filter((task) =>
        task.name.toLowerCase().includes(value.toLowerCase())
      );
      setTasks(newTasks);
    } else if (value.length === 0) {
      loadTasks();
    }
  }

  function statusSearch(status: boolean | null) {
    if (status === null) {
      return loadTasks();
    }
    const newTasks = tasksFilter.filter((task) => task.inProgress === status);
    setTasks(newTasks);
  }

  const store = {
    tasks,
    setTasks,
    inputSearch,
    isLoading,
    setIsLoading,
    loadTasks,
    statusSearch,
    task,
    setTask,
    isDeleteTaskModal,
    setIsDeleteTaskModal,
    isCreateTaskModal,
    setIsCreateTaskModal,
    isEditTaskModal,
    setIsEditTaskModal,
  };

  return <MyContext.Provider value={store}>{children}</MyContext.Provider>;
}

export default MyProvider;
