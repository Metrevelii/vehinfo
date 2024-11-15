import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { userRegister } from "../../store/actions/user.actions";
import { useNavigate } from "react-router-dom";
import ButtonComponent from "../Shared/button";

const RegisterForm = ({ goBack }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const notifications = useSelector((state) => state.notifications);
  const users = useSelector((state) => state.users);

  const validationSchema = Yup.object({
    firstname: Yup.string().required("First name is required"),
    lastname: Yup.string().required("Last name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const handleSubmit = async (values) => {
    setLoading(true);
    dispatch(userRegister(values));
  };

  useEffect(() => {
    if (notifications?.success && users?.auth) {
      setLoading(false); // Stop loading
      navigate("/dashboard"); // Redirect to the dashboard
    } else {
      setLoading(false);
    }
  }, [notifications, users.auth, navigate]);

  const initialValues = {
    email: "",
    password: "",
    firstname: "",
    lastname: "",
  };

  return (
    <div className="w-full flex justify-center items-center flex-col">
      <h2 className="font-interBold text-primary-blue text-[32px] mb-[1.5rem]">
        Register
      </h2>

      {loading ? (
        <div>Loading...</div>
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
                  htmlFor="firstname"
                  className="mb-[0.5rem] text-[16px] font-interRegular text-primary-blue"
                >
                  First Name
                </label>
                <Field
                  type="text"
                  id="firstname"
                  name="firstname"
                  placeholder="First Name"
                  className="border p-2 bg-[#d4dce7] text-[#000] border-solid border-primary-blue rounded-[4px]"
                />
                <ErrorMessage
                  name="firstname"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <div className="flex flex-col w-full mb-[1.5rem]">
                <label
                  htmlFor="lastname"
                  className="font-interRegular text-[16px] mb-[0.5rem] text-primary-blue"
                >
                  Last Name
                </label>
                <Field
                  type="text"
                  id="lastname"
                  name="lastname"
                  placeholder="Last Name"
                  className="border p-2 bg-[#d4dce7] text-[#000] border-solid border-primary-blue rounded-[4px]"
                />
                <ErrorMessage
                  name="lastname"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <div className="flex flex-col w-full mb-[1.5rem]">
                <label
                  htmlFor="email"
                  className="font-interRegular text-[16px] mb-[0.5rem] text-primary-blue"
                >
                  Email
                </label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  className="border p-2 bg-[#d4dce7] text-[#000] border-solid border-primary-blue rounded-[4px]"
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
                  className="font-interRegular text-primary-blue"
                >
                  Password
                </label>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  className="border p-2 bg-[#d4dce7] text-[#000] border-solid border-primary-blue rounded-[4px]"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <div className="w-full flex justify-center items-center mt-[20px]">
                <ButtonComponent
                  title="Register"
                  className="w-[100%] md:w-[220px] lg:w-[220px] xl:w-[220px] 2xl:w-[220px] h-[48px] rounded-[12px]"
                />
              </div>
            </Form>
          )}
        </Formik>
      )}

      <button className="mt-[20px] text-primary-blue" onClick={goBack}>
        Go back
      </button>
    </div>
  );
};

export default RegisterForm;
