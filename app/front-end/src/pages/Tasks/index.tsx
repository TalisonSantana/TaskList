import React, { useContext, useEffect, useState } from "react";
import ITask from "../../interfaces/ITask";
import { BiListPlus } from "react-icons/bi";
import Header from "../../components/Header";
import Tenor from "../../utils/tenor.gif";
import InformationTask from "../../components/InformationTask";
import CreateTaskModal from "../../components/Modal/CreateTaskModal";
import EditTaskModal from "../../components/Modal/EditTaskModal";
import DeleteTaskModal from "../../components/Modal/DeleteTaskModal";

import NoTasks from "../../components/NoTasks";
import MyContext from "../../context";

function Tasks() {
  const { tasks, isLoading, setIsLoading, loadTasks } = useContext(MyContext);
  const [task, setTask] = useState<ITask>({} as ITask);
  const [isDeleteTaskModal, setIsDeleteTaskModal] = useState<boolean>(false);
  const [isCreateTaskModal, setIsCreateTaskModal] = useState<boolean>(false);
  const [isEditTaskModal, setIsEditTaskModal] = useState<boolean>(false);

  useEffect(() => {
    console.log(isLoading);

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
        {!isLoading && tasks.length > 0 && (
          <div className="h-full w-full">
            <div className="xxs:text-base xs:text-lg sm:text-xl md:text-2xl flex to-black mr-2 justify-between ">
              <div>
                <div>Name</div>
              </div>
              <div>
                <div>Description</div>
              </div>
              <div>
                <div>In Progress</div>
              </div>
              <div className="flex">
                <div
                  onClick={() => setIsCreateTaskModal(true)}
                  className="icon-add"
                >
                  <BiListPlus fontSize="25px" />
                </div>
              </div>
            </div>
            <div className="overflow-y-auto h-full max-h-9/10 container-task">
              {tasks.map((task) => (
                <InformationTask
                  key={task.id}
                  task={task}
                  setEditTask={() => {
                    setIsEditTaskModal(true);
                    setTask(task);
                  }}
                  setDeleteTask={() => {
                    setTask(task);
                    setIsDeleteTaskModal(true);
                  }}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Tasks;
