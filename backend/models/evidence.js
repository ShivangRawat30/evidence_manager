const mongoose = require('mongoose');

// Define the schema for storing evidence
const evidenceSchema = new mongoose.Schema({
  caseId: {  // Changed from evidenceId to caseId
    type: String,
    required: true,
    unique: true // Ensure each case has a unique ID
  },
  policeStationName: {
    type: String,
    required: true
  },
  courtName: {
    type: String,
    required: true
  },
  evidenceLocation: {  // Changed from ipfsHash to evidenceLocation
    type: [String],  // String array to store multiple locations (e.g., IPFS or other)
    required: true
  },
  submitterAddress: {
    type: String, // Store the blockchain/user account address
    required: true
  },
  firDetails: {  // New field for FIR details
    firNumber: {
      type: String,
      required: true
    },
    firDate: {
      type: Date,
      required: true
    },
    complaintDetails: {
      type: String,
      required: true
    }
  },
  timestamp: {
    type: Date,
    default: Date.now // Automatically sets the timestamp
  }
});

// Create the Evidence model from the schema
const Evidence = mongoose.model('Evidence', evidenceSchema);

module.exports = Evidence;
