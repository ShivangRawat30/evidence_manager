const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./config/database'); 
const evidenceRoutes = require('./routes/Evidence');
const policeStationRoutes = require('./routes/PoliceStation');
const courtRoutes = require('./routes/Court');

const app = express();
const PORT = process.env.PORT || 2000; // Port can be set using environment variables

// Connect to MongoDB
connectDB();

// Middleware to parse JSON
app.use(express.json());

// Define routes
app.use('/api/evidence', evidenceRoutes);
app.use('/api/police-station', policeStationRoutes);
app.use('/api/court', courtRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
