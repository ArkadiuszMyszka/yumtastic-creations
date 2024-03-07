import { Router } from "express";
import { authMiddleware } from "#middlewares/authMiddleware.js";

import { registerUser } from "../../controllers/authRoutes/registerController.js";
import { loginUser } from "../../controllers/authRoutes/loginController.js";
import { logoutUser } from "../../controllers/authRoutes/logoutController.js";
import { statusUser } from "../../controllers/authRoutes/statusController.js";
import { patchUser } from "../../controllers/authRoutes/patchController.js";

const auth = Router();

/**
 * @openapi
 * tags:
 *  name: Users
 *  description: User authentication functions
 */

/**
 * @openapi
 * /register:
 *  post:
 *   summary: Returns object with new user data
 *   tags: [Users]
 *   security: []
 *   requestBody:
 *     required: true
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/userRegister"
 *   responses:
 *     201:
 *       description: User is registered, added gravatar
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/userRegisterResponse"
 */

auth.post("/register", registerUser);

/**
 * @openapi
 * /login:
 *  post:
 *   summary: Returns object with new user data
 *   tags: [Users]
 *   security: []
 *   requestBody:
 *     required: true
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/userLogin"
 *   responses:
 *     200:
 *       description: User is logged in, genereted new JWN token
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/userLoginResponse"
 *     401:
 *       description: Email or password is wrong
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#components/schemas/Error"
 */

auth.post("/login", loginUser);

/**
 * @openapi
 * /logout:
 *  post:
 *   summary: Logging user out, remember to destroy JWT on front-end
 *   tags: [Users]
 *   parameters:
 *      - name: authorization
 *        in: header
 *        security:
 *          - bearerAuth: []
 *        description: User token
 *   responses:
 *     200:
 *       description: User is logged out
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *                  message:
 *                      type: string
 *     401:
 *      description: User is not authorized
 *      content:
 *         application/json:
 *           schema:
 *              $ref: "#components/schemas/Error"
 *
 */

auth.post("/logout", authMiddleware, logoutUser);

/**
 * @openapi
 * /status:
 *  get:
 *   summary: Checking user status
 *   tags: [Users]
 *   parameters:
 *      - name: authorization
 *        in: header
 *        security:
 *          - bearerAuth: []
 *        description: User token
 *   responses:
 *     200:
 *       description: You are online
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/userRegisterResponse"
 *     401:
 *      description: User is not authorized
 *      content:
 *         application/json:
 *           schema:
 *              $ref: "#components/schemas/Error"
 *
 */

auth.get("/status", authMiddleware, statusUser);

/**
 * @openapi
 * /patch:
 *  patch:
 *   summary: Returns object with changed user data
 *   tags: [Users]
 *   parameters:
 *      - name: authorization
 *        in: header
 *        security:
 *          - bearerAuth: []
 *        description: User token
 *   requestBody:
 *     required: true
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/userUpdate"
 *   responses:
 *     201:
 *       description: User is logged in, genereted new JWN token
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/userRegisterResponse"
 *     401:
 *       description: Email or password is wrong
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#components/schemas/Error"
 */

auth.patch("/patch", authMiddleware, patchUser);

export default auth;
