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
    <div className="information-task w-full text-sm">
      <div className="taskName truncate xxs:max-w-15 xs:max-w-13 sm:max-w-11 md:max-w-8">{task.taskName}</div>
      <div className="description truncate xxs:max-w-22 xs:max-w-23 sm:max-w-19 md:max-w-12">{task.description}</div>
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
