const { ObjectId } = require("mongodb");
const express = require("express");
const router = express.Router();
const Campus = require("../models/Campus");
const Buildings = require("../models/Building");

// Get Campus list
const getCampus = async (req, res) => {
  try {
    const campuses = await Campus.find();
    res.json(campuses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Add Campus
const addCampus = async (req, res) => {
  const { name, status } = req.body;
  try {
    const campus = new Campus({ name, status });
    await campus.save();
    res.status(201).json(campus);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Edit Campus
const editCampus = async (req, res) => {
  const { name, status } = req.body;
  try {
    const campus = await Campus.findById(req.params.id);
    if (!campus) {
      return res.status(404).json({ error: "Campus not found" });
    }
    campus.name = name || campus.name;
    campus.status = status || campus.status;
    await campus.save();
    res.json(campus);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete Campus
const removeCampus = async (req, res) => {
  const campusId = req.params.id;
  try {
    const Data = await Campus.aggregate([
      {
        $match: {
          _id: new ObjectId(campusId),
        },
      },
      {
        $lookup: {
          from: "buildings",
          let: {
            campusId: "$_id",
          },
          pipeline: [
            {
              $match: {
                $expr: {
                  $and: [{ $eq: ["$$campusId", "$campusId"] }],
                },
              },
            },
          ],
          as: "buildings",
        },
      },
    ]);
    try {
      const campus = Data[0];
      
      // Check if there are no associated buildings
      if (!campus) {
        return res.status(404).json({ error: "Campus not found" });
      } else if(campus.buildings.length === 0) {
        const deletedCampus = await Campus.findByIdAndDelete(campus._id);
    
        res.json({ message: "Campus deleted", deletedCampus });
      } 
      else {
        console.log("Building is tagged to a campus and cannot be deleted!");
        return res.status(400).json({
          error: "Building is tagged to a campus and cannot be deleted",
        });
      }
    } catch (err) {
      console.error("Error:", err);
      res.status(500).json({ error: err.message });
    }
    
    console.log("Data:", Data);
  } catch (err) {
    console.error("Error:", err);
    // Handle any errors that occur during the aggregation
  }
};

module.exports = { getCampus, addCampus, editCampus, removeCampus };
