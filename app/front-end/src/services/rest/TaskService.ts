import axios from "axios";
import { ISetTask } from "../../interfaces/ISetTask";
import ITask from "../../interfaces/ITask";

const api = axios.create({
  baseURL: "http://localhost:3001",
});

export const getTasks = async () => {
  const response = await api.get("/tasks");
  return response.data;
};

export const createTask = async (task: ISetTask) => {
  const response = await api.post("/tasks", task);
  return response.data;
};

export const updateTask = async (task: ITask) => {
  const response = await api.put(`/tasks/${task.id}`, task);
  return response.data;
};

export const deleteTask = async (id: number) => {
  const response = await api.delete(`/tasks/${id}`);
  return response.data;
};
