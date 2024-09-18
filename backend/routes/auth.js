const express = require("express");
const PoliceStation = require("../models/policestation");
const Court = require("../models/court");
const Evidence = require("../models/evidence");

const router = express.Router();

router.post("/auth", async (req, res) => {
  const { address } = req.body;

  try {
    // Check if the public key exists in the PoliceStation schema
    const policeStation = await PoliceStation.findOne({ where: { publicKey: address } });
    if (policeStation) {
      return res.status(200).json({ authorized: true, type: "police", details: policeStation });
    }

    // Check if the public key exists in the Court schema
    const court = await Court.findOne({ where: { publicKey: address } });
    if (court) {
      return res.status(200).json({ authorized: true, type: "court", details: court });
    }

    // Check if the public key exists in the Evidence schema
    const evidence = await Evidence.findOne({ where: { publicKey: address } });
    if (evidence) {
      return res.status(200).json({ authorized: true, type: "evidence", details: evidence });
    }

    // If the public key does not exist in any schema
    return res.status(401).json({ authorized: false, message: "Public key not found" });
  } catch (error) {
    console.error("Error in authorization:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
