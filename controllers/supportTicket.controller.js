import SupportTicket from "../models/supportTicket.model.js";

export const getAllTicket = async (req, res) => {
  try {
    const tickets = await SupportTicket.find({ userId: req.user.id });
    res.status(200).json(tickets);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving support tickets", error });
  }
};

export const newTicket = async (req, res) => {
  try {
    const { subject, description } = req.body;
    const newTicket = new SupportTicket({
      userId: req.user.id,
      subject,
      description,
    });
    await newTicket.save();
    res.status(201).json(newTicket);
  } catch (error) {
    res.status(500).json({ message: "Error creating support ticket", error });
  }
};

export const updateTicket = async (req, res) => {
  try {
    const { status } = req.body;
    const updatedTicket = await SupportTicket.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!updatedTicket) {
      return res.status(404).json({ message: "Support ticket not found" });
    }

    res.status(200).json(updatedTicket);
  } catch (error) {
    res.status(500).json({ message: "Error updating support ticket", error });
  }
};

export const deleteTicket = async (req, res) => {
  try {
    const deletedTicket = await SupportTicket.findByIdAndDelete(req.params.id);
    if (!deletedTicket) {
      return res.status(404).json({ message: "Support ticket not found" });
    }
    res.status(200).json({ message: "Support ticket deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting support ticket", error });
  }
};
