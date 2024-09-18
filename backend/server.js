const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./config/database'); 
const evidenceRoutes = require('./routes/Evidence');
const policeStationRoutes = require('./routes/PoliceStation');
const courtRoutes = require('./routes/Court');
const dotenv = require('dotenv');
const cors = require('cors');

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 2000; // Port can be set using environment variables

// Connect to MongoDB
connectDB();

// Middleware to parse JSON and enable CORS
app.use(express.json());
app.use(cors());

// Import Police and Court models
const PoliceStation = require('./models/policestation'); // Assuming you have this model
const Court = require('./models/court'); // Assuming you have this model

// Authorization route
app.post("/api/auth", async (req, res) => {
  const { address } = req.body;

  console.log("Received address:", address); // Log the received address

  try {
    // Search for the address in the PoliceStation collection
    const policeStation = await PoliceStation.findOne({ publicKey: address });
    

    if (policeStation) {
      console.log("Police station found:", policeStation); // Log the policeStation object
      return res.status(200).json({
        type: "police",
        authorized: true,
        details: policeStation,
      });
    }

    // Search for the address in the Court collection
    const court = await Court.findOne({ publicKey: address });
    

    if (court) {
      console.log("Court found:", court); // Log the court object
      return res.status(200).json({
        
        type: "court",
        authorized: true,
        details: court,
      });
    }

    // If not found in either collection, return unauthorized
    return res.status(401).json({
      authorized: false,
      message: "Public key not found",
    });

  } catch (error) {
    console.error("Error in authorization:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

// Define other routes
app.use('/api/evidence', evidenceRoutes);
app.use('/api/police-station', policeStationRoutes);
app.use('/api/court', courtRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
