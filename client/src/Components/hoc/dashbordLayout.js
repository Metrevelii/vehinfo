import React from "react";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

import { Icons } from "../../icons";


const DashboardLayout = ({ signOutUser, title, children }) => {
  const users = useSelector((state) => state.users);

 

  return (
    <div className="mx-auto max-w-full sm:max-w-[620px] md:max-w-[760px] px-[15px] lg:max-w-[940px] xl:max-w-[1280px]  2xl:max-w-[1432px] w-full">
      <div className="user_container flex mb-[50px] min-h-[700px]">
        <div className="border-r border-[#f8f8f8] mt-[30px] w-[25%]">
          <ul className="w-full flex flex-col gap-2">
            <li className="flex-center cursor-pointer p-16-semibold w-[90%] whitespace-nowrap">
              <Link
                to="/dashboard"
                className="group p-16-semibold flex size-full gap-4 p-4 group font-interBold font-[12px] rounded-full bg-cover hover:bg-primary-blue hover:shadow-inner focus:bg-gradient-to-r from-blue-400 to-blue-600 focus:text-white hover:text-primary-white text-primary-black transition-all ease-linear"
              >
                <Icons.DashboardIcon className="w-[20px] h-[20px] shrink-0" />
                Dashboard
              </Link>
            </li>
            <li className="flex-center cursor-pointer p-16-semibold w-[90%] whitespace-nowrap">
              <Link
                to="/dashboard/user/user_info"
                className="group p-16-semibold flex size-full gap-4 p-4 group font-interBold font-[12px] rounded-full bg-cover hover:bg-primary-blue hover:shadow-inner focus:bg-gradient-to-r from-blue-400 to-blue-600 focus:text-white hover:text-primary-white text-primary-black transition-all ease-linear"
              >
                <Icons.UserIcon className="w-[20px] h-[20px] shrink-0" />
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
                  className="group p-16-semibold flex size-full gap-4 p-4 group font-interBold font-[12px] rounded-full bg-cover hover:bg-primary-blue hover:shadow-inner focus:bg-gradient-to-r from-blue-400 to-blue-600 focus:text-white hover:text-primary-white text-primary-black transition-all ease-linear"
                >
                  <Icons.ContactsIcon className="w-[20px] h-[20px] fill-black group-hover:fill-white" />
                  Contact Infos
                </Link>
              </li>
              <li className="flex-center cursor-pointer p-16-semibold w-[90%] whitespace-nowrap">
                <Link
                  to="/dashboard/admin/manage_site"
                  className="group p-16-semibold flex size-full gap-4 p-4 group font-interBold font-[12px] rounded-full bg-cover hover:bg-primary-blue hover:shadow-inner focus:bg-gradient-to-r from-blue-400 to-blue-600 focus:text-white hover:text-primary-white text-primary-black transition-all ease-linear"
                >
                  <Icons.ManageIcon className="w-[20px] h-[20px] fill-black group-hover:fill-white" />
                  Manage Site
                </Link>
              </li>
            </ul>
          ) : null}
          <ul className="w-full flex flex-col gap-2 mt-[0.5rem]">
            <li className="flex-center cursor-pointer p-16-semibold w-[90%] whitespace-nowrap">
              <button
                className=" group p-16-semibold flex size-full gap-4 p-4 group font-interBold font-[12px] rounded-full bg-cover hover:bg-primary-blue hover:shadow-inner focus:bg-gradient-to-r from-blue-400 to-blue-600 focus:text-white hover:text-primary-white text-primary-black transition-all ease-linear "
                onClick={signOutUser}
              >
                <Icons.LogoutIcon className="w-[20px] h-[20px] shrink-0" />
                Logout
              </button>
              {/* <button 
                        className="font-interMedium text-[16px] text-primary-blue"
                        onClick={signOutUser}
                    >
                        Log out
                    </button> */}
            </li>
          </ul>
        </div>
        <div className="w-[80%] pl-[10px]">
          <div className="dashboard_title">{title}</div>
          <div className="">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
