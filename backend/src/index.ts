import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import path from "path";
import { Request, Response } from "express";

import authRoutes from "./routes/auth.route";
import messageRoutes from "./routes/message.route";

import { app, server } from "./socket/socket";

dotenv.config();

const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

// middlewares
app.use(express.json());
app.use(cookieParser());

// routes
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

if (process.env.NODE_ENV !== "development") {
  app.use(express.static(path.join(__dirname, "/frontend/dist")));
  app.get("*", (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
  });
}

server.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
