import { Router } from "express";
import { AuthenticateUserController } from "../controllers/AuthenticateUserController";
const userRouter = Router();

userRouter.post("/authenticate", new AuthenticateUserController().handle);

export { userRouter };
