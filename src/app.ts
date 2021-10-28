import "dotenv/config";
import express from "express";
import { authRouter } from "./routes/authRoute";
import { messageRouter } from "./routes/messagesRoute";
import { userRouter } from "./routes/userRoute";
import http from "http";
import cors from "cors";
import { Server } from "socket.io";

const app = express();
app.use(cors());
const serverHttp = http.createServer(app);

const io = new Server(serverHttp, { cors: { origin: "*" } });

io.on("connection", (socket) => {
  console.log(`Usuario conectado no socket ${socket.id}`);
});

app.use(express.json());

app.use(authRouter);
app.use(userRouter);
app.use(messageRouter);

export { serverHttp, io };
