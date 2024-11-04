import React from "react";

const HeadlineBox = () => {
  return (
    <>
      <div className="hidden sm:hidden md:block xl:block lg:block 2xl:block md:w-[600px] md:h-[230px] xl:w-[750px] xl:h-[234px] 2xl:w-[892px] 2xl:h-[254px] bg-black/40">
        <div className="w-full h-full flex flex-col justify-start items-start p-[35px]">
          <h1 className="font-interBold font-bold text-[3vw] sm:text-[3.2vw] md:text-[20px] xl:text-[24px] 2xl:text-[32px] text-white">
            YOUR LOGISTIC PARTNER FOR SEAMLESS DELIVERY
          </h1>
          <p className="font-interLight text-[20px] text-white/80 mt-[30px]">
            Our Logistics Service Provide End-To-End Solutions For All Your
            Shipping Needs.
          </p>
          <div className="w-full flex justify-end items-center mt-auto">
            <button className="w-[270px] h-[70px] bg-gradient-to-b from-[#2F53FE] to-[#1B3CDE] font-interBold font-bold text-[20px] text-white text-center cursor-pointer rounded-[12px]">
              REQUEST QUOTE
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeadlineBox;
