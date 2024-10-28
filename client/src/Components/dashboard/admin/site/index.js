import React from 'react';
import DashboardLayout from '../../../hoc/dashbordLayout';
import SiteVars from './siteVars';
const ManageSite = () => {
    return(
        <DashboardLayout title="Manage site">
            <SiteVars/>
        </DashboardLayout>
    )
}
export default ManageSite;