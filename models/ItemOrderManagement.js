import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    productId: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    originalPrice: { type: Number, required: true },
    discount: { type: Number, required: true },
    currency: { type: String, default: "INR" },
    taxIncluded: { type: Boolean, default: true },
    shippingInfo: { type: String, default: "Free Shipping in India" },
    availability: { type: String, required: true },
    quantity: { type: Number, required: true },
    weight: { type: String },
    dimensions: {
      height: { type: String },
      width: { type: String },
      depth: { type: String },
    },
    description: { type: String },
    category: { type: String },
    material: { type: String },
    stonework: { type: Boolean },
    images: [{ type: String }],
    pickupLocation: {
      locationName: { type: String },
      availability: { type: String },
    },
    contactInfo: {
      phone: { type: String },
      email: { type: String },
    },
    careInstructions: [{ type: String }],
    shippingAndReturns: { type: String },
    sku: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);
