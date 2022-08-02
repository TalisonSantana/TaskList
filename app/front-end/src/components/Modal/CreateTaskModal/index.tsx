import React, { useState } from "react";
import api from "../../../services/rest/TaskService";
import "./Style.css";

function CreateTaskModal({
  setIsLoading,
  setIsCreateTaskModal,
}: {
  setIsLoading: () => void;
  setIsCreateTaskModal: () => void;
}) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [inProgress, setInProgress] = useState("true");

  function handleClose({ target: { id } }: any): void {
    if (id === "modal") setIsCreateTaskModal();
  }

  async function handleSaveTask() {
    try {
      await api.post(`/tasks`, {
        taskName: name,
        description,
        inProgress,
      });
      window.alert("Task created successfully");
    } catch (error: any) {
      window.alert(error.response.data.message);
    }
    setIsCreateTaskModal();
    setIsLoading();
  }

  return (
    <div id="modal" onClick={handleClose} className="container-modal">
      <div className="w-96 h-37 relative bg-white information-modal">
        <div className="flex justify-center">
          <div>Create Task</div>
        </div>
        <div className="p-1 form">
          <div>
            <label htmlFor="name">Name: </label>
            <input
              className="border-solid border-1 bg-white mt-1"
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="description">Description: </label>
            <input
              className="border-solid border-1 bg-white mt-1"
              type="text"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="pt-1">
            <label htmlFor="inProgress">In Progress: </label>
            <select
              className="border-solid border-1 bg-white"
              name="inProgress"
              value={inProgress}
              onChange={(e) => setInProgress(e.target.value)}
            >
              <option value="true">true</option>
              <option value="false">false</option>
            </select>
          </div>
          <div className="flex justify-around items-center mt-1">
            <div>
              <button
                className="p-1 border-solid border-1 button"
                type="button"
                onClick={handleSaveTask}
              >
                Save
              </button>
            </div>
            <div>
              <button
                className="p-1 border-solid border-1 button"
                type="button"
                onClick={setIsCreateTaskModal}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTaskModal;
