import express from "express";
import routes from "./routes/index.js";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

// Correct JSON middleware
app.use(express.json());

// Routes
app.use("/api/v1", routes);

// Error handling middleware
app.use((err, req, res, next) => {
  res
    .status(500)
    .json({ message: "Internal Server Error", error: err.message });
});

// Server listening
app.listen(PORT, () => {
  console.log(`Server is up and running on PORT: ${PORT}`);
});
