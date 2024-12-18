import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import MainLayout from "./Components/hoc/mainLayout";
import Loader from "./Components/utils/loader";
import AuthGuard from "./Components/hoc/authGuard";

import { useDispatch, useSelector } from "react-redux";
import { userIsAuth, userSignOut } from "../src/store/actions/user.actions";

import Footer from "./Components/Footer/footer";
import Home from "./Components/Home/index";
import Header from "./Components/Header/header";
import AboutUs from "./Components/AboutUs";
import ContactUs from "./Components/ContactUs/contactUs";
import Benefits from "./Components/Benefits";

import RegisterLogin from "./Components/auth/index";
import ResetPasswordForm from "./Components/auth/resetPasswordForm";


import UserDashboard from "./Components/dashboard";

import ContactInfo from "./Components/dashboard/admin/contactInfo";
import ManageSite from "./Components/dashboard/admin/site";
import ManageTexts from "./Components/dashboard/admin/texts";
import UserInfo from "./Components/dashboard/user/info";

const ProtectedUserDashboard = AuthGuard(UserDashboard);
const ProtectedContactInfo = AuthGuard(ContactInfo);
const ProtectedManageSite = AuthGuard(ManageSite);
const ProtectedManageTexts = AuthGuard(ManageTexts);
const ProtectedUserInfo = AuthGuard(UserInfo);

const RoutesMain = (props) => {
  const [loading, setLoading] = useState(true);
  const users = useSelector((state) => state.users);

  const dispatch = useDispatch();
  const location = useLocation();

  const signOutUser = () => {
    dispatch(userSignOut());
  };

  useEffect(() => {
    dispatch(userIsAuth());
  }, [dispatch]);

  useEffect(() => {
    if (users.auth !== null) {
      setLoading(false);
    }
  }, [users]);

  const isContactPage = location.pathname === "/contact-us";

  return (
    <>
      <div className="default-layout">
        {loading ? (
          <Loader full={true} />
        ) : (
          <>
            <Header users={users} signOutUser={signOutUser} />
            <MainLayout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about-us" element={<AboutUs marginY={'my-[100px]'}/>} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="/sign-in" element={<RegisterLogin />} />
                <Route path="/password-reset" element={<ResetPasswordForm />} />
                <Route path="/benefits" element={<Benefits />} />
                <Route
                  path="/dashboard"
                  element={<ProtectedUserDashboard signOutUser={signOutUser} />}
                />
                <Route
                  path="/dashboard/admin/contact_infos"
                  element={<ProtectedContactInfo signOutUser={signOutUser} />}
                />
                <Route
                  path="/dashboard/admin/manage_site"
                  element={<ProtectedManageSite signOutUser={signOutUser} />}
                />
                <Route
                  path="/dashboard/admin/manage_texts"
                  element={<ProtectedManageTexts signOutUser={signOutUser} />}
                />
                <Route
                  path="/dashboard/user/user-info"
                  element={<ProtectedUserInfo signOutUser={signOutUser} />}
                />
              </Routes>
            </MainLayout>

            {!isContactPage && <Footer />}
          </>
        )}
      </div>
    </>
  );
};

export default RoutesMain;
