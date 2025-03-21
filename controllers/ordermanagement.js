import OrderManagement from "../models/OrderManagement.js";

// Create a new order
export const createOrder = async (req, res) => {
  try {
    const newOrder = await OrderManagement.create(req.body);
    res
      .status(201)
      .json({ message: "Order created successfully", data: newOrder });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to create order", error: error.message });
  }
};

// Get all orders
export const getAllOrders = async (req, res) => {
  try {
    const orders = await OrderManagement.find();
    res
      .status(200)
      .json({ message: "Orders retrieved successfully", data: orders });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch orders", error: error.message });
  }
};

// Get a single order by ID
export const getOrderById = async (req, res) => {
  try {
    const order = await OrderManagement.findById(req.params.id);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    res
      .status(200)
      .json({ message: "Order retrieved successfully", data: order });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch order", error: error.message });
  }
};

// Update an existing order
export const updateOrder = async (req, res) => {
  try {
    const { id } = req.params;

    // Check if the order exists
    const existingOrder = await OrderManagement.findById(id);
    if (!existingOrder) {
      return res.status(404).json({ message: "Order not found" });
    }

    // Perform the update
    const updatedOrder = await OrderManagement.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    res
      .status(200)
      .json({ message: "Order updated successfully", data: updatedOrder });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to update order", error: error.message });
  }
};

// Delete an order
export const deleteOrder = async (req, res) => {
  try {
    const deletedOrder = await OrderManagement.findByIdAndDelete(req.params.id);
    if (!deletedOrder) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.status(200).json({ message: "Order deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to delete order", error: error.message });
  }
};
