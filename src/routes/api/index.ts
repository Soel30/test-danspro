import { Router } from "express";
import users from "@components/users/routes";
import job from "@components/job/routes";
import auth from "@components/auth/routes";
const router: Router = Router();

router.use("/users", users);
router.use("/jobs", job);
router.use("/", auth);

export default router;
