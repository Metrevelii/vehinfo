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

const getAllContacts = async () => {
    try {
        const contacts = await Contact.find({});
        return contacts;
    } catch (error) {
        throw new ApiError(httpStatus.BAD_REQUEST, 'Error retrieving contacts');
    }
};

const deleteContact = async (contactId) => {
    try {
        const deletedContact = await Contact.findByIdAndDelete(contactId);
        if (!deletedContact) {
            throw new ApiError(httpStatus.NOT_FOUND, 'Contact not found');
        }
        return deletedContact;
    } catch (error) {
        throw new ApiError(httpStatus.BAD_REQUEST, 'Error deleting contact');
    }
};



module.exports = { createContact, getAllContacts, deleteContact  };