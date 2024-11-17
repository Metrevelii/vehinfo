import React from 'react';
import DashboardLayout from '../../../hoc/dashbordLayout';

import TextVars from './textVars';

const ManageTexts = ({ signOutUser }) => {
    return (
        <DashboardLayout title="Manage Texts"  signOutUser={signOutUser}>
            <TextVars />
        </DashboardLayout>
    )
}

export default ManageTexts;