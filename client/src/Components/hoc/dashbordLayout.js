import React from "react";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

import { Icons } from "../../icons";


const DashboardLayout = ({ signOutUser, title, children }) => {
  const users = useSelector((state) => state.users);

 

  return (
    <div className="mx-auto max-w-full sm:max-w-[620px] md:max-w-[760px] px-[15px] lg:max-w-[940px] xl:max-w-[1280px]  2xl:max-w-[1432px] w-full">
      <div className="flex mb-[50px] min-h-[700px] flex-col lg:flex-row xl:flex-row 2xl:flex-row">
        <div className="border-r border-[#f8f8f8] mt-[30px] w-full lg:w-[25%] xl:w-[25%] 2xl:w-[25%]">
          <ul className="w-full flex flex-col gap-2">
            <li className="flex-center cursor-pointer p-16-semibold w-[90%] whitespace-nowrap">
              <Link
                to="/dashboard"
                className="group p-16-semibold flex size-full gap-4 p-4 group font-interBold text-[16px] rounded-full bg-cover hover:bg-primary-blue hover:shadow-inner   hover:text-primary-white text-primary-black transition-all ease-linear"
              >
                <Icons.DashboardIcon className="w-[20px] h-[20px] shrink-0" />
                Dashboard
              </Link>
            </li>
            <li className="flex-center cursor-pointer p-16-semibold w-[90%] whitespace-nowrap">
              <Link
                to="/dashboard/user/user-info"
                className="group p-16-semibold flex size-full gap-4 p-4 group font-interBold text-[16px] rounded-full bg-cover hover:bg-primary-blue hover:shadow-inner   hover:text-primary-white text-primary-black transition-all ease-linear"
              >
                <Icons.UserIcon className="w-[24px] h-[24px] shrink-0 fill-black" />
                User Information
              </Link>
            </li>
          </ul>
          
          {/* NEW MARKUP */}
          {users.data.role === "admin" ? (
            <ul className="w-full flex flex-col gap-2 mt-[0.5rem]">
              <li className="flex-center cursor-pointer p-16-semibold w-[90%] whitespace-nowrap">
                <Link
                  to="/dashboard/admin/contact_infos"
                  className="group p-16-semibold flex size-full gap-4 p-4 group font-interBold text-[16px] rounded-full bg-cover hover:bg-primary-blue hover:shadow-inner   hover:text-primary-white text-primary-black transition-all ease-linear"
                >
                  <Icons.ContactsIcon className="w-[20px] h-[20px] fill-black" />
                  Contact Infos
                </Link>
              </li>
              <li className="flex-center cursor-pointer p-16-semibold w-[90%] whitespace-nowrap">
                <Link
                  to="/dashboard/admin/manage_site"
                  className="group p-16-semibold flex size-full gap-4 p-4 group font-interBold text-[16px] rounded-full bg-cover hover:bg-primary-blue hover:shadow-inner   hover:text-primary-white text-primary-black transition-all ease-linear"
                >
                  <Icons.ManageIcon className="w-[20px] h-[20px] fill-black" />
                  Manage Site
                </Link>
              </li>
              <li className="flex-center cursor-pointer p-16-semibold w-[90%] whitespace-nowrap">
                <Link
                  to="/dashboard/admin/manage_texts"
                  className="group p-16-semibold flex size-full gap-4 p-4 group font-interBold text-[16px] rounded-full bg-cover hover:bg-primary-blue hover:shadow-inner   hover:text-primary-white text-primary-black transition-all ease-linear"
                >
                  <Icons.ManageIcon className="w-[20px] h-[20px] fill-black" />
                  Manage Texts
                </Link>
              </li>
            </ul>
          ) : null}
          <ul className="w-full flex flex-col gap-2 mt-[0.5rem]">
            <li className="flex-center cursor-pointer p-16-semibold w-[90%] whitespace-nowrap">
              <button
                className=" group p-16-semibold flex size-full gap-4 p-4 group font-interBold text-[16px] rounded-full bg-cover hover:bg-primary-blue hover:shadow-inner   hover:text-primary-white text-primary-black transition-all ease-linear "
                onClick={signOutUser}
              >
                <Icons.LogoutIcon className="w-[20px] h-[20px] shrink-0" />
                Logout
              </button>
             
            </li>
          </ul>
        </div>
        <div className="w-full h-[2px] bg-primary-black block lg:hidden xl:hidden 2xl:hidden my-[2rem]"></div>
        <div className="w-full lg:w-[80%] xl:w-[80%] 2xl:w-[80%] pl-[10px]">
          <div className="font-interBold text-[24px] text-primary-black my-[1.5rem] uppercase">{title}</div>
          <div className="">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
