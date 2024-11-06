import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { useDispatch, useSelector } from 'react-redux';
import { sendContact } from '../../store/actions/contact.action'; 
import { Icons } from '../../icons/index';

import ButtonComponent from '../Shared/button';

const ContactForm = () => {
    const dispatch = useDispatch();
    const { loading, success, error } = useSelector(state => state.contact);
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen((prev) => !prev); // Toggle the open state on each click
    };

    const handleBlur = () => {
        setIsOpen(false); // Close when the select loses focus
    };
    
    const initialValues = {
        name: '',
        surname: '',
        countryCode: '',
        mobileNumber: '',
        comment: '',
    };

    const validationSchema = Yup.object({
        name: Yup.string().required('Name is required'),
        surname: Yup.string().required('Surname is required'),
        countryCode: Yup.string().required('Country code is required'),
        mobileNumber: Yup.string()
        .required('Phone is required!')
        .matches(/^[0-9]*$/, 'Phone number is not valid'),
        comment: Yup.string().required('Comment is required'),
    });

    const onSubmit = async(values, { resetForm }) => {
        dispatch(sendContact(values)).then(() => {
            resetForm();
        }).catch((err) => {
            console.error('Error sending contact data:', err);
        });
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {() => (
                <Form className="w-full p-4 bg-transparent rounded">
            
                    <div className="flex justify-between items-center  xs:flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row mb-[2rem]">
                        <div className="flex flex-col xs:w-full sm:w-full md:w-[48%] lg:w-[48%] xl:w-[48%] 2xl:w-[48%] relative xs:mb-[2rem] sm:mb-[2rem] md:mb-0 lg:mb-0 xl:mb-0 2xl:mb-0">
                       
                            <Field 
                                type="text" 
                                id="name" 
                                name="name" 
                                placeholder="Name" 
                                className="shadow-custom border p-2 bg-[#fff] text-[#a3acb9] rounded-[12px] relative"
                            />
                            <ErrorMessage name="name" component="div" className="text-red-500 text-sm font-interMedium mt-[5px] absolute z-[5] bottom-[-50%] left-[1%]" />
                        </div>
                        <div className="flex flex-col xs:w-full sm:w-full md:w-[48%] lg:w-[48%] xl:w-[48%] 2xl:w-[48%] relative">
               
                            <Field 
                                type="text" 
                                id="surname" 
                                name="surname" 
                                placeholder="Surname" 
                                className="shadow-custom border p-2 bg-[#fff] text-[#a3acb9] rounded-[12px] relative"
                            />
                            <ErrorMessage name="surname" component="div" className="text-red-500 text-sm font-interMedium mt-[5px] absolute z-[5] bottom-[-50%] left-[2%]" />
                        </div>
                    </div>

                
                    <div className="flex shadow-custom mb-[2rem]">
                        <div className="xs:w-[130px] sm:w-[130px] md:w-[200px] lg:w-[200px] xl:w-[200px] 2xl:w-[200px] relative">
                            <Icons.EarthIcon className="w-[20px] h-[20px] absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 left-[10%] z-10"/>
                            <Icons.DownArrow className={`w-[16px] h-[16px] absolute top-1/2 transform -translate-y-1/2 right-[10%] z-10 pointer-events-none transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}/>

                            <Field 
                                as="select" 
                                id="countryCode" 
                                name="countryCode" 
                                className="h-[46px] rounded-tl-[12px] rounded-bl-[12px] appearance-none w-full bg-[#fff] xs:text-[12px] sm:text-[14] md:text-[18px] lg:text-[20px] xl:text-[20px] 2xl:text-[20px] text-[#5d636b] xs:pl-[30px] sm:pl-[30px] md:pl-[40px] lg:pl-[40px] xl:pl-[40px] 2xl:pl-[40px] pr-[25px] relative  border-r-2 border-r-primary-purpleLighter"
                                onClick={handleClick} 
                                onBlur={handleBlur} 
                            >
                                <option value="" className="text-[#5d636b]">Select</option>
                                <option value="+995" className="text-[#5d636b]">+995 (Geo)</option>
                                <option value="+994" className="text-[#5d636b]">+994 (AZ)</option>
                                <option value="+7" className="text-[#5d636b]">+7 (RUS)</option>
                                <option value="+7" className="text-[#5d636b]">+7 (KAZ)</option>
                          
                            </Field>
                            <ErrorMessage name="countryCode" component="div" className="text-red-500 text-sm font-interMedium mt-[5px] absolute z-[5]" />
                        </div>
                        <div className="flex-1">
                          
                            <Field 
                                type="text" 
                                id="mobileNumber" 
                                name="mobileNumber" 
                                placeholder="Mobile Number" 
                                className="h-[46px]  rounded-tr-[12px] px-[20px] rounded-br-[12px] w-full bg-[#fff] text-[#5d636b] relative"
                            />
                            <ErrorMessage name="mobileNumber" component="div" className="text-red-500 text-sm font-interMedium mt-[5px] absolute z-[5]" />
                        </div>
                    </div>

                     
                    <div className="mb-[1.5rem] sm:mb-[1.5rem] md:mb-[2.5rem] lg:mb-[2.5rem] xl:mb-[2.5rem] 2xl:mb-[2.5rem] relative">
               
                        <Field 
                            as="textarea" 
                            id="comment" 
                            name="comment" 
                            rows="4" 
                            placeholder="You can leave comment here" 
                            className=" shadow-custom border p-2 w-full  h-[112px] sm:h-[70px] md:h-[70px] xl:h-[102px] 2xl:h-[102px] rounded-[12px] shadow-boxShadow bg-[#fff] resize-none text-[#5d636b]"
                        />
                        <ErrorMessage name="comment" component="div" className="text-red-500 text-sm font-interMedium mt-[5px] absolute z-[5] bottom-[-15px]" />
                    </div>

                 
                    <div className="flex justify-start">
                        {/* <button 
                            type="submit" 
                            className="w-[220px] h-[38px] md:h-[48px] lg:h-[48px] xl:w-[220px] 2xl:w-[220px] xl:h-[48px] 2xl:h-[48px] bg-gradient-to-b from-[#2F53FE] to-[#1B3CDE] font-interBold font-bold text-[16px] xl:text-[20px] 2xl:text-[20px] text-white text-center cursor-pointer rounded-[12px]"
                        >
                             {loading ? 'Sending...' : 'Send'}
                        </button> */}
                        <ButtonComponent title={"Send"} className="w-[220px] h-[38px] md:h-[48px] lg:h-[48px] xl:w-[220px] 2xl:w-[220px] xl:h-[48px] 2xl:h-[48px]"/>
                    </div>
                    {success && <div className="text-green-500">Message sent successfully!</div>}
                    {error && <div className="text-red-500">{error}</div>}
                </Form>
            )}
        </Formik>
    );
}

export default ContactForm;