import express from "express";

import { login, signup, logout, getMe } from "../controllers/auth.controller.ts";
import protectRoute from "../middlewares/protectRoute.ts";

const router = express.Router();

router.post("/login", login);
router.post("/signup", signup);
router.post("/logout", logout);

router.get("/me", protectRoute, getMe);

export default router;
