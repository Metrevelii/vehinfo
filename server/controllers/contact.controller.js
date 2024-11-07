const { contactService } = require('../services');
const httpStatus = require('http-status');
const { ApiError } = require('../middleware/apiError');
// const { validationResult } = require('express-validator');

const contactController = {
    async createContact(req, res, next) {
        try {

            // const errors = validationResult(req);
            // if (!errors.isEmpty()) {
            //     // Throw an ApiError if validation fails
            //     throw new ApiError(httpStatus.BAD_REQUEST, 'Validation Error', { errors: errors.array() });
            // }

            const { name, surname, countryCode, mobileNumber, comment } = req.body;

           
            const contact = await contactService.createContact({
                name,
                surname,
                countryCode,
                mobileNumber,
                comment,
            });

            res.status(httpStatus.CREATED).json(contact);
        } catch (error) {
            next(error);
        }
    },
    async getAllContacts(req, res, next) {
        try {
            const contacts = await contactService.getAllContacts();
            res.status(httpStatus.OK).json(contacts);
        } catch ( error) {
            next (error);
        }
    },
    async deleteContact(req, res, next) {
        try {
            const contactId = req.params.id;
            const deletedContact = await contactService.deleteContact(contactId);
            res.status(httpStatus.OK).json(deletedContact);
        } catch (error) {
            next(error);
        }
    }
};

module.exports = contactController;