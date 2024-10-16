const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    name: { type: String, required: true },
    surname: { type: String, required: true },
    countryCode: { type: String, required: true },
    mobileNumber: { type: String, required: true },
    comment: { type: String, required: false },
    createdAt: { type: Date, default: Date.now },
});

const Contact = mongoose.model('Contact', contactSchema);
module.exports = { Contact };