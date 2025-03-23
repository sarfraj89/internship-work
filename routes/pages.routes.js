import express from "express";
import { adminRoute, protectRoute } from "../middlewares/auth.middleware.js";
import {
  getAllPages,
  createPage,
  updatePage,
  deletePage,
} from "../controllers/pages.controller.js";
const router = express.Router();

router.get("/", getAllPages);
router.post("/", protectRoute, adminRoute, createPage);
router.put("/:slug", protectRoute, adminRoute, updatePage);
router.delete(":slug", protectRoute, adminRoute, deletePage);

export default router;
