import { Request, Response } from "express";

export default class ProvinceController {
  public async index(req: Request, res: Response) {
    res.json({ message: "Hello World!" });
  }
}
