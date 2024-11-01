import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { useDispatch, useSelector } from 'react-redux';
import { updateSiteVars } from '../../../../store/actions/site.action';

const SiteVars = () => {
    const site = useSelector(state => state.site);
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            address: site.vars.address,
            phone: site.vars.phone,
            hours: site.vars.hours,
            email: site.vars.email,
            facebook: site.vars.facebook,
            instagram: site.vars.instagram,
        },
        validationSchema: Yup.object({
            address: Yup.string()
                .min(3, 'You need to add more')
                .max(100, 'You need to add less')
                .required('This is required'),
            phone: Yup.string()
                .max(15, 'You need to add less')
                .required('This is required'),
            hours: Yup.string()
                .max(100, 'You need to add less')
                .required('This is required'),
            email: Yup.string()
                .email('You need to add a valid email')
                .required('This is required'),
            facebook: Yup.string()
                
                .required('This is required'),
            instagram: Yup.string()
              
                .required('This is required')
        }),
        onSubmit: (values) => {
            dispatch(updateSiteVars(
                {
                    _id: site.vars._id,
                    ...values
                }
            ));
        }
    });

    return (
        <form className="mt-3" onSubmit={formik.handleSubmit}>

            <div className="flex items-start justify-center flex-col mt-[20px]">
                <label htmlFor="address">Edit address</label>
                <input
                    type="text"
                    id="address"
                    name="address"
                    className="h-[46px]  rounded border border-solid mt-[7px] border-primary-blue px-[20px] w-[50%] bg-[#fff] text-[#5d636b] relative"
                   
                    {...formik.getFieldProps('address')}
                />
                
                {formik.touched.address && formik.errors.address ? (
                    <div className="error">{formik.errors.address}</div>
                ) : null}
            </div>

            <div className="flex items-start justify-center flex-col mt-[20px]">
                <label htmlFor="phone">Edit phone</label>
                <input
                    type="text"
                    id="phone"
                    name="phone"
      
                    {...formik.getFieldProps('phone')}
                     className="h-[46px]  rounded border border-solid mt-[7px] border-primary-blue px-[20px] w-[50%] bg-[#fff] text-[#5d636b] relative"
                />
                {formik.touched.phone && formik.errors.phone ? (
                    <div className="error">{formik.errors.phone}</div>
                ) : null}
            </div>

            <div className="flex items-start justify-center flex-col mt-[20px]">
                <label htmlFor="hours">Edit hours</label>
                <input
                    type="text"
                    id="hours"
                    name="hours"
        
                    {...formik.getFieldProps('hours')}
                    className="h-[46px]  rounded border border-solid mt-[7px] border-primary-blue px-[20px] w-[50%] bg-[#fff] text-[#5d636b] relative"
                />
                {formik.touched.hours && formik.errors.hours ? (
                    <div className="error">{formik.errors.hours}</div>
                ) : null}
            </div>

            <div className="flex items-start justify-center flex-col mt-[20px]">
                <label htmlFor="email">Edit email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
           
                    {...formik.getFieldProps('email')}
                    className="h-[46px]  rounded border border-solid mt-[7px] border-primary-blue px-[20px] w-[50%] bg-[#fff] text-[#5d636b] relative"
                />
                {formik.touched.email && formik.errors.email ? (
                    <div className="error">{formik.errors.email}</div>
                ) : null}
            </div>
            <div className="flex items-start justify-center flex-col mt-[20px]">
                <label htmlFor="email">Edit facebook profile</label>
                <input
                    type="text"
                    id="facebook"
                    name="facebook"
           
                    {...formik.getFieldProps('facebook')}
                    className="h-[46px]  rounded border border-solid mt-[7px] border-primary-blue px-[20px] w-[50%] bg-[#fff] text-[#5d636b] relative"
                />
                {formik.touched.facebook && formik.errors.facebook ? (
                    <div className="error">{formik.errors.facebook}</div>
                ) : null}
            </div>
            <div className="flex items-start justify-center flex-col mt-[20px]">
                <label htmlFor="email">Edit instagram profile</label>
                <input
                    type="text"
                    id="instagram"
                    name="instagram"
           
                    {...formik.getFieldProps('instagram')}
                    className="h-[46px]  rounded border border-solid mt-[7px] border-primary-blue px-[20px] w-[50%] bg-[#fff] text-[#5d636b] relative"
                />
                {formik.touched.instagram && formik.errors.instagram ? (
                    <div className="error">{formik.errors.instagram}</div>
                ) : null}
            </div>

            <button
                type="submit"
                className="w-auto h-auto px-[20px] py-[7px] bg-primary-blue text-primary-white text-interMedium text-[15px] rounded mt-[20px]"
            >
                Edit site information
            </button>

        </form>
    );
}

export default SiteVars;