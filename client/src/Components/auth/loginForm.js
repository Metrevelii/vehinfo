import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { userSignIn } from "../../store/actions/user.actions";
import ButtonComponent from "../Shared/button";
import { useNavigate } from "react-router-dom";

const LoginForm = ({ goBack }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const notifications = useSelector((state) => state.notifications);
  const users = useSelector((state) => state.users);

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const handleSubmit = async (values) => {
    setLoading(true);
    dispatch(userSignIn(values));
  };

  useEffect(() => {
 
    if (notifications?.success && users?.auth) {
      setLoading(false); 
      navigate("/dashboard");  
    } else {
      setLoading(false);
    }
  }, [notifications, users.auth, navigate]);

  return (
    <div className="w-full flex justify-center items-center flex-col">
      <h2 className="font-interBold text-primary-black uppercase text-[25px] lg:text-[32px] xl:text-[32px] 2xl:text-[32px] mb-[1.5rem]">
        Log In
      </h2>

      {loading ? (
        <div>Loading...</div>
      ) : (
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form className="flex flex-col space-y-4 w-[90%] sm:w-[65%] md:w-[60%] lg:w-[50%] xl:w-[40%] 2xl:w-[40%]">
              <div className="flex flex-col w-full ">
                <label
                  htmlFor="email"
                  className="font-interRegular text-[16px] mb-[0.5rem] text-primary-lightGray"
                >
                  Email
                </label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  className="border p-2 bg-[#d4dce7] text-[#000] border-solid border-primary-purpleMoreLight h-[54px] rounded-[12px] shadow-boxShadow"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <div className="flex flex-col w-full mb-[1.5rem]">
                <label
                  htmlFor="password"
                  className="font-interRegular text-[16px] mb-[0.5rem] text-primary-lightGray"
                >
                  Password
                </label>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  className="border p-2 bg-[#d4dce7] text-[#000] border-solid border-primary-purpleMoreLight h-[54px] rounded-[12px] shadow-boxShadow"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <div className="w-full flex justify-center items-center mt-[20px]">
                <ButtonComponent
                  title="Log In"
                  className="w-[100%] h-[48px] rounded-[12px]"
                />
              </div>
            </Form>
          )}
        </Formik>
      )}

      <button className="mt-[20px] text-primary-blue font-interRegular text-[18px]" onClick={goBack}>
        Go back
      </button>
    </div>
  );
};

export default LoginForm;
