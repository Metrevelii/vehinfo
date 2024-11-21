import React, { useState } from "react";
import { useFormik } from "formik";
// import * as Yup from 'yup';

import { useDispatch, useSelector } from "react-redux";
import { updateTranslationVars } from "../../../../store/actions/translations.action";
import { useTranslation } from "react-i18next";

import ButtonComponent from "../../../Shared/button";

const TextInput = ({ id, name, formik }) => {
  return (
    <div className="flex items-start justify-center flex-col mt-[20px] w-full">
      <label
        className="font-interMedium text-primary-black text-[14px]"
        htmlFor={id}
      >
        Edit {name}
      </label>
      <input
        type="text"
        id={id}
        name={name}
        className="h-[46px]  rounded border border-solid mt-[7px] border-primary-orange px-[20px] w-full lg:w-[50%] xl:w-[50%] 2xl:w-[50%] bg-[#fff] text-primary-black font-interMedium relative"
        {...formik.getFieldProps(name)}
      />
      {formik.touched[name] && formik.errors[name] ? (
        <div className="error">{formik.errors[name]}</div>
      ) : null}
    </div>
  );
};

const TextVars = () => {
  const translation = useSelector((state) => state.translations);
  const dispatch = useDispatch();

  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const [isAZ, setIsAZ] = useState(true);

  console.log(currentLanguage);

  const formik = useFormik({
    initialValues: {
      text1ru: translation.vars.text1ru || "",
      text1az: translation.vars.text1az || "",
      text2ru: translation.vars.text2ru || "",
      text2az: translation.vars.text2az || "",
      text3ru: translation.vars.text3ru || "",
      text3az: translation.vars.text3az || "",
      text4ru: translation.vars.text4ru || "",
      text4az: translation.vars.text4az || "",
      text5ru: translation.vars.text5ru || "",
      text5az: translation.vars.text5az || "",
      text6ru: translation.vars.text6ru || "",
      text6az: translation.vars.text6az || "",
      text7ru: translation.vars.text7ru || "",
      text7az: translation.vars.text7az || "",
      text8ru: translation.vars.text8ru || "",
      text8az: translation.vars.text8az || "",
      text9ru: translation.vars.text9ru || "",
      text9az: translation.vars.text9az || "",
      text10ru: translation.vars.text10ru || "",
      text10az: translation.vars.text10az || "",
      text11ru: translation.vars.text11ru || "",
      text11az: translation.vars.text11az || "",
      text12ru: translation.vars.text12ru || "",
      text12az: translation.vars.text12az || "",
      text13ru: translation.vars.text13ru || "",
      text13az: translation.vars.text13az || "",
      text14ru: translation.vars.text14ru || "",
      text14az: translation.vars.text14az || "",
      text15ru: translation.vars.text15ru || "",
      text15az: translation.vars.text15az || "",
      text16ru: translation.vars.text16ru || "",
      text16az: translation.vars.text16az || "",
      text17ru: translation.vars.text17ru || "",
      text17az: translation.vars.text17az || "",
      text18ru: translation.vars.text18ru || "",
      text18az: translation.vars.text18az || "",
      text19ru: translation.vars.text19ru || "",
      text19az: translation.vars.text19az || "",
      text20ru: translation.vars.text20ru || "",
      text20az: translation.vars.text20az || "",
      text21ru: translation.vars.text21ru || "",
      text21az: translation.vars.text21az || "",
      text22ru: translation.vars.text22ru || "",
      text22az: translation.vars.text22az || "",
      text23ru: translation.vars.text23ru || "",
      text23az: translation.vars.text23az || "",
      text24ru: translation.vars.text24ru || "",
      text24az: translation.vars.text24az || "",
      text25ru: translation.vars.text25ru || "",
      text25az: translation.vars.text25az || "",
      text26ru: translation.vars.text26ru || "",
      text26az: translation.vars.text26az || "",
      text27ru: translation.vars.text27ru || "",
      text27az: translation.vars.text27az || "",
      text28ru: translation.vars.text28ru || "",
      text28az: translation.vars.text28az || "",
      text29ru: translation.vars.text29ru || "",
      text29az: translation.vars.text29az || "",
      text30ru: translation.vars.text30ru || "",
      text30az: translation.vars.text30az || "",
    },
    onSubmit: (values) => {
      dispatch(
        updateTranslationVars({
          _id: translation.vars._id,
          ...values,
        })
      );
    },
  });



  const toggleLanguage = () => {
    setIsAZ(!isAZ);
  };

  return (
    <form className="mt-3" onSubmit={formik.handleSubmit}>
      <div className="flex items-start justify-center flex-col mt-[20px]">
        <div className={`w-full ${isAZ ? "block" : "hidden"}`}>
          {[
            "text1az",
            "text2az",
            "text3az",
            "text4az",
            "text5az",
            "text6az",
            "text7az",
            "text8az",
            "text9az",
            "text10az",
            "text11az",
            "text12az",
            "text13az",
            "text14az",
            "text15az",
            "text16az",
            "text17az",
            "text18az",
            "text19az",
            "text20az",
            "text21az",
            "text22az",
            "text23az",
            "text24az",
            "text25az",
            "text26az",
            "text27az",
            "text28az",
            "text29az",
            "text30az",
          ].map((field) => (
            <TextInput key={field} id={field} name={field} formik={formik} />
          ))}
        </div>

        <div className={`w-full ${!isAZ ? "block" : "hidden"}`}>
          {[
            "text1ru",
            "text2ru",
            "text3ru",
            "text4ru",
            "text5ru",
            "text6ru",
            "text7ru",
            "text8ru",
            "text9ru",
            "text10ru",
            "text11ru",
            "text12ru",
            "text13ru",
            "text14ru",
            "text15ru",
            "text16ru",
            "text17ru",
            "text18ru",
            "text19ru",
            "text20ru",
            "text21ru",
            "text22ru",
            "text23ru",
            "text24ru",
            "text25ru",
            "text26ru",
            "text27ru",
            "text28ru",
            "text29ru",
            "text30ru",
          ].map((field) => (
            <TextInput key={field} id={field} name={field} formik={formik} />
          ))}
        </div>
      </div>
      <div className="mt-[20px] flex justify-between items-center w-full lg:w-[50%] xl:w-[50%] 2xl:w-[50%]">
        <ButtonComponent
          className="w-[48%]  md:w-[48%] lg:w-[165px] xl:w-[220px] 2xl:w-[220px] h-[48px] rounded-[12px] font-interMedium text-[16px]"
          title={"Edit texts"}
        />
        <button
          className="w-[48%] md:w-[48%] lg:w-[165px] xl:w-[220px] 2xl:w-[220px] h-[48px] rounded-[12px] flex justify-center items-center border border-solid border-[#7c8fc7] font-interRegular text-primary-black text-[16px]"
          type="button"
          onClick={toggleLanguage}
        >
          Switch to {isAZ ? "RU" : "AZ"} texts
        </button>
      </div>
    </form>
  );
};

export default TextVars;
