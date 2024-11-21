import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { useDispatch, useSelector } from "react-redux";
import { resetPassword } from "../../store/actions/user.actions";
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

import ButtonComponent from "../Shared/button";

const ResetPasswordForm = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
 
  const dispatch = useDispatch();

  const successMessage = useSelector(state => state.notifications.successMessage);
  const errorMessage = useSelector(state => state.notifications.errorMessage);

  const location = useLocation();  
  const token = new URLSearchParams(location.search).get('t');  

  const validationSchema = Yup.object({
    newPassword: Yup.string()
      .min(6, "New password must be at least 6 characters")
      .required("Password is required"),
    repeatNewPassword: Yup.string()
      .oneOf([Yup.ref("newPassword"), null], "Passwords must match")
      .required("Repeat new password is required"),
  });

  const initialValues = {
    newPassword: "",
    repeatNewPassword: "",
  };

  const handleSubmit = async (values) => {
    if (!token) {
 
        return;
      }

    setLoading(true);
 
 
    const result = await dispatch(resetPassword({ token, password: values.newPassword }));

    if (result.success) {
      setLoading(false);
      navigate('/sign-in');
 
    } else {
      setLoading(false);
 
    }
  };


  return (
    <div className="w-full h-[70vh] bg-[#fff] flex justify-center items-center shipBg">
      <div className="mx-auto max-w-[1432px] px-4 w-[92%] sm:w-[94%] md:w-[553px] lg:w-[653px] xl:w-[753px] 2xl:w-[953px] h-[600px] rounded-[12px] bg-primary-white shadow-boxShadow">
        <div className="w-[100%] h-full py-[20px] flex justify-around flex-col sm:flex-col md:flex-col  lg:flex-row  xl:flex-row  2xl:flex-row rounded-[12px] bordermx-auto">
          <div className="w-full flex justify-center items-center flex-col">
            <h2 className="font-interBold uppercase text-primary-black text-[25px] lg:text-[32px] xl:text-[32px] 2xl:text-[32px] mb-[1.5rem]">
              Register
            </h2>

            {loading ? (
              <div>Loading ...</div>
            ) : (
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {() => (
                  <Form className="flex flex-col space-y-4 w-[90%] sm:w-[65%] md:w-[60%] lg:w-[50%] xl:w-[40%] 2xl:w-[40%]">
                    <div className="flex flex-col w-full">
                      <label
                        htmlFor="newPassword"
                        className="mb-[0.5rem] text-[16px] font-interRegular text-primary-black"
                      >
                        Enter New Password
                      </label>
                      <Field
                        type="password"
                        id="newPassword"
                        name="newPassword"
                        placeholder="Enter New Password"
                        className="border p-2 bg-[#d4dce7] text-[#000] border-solid border-primary-purpleMoreLight h-[54px] rounded-[12px] shadow-boxShadow"
                      />
                      <ErrorMessage
                        name="newPassword"
                        component="div"
                        className="text-red-500 text-sm"
                      />
                    </div>

                    <div className="flex flex-col w-full">
                      <label
                        htmlFor="repeatNewPassword"
                        className="mb-[0.5rem] text-[16px] font-interRegular text-primary-black"
                      >
                        Repeat New Password
                      </label>
                      <Field
                        type="password"
                        id="repeatNewPassword"
                        name="repeatNewPassword"
                        placeholder="Repeat New Password"
                        className="border p-2 bg-[#d4dce7] text-[#000] border-solid border-primary-purpleMoreLight h-[54px] rounded-[12px] shadow-boxShadow"
                      />
                      <ErrorMessage
                        name="repeatNewPassword"
                        component="div"
                        className="text-red-500 text-sm"
                      />
                    </div>

                    <div className="w-full flex justify-center items-center">
                      <ButtonComponent
                        title="Reset Password"
                        className="w-[100%] h-[48px] rounded-[12px]"
                      />
                    </div>
                    {successMessage && (
                    <div className="text-green-500 mt-4">{successMessage}</div>
                    )}
                    {errorMessage && (
                    <div className="text-red-500 mt-4">{errorMessage}</div>
                    )}
                  </Form>
                )}
              </Formik>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordForm;
