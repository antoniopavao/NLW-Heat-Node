import { Router } from "express";
import { CreateMessageController } from "../controllers/CreateMessageController";
import { GetLast3MessagesController } from "../controllers/GetLast3MessagesController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const messageRouter = Router();

messageRouter.post(
  "/messages",
  ensureAuthenticated,
  new CreateMessageController().handle
);

messageRouter.get(
  "/messages/last3",
  ensureAuthenticated,
  new GetLast3MessagesController().handle
);

export { messageRouter };
