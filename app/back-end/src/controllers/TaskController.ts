import { NextFunction, Request, Response } from "express";
import { IService } from "../interfaces/ITask";

export default class TaskController {
  constructor(private service: IService) {
    this.service = service;
  }

  getAllTasks = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const tasks = await this.service.getAllTasks();
      return res.status(200).json(tasks);
    } catch (error) {
      next(error);
    }
  };

  deleteTask = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    try {
      const task = await this.service.deleteTask(id);
      return res.status(200).json(task);
    } catch (error) {
      next(error);
    }
  };

  updateTask = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const task = await this.service.updateTask(req.body);
      return res.status(200).json(task);
    } catch (error) {
      next(error);
    }
  };

  createTask = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const task = await this.service.createTask(req.body);
      return res.status(201).json(task);
    } catch (error) {
      next(error);
    }
  };
}
