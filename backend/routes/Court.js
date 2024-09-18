const express = require('express');
const router = express.Router();
const Court = require('../models/court'); // Update path if needed

// Create new court
router.post('/create', async (req, res) => {
  try {
    const { courtName, publicKey } = req.body;
    const newCourt = new Court({ courtName, publicKey });
    await newCourt.save();
    res.json({ message: 'Court created successfully', court: newCourt });
  } catch (error) {
    res.status(500).json({ error: 'Error creating court' });
  }
});

// Get all courts
router.get('/all', async (req, res) => {
  try {
    const courts = await Court.find();
    res.json(courts);
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving courts' });
  }
});

// Get court by ID
router.get('/:id', async (req, res) => {
  try {
    const court = await Court.findById(req.params.id);
    if (!court) return res.status(404).json({ message: 'Court not found' });
    res.json(court);
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving court' });
  }
});

// Update court by ID
router.put('/update/:id', async (req, res) => {
  try {
    const { courtName, publicKey } = req.body;
    const court = await Court.findByIdAndUpdate(req.params.id, { courtName, publicKey }, { new: true });
    if (!court) return res.status(404).json({ message: 'Court not found' });
    res.json(court);
  } catch (error) {
    res.status(500).json({ error: 'Error updating court' });
  }
});

// Delete court by ID
router.delete('/delete/:id', async (req, res) => {
  try {
    const court = await Court.findByIdAndDelete(req.params.id);
    if (!court) return res.status(404).json({ message: 'Court not found' });
    res.json({ message: 'Court deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting court' });
  }
});

module.exports = router;
