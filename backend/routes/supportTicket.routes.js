import express from "express";
import dotenv from "dotenv";
import { protectRoute, adminRoute } from "../middleware/auth.middleware.js";
import { getAllTicket, newTicket, updateTicket, deleteTicket } from "../controllers/supportTicket.controller.js";

const router = express.Router();

router.get("/", protectRoute, getAllTicket);
router.post("/", protectRoute, newTicket);
router.put("/:id", protectRoute, updateTicket);
router.delete("/:id", protectRoute, deleteTicket);

export default router;