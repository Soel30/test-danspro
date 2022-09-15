import { Router } from "express";
import UserController from "./controller";
const router: Router = Router();
import { verifyToken } from "@root/middleware/auth.check";

const controller: UserController = new UserController();

/**
 * @swagger
 * /users:
 *   get:
 *     tags:
 *         - users
 *     summary: Retrieve a list of JSONPlaceholder users
 *     description: Retrieve a list of users from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
 */
router.get("/", verifyToken, controller.index);
/**
 * @swagger
 * /users:
 *   get:
 *     tags:
 *         - users
 *     summary: Retrieve a list of JSONPlaceholder users
 *     description: Retrieve a list of users from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
 */
router.get("/:id", verifyToken, controller.show);
/**
 * @swagger
 * /users:
 *   post:
 *     tags:
 *         - users
 *     summary: Retrieve a list of JSONPlaceholder users
 *     description: Retrieve a list of users from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
 */
router.post("/", verifyToken, controller.create);
/**
 * @swagger
 * /users:
 *   put:
 *     tags:
 *         - users
 *     summary: Retrieve a list of JSONPlaceholder users
 *     description: Retrieve a list of users from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
 */
router.put("/:id", verifyToken, controller.update);
/**
 * @swagger
 * /users:
 *   delete:
 *     tags:
 *         - users
 *     summary: Retrieve a list of JSONPlaceholder users
 *     description: Retrieve a list of users from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
 */
router.delete("/:id", verifyToken, controller.delete);

export default router;
