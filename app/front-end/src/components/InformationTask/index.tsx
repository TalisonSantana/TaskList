import React from "react";
import ITask from "../../interfaces/ITask";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import "./Style.css";

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
    <div className="grid grid-cols-4 information-task w-full text-sm h-12 items-center rounded-md p-1 mb-2">
      <div className=" truncate ">{task.taskName}</div>
      <div className="truncate ">{task.description}</div>
      <div className="flex justify-end">
        <div className={task.inProgress ? "text-green" : "text-red"}>
          {task.inProgress ? "true" : "false"}
        </div>
      </div>
      <div className="flex items-center cursor-pointer justify-end">
        <div className="mr-1 icon-edit" onClick={setEditTask}>
          <FiEdit2 />
        </div>
        <div className="icon-delete" onClick={setDeleteTask}>
          <FiTrash2 />
        </div>
      </div>
    </div>
  );
}

export default InformationTask;
