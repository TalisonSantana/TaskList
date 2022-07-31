import React, { useState } from "react";
import api from "../../../services/rest/TaskService";
import './Style.css';

function CreateTaskModal({ setIsLoading, setIsCreateTaskModal }: { setIsLoading: () => void, setIsCreateTaskModal: () => void }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [inProgress, setInProgress] = useState("true");

  function handleClose({ target: { id } }: any): void {
    if (id === "modal") setIsCreateTaskModal();
  }

  async function handleSaveTask() {
    // const response = api.put(`/tasks/${task.id}`, {
    const response = await api.post(`/tasks`, {
        taskName: name,
        description,
        inProgress,
    })
    if(response.status === 201) window.alert("Task created successfully");
    console.log(response);
    
    setIsCreateTaskModal();
    setIsLoading();
  }

  return (
    <div id="modal" onClick={handleClose} className="container-modal">
      <div className="information-modal">
        <div className="message">
          <div>Create Task</div>
        </div>
        <div className="form">
      <div>
        <label htmlFor="Name">Name: </label>
      <input type="text" name="name" value={name} onChange={ (e) => setName(e.target.value) }/>
      </div>
      <div>
        <label htmlFor="description">Description: </label>
        <input type="text" name="description" value={description} onChange={ (e) => setDescription(e.target.value) } />
      </div>
      <div>
        <label htmlFor="inProgress">In Progress: </label>
      <select name="inProgress" value={inProgress} onChange={ (e) => setInProgress(e.target.value) }>
        <option value="true">true</option>
        <option value="false">false</option>
      </select>
      </div>
        </div>
        <div className="button-container">
      <div className="button">
        <button onClick={handleSaveTask}>
          Save
        </button>
      </div>
      <div className="button">
        <button onClick={setIsCreateTaskModal}>
          Cancel
        </button>
      </div>
        </div>
      </div>
    </div>
  )
}

export default CreateTaskModal;