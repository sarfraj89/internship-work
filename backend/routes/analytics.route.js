// import express from "express";
// import { protectRoute, adminRoute } from "../middleware/auth.middleware.js";
// const router = express.Router();

// router.get("/", protectRoute, adminRoute, async (req, res) => {
//   try {
//     const analyticsData = await getAnalyticsData();

//     const endDate = new Date();
//     const startDate = new Date(endDate.getTime() - 7 * 24 * 60 * 60 * 1000);

//     const dailySalesData = await getDailySalesData(startDate, endDate);

//     res.json({
//       analyticsData,
//       dailySalesData,
//     });
//   } catch (error) {
//     console.log("Error in analytics route", error.message);
//     res.status(500).json({ message: "Server error", error: error.message });
//   }
// });
// export default router;


import express from "express";
import { protectRoute, adminRoute } from "../middleware/auth.middleware.js";
import { getSalesReport, getUserActivity, getProductMetrics, getUserEngagement } from "../controllers/analytics.controller.js";

const router = express.Router();

// User Analytics
router.get("/user",protectRoute, getUserActivity);


// Admin Reports
router.get("/sales", protectRoute, adminRoute, getSalesReport);
router.get("/products", protectRoute, adminRoute, getProductMetrics);
router.get("/users", protectRoute, adminRoute, getUserEngagement);

export default router;