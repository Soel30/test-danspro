import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import ConfigData from "@config/env";
import apiResponse from "@utils/response";
import logger from "@utils/logger";

const jwtSecret = ConfigData.authentication.jwtSecret;
export const verifyToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const bearerHeader = req.headers["authorization"];
    if (typeof bearerHeader !== "undefined") {
      const bearer = bearerHeader.split(" ");
      const bearerToken = bearer[1];
      if (bearerToken == null) {
        apiResponse(res, 401, "Unauthorized", null);
      }
      const verify = await jwt.verify(bearerToken, jwtSecret);
      if (verify) {
        next();
      } else {
        apiResponse(res, 401, "Invalid token", null);
      }
    } else {
      apiResponse(res, 401, "Unauthorized", null);
    }
  } catch (error) {
    logger.error(error);
  }
};
