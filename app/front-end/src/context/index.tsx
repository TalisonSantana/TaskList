import { createContext } from 'react';
import { IConextTask } from '../interfaces/ITask';

const MyContext = createContext<IConextTask>({} as IConextTask);

export default MyContext;