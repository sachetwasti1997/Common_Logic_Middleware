import { NextFunction, Request, Response } from "express";
import { UnAuthorisedError } from "../errors/unauthorised-user";

export const authorisedCheck = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.currentUser) {
    throw new UnAuthorisedError();
  }
  next();
};
