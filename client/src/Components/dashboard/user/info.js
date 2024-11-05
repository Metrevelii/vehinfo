import React from 'react';
import DashboardLayout from '../../hoc/dashbordLayout';
import { useFormik } from 'formik';
import * as Yup from 'yup';
 
 

import { useDispatch } from 'react-redux';
import { userUpdateProfile } from '../../../store/actions/user.actions';

const UserInfo = ({ users, signOutUser }) => {
    const dispatch = useDispatch();

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            firstname: users.data.firstname,
            lastname: users.data.lastname,
        },
        validationSchema: Yup.object({
            firstname: Yup.string()
                .min(3, '3 char min')
                .max(30, '30 char max')
                .required('Sorry, you need the firstname'),
            lastname: Yup.string()
                .min(3, '3 char min')
                .max(30, '30 char max')
                .required('Sorry, you need the lastname'),
        }),
        onSubmit: (values) => {
            dispatch(userUpdateProfile(values));
        },
    });

    return (
        <DashboardLayout title="User information"  signOutUser={signOutUser}>
            <form
                className="mt-[30px] w-full"
   
                onSubmit={formik.handleSubmit}
            >
            <div className="flex items-start justify-center flex-col mt-[20px]">
                    <label htmlFor="firstname">Edit your firstname</label>
                    <input
                        type="text"
                        id="firstname"
                        name="firstname"
                        className="h-[46px]  rounded border border-solid mt-[7px] border-primary-blue px-[20px] w-[50%] bg-[#fff] text-[#5d636b] relative"
                   
                        {...formik.getFieldProps('firstname')}
                    />
  
                </div>
            <div className="flex items-start justify-center flex-col mt-[20px]">
                    <label htmlFor="lastname">Edit your lastname</label>
                    <input
                        type="text"
                        id="lastname"
                        name="lastname"
                        className="h-[46px]  rounded border border-solid mt-[7px] border-primary-blue px-[20px] w-[50%] bg-[#fff] text-[#5d636b] relative"
                        {...formik.getFieldProps('lastname')}
                    />
          
                </div>
                <button
                   className="w-auto h-auto px-[20px] py-[7px] bg-primary-blue text-primary-white text-interMedium text-[15px] rounded mt-[20px]"
                   type="submit"
                   
                >
                    Edit profile
                </button>
            </form>
            <hr />
            
        </DashboardLayout>
    );
};

export default UserInfo;