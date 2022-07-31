import React, { useEffect, useState } from "react";
import ITask from "../../interfaces/ITask";
import api from "../../services/rest/TaskService";
import { BiListPlus } from "react-icons/bi";
import Header from "../../components/Header";
import Tenor from "../../utils/tenor.gif";
import InformationTask from "../../components/InformationTask";
import CreateTaskModal from "../../components/Modal/CreateTaskModal";
import EditTaskModal from "../../components/Modal/EditTaskModal";
import DeleteTaskModal from "../../components/Modal/DeleteTaskModal";
import "./Style.css";

function Tasks() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [task, setTask] = useState<ITask>({} as ITask);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isDeleteTaskModal, setIsDeleteTaskModal] = useState<boolean>(false);
  const [isCreateTaskModal, setIsCreateTaskModal] = useState<boolean>(false);
  const [isEditTaskModal, setIsEditTaskModal] = useState<boolean>(false);

  async function loadTasks() {
    const response = await api.get("/tasks");
    setTasks(response.data);
  }

  useEffect(() => {
    if (isLoading) {
      setTimeout(async () => {
        loadTasks();
        setIsLoading(false);
      }, 1000);
    }
  }, [isLoading]);

  return (
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
      <main className="container">
        {isLoading && (
          <div className="w-12 h-12">
            <img src={Tenor} alt="description"></img>
          </div>
        )}
        {!isLoading && (
          <section>
            <div className="titulo-list">
              <div>Name</div>
              <div>Description</div>
              <div>In Progress</div>
              <div
                onClick={() => setIsCreateTaskModal(true)}
                className="icon-add"
              >
                <BiListPlus fontSize="23px" />
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
  );
}

export default Tasks;
