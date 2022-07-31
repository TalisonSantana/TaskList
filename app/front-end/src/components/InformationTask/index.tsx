import React from "react";
import ITask from "../../interfaces/ITask";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import './Style.css';

function InformationTask({
  task,
  setDeleteTask,
  setEditTask,
}: {
  task: ITask;
  setDeleteTask: () => void;
  setEditTask: () => void;
}) {
  return (
    <div className="information-task" key={task.id}>
      <div className="taskName">{task.taskName}</div>
      <div className="description">{task.description}</div>
      <div className={task.inProgress ? "text-green" : "text-red"}>
        {task.inProgress ? "true" : "false"}
      </div>
      <div className="icons">
        <div 
        className="mr-1 icon-edit"
        onClick={setEditTask}
        >
          <FiEdit2 />
        </div>
        <div
          className="icon-delete"
          onClick={setDeleteTask}
        >
          <FiTrash2 />
        </div>
      </div>
    </div>
  );
}

export default InformationTask;
