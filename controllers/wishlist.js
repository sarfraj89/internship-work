import Wishlist from "../models/Wishlist.js";

// GET /wishlist
export const getWishlist = async (req, res) => {
  try {
    const wishlist = await Wishlist.findOne({ userId: req.user.id }).populate(
      "items.productId"
    );
    if (!wishlist)
      return res.status(404).json({ message: "Wishlist not found" });

    res.status(200).json(wishlist);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

// POST /wishlist
export const addItemToWishlist = async (req, res) => {
  const { productId } = req.body;

  try {
    let wishlist = await Wishlist.findOne({ userId: req.user.id });

    if (!wishlist) {
      wishlist = new Wishlist({ userId: req.user.id, items: [] });
    }

    wishlist.items.push({ productId });
    await wishlist.save();

    res.status(201).json({ message: "Item added successfully", wishlist });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

// DELETE /wishlist/:itemId
export const removeItemFromWishlist = async (req, res) => {
  const { itemId } = req.params;

  try {
    const wishlist = await Wishlist.findOneAndUpdate(
      { userId: req.user.id },
      { $pull: { items: { _id: itemId } } },
      { new: true }
    );

    if (!wishlist)
      return res.status(404).json({ message: "Wishlist not found" });

    res.status(200).json({ message: "Item removed successfully", wishlist });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};
