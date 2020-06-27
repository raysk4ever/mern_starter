const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
    required: true
  },
  departmentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'departments',
    required: true
  },
  requestedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
    required: true
  },
  status: {
    type: String,
    enum: ['Pending', 'Approved', 'Rejected'],
    default: 'Pending'
  }
})

module.exports = mongoose.model('requests', requestSchema);