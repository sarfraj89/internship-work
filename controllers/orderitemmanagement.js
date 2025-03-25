import Product from "../models/ItemOrderManagement.js";

// Create a new product
export const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json({ success: true, product });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get all products
export const getProducts = async (req, res) => {
  try {
    const { search, productId, category, rating, content } = req.query;

    const queryObj = {};

    // Search logic for flexible text matching
    if (search) {
      queryObj.$or = [
        { name: { $regex: search, $options: "i" } }, // Matches product name
        { description: { $regex: search, $options: "i" } }, // Matches product description
      ];
    }

    // Filtering logic for exact matches
    if (productId) queryObj.productId = productId;
    if (category) queryObj.category = category;
    if (rating) queryObj.rating = rating;
    if (content) queryObj.content = content;

    // Fetch products based on the combined query
    const products = await Product.find(queryObj);

    // Handle no products found
    if (!products.length) {
      return res.status(404).json({
        success: false,
        message: "No products found matching the criteria",
      });
    }

    res.status(200).json({ success: true, products });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get a single product by ID
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }
    res.status(200).json({ success: true, product });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Update a product
import mongoose from "mongoose";
export const updateProduct = async (req, res) => {
  console.log("Received URL:", req.url); // Log the full URL
  console.log("Received ID (from params):", req.params.id); // Confirm extracted ID

  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      success: false,
      message: "Invalid ID format",
    });
  }

  try {
    const order = await Product.findById(id);

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    Object.assign(order, req.body);
    await order.save();

    res.status(200).json({
      success: true,
      message: "Order updated successfully",
      data: order,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
};

// Delete a product
export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }
    res
      .status(200)
      .json({ success: true, message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
