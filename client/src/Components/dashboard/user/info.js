import React from "react";
import DashboardLayout from "../../hoc/dashbordLayout";
import { useFormik } from "formik";
import * as Yup from "yup";

import { useDispatch } from "react-redux";
import { userUpdateProfile } from "../../../store/actions/user.actions";
import ButtonComponent from '../../Shared/button';

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
        .min(3, "3 char min")
        .max(30, "30 char max")
        .required("Sorry, you need the firstname"),
      lastname: Yup.string()
        .min(3, "3 char min")
        .max(30, "30 char max")
        .required("Sorry, you need the lastname"),
    }),
    onSubmit: (values) => {
      dispatch(userUpdateProfile(values));
    },
  });

  return (
    <DashboardLayout title="User information" signOutUser={signOutUser}>
      <form className="mt-[30px] w-full" onSubmit={formik.handleSubmit}>
        <div className="flex items-start justify-center flex-col mt-[20px]">
          <label htmlFor="firstname" className="font-interMedium text-primary-black text-[14px]">Edit your firstname</label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            className="h-[46px]  rounded border border-solid mt-[7px] border-primary-orange px-[20px] w-full lg:w-[50%] xl:w-[50%] 2xl:w-[50%] bg-[#fff] text-primary-black font-interMedium text-[16px] relative"
            {...formik.getFieldProps("firstname")}
          />
        </div>
        <div className="flex items-start justify-center flex-col mt-[20px]">
          <label htmlFor="lastname" className="font-interMedium text-primary-black text-[14px]">Edit your lastname</label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            className="h-[46px]  rounded border border-solid mt-[7px] border-primary-orange px-[20px] w-full lg:w-[50%] xl:w-[50%] 2xl:w-[50%] bg-[#fff] text-primary-black font-interMedium text-[16px] relative"
            {...formik.getFieldProps("lastname")}
          />
        </div>
        <ButtonComponent className="w-[220px] h-[50px] my-[1.5rem]" title="Edit Profile"/>
      </form>
      <hr />
    </DashboardLayout>
  );
};

export default UserInfo;
