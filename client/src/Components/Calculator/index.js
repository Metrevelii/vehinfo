import React from "react";
import CalcForm from './calcForm';
import "../components.css";

const Calculator = () => {
  return (
    <div className="w-full h-[71.1vh] bg-primary-white flex justify-start items-center flex-col pt-[70px]">
      <div className="w-[420px] bg-white/95 rounded-[12px] p-[30px] shadow-custom">
        <div className="flex flex-col items-center w-full h-full">
          <div className="mb-6">
            <h3 className="text-2xl font-interBold mb-2 text-center">ყურადღება!</h3>
            <h5 className="text-sm text-gray-600 font-interMedium text-center">
              კალკულატორი აჩვენებს საცალო ფასს, სადილერო პირობების გასაგებად
              მიმართეთ კომპანიას
            </h5>
          </div>
          <CalcForm />
         
        </div>
      </div>
    </div>
  );
};

export default Calculator;
