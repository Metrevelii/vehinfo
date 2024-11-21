import React from "react";
import DashboardLayout from "../hoc/dashbordLayout";
import { Icons } from "../../icons";

const UserDashboard = ({ users, signOutUser }) => {
  return (
    <DashboardLayout title="Overview" signOutUser={signOutUser}>
      <div className="">
 

        <div className="w-[20rem] rounded-lg border-2 border-primary-orange bg-transparent p-4 text-center shadow-lg">
     
            <Icons.UserIcon className="w-[50px] h-[50px] fill-primary-orange"/>
        
   
          <h2 className="mt-4 text-xl font-interBold text-primary-orange">
            {users.data.firstname} {users.data.lastname}
          </h2>
          <div className="flex center items-center">
            <Icons.EmailIcon className="w-[20px] h-[20px]"/>
            <p className="ml-[5px] font-interMedium text-[16px] text-primary-black">{users.data.email}</p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default UserDashboard;
