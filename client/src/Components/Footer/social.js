import React from "react";
import InstagramIcon from "../../icons/InstagramIcon";
import FacebookIcon from "../../icons/FacebookIcon";

const Social = ({facebook, instagram}) => {
    const openFacebook = () => {
        window.open(`https://www.facebook.com/${facebook}`, "_blank");
      };
    
      const openInstagram = () => {
        window.open(`https://www.instagram.com/${instagram}`, "_blank");
      };

  return (
    <>
      <div className="w-full px-4 flex justify-start items-center">
        <div className="w-[50px] h-[50px] md:w-[30px] md:h-[30px] bg-primary-blue rounded-[12px] flex justify-center items-center cursor-pointer" onClick={openFacebook}>
          <FacebookIcon className="w-[10px] h-[16px]" />
        </div>
        <div className="w-[50px] h-[50px] md:w-[30px] md:h-[30px] bg-primary-blue rounded-[12px] flex justify-center items-center cursor-pointer ml-[1.5rem]" onClick={openInstagram}>
          <InstagramIcon className="md:w-[15px] md:h-[15px] w-[22px] h-[22px]" />
        </div>
      </div>
    </>
  );
};

export default Social;
