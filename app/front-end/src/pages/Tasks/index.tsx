import React, { useEffect, useState } from 'react';
import ITask from '../../interfaces/ITask';
import api from '../../services/rest/TaskService';

function Tasks() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  useEffect(() => {
    async function loadTasks() {
      const response = await api.get('/tasks');
      setTasks(response.data);
      console.log(response.data);
    }
    loadTasks();
  }, []);
  return (
    <div>
     <ul>
      {
        tasks.map(task => 
          <li key={task.id}>{task.taskName}</li>
        )
      }
     </ul>
    </div>
  );
}

export default Tasks;