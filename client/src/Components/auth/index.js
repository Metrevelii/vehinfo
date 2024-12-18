import React, { useState } from "react";
import RegisterForm from "./registerForm";
import LoginForm from "./loginForm";
import ForgotPasswordForm from "./forgetPasswordForm";

import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import ButtonComponent from "../../Components/Shared/button";

const RegisterLogin = (props) => {
  const [formType, setFormType] = useState(null);

  const translation = useSelector((state) => state.translations);

  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const { t } = useTranslation("global");

  const toggleFormType = (type) => {
    setFormType(type);
  };

  return (
    <>
      <div className="w-full py-[30px] h-auto bg-[#fff] flex justify-center items-center mt-[100px]">
        <div className="mx-auto max-w-[1432px] shadow-default px-4 w-[92%] sm:w-[94%] md:w-[553px] lg:w-[653px] xl:w-[753px] 2xl:w-[953px] h-[600px] rounded-[12px] bg-primary-white shadow-boxShadow">
          <div className="w-[100%] h-full py-[20px] flex justify-around flex-col sm:flex-col md:flex-col  lg:flex-row  xl:flex-row  2xl:flex-row rounded-[12px] bordermx-auto">
            {formType === null && (
              <div className="w-full h-full flex justify-center items-center flex-col py-[20px]">
                <h1 className="font-interBold uppercase text-primary-black text-[32px]">
                  {currentLanguage === "az"
                    ? translation.vars.text22az
                    : translation.vars.text22ru}
                </h1>
                <div className="flex justify-center items-center flex-col mt-[50px]">
                  <ButtonComponent
                    className="w-[200px] sm:w-[230px] md:w-[280px] lg:w-[350px] xl:w-[467px] 2xl:w-[467px] h-[50px] md:h-[50px] xl:h-[65px] 2xl:h-[65px] rounded-[12px] flex justify-center items-center font-interRegular text-primary-white text-[20px] mt-[20px]"
                    onClick={() => toggleFormType("login")}
                    title={t("header.signIn")}
                  />
                  <button
                    className="w-[200px] sm:w-[230px] md:w-[280px] lg:w-[350px] xl:w-[467px] 2xl:w-[467px] h-[50px] md:h-[50px] xl:h-[65px] 2xl:h-[65px] rounded-[12px] flex justify-center items-center border border-solid border-[#919191] font-interRegular text-primary-black text-[20px] mt-[20px]"
                    onClick={() => toggleFormType("register")}
                  >
                    {t("header.register")}
                  </button>
                </div>
                <button
                  className="font-interRegular text-[#757575] mt-[25px]"
                  onClick={() => toggleFormType("forgotPassword")}
                >
                  {t("header.forgotPassword")}
                </button>
              </div>
            )}

            {formType === "register" && (
              <RegisterForm goBack={() => setFormType(null)} />
            )}
            {formType === "login" && (
              <LoginForm goBack={() => setFormType(null)} />
            )}
            {formType === "forgotPassword" && (
              <ForgotPasswordForm goBack={() => setFormType(null)} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterLogin;
