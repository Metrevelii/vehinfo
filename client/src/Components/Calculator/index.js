import React from "react";
import CalcForm from './calcForm';

const Calculator = () => {
  return (
    <div className="w-full h-auto bg-primary-white flex justify-start items-center flex-col py-[70px]">
      <div className="w-[420px] bg-white/95 rounded-[12px] p-[30px] shadow-custom">
        <div className="flex flex-col items-center w-full h-full">
          <CalcForm />
         
        </div>
      </div>
    </div>
  );
};

export default Calculator;
