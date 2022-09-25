import { Request, Response } from "express";
import json, { JwtPayload } from "jsonwebtoken";
import { IUser, User } from "@components/users/model";
import ConfigData from "@config/env";
import { TokenAuth } from "./model";
import apiResponse, { erroResponse } from "@utils/response";
import bcrypt from "bcryptjs";
import logger from "@utils/logger";

export default class AuthController {
  public async login(req: Request, res: Response): Promise<void> {
    try {
      const scret = ConfigData.authentication.jwtSecret;

      const { username, password } = req.body;
      const user = await User.findOne({ username });
      if (!user) {
        apiResponse(res, 404, "User not found", null);
      }
      const isMatch = await bcrypt.compare(password, user!.password);
      if (!isMatch) {
        apiResponse(res, 401, "Invalid credentials", null);
      }
      const token = json.sign({ id: user!._id }, scret, {
        expiresIn: "1h",
      });
      const tokenAuth = new TokenAuth({
        token,
        user: user!._id,
      });
      apiResponse(res, 200, "Successfully logged in", { token });
    } catch (error) {
      logger.error("Error Logggin In");
    }
  }

  public async register(req: Request, res: Response): Promise<void> {
    try {
      const { name, email, username, password, role } = req.body;
      const newPassword = await bcrypt.hash(password, 10);
      const user = new User({
        name,
        email,
        username,
        password: newPassword,
        role,
      });
      await user.save();
      apiResponse(res, 201, "Successfully created user", user);
    } catch (error) {
      apiResponse(res, 500, "Error creating user", error);
    }
  }

  public async logout(req: Request, res: Response): Promise<void> {
    try {
      const tokenAuth = await TokenAuth.findOne({
        token: req.headers.authorization,
      });
      if (!tokenAuth) {
        apiResponse(res, 404, "Token not found", null);
      }
      await tokenAuth!.remove();
      apiResponse(res, 200, "Successfully logged out", null);
    } catch (error) {
      apiResponse(res, 500, "Error logging out", error);
    }
  }

  public async refreshToken(req: Request, res: Response): Promise<void> {
    try {
      const scret = ConfigData.authentication.jwtSecret;

      const tokenAuth = await TokenAuth.findOne({
        token: req.headers.authorization,
      });
      if (!tokenAuth) {
        apiResponse(res, 404, "Token not found", null);
      }
      const token = json.sign({ id: tokenAuth!.user }, scret, {
        expiresIn: ConfigData.authentication.jwtExpired,
      });
      tokenAuth!.token = token;
      await tokenAuth!.save();
      apiResponse(res, 200, "Successfully refreshed token", { token });
    } catch (error) {
      apiResponse(res, 500, "Error refreshing token", error);
    }
  }

  public async getUser(req: Request, res: Response): Promise<void> {
    try {
      const bearerHeader = req.headers["authorization"];
      if (!bearerHeader) {
        apiResponse(res, 401, "Unauthorized", null);
      }
      const token = bearerHeader!.split(" ")[1];
      const scret = ConfigData.authentication.jwtSecret;
      const decoded = json.verify(token, scret) as JwtPayload;
      const user = await User.findById(decoded.id);
      if (!user) {
        apiResponse(res, 404, "User not found", null);
      }
      apiResponse(res, 200, "Successfully fetched user", user);
    } catch (error) {
      apiResponse(res, 500, "Error retrieving user", error);
    }
  }
}
