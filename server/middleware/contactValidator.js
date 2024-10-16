const { body } = require('express-validator');

const createContactValidator = [
    body('name')
        .isString().withMessage('Name must be a string')
        .isLength({ min: 2, max: 50 }).withMessage('Name must be between 2 and 50 characters')
        .trim(),
        
    body('surname')
        .isString().withMessage('Surname must be a string')
        .isLength({ min: 2, max: 50 }).withMessage('Surname must be between 2 and 50 characters')
        .trim(),
        
    body('countryCode')
        .isString().withMessage('Country code must be a string')
        .matches(/^\+\d{1,3}$/).withMessage('Country code must start with "+" followed by 1 to 3 digits'),
        
    body('mobileNumber')
        .isString().withMessage('Mobile number must be a string')
        .matches(/^\d{6,15}$/).withMessage('Mobile number must be between 6 and 15 digits'),
        
    body('comment')
        .optional()
        .isString().withMessage('Comment must be a string')
        .isLength({ max: 500 }).withMessage('Comment must be at most 500 characters')
        .trim(),
];



module.exports = { createContactValidator };