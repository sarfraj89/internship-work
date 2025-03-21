import express from "express";
import { adminRoute, protectRoute } from "../middleware/auth.middleware.js";


const router = express.Router();

router.get("/", getAllPages);
router.post("/", protectRoute, adminRoute, createPage);
router.put("/:slug", protectRoute, adminRoute, updatePage);
router.delete(":slug", protectRoute, adminRoute, deletePage);

export default router;
