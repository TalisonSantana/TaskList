import React from "react";
import ITask from "../../../interfaces/ITask";
import api from "../../../services/rest/TaskService";

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
      <div className="w-96 h-16 relative bg-white information-modal">
        <div className="flex justify-center">
          <div>Are you sure you want to delete this task?</div>
        </div>
        <div className="flex justify-around items-center mt-1">
          <div>
            <button className="button border-solid border-1" onClick={handleDeleteTask} type="button">
              Continue
            </button>
          </div>
          <div>
            <button className="button border-solid border-1" onClick={setIsDeleteTaskModal} type="button">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default DeleteTaskModal;
