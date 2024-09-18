const express = require('express');
const router = express.Router();
const PoliceStation = require('../models/policestation'); // Update path if needed

// Create new police station
router.post('/create', async (req, res) => {
  try {
    const { policeStationName, publicKey } = req.body;
    const newPoliceStation = new PoliceStation({ policeStationName, publicKey });
    await newPoliceStation.save();
    res.json({ message: 'Police Station created successfully', policeStation: newPoliceStation });
  } catch (error) {
    res.status(500).json({ error: 'Error creating police station' });
  }
});

// Get all police stations
router.get('/all', async (req, res) => {
  try {
    const policeStations = await PoliceStation.find();
    res.json(policeStations);
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving police stations' });
  }
});

// Get police station by ID
router.get('/:id', async (req, res) => {
  try {
    const policeStation = await PoliceStation.findById(req.params.id);
    if (!policeStation) return res.status(404).json({ message: 'Police Station not found' });
    res.json(policeStation);
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving police station' });
  }
});

// Update police station by ID
router.put('/update/:id', async (req, res) => {
  try {
    const { policeStationName, publicKey } = req.body;
    const policeStation = await PoliceStation.findByIdAndUpdate(req.params.id, { policeStationName, publicKey }, { new: true });
    if (!policeStation) return res.status(404).json({ message: 'Police Station not found' });
    res.json(policeStation);
  } catch (error) {
    res.status(500).json({ error: 'Error updating police station' });
  }
});

// Delete police station by ID
router.delete('/delete/:id', async (req, res) => {
  try {
    const policeStation = await PoliceStation.findByIdAndDelete(req.params.id);
    if (!policeStation) return res.status(404).json({ message: 'Police Station not found' });
    res.json({ message: 'Police Station deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting police station' });
  }
});

module.exports = router;
