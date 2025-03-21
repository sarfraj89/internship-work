import express from "express";
import { protectRoute, adminRoute } from "../middleware/auth.middleware.js";
import { setTracking, trackingInfo, updateTracking, deleteTracking } from "../controllers/tracking.controller.js"

const router = express.Router();

router.get("/:id/tracking", protectRoute, trackingInfo)
router.post("/:id/tracking", protectRoute, adminRoute, setTracking)
router.put("/:id/tracking/:trackingId", protectRoute, adminRoute, updateTracking)
router.delete("/:id/tracking/:trackingId", protectRoute, adminRoute, deleteTracking)

export default router;