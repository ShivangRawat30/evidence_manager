const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./config/database'); 
const evidenceRoutes = require('./routes/Evidence');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 2000; // Port can be set using environment variables
// Connect to MongoDB
connectDB();

// Middleware to parse JSON
app.use(express.json());
app.use(cors())

app.post("/api/auth",async (req, res) => {
  console.log(req.body.address);
  if (req.body.address == "0x53dd4A0f08D0519AAEACeDBc607FD788b285FdBf") {
    res.send({id:123,authorized:true,type:"police"})
  }
  else {
    res.send({authorized:false})
  }
})
// Define routes
app.use('/api/evidence', evidenceRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
