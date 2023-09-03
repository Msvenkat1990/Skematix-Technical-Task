const mongoose = require('mongoose');

const buildingSchema = new mongoose.Schema({
  campusId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Campus',
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['active', 'inactive'],
    required: true,
  },
});

module.exports = mongoose.model('Building', buildingSchema);
