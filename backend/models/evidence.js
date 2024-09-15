const mongoose = require('mongoose');

// Define the schema for storing evidence
const evidenceSchema = new mongoose.Schema({
  evidenceId: {
    type: String,
    required: true,
    unique: true // Ensure each evidence has a unique ID
  },
  policeStationName: {
    type: String,
    required: true
  },
  courtName: {
    type: String,
    required: true
  },
  ipfsHash: {
    type: String, // Hash returned from IPFS or another storage solution
    required: true
  },
  submitterAddress: {
    type: String, // Store the blockchain/user account address
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now // Automatically sets the timestamp
  }
});

// Create the Evidence model from the schema
const Evidence = mongoose.model('Evidence', evidenceSchema);

module.exports = Evidence;
