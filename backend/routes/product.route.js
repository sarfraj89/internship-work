import express from "express";
import { 
    getAllProducts,
    getFeaturedProducts,
    getRecommendedProducts,
    getProductByCategory,
    createProduct,
    toggleFeaturedProduct,
    deleteProduct,
} from "../controllers/product.controller.js";

import { protectRoute, sellerRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/", protectRoute, sellerRoute, getAllProducts); //admin
router.get("/featured", getFeaturedProducts);
router.get("/category/:category", getProductByCategory);
router.get("/recommendations", getRecommendedProducts); // admin
router.post("/", protectRoute, sellerRoute, createProduct); //admin
router.patch("/:id", protectRoute, sellerRoute, toggleFeaturedProduct); //admin
router.delete("/:id", protectRoute, sellerRoute, deleteProduct); //admin

export default router