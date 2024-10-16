import * as Yup from 'yup';

export const contactValidationSchema = Yup.object().shape({
    name: Yup.string()
        .required('Name is required')
        .min(2, 'Name must be at least 2 characters')
        .max(50, 'Name must be at most 50 characters'),
    
    surname: Yup.string()
        .required('Surname is required')
        .min(2, 'Surname must be at least 2 characters')
        .max(50, 'Surname must be at most 50 characters'),
    
    countryCode: Yup.string()
        .required('Country code is required')
        .matches(/^\+\d{1,3}$/, 'Country code must be in the format +XXX'),

    mobileNumber: Yup.string()
        .required('Mobile number is required')
        .min(6, '')
        .max(50, '')
        .matches(/^\d{10}$/, 'Mobile number must be exactly 10 digits'),

    comment: Yup.string()
        .max(500, 'Comment must be at most 500 characters')
        .optional(),
});