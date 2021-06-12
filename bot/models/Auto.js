const mongoose = require('mongoose');

const AutoSchema = new mongoose.Schema({
  name_id: {
    type: String,
  },
  name: {
    type: String,
    default: 'Unknown',
  },
  cost: {
    type: String,
    default: 'Unknown',
  },
  price: {
    type: String,
    default: 'Unknown',
  },
  gearbox: {
    type: String,
    default: 'Unknown',
  },
  year: {
    type: String,
    default: 'Unknown',
  },
  drive: {
    type: String,
    default: 'Unknown',
  },
  seats: {
    type: String,
    default: 'Unknown',
  },
  fuel: {
    type: String,
    default: 'Unknown',
  },
  desc: {
    type: String,
    default: 'Unknown',
  },
});

module.exports = Auto = mongoose.model('auto', AutoSchema);
