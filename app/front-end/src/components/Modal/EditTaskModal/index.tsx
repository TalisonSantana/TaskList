import React, { useState } from "react";
import ITask from "../../../interfaces/ITask";
import api from "../../../services/rest/TaskService";
import "./Style.css";

function EditTaskModal({
  setIsLoading,
  task,
  setIsEditTaskModal,
}: {
  task: ITask;
  setIsLoading: () => void;
  setIsEditTaskModal: () => void;
}) {
  const [name, setName] = useState(task.taskName);
  const [description, setDescription] = useState(task.description);
  const [inProgress, setInProgress] = useState(
    task.inProgress ? "true" : "false"
  );

  function handleClose({ target: { id } }: any): void {
    if (id === "modal") setIsEditTaskModal();
  }

  async function handleSaveTask() {
    const response = await api.put(`/tasks/${task.id}`, {
      taskName: name,
      description,
      inProgress,
    });
    if (response.status === 200) window.alert("Task updated successfully");
    console.log(response);

    setIsEditTaskModal();
    setIsLoading();
  }

  return (
    <div id="modal" onClick={handleClose} className="container-modal">
      <div className="information-modal">
        <div className="message">
          <div>Edit</div>
        </div>
        <div className="form">
          <div>
            <label htmlFor="Name">Name: </label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="description">Description: </label>
            <input
              type="text"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="inProgress">In Progress: </label>
            <select
              name="inProgress"
              value={inProgress}
              onChange={(e) => setInProgress(e.target.value)}
            >
              <option value="true">true</option>
              <option value="false">false</option>
            </select>
          </div>
        </div>
        <div className="button-container">
          <div className="button">
            <button onClick={handleSaveTask}>Save</button>
          </div>
          <div className="button">
            <button onClick={setIsEditTaskModal}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditTaskModal;
