import React from 'react';
import { useFormik } from 'formik';

import { useDispatch, useSelector } from 'react-redux';
import { updateSiteVars } from '../../../../store/actions/site.action';

const SiteVars = () => {
    const site = useSelector(state => state.site);
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            addressaz: site.vars.addressaz,
            addressru: site.vars.addressru,
            phone: site.vars.phone,
            hours: site.vars.hours,
            email: site.vars.email,
            facebook: site.vars.facebook,
            instagram: site.vars.instagram,
        },
        
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
                <label className="font-interMedium text-primary-blue text-[14px]" htmlFor="address">Edit address AZ</label>
                <input
                    type="text"
                    id="addressaz"
                    name="addressaz"
                    className="h-[46px]  rounded border border-solid mt-[7px] border-primary-blue px-[20px] w-full lg:w-[50%] xl:w-[50%] 2xl:w-[50%] bg-[#fff] text-primary-black font-interMedium relative"
                   
                    {...formik.getFieldProps('addressaz')}
                />
                
                {formik.touched.addressaz && formik.errors.addressaz ? (
                    <div className="error">{formik.errors.addressaz}</div>
                ) : null}
            </div>
            <div className="flex items-start justify-center flex-col mt-[20px]">
                <label className="font-interMedium text-primary-blue text-[14px]" htmlFor="address">Edit address RU</label>
                <input
                    type="text"
                    id="addressru"
                    name="addressru"
                    className="h-[46px]  rounded border border-solid mt-[7px] border-primary-blue px-[20px] w-full lg:w-[50%] xl:w-[50%] 2xl:w-[50%] bg-[#fff] text-primary-black font-interMedium relative"
                   
                    {...formik.getFieldProps('addressru')}
                />
                
                {formik.touched.addressru && formik.errors.addressru ? (
                    <div className="error">{formik.errors.addressru}</div>
                ) : null}
            </div>

            <div className="flex items-start justify-center flex-col mt-[20px]">
                <label className="font-interMedium text-primary-blue text-[14px]" htmlFor="phone">Edit phone</label>
                <input
                    type="text"
                    id="phone"
                    name="phone"
      
                    {...formik.getFieldProps('phone')}
                     className="h-[46px]  rounded border border-solid mt-[7px] border-primary-blue px-[20px] w-full lg:w-[50%] xl:w-[50%] 2xl:w-[50%] bg-[#fff] text-primary-black font-interMedium relative"
                />
                {formik.touched.phone && formik.errors.phone ? (
                    <div className="error">{formik.errors.phone}</div>
                ) : null}
            </div>

           

            <div className="flex items-start justify-center flex-col mt-[20px]">
                <label className="font-interMedium text-primary-blue text-[14px]" htmlFor="email">Edit email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
           
                    {...formik.getFieldProps('email')}
                    className="h-[46px]  rounded border border-solid mt-[7px] border-primary-blue px-[20px] w-full lg:w-[50%] xl:w-[50%] 2xl:w-[50%] bg-[#fff] text-primary-black font-interMedium relative"
                />
                {formik.touched.email && formik.errors.email ? (
                    <div className="error">{formik.errors.email}</div>
                ) : null}
            </div>
            <div className="flex items-start justify-center flex-col mt-[20px]">
                <label className="font-interMedium text-primary-blue text-[14px]" htmlFor="email">Edit facebook profile</label>
                <input
                    type="text"
                    id="facebook"
                    name="facebook"
           
                    {...formik.getFieldProps('facebook')}
                    className="h-[46px]  rounded border border-solid mt-[7px] border-primary-blue px-[20px] w-full lg:w-[50%] xl:w-[50%] 2xl:w-[50%] bg-[#fff] text-primary-black font-interMedium relative"
                />
                {formik.touched.facebook && formik.errors.facebook ? (
                    <div className="error">{formik.errors.facebook}</div>
                ) : null}
            </div>
            <div className="flex items-start justify-center flex-col mt-[20px]">
                <label className="font-interMedium text-primary-blue text-[14px]" htmlFor="email">Edit instagram profile</label>
                <input
                    type="text"
                    id="instagram"
                    name="instagram"
           
                    {...formik.getFieldProps('instagram')}
                    className="h-[46px]  rounded border border-solid mt-[7px] border-primary-blue px-[20px] w-full lg:w-[50%] xl:w-[50%] 2xl:w-[50%] bg-[#fff] text-primary-black font-interMedium relative"
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