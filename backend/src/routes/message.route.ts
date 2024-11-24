import express from "express";

import protectRoute from "../middlewares/protectRoute.ts";
import { sendMessage, getConversation, getUsersToChat } from "../controllers/message.controller.ts";

const router = express.Router();

router.use(protectRoute);

router.get("/conversations", getUsersToChat);
router.get("/:id", getConversation);
router.post("/send/:id", sendMessage);

export default router;
