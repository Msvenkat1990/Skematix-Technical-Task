const express = require('express');
const router = express.Router();
const Building = require('../models/Building');

// Add Building
const addBuilding = async (req, res) => {
    const { campusId, name, status } = req.body;
    try {
      const building = new Building({ campusId, name, status });
      await building.save();
      res.status(201).json(building);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };

  // Get Building list
  const getBuilding = async (req, res) => {
    try {
      const buildings = await Building.find();
      res.json(buildings);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  // Edit Building
  const editBuilding = async (req, res) => {
    const { campusId, name, status } = req.body;
    try {
      const building = await Building.findById(req.params.id);
      if (!building) {
        return res.status(404).json({ error: 'Building not found' });
      }
      building.campusId = campusId || building.campusId;
      building.name = name || building.name;
      building.status = status || building.status;
      await building.save();
      res.json(building);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  // Delete Building
const removeBuilding = async (req, res) => {
    try {
      const building = await Building.findById(req.params.id);
      if (!building) {
        return res.status(404).json({ error: 'Building not found' });
      }
      const deletedBuilding = await Building.deleteOne({ _id: req.params.id });
  
      if (deletedBuilding.deletedCount === 1) {
        res.json({ message: 'Building deleted' });
      } else {
        return res.status(404).json({ error: 'Building not found' });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  module.exports = removeBuilding;
  

  module.exports = {addBuilding,getBuilding,editBuilding,removeBuilding}
  