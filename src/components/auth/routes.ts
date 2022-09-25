import { verifyToken } from "@root/middleware/auth.check";
import { Router } from "express";
import AuthController from "./controller";
const router: Router = Router();

const controller: AuthController = new AuthController();

router.get("/me", verifyToken, controller.getUser);
router.post("/auth/login", controller.login);
router.post("/auth/register", controller.register);

export default router;