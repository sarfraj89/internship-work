import Notification from "../models/Notification.js";

export const createNotification = async (req, res) => {
  try {
    const newNotification = await Notification.create(req.body);
    res.status(201).json({ success: true, notification: newNotification });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// 1. GET: Retrieve all notifications
export const getAllNotifications = async (req, res) => {
  try {
    const notifications = await Notification.find();
    res.status(200).json({ success: true, notifications });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// 2. PUT: Update a notification by ID
export const updateNotification = async (req, res) => {
  const { id } = req.params;

  try {
    const updatedNotification = await Notification.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedNotification) {
      return res
        .status(404)
        .json({ success: false, error: "Notification not found" });
    }

    res.status(200).json({ success: true, notification: updatedNotification });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// 3. DELETE: Delete a notification by ID
export const deleteNotification = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedNotification = await Notification.findByIdAndDelete(id);

    if (!deletedNotification) {
      return res
        .status(404)
        .json({ success: false, error: "Notification not found" });
    }

    res
      .status(200)
      .json({ success: true, message: "Notification deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
