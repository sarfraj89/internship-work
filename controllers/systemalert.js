import SystemAlert from "../models/Alerts.js";

// Create a new System Alert
export const createSystemAlert = async (req, res) => {
  try {
    const newAlert = await SystemAlert.create(req.body);
    res.status(201).json({ success: true, alert: newAlert });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get all System Alerts
export const getSystemAlerts = async (req, res) => {
  try {
    const alerts = await SystemAlert.find();
    res.status(200).json({ success: true, alerts });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Delete a System Alert by ID
export const deleteSystemAlert = async (req, res) => {
  const { id } = req.params;

  try {
    const alert = await SystemAlert.findByIdAndDelete(id);

    if (!alert) {
      return res
        .status(404)
        .json({ success: false, message: "Alert not found" });
    }

    res
      .status(200)
      .json({ success: true, message: "Alert deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
