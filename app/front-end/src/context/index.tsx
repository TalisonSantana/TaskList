import { createContext } from "react";
import { IConextTask } from "../interfaces/IConextTask";

const MyContext = createContext<IConextTask>({} as IConextTask);

export default MyContext;
