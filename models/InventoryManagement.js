import mongoose from "mongoose";

const inventorySchema = new mongoose.Schema(
  {
    productName: { type: String, required: true },
    quantity: { type: Number, required: true },
    stockAlertThreshold: { type: Number, default: 10 }, // Default low stock alert
  },
  { timestamps: true }
);

const Inventory = mongoose.model("Inventory", inventorySchema);
export default Inventory;
