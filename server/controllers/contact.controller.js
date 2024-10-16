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
    }
};

module.exports = contactController;