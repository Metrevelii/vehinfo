import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { useDispatch } from "react-redux";
import { userRequestPasswordReset } from "../../store/actions/user.actions";

import ButtonComponent from "../Shared/button";
import { useTranslation } from "react-i18next";

const ForgotPasswordForm = ({ goBack }) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");  
  const [error, setError] = useState(""); 

  const dispatch = useDispatch();

  const { t } = useTranslation("global");

  const handleSubmit = async (values) => {
    setLoading(true);
    setSuccess("");   
    setError("");   

    try {
 
      await dispatch(userRequestPasswordReset(values.email));
 
      setSuccess('Password reset email sent successfully! Please check your inbox.');
    } catch (err) {
 
      setError(err.message || 'An error occurred while sending the reset email.');
    }

    setLoading(false);
  };


  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
  });

  


  return (
    <div className="w-full flex justify-center items-center flex-col">
      <h2 className="font-interBold text-primary-black uppercase text-[25px] lg:text-[32px] xl:text-[32px] 2xl:text-[32px] mb-[4.5rem]">
      {t("header.forgotPassword")}
      </h2>

      {loading ? (
        <div className="font-interMedium font-700 text-primary-black text-[20px]">Loading...</div>
      ) : (
        <Formik
          initialValues={{ email: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form className="flex flex-col space-y-4 w-[90%] sm:w-[65%] md:w-[60%] lg:w-[50%] xl:w-[40%] 2xl:w-[40%]">
              <div className="flex flex-col w-full relative">
                <label
                  htmlFor="email"
                  className="font-interRegular text-[16px] mb-[0.5rem] text-primary-lightGray absolute z-5 left-[10px] top-[2px]"
                >
                  {t("texts.enterEmail")}
                </label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  placeholder=""
                  className="border px-2 pt-[20px] pb-[2px] bg-[#d4dce7] font-interBold text-[#000] border-solid border-[#F25B25] h-[54px] rounded-[12px] shadow-boxShadow"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <div className="w-full flex justify-center items-center">
                <ButtonComponent
                  title={t("texts.sendLink")}
                  className="w-[100%] h-[56px] rounded-[12px]"
                />
              </div>
            </Form>
          )}
        </Formik>
      )}
     {success && <div className="text-green-500 mt-4">{success}</div>}
     {error && <div className="text-red-500 mt-4">{error}</div>}

      <button className="mt-[20px] text-primary-black font-interRegular text-[18px]" onClick={goBack}>
      {t("texts.goBack")}
      </button>
    </div>
  );
};

export default ForgotPasswordForm;