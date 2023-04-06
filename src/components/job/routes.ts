import { Router } from "express";
import JobController from "./controller";
const router: Router = Router();
import { verifyToken } from "@root/middleware/auth.check";

const jobController = new JobController();
router.get("/", jobController.getAllList);
router.get("/detail/:id", jobController.getDetail);
router.get("/search", jobController.search);

export default router;
