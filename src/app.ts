import "dotenv/config";
import express from "express";
import { authRouter } from "./routes/authRoute";

import { messageRouter } from "./routes/messagesRoute";
import { userRouter } from "./routes/userRoute";

const app = express();

app.use(express.json());
app.use(authRouter);
app.use(userRouter);
app.use(messageRouter);

app.listen(4000, () => console.log(`Server is running on port 4000`));
