import { Request, Response } from "express";
import { User } from "./model";
import bcrypt from "bcryptjs";
import apiResponse from "@utils/response";

export default class UserController {
  public async index(req: Request, res: Response): Promise<void> {
    try {
      let { page } = req.query || 1;
      const users = await User.findAll({ limit: 10, offset: 0 });
      apiResponse(res, 200, "Successfully retrieved users", users);
    } catch (error) {
      apiResponse(res, 500, "Error retrieving users", error);
    }
  }

  public async show(req: Request, res: Response): Promise<void> {
    try {
      const user = await User.findOne({ where: { id: req.params.id } })
      apiResponse(res, 200, "Successfully retrieved user", user);
    } catch (error) {
      apiResponse(res, 500, "Error retrieving user", error);
    }
  }

  public async create(req: Request, res: Response): Promise<void> {
    try {
      const { name, email, username, password } = req.body;
      const newPassword = await bcrypt.hash(password, 10);
      const user = await User.create({
        name,
        email,
        username,
        password: newPassword,
      });
      apiResponse(res, 201, "Successfully created user", user);
    } catch (error) {
      apiResponse(res, 500, "Error creating user", error);
    }
  }

  public async update(req: Request, res: Response): Promise<void> {
    try {
      const { name, email, username, password, role } = req.body;
      const newPassword = await bcrypt.hash(password, 10);
      const user = await User.findOne({ where: { id: req.params.id } });
      if (user) {
        user.update({
          name,
          email,
          username,
          password: newPassword,
          role,
        });
      }
      apiResponse(res, 200, "Successfully updated user", user);
    } catch (error) {
      apiResponse(res, 500, "Error updating user", error);
    }
  }

  public async delete(req: Request, res: Response): Promise<void> {
    try {
      const user = await User.findOne({ where: { id: req.params.id } });
      if (user) {
        user.destroy();
      }
      apiResponse(res, 200, "Successfully deleted user", user);
    } catch (error) {
      apiResponse(res, 500, "Error deleting user", error);
    }
  }
}
