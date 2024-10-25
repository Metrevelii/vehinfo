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
        <div className="container">
            <div className="user_container page_container">
                <div className="user_left_nav">
                    <h2>My account</h2>
                    <div className="links">
                        {generateLinks(links)}
                    </div>
                    { users.data.role === 'admin' ?
                        <div>   
                            <h2>Admin</h2>
                            <div className="links">
                                {generateLinks(admin)}
                            </div>
                        </div>
                    : null}
                </div>
                <div className="user_right">
                    <div className="dashboard_title">{props.title}</div>
                    <div className="">{props.children}</div>
                </div>
            </div>
        </div>
    )
}

export default DashboardLayout;

