import { Router } from "express";
import users from "@components/users/routes";
import auth from "@components/auth/routes";
const router: Router = Router();

router.use("/users", users);
router.use("/", auth);

export default router;
