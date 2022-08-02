import React from "react";
import { TbNotesOff } from "react-icons/tb";

function NoTasks({ setIsCreateTaskModal }: { setIsCreateTaskModal: () => void }) {
  return (
    <div>
      <div className="flex items-center justify-center">
      <div className="text-xl">You do not have registered tasks!</div>
      </div>
      <div className="flex items-center justify-center">
      <TbNotesOff color="#85827e" fontSize="230px" />
      </div>
      <div className="flex items-center justify-center">
      <div onClick={setIsCreateTaskModal} className="hover:bg-grey-light3 bg-grey-transparent cursor-pointer text-base border-solid border-1 border-sky-500 rounded-sm">Click here to add a task</div>
      </div>
    </div>
  );
}

export default NoTasks;
