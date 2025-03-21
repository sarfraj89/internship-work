import express from "express";
import {
  createOrder,
  getAllOrders,
  getOrderById,
  updateOrder,
  deleteOrder,
} from "../controllers/ordermanagement.js";

import validateOrder from "../middlewares/validateOrder.js";
import validateReview from "../middlewares/validateReview.js";
import {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} from "../controllers/orderitemmanagement.js";

import validateOrderItem from "../middlewares/validateOrderItem.js";
import {
  reviewManagement,
  getAllReviews,
  updateReview,
  deleteReview,
} from "../controllers/reviewmanagement.js";
import {
  createNotification,
  getAllNotifications,
  updateNotification,
  deleteNotification,
} from "../controllers/notification.js";
import { validateNotification } from "../middlewares/validateNotification.js";
import {
  createSystemAlert,
  getSystemAlerts,
  deleteSystemAlert,
} from "../controllers/systemalert.js";
import { validateSystemAlert } from "../middlewares/validateSystemAlert.js";
import {
  getWishlist,
  addItemToWishlist,
  removeItemFromWishlist,
} from "../controllers/wishlist.js";
import authMiddleware from "../middlewares/validateWishlist.js";
const router = express.Router();
import {
  getInventory,
  getLowStockItems,
  setStockAlertThreshold,
} from "../controllers/inventorymanagement.js";
import { authMiddlewares } from "../middlewares/validateInventory.js";

// Order Management APIs
router.post("/orders", validateOrder, createOrder);
router.get("/orders", getAllOrders);
router.get("/orders/:id", getOrderById);
router.put("/orders/:id", validateOrder, updateOrder);
router.delete("/orders/:id", deleteOrder);
router.put("/orders/:id", updateOrder);

// Order Item APIs
router.post("/orderitems", validateOrderItem, createProduct);
router.get("/order/getallitems", getProducts);
router.get("/order/:id", getProductById);
router.put("/:id", validateOrderItem, updateProduct); // ✅ Correct Route
router.delete("/order/:id", deleteProduct);

// Review and Rating APIS
router.post("/products", validateReview, reviewManagement);
router.get("/products/:id/reviews", getAllReviews);
router.put("/products/:id/reviews/:reviewId", validateReview, updateReview);
router.delete("/products/:id/reviews/:reviewId", deleteReview);

// Notification APIs
router.get("/notifications", getAllNotifications);
router.post("/notifications", validateNotification, createNotification);
router.put("/notifications/:id", validateNotification, updateNotification);
router.delete("/notifications/:id", deleteNotification);

// Alerts APIs
router.get("/alerts", getSystemAlerts);
router.post("/alerts", validateSystemAlert, createSystemAlert);
router.delete("/alerts/:id", deleteSystemAlert);

// Wishlist APIs
// Created the api but testing is remaining for the login user by using the authentication
router.get("/wishlist", authMiddleware, getWishlist);
router.post("/wishlist", authMiddleware, addItemToWishlist);
router.delete("/wishlist/:itemId", authMiddleware, removeItemFromWishlist);

// Inventory Management APIs
// Created the api but testing is remaining as it requires the authentication token
router.get("/getinventory", getInventory);
router.get("/inventory/alerts", getLowStockItems);
router.post("/inventory/alerts", authMiddlewares, setStockAlertThreshold);

export default router;
