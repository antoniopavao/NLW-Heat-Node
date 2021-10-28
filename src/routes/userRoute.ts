import { Router } from "express";
import { AuthenticateUserController } from "../controllers/AuthenticateUserController";
import { ProfileUserController } from "../controllers/ProfileUserController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
const userRouter = Router();

userRouter.post("/authenticate", new AuthenticateUserController().handle);

userRouter.get(
  "/profile",
  ensureAuthenticated,
  new ProfileUserController().handle
);

export { userRouter };
