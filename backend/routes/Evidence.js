const express = require('express');
const router = express.Router();
const Evidence = require('../models/evidence'); 

// Create new evidence
router.post('/create', async (req, res) => {
  try {
    const { evidenceId, policeStationName, courtName, ipfsHash, submitterAddress } = req.body;

    const newEvidence = new Evidence({
      evidenceId,
      policeStationName,
      courtName,
      ipfsHash,
      submitterAddress
    });

    await newEvidence.save();
    res.json({ message: 'Evidence created successfully', evidence: newEvidence });
  } catch (error) {
    res.status(500).json({ error: 'Error creating evidence' });
  }
});

// Get all evidence
router.get('/all', async (req, res) => {
  try {
    const evidence = await Evidence.find();
    res.json(evidence);
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving evidence' });
  }
});

// Get evidence by ID
router.get('/:id', async (req, res) => {
  try {
    const evidence = await Evidence.findOne({ evidenceId: req.params.id });
    if (!evidence) {
      return res.status(404).json({ error: 'Evidence not found' });
    }
    res.json(evidence);
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving evidence' });
  }
});

module.exports = router;
