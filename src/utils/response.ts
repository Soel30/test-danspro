import { Response } from "express";
import httpCodes from "./httpCodes";
import logger from "./logger";

/**
 * @export
 * @param {express.Response} res
 * @param {number} statusCode
 * @param {string} message
 * @param {any} data
 */

const resp = (
  res: Response,
  statusCode: number,
  message: string,
  data: any
) => {
  return res
    .status(statusCode)
    .json({
      code: statusCode,
      message: message,
      status: statusCode < 400 ? "success" : "error",
      data: data,
    })
    .end();
};

export const erroResponse = (res: Response, err?: Error) => {
  if (err) {
    logger.error(err.stack);
  }
  return resp(
    res,
    httpCodes.INTERNAL_SERVER_ERROR,
    "Internal Server Error",
    null
  );
};

export default resp;
