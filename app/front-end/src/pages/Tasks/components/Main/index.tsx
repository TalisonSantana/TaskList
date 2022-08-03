import ITask from "../../../../interfaces/ITask";
import InformationTask from "../InformationTask";
import { BiListPlus } from "react-icons/bi";
import MyContext from "../../../../context";
import { useContext } from "react";

function Main() {
  const {
    tasks,
    setIsCreateTaskModal,
    setIsEditTaskModal,
    setTask,
    setIsDeleteTaskModal,
  } = useContext(MyContext);

  return (
    <div className="h-full w-full">
      <div className="xxs:text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl flex to-black mr-2 justify-between ">
        <div>
          <div>Name</div>
        </div>
        <div>
          <div>Description</div>
        </div>
        <div>
          <div>In Progress</div>
        </div>
        <div className="flex">
          <div onClick={() => setIsCreateTaskModal(true)} className="icon-add">
            <BiListPlus fontSize="25px" />
          </div>
        </div>
      </div>
      <div className="overflow-y-auto h-full max-h-9/10 container-task">
        {tasks.map((task: ITask) => (
          <InformationTask
            key={task.id}
            task={task}
            setEditTask={() => {
              setIsEditTaskModal(true);
              setTask(task);
            }}
            setDeleteTask={() => {
              setTask(task);
              setIsDeleteTaskModal(true);
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Main;
