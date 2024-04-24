import { Router } from "express";
import {getAllUsers, userLogin, userSignUp, verifyUser} from "../controllers/user-controllers.js";
import { validate, signUpValidator, loginValidator } from "../utils/validators.js";
import {verifyToken} from "../utils/token-manager.js";

const userRoutes = Router();

userRoutes.get("/", getAllUsers);
userRoutes.post("/signup", validate(signUpValidator), userSignUp);
userRoutes.post("/login", validate(loginValidator), userLogin);
// verify token and send back credentials to frontend
userRoutes.get("/auth-status", verifyToken, verifyUser);

export default userRoutes;