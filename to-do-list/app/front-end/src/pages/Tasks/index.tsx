import React, { useContext, useEffect } from "react";
import Header from "./components/Header/index";
import CreateTaskModal from "./components/Modal/CreateTaskModal";
import EditTaskModal from "./components/Modal/EditTaskModal";
import DeleteTaskModal from "./components/Modal/DeleteTaskModal";

import MyContext from "../../context";
import Main from "./components/Main";

function Tasks() {
  const {
    isLoading,
    setIsLoading,
    loadTasks,
    isDeleteTaskModal,
    task,
    setIsDeleteTaskModal,
    isEditTaskModal,
    setIsEditTaskModal,
    isCreateTaskModal,
    setIsCreateTaskModal,
  } = useContext(MyContext);

  useEffect(() => {
    if (isLoading) {
      setTimeout(async () => {
        loadTasks();
      }, 1000);
    }
  }, [isLoading]);

  return (
    <div className="mb-8 w-screen h-screen flex items-center justify-start flex-col gap-8 ">
      <Header />
      <Main />
      {isDeleteTaskModal && (
        <DeleteTaskModal
          setIsLoading={() => setIsLoading(true)}
          task={task}
          setIsDeleteTaskModal={() => setIsDeleteTaskModal(false)}
        />
      )}
      {isEditTaskModal && (
        <EditTaskModal
          setIsLoading={() => setIsLoading(true)}
          setIsEditTaskModal={() => setIsEditTaskModal(false)}
          task={task}
        />
      )}
      {isCreateTaskModal && (
        <CreateTaskModal
          setIsLoading={() => setIsLoading(true)}
          setIsCreateTaskModal={() => setIsCreateTaskModal(false)}
        />
      )}
    </div>
  );
}

export default Tasks;
