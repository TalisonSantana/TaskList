import { NextFunction, Request, Response } from "express";

export default class TaskController {
  constructor(private service: any) {
    this.service = service;
  }

  getAllTasks = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const tasks = await this.service.getAllTasks();
      return res.status(201).json(tasks);
    } catch (error) {
     next(error);
    }
  }
}