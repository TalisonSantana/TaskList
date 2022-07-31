import React from "react";
import ITask from "../../../interfaces/ITask";
import api from "../../../services/rest/TaskService";
import "./Style.css";

function DeleteTaskModal({
  task,
  setIsDeleteTaskModal,
  setIsLoading,
}: {
  task: ITask;
  setIsDeleteTaskModal: () => void;
  setIsLoading: () => void;
}) {
  const { id } = task;
  function handleClose({ target: { id } }: any): void {
    if (id === "modal") setIsDeleteTaskModal();
  }

  async function handleDeleteTask() {
    const response = await api.delete(`/tasks/${id}`);
    if(response.status === 200) window.alert("Task deleted successfully");
    setIsDeleteTaskModal();
    setIsLoading();
  }
  return (
    <main id="modal" onClick={handleClose} className="container-modal">
      <div className="information-modal">
        <div className="message">
          <div>Are you sure you want to delete this task?</div>
        </div>
        <div className="button-container">
          <div>
            <button className="button" onClick={handleDeleteTask} type="button">
              Continue
            </button>
          </div>
          <div>
            <button className="button" onClick={setIsDeleteTaskModal} type="button">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default DeleteTaskModal;
