import express from "express";
import { body, validationResult } from "express-validator";
import { config } from "dotenv";
import { adminRoute, protectRoute } from "../middleware/auth.middleware";
import {
  getAllFaq,
  addNewFaq,
  updateFaq,
  deleteFaq,
} from "../controllers/faq.controller.js";
const router = express.Router();

router.get("/", getAllFaq);
router.post(
  "/",
  protectRoute,
  adminRoute,
  [
    body("question").notEmpty().withMessage("Question is required"),
    body("answer").notEmpty().withMessage("Answer is required"),
  ],
  addNewFaq
);
router.put(
  "/:id",
  protectRoute,
  adminRoute,
  [
    body("question")
      .optional()
      .notEmpty()
      .withMessage("Question cannot be empty"),
    body("answer").optional().notEmpty().withMessage("Answer cannot be empty"),
  ],
  updateFaq
);
router.delete("/:id", protectRoute, adminRoute, deleteFaq);

export default router;
