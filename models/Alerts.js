import mongoose from "mongoose";

const systemAlertSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  priority: {
    type: String,
    enum: ["low", "medium", "high"],
    required: true,
  },
  createdBy: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  expiresAt: {
    type: Date,
    required: false,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
});

const SystemAlert = mongoose.model("SystemAlert", systemAlertSchema);

export default SystemAlert;
