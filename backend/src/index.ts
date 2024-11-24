import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.route";
import messageRoutes from "./routes/message.route";

import { app, server } from "./socket/socket";

dotenv.config();

const PORT = process.env.PORT || 5000;

// middlewares
app.use(express.json());
app.use(cookieParser());

// routes
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

server.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
