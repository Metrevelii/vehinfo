import React, { useEffect }from 'react';
import DashboardLayout from "../../hoc/dashbordLayout";

import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from "../../../store/actions/contact.action";

const ContactInfo = () => {
    const dispatch = useDispatch();
    const { contacts, loading, error } = useSelector((state) => state.contact);

    useEffect(() => {
        const getContacts = async () => {
            await dispatch(fetchContacts());
        };

        getContacts();
    }, [dispatch]);

    console.log(contacts);

    return (
        <DashboardLayout title="Contact info">

            <div>
                Contact info
            </div>
        </DashboardLayout>
    )
}

export default ContactInfo;