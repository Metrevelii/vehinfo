import React from "react";
import ContactForm from "./ContactForm";

const Footer = () => {
  return (
    <footer className="w-full h-[571px] bg-overlay-black bg-footer bg-cover bg-center bg-no-repeat">
      <div className="container mx-auto h-full">
        <div className="flex justify-center items-center h-full">
          <div className="flex flex-col justify-center items-center w-1/2 h-full">
            <div className="flex flex-col justify-start items-start w-full">
              <div className="flex flex-col justify-start items-start">
                <h4 className="font-interBold text-[20px] uppercase text-primary-whiteTransparent">
                  LOCATION
                </h4>
                <div className="mt-4 flex flex-col justify-start items-start">
                  <p className="font-interRegular text-[20px] text-primary-whiteTransparent">
                    SA: Keyport, 3 Cass Street, NJ
                  </p>
                  <p className="font-interRegular text-[20px] text-primary-whiteTransparent">
                    Tbilisi: U. Chkheidze 12
                  </p>
                  <p className="font-interRegular text-[20px] text-primary-whiteTransparent">
                    Gori: 37 Of Tsereteli
                  </p>
                  <p className="font-interRegular text-[20px] text-primary-whiteTransparent">
                    Kutaisi: Sh. Rustaveli Ave.35
                  </p>
                  <p className="font-interRegular text-[20px] text-primary-whiteTransparent">
                    Batumi: 65 Of Heydar Abashidze, 36 Of Petre Tchaikovsky
                  </p>
                </div>
                <div className="mt-12">
                  <h4 className="font-interBold text-[20px] uppercase text-primary-whiteTransparent">
                    Phone
                  </h4>
                  <p className="mt-4 text-[20px] text-primary-whiteTransparent">
                    568 200 900
                  </p>
                </div>
                <div className="mt-12">
                  <h4 className="font-interBold text-[20px] uppercase text-primary-whiteTransparent">
                    Mail
                  </h4>
                  <p className="mt-4 text-[20px] text-primary-whiteTransparent">
                    Company@Gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-start pt-[2rem] items-center w-[700px] h-[505px] rounded-[12px] px-16 bg-white bg-contactBg bg-cover bg-center bg-no-repeat">
            <div className="font-interBold text-[32px] text-black mb-[0.5rem] uppercase">
              REQUEST A QUOTE
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
