import React, { useEffect }from 'react';
import DashboardLayout from "../../hoc/dashbordLayout";
 

import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from "../../../store/actions/contact.action";
 

const ContactInfo = ({signOutUser}) => {
    const dispatch = useDispatch();
    const { contacts, loading, error } = useSelector((state) => state.contact);

    useEffect(() => {
        const getContacts = async () => {
            if (!loading && contacts.length === 0) {
                await dispatch(fetchContacts());
            }
        };


        getContacts();
    }, [dispatch, loading, contacts.length]);

    console.log(contacts);

    return (
        <DashboardLayout title=""  signOutUser={signOutUser}>

            <div className="w-full h-[500px] flex justify-center items-center">
                <div className="w-[600px] h-[450px] rounded-lg border border-gray-300 flex flex-col">
                    <div className="w-full h-[12%] p-2 flex justify-start items-center">
                        <h1 className="font-interMedium text-lg font-bold text-gray-500">Contacts info</h1>
                    </div>
                    <div className="w-full h-[87%]">
                        <div className="w-full h-full flex flex-col overflow-y-auto overflow-x-hidden p-2 scrollbar-thin">
                        {loading && <p>Loading...</p>}
                        {error && <p>Error loading contacts</p>}
                        {contacts.map((contact) => (
                            <div key={contact._id} className="w-full border-t border-b border-gray-300 flex flex-col p-2">
                                <div className="flex w-full items-center mt-2">
                                    <div className="font-interMedium font-bold text-gray-500 text-[13px]">{contact.name}</div>
                                    <div className="font-interMedium font-bold text-gray-500 text-[13px] ml-[7px]">{contact.surname}</div>
                                </div>
                                <div className="w-full text-left mt-2 font-interMedium text-gray-500 text-sm">
                                    {contact.countryCode} {contact.mobileNumber}
                                </div>
                                <div className="w-full text-left mt-2">
                                    <p className="font-interMedium text-gray-500 text-sm">
                                        {contact.comment}
                                    </p>
                                </div>
                            </div>
                        ))}
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    )
}

export default ContactInfo;