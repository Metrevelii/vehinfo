const { Contact } = require("../models/contact");
const { ApiError } = require('../middleware/apiError');
const httpStatus = require('http-status');

const createContact = async (data) => {
    try {
        const contact = new Contact(data);
        await contact.save();
        return contact;
    } catch (error) {
        throw new ApiError(httpStatus.BAD_REQUEST, 'Error saving contact information');
    }
};

module.exports = { createContact };