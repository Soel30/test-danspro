import { Router } from "express";
import provinces from "@components/Provinces/routes";
import users from "@components/users/routes";
const router: Router = Router();

router.use("/provinces", provinces);
router.use("/users", users);

export default router;
