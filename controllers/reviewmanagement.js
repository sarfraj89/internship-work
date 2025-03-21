import ReviewManagement from "../models/ReviewandRating.js";

export const reviewManagement = async (req, res) => {
  try {
    const review = await ReviewManagement.create(req.body);
    return res.status(200).json({ success: true, review });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};

// Get All Reviews
export const getAllReviews = async (req, res) => {
  try {
    const reviews = await ReviewManagement.find();
    return res.status(200).json({ success: true, reviews });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};

// Get Review by ID

// Update Review by ID
export const updateReview = async (req, res) => {
  try {
    const review = await ReviewManagement.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!review) {
      return res
        .status(404)
        .json({ success: false, message: "Review not found" });
    }
    return res.status(200).json({ success: true, review });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};

// Delete Review by ID
export const deleteReview = async (req, res) => {
  try {
    const review = await ReviewManagement.findByIdAndDelete(req.params.id);
    if (!review) {
      return res
        .status(404)
        .json({ success: false, message: "Review not found" });
    }
    return res
      .status(200)
      .json({ success: true, message: "Review deleted successfully" });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};
