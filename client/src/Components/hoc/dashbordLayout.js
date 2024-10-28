import React from "react";
import { Link } from 'react-router-dom';

import {useSelector} from 'react-redux';

export const links = [
  {
    name: "My Account",
    linkTo: "/dashboard",
  }
];

export const admin = [
  {
    name: "Contact infos",
    linkTo: "/dashboard/admin/contact_infos",
  },
  {
    name: "Manage site",
    linkTo: "/dashboard/admin/manage_site",
  }
];


const DashboardLayout = (props) => {
    const users = useSelector(state => state.users);


    const generateLinks = (data) => (
        data.map((item, i) => (
            <Link key={`${item.name}${i}`} to={item.linkTo}>
                {item.name}
            </Link>
        ))
    )


    return (
        <div className="mx-auto max-w-full sm:max-w-[620px] md:max-w-[760px] px-[15px] lg:max-w-[940px] xl:max-w-[1280px]  2xl:max-w-[1432px] w-full">
            <div className="user_container flex mb-[50px] min-h-[700px]">
                <div className="border-r border-[#f8f8f8] mt-[30px] w-[20%]">
                    <h2 className="font-interMedium font-bold text-gray-500 text-[18px]">My account</h2>
                    <div className="font-interMedium font-bold text-blue-500text-[15px] mt-[7px] flex items-start justify-start flex-col">
                        {generateLinks(links)}
                    </div>
                    { users.data.role === 'admin' ?
                        <div>   
                            <h2 className="font-interMedium font-bold text-gray-500 text-[18px] mt-[30px]">Admin</h2>
                            <div className="font-interMedium font-bold text-blue-500 text-[15px] mt-[7px] flex items-start justify-start flex-col">
                                {generateLinks(admin)}
                            </div>
                        </div>
                    : null}
                </div>
                <div className="w-[80%] pl-[10px]">
                    <div className="dashboard_title">{props.title}</div>
                    <div className="">{props.children}</div>
                </div>
            </div>
        </div>
    )
}

export default DashboardLayout;

