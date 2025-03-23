import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

// Middleware to protect routes (authentication required)
export const protectRoute = async (req, res, next) => {
  try {
    // Ensure cookie-parser is used in app.js
    const accessToken = req.cookies?.accessToken;

    if (!accessToken) {
      return res.status(401).json({
        message: "Unauthorized - No access token provided",
      });
    }

    try {
      // Verify JWT token
      const decoded = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);

      // Fetch user details (excluding password)
      const user = await User.findById(decoded.userId).select("-password");

      if (!user) {
        return res
          .status(401)
          .json({ message: "Unauthorized - User not found" });
      }

      // Attach user details to request
      req.user = user;
      next();
    } catch (error) {
      if (error.name === "TokenExpiredError") {
        return res
          .status(401)
          .json({ message: "Unauthorized - Access token expired" });
      } else if (error.name === "JsonWebTokenError") {
        return res
          .status(401)
          .json({ message: "Unauthorized - Invalid token" });
      }
      throw error; // Throw other errors to be caught below
    }
  } catch (error) {
    console.error("Error in protectRoute middleware:", error.message);
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

// Middleware to protect seller routes
export const sellerRoute = (req, res, next) => {
  if (req.user && req.user.role === "seller") {
    next();
  } else {
    return res.status(403).json({ message: "Access denied - Seller only" });
  }
};

// Middleware to protect admin routes (if you have admins in your system)
export const adminRoute = (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    next();
  } else {
    return res.status(403).json({ message: "Access denied - Admin only" });
  }
};
