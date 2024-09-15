const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./backend/config/database'); // Correct path to database.js
const evidenceRoutes = require('./backend/routes/Evidence'); // Correct path to evidence.js

const app = express();
const PORT = process.env.PORT || 5000; // Port can be set using environment variables

// Connect to MongoDB
connectDB();

// Middleware to parse JSON
app.use(express.json());

// Define routes
app.use('/api/evidence', evidenceRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
