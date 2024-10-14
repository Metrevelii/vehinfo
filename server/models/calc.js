const mongoose = require('mongoose');

const auctionSchema = mongoose.Schema({
    name: {
        required: true,
        type: String,
        unique: 1,
        maxlength: 100
    }
});

const Auction = mongoose.model('Auction', auctionSchema);
module.exports = { Auction };