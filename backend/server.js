// Load environment variables from .env file
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const chatRoutes = require("./routes/chatRoutes");

// Initialize Express application
const app = express();

// Middleware to parse incoming JSON requests
app.use(express.json());

// Enable Cross-Origin Resource Sharing (CORS) to allow requests from different origins
app.use(cors());

// Define API routes for chat functionality
app.use("/api/chat", chatRoutes);

// Define server port (default to 5000 if not provided in environment variables)
const PORT = process.env.PORT || 5000;

// Start the server and listen on the defined port
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
