import mongoose from "mongoose";

const shippingAddressSchema = new mongoose.Schema(
  {
    street: {
      type: String,
      required: true,
      trim: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: [true, "Country is required"],
      trim: true,
    },
  },
  { _id: false } // Ensures no separate ID for sub-document
);

const orderSchema = new mongoose.Schema({
  customername: {
    type: String,
    required: true,
  },
  customeremail: {
    type: String,
    required: true,
  },
  customerphonenumber: {
    type: Number,
    required: true,
  },
  shippingaddress: {
    type: shippingAddressSchema,
    required: true,
  },
  orderdate: {
    type: Date,
    default: Date.now,
  },
});

const OrderManagement = mongoose.model(
  "OrderManagement",
  orderSchema,
  "orderrmanagements"
);

export default OrderManagement;
