import React from 'react';
import DashboardLayout from '../../../hoc/dashbordLayout';
import SiteVars from './siteVars';
const ManageSite = (signOutUser) => {
    return(
        <DashboardLayout title="Manage site"  signOutUser={signOutUser}>
            <SiteVars/>
        </DashboardLayout>
    )
}
export default ManageSite;