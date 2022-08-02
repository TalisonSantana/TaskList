import React, { useContext, useEffect, useState } from "react";
import ITask from "../../interfaces/ITask";
import { BiListPlus } from "react-icons/bi";
import Header from "../../components/Header";
import Tenor from "../../utils/tenor.gif";
import InformationTask from "../../components/InformationTask";
import CreateTaskModal from "../../components/Modal/CreateTaskModal";
import EditTaskModal from "../../components/Modal/EditTaskModal";
import DeleteTaskModal from "../../components/Modal/DeleteTaskModal";

import "./Style.css";
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
    <div>
    <div className="container-pai">
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
      <main className="mt-36 container">
        {!isLoading && tasks.length === 0 && (
          <NoTasks setIsCreateTaskModal={() => setIsCreateTaskModal(true)} />
        )}
        {isLoading && (
          <div className="w-12 h-12">
            <img src={Tenor} alt="description"></img>
          </div>
        )}
        {!isLoading && tasks.length > 0 && (
          <section>
            <div className="xxs:text-base xs:text-lg sm:text-xl md:text-2xl titulo-list">
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
            <div className="container-task">
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
          </section>
        )}
      </main>
    </div>
    </div>
  );
}

export default Tasks;
