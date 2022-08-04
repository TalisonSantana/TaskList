import ITask from "../../../../interfaces/ITask";
import InformationTask from "../InformationTask";
import { BiListPlus } from "react-icons/bi";
import MyContext from "../../../../context";
import { useContext } from "react";
import NoTasks from "../../../NoTasks";
import Tenor from "../../../../utils/tenor.gif";

function Main() {
  const {
    tasks,
    setIsCreateTaskModal,
    setIsEditTaskModal,
    setTask,
    setIsDeleteTaskModal,
    isLoading,
  } = useContext(MyContext);

  return (
    <div className="shadow-container h-full max-h-97 min-h-97 rounded-2xl py-3 px-3 flex items-center justify-center w-full max-w-70 bg-white">
      {!isLoading && tasks.length === 0 && (
        <NoTasks setIsCreateTaskModal={() => setIsCreateTaskModal(true)} />
      )}
      {isLoading && (
        <div className="w-12 h-12">
          <img src={Tenor} alt="description"></img>
        </div>
      )}
      {!isLoading && tasks.length > 0 && (
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
              <div
                onClick={() => setIsCreateTaskModal(true)}
                className="icon-add"
              >
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
      )}
    </div>
  );
}

export default Main;
