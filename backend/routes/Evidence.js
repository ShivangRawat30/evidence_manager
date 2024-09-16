const express = require('express');
const router = express.Router();
const Evidence = require('../models/evidence'); 

// Create new evidence
router.post('/create', async (req, res) => {
  try {
    const { caseId, policeStationName, courtName, evidenceLocation, submitterAddress, firDetails } = req.body;

    const newEvidence = new Evidence({
      caseId,
      policeStationName,
      courtName,
      evidenceLocation, // Now storing as a string array
      submitterAddress,
      firDetails // Now storing FIR details
    });

    await newEvidence.save();
    res.json({ message: 'Evidence created successfully', evidence: newEvidence });
  } catch (error) {
    res.status(500).json({ error: 'Error creating evidence' });
    console.log(error);
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

// Get evidence by case ID
router.get('/:caseId', async (req, res) => {
  try {
    const evidence = await Evidence.findOne({ caseId: req.params.caseId });
    if (!evidence) return res.status(404).json({ message: 'Evidence not found' });
    res.json(evidence);
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving evidence' });
    console.log(error);
  }
});

module.exports = router;
