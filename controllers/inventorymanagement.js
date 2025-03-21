import Inventory from "../models/InventoryManagement.js";

// Get all inventory items
export const getInventory = async (req, res) => {
  try {
    const inventory = await Inventory.find();
    res.json(inventory);
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err.message });
  }
};

// Get products with low stock levels
export const getLowStockItems = async (req, res) => {
  try {
    const lowStockItems = await Inventory.find({ quantity: { $lt: 10 } });
    res.json(lowStockItems);
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err.message });
  }
};

// Set stock alert threshold (Admin only)
export const setStockAlertThreshold = async (req, res) => {
  try {
    const { productId, threshold } = req.body;

    const product = await Inventory.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    product.stockAlertThreshold = threshold;
    await product.save();
    res.json({ message: "Stock alert threshold updated", product });
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err.message });
  }
};
