import { NextFunction, Request, Response } from "express";

const errorMiddleware = (err: {code: number, message: string}, req: Request, res: Response, _next: NextFunction) => {
  if (err.code) {
    return res.status(err.code).json({ message: err.message });
  }
  if (err.message === 'invalid token' || err.message === 'jwt malformed') {
    return res.status(401).json({ message: 'Token must be a valid token' });
  }
  return res.status(500).json({ message: 'internal server error' });
};

export default errorMiddleware;
