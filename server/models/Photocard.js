const mongoose = require('mongoose');
const { Schema } = mongoose;

const PhotocardSchema = new mongoose.Schema({
    artist_name: { type: String, required: true},
    title: { type: String, maxlength: 100 },
    image: {type: String, required: true},
    details: { type: String, maxlength: 300 },
    cost: { type: mongoose.Types.Decimal128, default: 0 }, 
    posting_date: { type: Date, default: Date.now }
  });

  module.exports = mongoose.model('Photocard', PhotocardSchema);
  