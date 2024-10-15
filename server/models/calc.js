const mongoose = require('mongoose');

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
  
 
  const locationSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      maxlength: 100
    },
    port: portSchema,
    destination: {
      type: String,
      required: true,
      maxlength: 100
    },
    price: {
      type: Number,
      required: true,
      min: 0
    }
  }, { _id: false });
  
 
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