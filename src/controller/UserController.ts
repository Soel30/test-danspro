import { Response, Request } from "express";
import Models from "../models/Model";
import Controller from "../controller/Controller";
import Bcrypt from "bcryptjs";

export class UserController {
  public static async getAllUser(req: Request, res: Response): Promise<void> {
    try {
      const users = await Models.User.find();
      Controller.ResponseSuccess(res, users, "Success to get data");
    } catch (error) {
      Controller.ResponseError(res, error);
    }
  }

  public static async getUser(req: Request, res: Response): Promise<void> {
    try {
      const users = await Models.User.findById(req.params.id);
      Controller.ResponseSuccess(res, users, "Success to get data");
    } catch (error) {
      Controller.ResponseError(res, error);
    }
  }

  public static async createUser(req: Request, res: Response): Promise<void> {
    try {
      const { name, password, role, email } = req.body;
      const salt = await Bcrypt.genSalt(10);
      const hashPassword = await Bcrypt.hash(password, salt);
      const user = new Models.User({
        name,
        password: hashPassword,
        role: role,
        email: email,
      });
      const newUser = await user.save();
      Controller.ResponseSuccess(res, newUser, "Success to create data");
    } catch (error) {
      Controller.ResponseError(res, error);
    }
  }

  public static async updateUser(req: Request, res: Response): Promise<void> {
    try {
      const { name, password, role, email } = req.body;
      const salt = await Bcrypt.genSalt(10);
      const hashPassword = await Bcrypt.hash(password, salt);
      const user = await Models.User.findByIdAndUpdate(
        req.params.id,
        {
          name: name,
          password: hashPassword,
          role: role,
          email: email,
        },
        { new: true }
      );
      Controller.ResponseSuccess(res, user, "Success to update data");
    } catch (error) {
      Controller.ResponseError(res, error);
    }
  }

  public static async deleteUser(req: Request, res: Response): Promise<void> {
    try {
      const user = await Models.User.findByIdAndDelete(req.params.id);
      Controller.ResponseSuccess(res, user, "Success to delete data");
    } catch (error) {
      Controller.ResponseError(res, error);
    }
  }
}
