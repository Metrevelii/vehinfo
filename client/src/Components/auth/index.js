import React, { useState } from "react";
import AuthForm from './authForm';

import ButtonComponent from '../../Components/Shared/button';

const RegisterLogin = (props) => {
  const [formType, setFormType] = useState(false);

  const toogleFormType = () => {
    setFormType(!formType);
  };

  return (
    <>
      <div className="w-full h-[70vh] bg-[#fff] flex justify-center items-center">
        <div className="mx-auto max-w-[1432px] px-4 w-full">
          <div className="w-[100%] lg:w-[80%] xl:w-[80%] 2xl:w-[80%] h-auto py-[20px] flex justify-around flex-col sm:flex-col md:flex-col  lg:flex-row  xl:flex-row  2xl:flex-row rounded-[12px] border border-primary-blue mx-auto">
            <div className="w-full lg:w-[40%] xl:w-[40%] 2xl:w-[40%] flex justify-center items-center flex-col">
              {formType ? (
                <>
                  <h1 className="font-interBold font-bold xs:[text-4vw] sm:text-[26px] md:text-[28px] xl:text-[32px] 2xl:text-[32px] text-primary-blue">New Customer</h1>
                  <p className="font-interMedium font-[24px] text-primary-blue mt-[20px] text-center">If you are not registered, Feel free to register !</p>
                </>
              ) : (
                <>
                  <h1 className="font-interBold font-bold xs:[text-4vw] sm:text-[26px] md:text-[28px] xl:text-[32px] 2xl:text-[32px] text-primary-blue">Welcome back</h1>
                  <p className="font-interMedium font-[24px] text-primary-blue mt-[20px]">Login to your account </p>
                </>
              )}
              <ButtonComponent onClick={() => toogleFormType()} title={formType ? "Already Registered" : "Need to register"} className="mt-[2rem] w-auto px-[10px] h-[42px] md:h-[48px] lg:h-[48px] xl:h-[48px] 2xl:h-[48px]"/>
            </div>
            <div className="w-0 lg:w-[2px] xl:w-[2px] 2xl:w-[2px] h-0 lg:h-[300px] xl:h-[300px] 2xl:h-[300px] bg-primary-blue"></div>
            <div className="w-full signInCustomStyles lg:w-[40%] xl:w-[40%] 2xl:w-[40%] flex justify-center items-center flex-col mt-[3rem] lg:mt-0 xl:mt-0 2xl:mt-0">
              <h2 className="font-interBold font-bold xs:[text-4vw] sm:text-[26px] md:text-[28px] xl:text-[32px] 2xl:text-[32px] text-primary-blue mb-[1.5rem]">{formType ? "Register" : "Sign In"}</h2>
              <AuthForm 
                 
                 formType={formType}
                 {...props}
              />
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterLogin;
