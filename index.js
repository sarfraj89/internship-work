import express from "express";
import routes from "./routes/index.js";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";
// import productRoutes from "./routes/product.routes.js";
import cartRoutes from "./routes/cart.routes.js";
import couponRoutes from "./routes/coupon.routes.js";
import analyticsRoutes from "./routes/analytics.routes.js";
import addressRoutes from "./routes/address.routes.js";
import shippingrateRoutes from "./routes/shippingrate.routes.js";
import trackingRoutes from "./routes/tracking.routes.js";
import blogRoutes from "./routes/blog.routes.js";
import staticPageRoutes from "./routes/pages.routes.js";
import faqRoutes from "./routes/faq.routes.js";
import categoryRoutes from "./routes/categories.routes.js";
import productVariantRoutes from "./routes/productVariant.routes.js";
// import { connectDB } from "./lib/db.js";

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());

app.use("/api/v1", authRoutes);
// app.use("/api/v1", productRoutes);
app.use("api/v1", cartRoutes);
app.use("api/v1", couponRoutes);
app.use("/api/v1", analyticsRoutes);
app.use("/api/v1", addressRoutes);
app.use("/api/v1", shippingrateRoutes);
app.use("/api/v1", trackingRoutes);
app.use("api/v1", blogRoutes);
app.use("/api/v1", staticPageRoutes);
app.use("/api/v1", faqRoutes);
app.use("/api/v1", categoryRoutes);
app.use("/api/v1", productVariantRoutes);

app.use("/api/v1", routes);
app.use((err, req, res, next) => {
  res
    .status(500)
    .json({ message: "Internal Server Error", error: err.message });
});

// Server listening
app.listen(PORT, () => {
  console.log(`Server is up and running on PORT: ${PORT}`);
});
