import { Router } from "express";
import { CreateMessageController } from "../controllers/CreateMessageController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const messageRouter = Router();

messageRouter.post(
  "/messages",
  ensureAuthenticated,
  new CreateMessageController().handle
);

export { messageRouter };
