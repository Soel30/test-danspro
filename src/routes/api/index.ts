import { Router } from "express";
import provinces from "@components/Provinces/routes";
const router: Router = Router();

router.use("/provinces", provinces);

export default router;
