const mongoose = require('mongoose');

// Define Port Schema
const portSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 100
  },
  code: {
    type: String,
    required: true,
    maxlength: 50
  }
}, { _id: false });

// Define Destination Schema
const destinationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 100
  },
  price: {
    type: Number,
    required: true,
    min: 0
  }
}, { _id: true });

// Define Location Schema
const locationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 100
  },
  ports: [portSchema],  // Allow multiple ports
  destinations: [destinationSchema]  // Allow multiple destinations
}, { _id: true });

// Define Auction Schema
const auctionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    maxlength: 100
  },
  locations: [locationSchema]
}, { timestamps: true });

const Auction = mongoose.model('Auction', auctionSchema);
module.exports = { Auction };