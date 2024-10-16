import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ContactForm = () => {
    const initialValues = {
        name: '',
        surname: '',
        countryCode: '',
        mobile: '',
        comment: '',
    };

    const validationSchema = Yup.object({
        name: Yup.string().required('Name is required'),
        surname: Yup.string().required('Surname is required'),
        countryCode: Yup.string().required('Country code is required'),
        mobile: Yup.string()
        .required('Phone is required!')
        .matches(/^[0-9]*$/, 'Phone number is not valid'),
        comment: Yup.string().required('Comment is required'),
    });

    const onSubmit = (values) => {
        console.log(values);
        // Submit your form values here
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {({ handleChange, values }) => (
                <Form className="w-full p-4 bg-transparent rounded mt-[2rem]">
            
                    <div className="flex justify-between mb-4">
                        <div className="flex flex-col w-[48%]">
                            <label htmlFor="name" className="mb-1 font-bold"></label>
                            <Field 
                                type="text" 
                                id="name" 
                                name="name" 
                                placeholder="Name" 
                                className="border p-2 bg-[#fff] text-[#a3acb9]"
                            />
                            <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
                        </div>
                        <div className="flex flex-col w-[48%]">
                            <label htmlFor="surname" className="mb-1 font-bold"></label>
                            <Field 
                                type="text" 
                                id="surname" 
                                name="surname" 
                                placeholder="Surname" 
                                className="border p-2 bg-[#fff] text-[#a3acb9]"
                            />
                            <ErrorMessage name="surname" component="div" className="text-red-500 text-sm" />
                        </div>
                    </div>

                
                    <div className="flex mb-4">
                        <div className="w-[200px] mr-4">
                            <label htmlFor="countryCode" className="mb-1 font-bold block"></label>
                            <Field 
                                as="select" 
                                id="countryCode" 
                                name="countryCode" 
                                className="border p-2 rounded w-full bg-[#fff] text-[#5d636b]"
                            >
                                <option value="" className="text-[#5d636b]">Select</option>
                                <option value="+995" className="text-[#5d636b]">+995 (Georgia)</option>
                                <option value="+44" className="text-[#5d636b]">+44 (UK)</option>
                                <option value="+1" className="text-[#5d636b]">+1 (USA)</option>
                          
                            </Field>
                            <ErrorMessage name="countryCode" component="div" className="text-red-500 text-sm" />
                        </div>
                        <div className="flex-1">
                            <label htmlFor="mobile" className="mb-1 font-bold block"></label>
                            <Field 
                                type="text" 
                                id="mobile" 
                                name="mobile" 
                                placeholder="Mobile Number" 
                                className="border p-2 rounded w-full bg-[#fff] text-[#5d636b]"
                            />
                            <ErrorMessage name="mobile" component="div" className="text-red-500 text-sm" />
                        </div>
                    </div>

                     
                    <div className="mb-4">
                        <label htmlFor="comment" className="mb-1 font-bold block"></label>
                        <Field 
                            as="textarea" 
                            id="comment" 
                            name="comment" 
                            rows="4" 
                            placeholder="You can leave comment here" 
                            className="border p-2 rounded w-full h-[102px] bg-[#fff] resize-none text-[#5d636b]"
                        />
                        <ErrorMessage name="comment" component="div" className="text-red-500 text-sm" />
                    </div>

                 
                    <div className="flex justify-end">
                        <button 
                            type="submit" 
                            className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 transition-colors"
                        >
                            Send
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    );
}

export default ContactForm;