import StaticPage from "../models/pages.model.js";


// Get Static Page by Slug
export const getAllPages = async (req, res) => {
  try {
    const page = await StaticPage.findOne({ slug: req.params.slug });
    if (!page) {
      return res.status(404).json({ message: "Page not found" });
    }
    res.json(page);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Create a Static Page (Admin Only)
export const createPage = async (req, res) => {
  try {
    const { slug, title, content } = req.body;

    const pageExists = await StaticPage.findOne({ slug });
    if (pageExists) {
      return res
        .status(400)
        .json({ message: "Page with this slug already exists" });
    }

    const newPage = await StaticPage.create({ slug, title, content });
    res.status(201).json(newPage);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Update a Static Page (Admin Only)
export const updatePage = async (req, res) => {
  try {
    const updatedPage = await StaticPage.findOneAndUpdate(
      { slug: req.params.slug },
      req.body,
      { new: true }
    );

    if (!updatedPage) {
      return res.status(404).json({ message: "Page not found" });
    }

    res.json(updatedPage);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};


// Delete a Static Page (Admin Only)
export const deletePage = async (req, res) => {
  try {
    const deletedPage = await StaticPage.findOneAndDelete({
      slug: req.params.slug,
    });

    if (!deletedPage) {
      return res.status(404).json({ message: "Page not found" });
    }

    res.json({ message: "Page deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
