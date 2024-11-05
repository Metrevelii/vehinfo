import React from 'react';
import DashboardLayout from '../hoc/dashbordLayout';

const UserDashboard = ({users, signOutUser}) => {
    return (
        <DashboardLayout title="Overview" signOutUser={signOutUser}>
            <div className="user_nfo_panel">
                <span>{users.data.firstname}</span>
                <span>{users.data.lastname}</span>
                <span>{users.data.email}</span>
            </div>
        </DashboardLayout>
    )
}

export default UserDashboard;