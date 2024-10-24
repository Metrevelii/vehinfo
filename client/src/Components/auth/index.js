import React, { useState } from "react";
import AuthForm from './authForm';

const RegisterLogin = (props) => {
  const [formType, setFormType] = useState(false);

  const toogleFormType = () => {
    setFormType(!formType);
  };

  return (
    <>
      <div className="w-full h-[70vh] mt-[80px] bg-[#fff] flex justify-center items-center">
        <div className="mx-auto max-w-[1432px] px-4 w-full">
          <div className="register_login_container">
            <div className="left">
              {formType ? (
                <>
                  <h1 className="newcustomer">New Customer</h1>
                  <p className="para">If you are not registered, Feel free to register !</p>
                </>
              ) : (
                <>
                  <h1 className="newcustomer">Welcome back</h1>
                  <p className="para">Login to your account </p>
                </>
              )}
              <button
                className="register_button"
                onClick={() => toogleFormType()}
              >
                {formType ? "Already Registered ?" : "Need to register"}
              </button>
            </div>
            <div className="right">
              <h2 className="form_headline">{formType ? "Register" : "Sign in"}</h2>
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
