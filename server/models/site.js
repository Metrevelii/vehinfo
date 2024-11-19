const mongoose = require('mongoose');

const siteSchema = mongoose.Schema({
    countryaz: {
        required: true,
        type: String,
    },
    countryru: {
        required: true,
        type: String,
    },
    addressaz: {
        required: true,
        type: String,
    },
    addressru: {
        required: true,
        type: String,
    },
    hours: {
        required: true,
        type: String
    },
    phone: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String
    },
    facebook: {
        required: true,
        type: String
    },
    instagram: {
        required: true,
        type: String
    }
});

const Site = mongoose.model('Site', siteSchema);

module.exports = { Site }