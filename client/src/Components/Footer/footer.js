import React from "react";
import ContactForm from "./ContactForm";
import Social from './social';

import { useSelector } from 'react-redux';

const Footer = () => {
  const site = useSelector(state => state.site);
  console.log(site);


  return (
    <footer className="w-full h-[571px] bg-overlay-black bg-footer bg-cover bg-center bg-no-repeat">
      <div className="mx-auto max-w-[1432px] px-4 w-full h-full">
        <div className="flex justify-center items-center h-full">
          { site && site.vars ? 
          
          <div className="flex flex-col justify-center items-center w-1/2 h-full">
            <div className="flex flex-col justify-start items-start w-full">
              <div className="flex flex-col justify-start items-start">
                <h4 className="font-interBold text-[20px] uppercase text-primary-whiteTransparent">
                  LOCATION
                </h4>
                <div className="mt-4 flex flex-col justify-start items-start">
                  <p className="font-interRegular text-[20px] text-primary-whiteTransparent">
                    SA: {site.vars.address}
                  </p>
                  <p className="font-interRegular text-[20px] text-primary-whiteTransparent">
                    Tbilisi: {site.vars.address}
                  </p>
                  <p className="font-interRegular text-[20px] text-primary-whiteTransparent">
                    Gori: {site.vars.address}
                  </p>
                  <p className="font-interRegular text-[20px] text-primary-whiteTransparent">
                    Kutaisi: {site.vars.address}
                  </p>
                  <p className="font-interRegular text-[20px] text-primary-whiteTransparent">
                    Batumi: {site.vars.address}
                  </p>
                </div>
                <div className="mt-12">
                  <h4 className="font-interBold text-[20px] uppercase text-primary-whiteTransparent">
                    Phone
                  </h4>
                  <p className="mt-4 text-[20px] text-primary-whiteTransparent">
                  {site.vars.phone}
                  </p>
                </div>
                <div className="mt-12">
                  <h4 className="font-interBold text-[20px] uppercase text-primary-whiteTransparent">
                    Mail
                  </h4>
                  <p className="mt-4 text-[20px] text-primary-whiteTransparent">
                  {site.vars.email}
                  </p>
                </div>
              </div>
            </div>
          </div>
          :

           null
          }
          
          <div className="flex flex-col justify-start pt-[2rem] items-center w-[700px] h-[505px] rounded-[12px] px-16 bg-white bg-contactBg bg-cover bg-center bg-no-repeat">
            <div className="font-interBold text-[32px] text-black mb-[0.5rem] uppercase">
              REQUEST A QUOTE
            </div>
            <ContactForm />
            <Social facebook={site.vars.facebook} instagram={site.vars.instagram} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
