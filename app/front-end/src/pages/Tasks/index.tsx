import React, { useContext, useEffect } from "react";
import Header from "./components/Header/index";
import Tenor from "../../utils/tenor.gif";
import CreateTaskModal from "./components/Modal/CreateTaskModal";
import EditTaskModal from "./components/Modal/EditTaskModal";
import DeleteTaskModal from "./components/Modal/DeleteTaskModal";

import NoTasks from "../../pages/NoTasks";
import MyContext from "../../context";
import Main from "./components/Main";

function Tasks() {
  const {
    tasks,
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
      <div className="shadow-container h-full max-h-97 min-h-97 rounded-2xl py-3 px-3 flex items-center justify-center w-full max-w-70 bg-white">
        {!isLoading && tasks.length === 0 && (
          <NoTasks setIsCreateTaskModal={() => setIsCreateTaskModal(true)} />
        )}
        {isLoading && (
          <div className="w-12 h-12">
            <img src={Tenor} alt="description"></img>
          </div>
        )}
        {!isLoading && tasks.length > 0 && <Main />}
      </div>
    </div>
  );
}

export default Tasks;
