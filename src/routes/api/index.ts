import { Router } from "express";
import provinces from "@components/Provinces/routes";
import users from "@components/users/routes";
import auth from "@components/auth/routes";
const router: Router = Router();

router.use("/provinces", provinces);
router.use("/users", users);
router.use("/", auth);

export default router;
