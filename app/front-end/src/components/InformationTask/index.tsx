import React from "react";
import ITask from "../../interfaces/ITask";
import { FiEdit2, FiTrash2 } from "react-icons/fi";

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
    <div className="grid grid-cols-10 information-task w-full xxs:text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl h-12 items-center rounded-md p-1 mb-2">
      <div className=" truncate col-span-2">{task.name}</div>
      <div className="truncate col-span-4">{task.description}</div>
      <div className="flex justify-center col-span-2">
        <div className={task.inProgress ? "text-green" : "text-red"}>
          {task.inProgress ? "true" : "false"}
        </div>
      </div>
      <div className="flex items-center cursor-pointer justify-end col-span-2">
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
