const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./config/database'); 
const evidenceRoutes = require('./routes/Evidence');
const policeStationRoutes = require('./routes/PoliceStation');
const courtRoutes = require('./routes/Court');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();
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
  //search for the PUBLIC_ID from MongoDB database in both court and police DB

  //send a response of the format 
    //if found/authorized, check if it is a police/court 
      //police - {type:"police",authorized:true,details: FROM_MONGO_DB}
      //court - {type:"court",authorized:true,details: FROM_MONGO_DB}

    //if not found/authorized, eg. {authorized:false}
    
  if (req.body.address == "0x53dd4A0f08D0519AAEACeDBc607FD788b285FdBf") {
    res.send({id:123,authorized:true,type:"police"})
  }
  else {
    res.send({authorized:false})
  }
})
// Define routes
app.use('/api/evidence', evidenceRoutes);
app.use('/api/police-station', policeStationRoutes);
app.use('/api/court', courtRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
