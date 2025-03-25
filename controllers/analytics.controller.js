// import User from "../models/user.model.js";
// import Product from "../models/product.model.js";
// import Order from "../models/order.model.js";

// export const getAnalyticsData = async () => {
//   const totalUsers = await User.countDocuments();
//   const totalProducts = await Product.countDocuments();

//   const salesData = await Order.aggregate([
//     {
//       $group: {
//         _id: null, //it group all documents together
//         totalSales: { $sum: 1 },
//         totalRevenue: { $sum: "$totalAmount" },
//       },
//     },
//   ]);

//   const { totalSales, totalRevenue } = salesData[0] || {
//     totalSales: 0,
//     totalRevenue: 0,
//   };

//   return {
//     users: totalUsers,
//     products: totalProducts,
//     totalSales,
//     totalRevenue,
//   };
// };

// export const getDailySalesData = async (startDate, endDate) => {
//   try {
//     const dailySalesData = await Order.aggregate([
//       {
//         $match: {
//           createdAt: {
//             $gte: startDate,
//             $lte: endDate,
//           },
//         },
//       },

//       {
//           $group: {
//               _id: { $datetoString: { format: "%Y-%m-%d", date: "$createdAt"} },
//               sales:{ $sum:1 },
//               revenue: { $sum: "$totalAmout" },
//           },
//       },
//       { $sort: { _id:1 } },
//     ]);

//     const dateArray = getDatesInRange(startDate, endDate);

//     return dateArray.map(date => {
//       const foundData = dailySalesData.find(item => item._id === date);

//       return {
//         date,
//         sales: foundData?.sales || 0,
//         revenue: foundData?.revenue || 0,

//       };
//     });
//   } catch (error) {
//     throw error;
//   }
// };

// function getDatesInRange(startDate, endDate) {
//   const dates = [];
//   let currentDate = new Date(startDate);

//   while (currentDate <= endDate) {
//     dates.push(currentDate.toISOString().split("T")[0]);
//     currentDate.setDate(currentDate.getDate() + 1);
//   }

//   return dates;
// }
//  example of daily sales data
// [
//   {
//     _id: "2024-09-18",
//     sales: 12,
//     revenue: 240
//   }
// ]

import Analytics from "../routes/analytics.routes.js";

// Get User Activity
export const getUserActivity = async (req, res) => {
  try {
    const activities = await Analytics.find({ userId: req.user.id }).sort({
      timestamp: -1,
    });
    res.json({ success: true, data: activities });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};

//Get Sales Report (Admin)
export const getSalesReport = async (req, res) => {
  try {
    // Example sales report (Replace with real DB query)
    const salesData = [
      { date: "2024-03-01", revenue: 10000, orders: 150 },
      { date: "2024-03-02", revenue: 12000, orders: 180 },
    ];
    res.json({ success: true, data: salesData });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};

//Get Product Performance Metrics (Admin)

export const getProductMetrics = async (req, res) => {
  try {
    // Example metrics (Replace with real DB query)
    const productMetrics = [
      { productId: "12345", name: "Laptop", views: 500, purchases: 50 },
      { productId: "67890", name: "Phone", views: 700, purchases: 80 },
    ];
    res.json({ success: true, data: productMetrics });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};

//Get User Engagement Metrics (Admin)

export const getUserEngagement = async (req, res) => {
  try {
    // Example engagement data (Replace with real DB query)
    const engagementData = [
      { userId: "user123", name: "Alice", logins: 20, purchases: 5 },
      { userId: "user456", name: "Bob", logins: 15, purchases: 3 },
    ];
    res.json({ success: true, data: engagementData });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};
