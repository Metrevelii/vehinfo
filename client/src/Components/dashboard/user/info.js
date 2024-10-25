import React from "react";
import DashboardLayout from "../../hoc/dashbordLayout";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
 

import { useDispatch  } from "react-redux";
import { userUpdateProfile } from "../../../store/actions";

const UserInfo = ({ users }) => {
  const dispatch = useDispatch();
 
 

  const initialValues = {
      firstname: users.data.firstname || '',
      lastname: users.data.lastname || '',
  };

  const validationSchema = Yup.object({
      firstname: Yup.string().required('Name is required'),
      lastname: Yup.string().required('Lastname is required'),
  });
  
  const onSubmit = async (values) => {
    dispatch(userUpdateProfile(values))
    

};
 

  return (
    <DashboardLayout title="User information">
     <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {() => (
                <Form className="w-full p-4 bg-transparent rounded">
                    <div className="flex justify-between mb-4">
                        <div className="flex flex-col w-[48%] relative">
                            <Field 
                                type="text" 
                                id="firstname" 
                                name="firstname" 
                                placeholder="firstname" 
                                className="shadow-custom border p-2 bg-[#fff] text-[#a3acb9] rounded-[12px] relative"
                            />
                            <ErrorMessage name="firstname" component="div" className="text-red-500 text-sm font-interMedium mt-[5px] absolute bottom-[-50%] left-[1%]" />
                        </div>
                        <div className="flex flex-col w-[48%] relative">
                            <Field 
                                type="text" 
                                id="lastname" 
                                name="lastname" 
                                placeholder="lastname" 
                                className="shadow-custom border p-2 bg-[#fff] text-[#a3acb9] rounded-[12px] relative"
                            />
                            <ErrorMessage name="lastname" component="div" className="text-red-500 text-sm font-interMedium mt-[5px] absolute bottom-[-50%] left-[1%]" />
                        </div>
                    </div>
                    
                    <div className="flex justify-start">
                        <button 
                            type="submit" 
                            className="w-[220px] h-[48px] bg-gradient-to-b from-[#2F53FE] to-[#1B3CDE] flex justify-center items-center font-interBold font-bold text-[20px] text-white rounded-[12px]"
                        >
                            Edit Profile
                        </button>
                    </div>
      
                </Form>
            )}
        </Formik>
    </DashboardLayout>
  );
};

export default UserInfo;
