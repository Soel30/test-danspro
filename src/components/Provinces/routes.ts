import { Router } from "express";
import ProvinceController from "./controller";
const router: Router = Router();

const controller: ProvinceController = new ProvinceController();

router.get("/", controller.index);

export default router;
