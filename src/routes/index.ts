import apiResponse from "@utils/response";
import { Application, Request, Response, NextFunction } from "express";
import api from "./api";

export default (app: Application): void => {
  app.use("/api/v1", api);
  
  app.use((req: Request, res: Response, _next: NextFunction) => {
    apiResponse(res, 404, "Resource not found", null);
  });
};
