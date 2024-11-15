import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
 
import Loader from "./Components/utils/loader";
import AuthGuard  from './Components/hoc/authGuard';

import { useDispatch, useSelector } from "react-redux";
import { userIsAuth, userSignOut } from "../src/store/actions/user.actions";
 

import Footer from "./Components/Footer/footer";
import Home from "./Components/Home/index";
import Header from "./Components/Header/header";
import RegisterLogin from "./Components/auth/index";
import ResetPasswordForm from "./Components/auth/resetPasswordForm";

import UserDashboard from "./Components/dashboard";

import ContactInfo from './Components/dashboard/admin/contactInfo';
import ManageSite from "./Components/dashboard/admin/site";
import UserInfo from './Components/dashboard/user/info';

const ProtectedUserDashboard = AuthGuard(UserDashboard);
const ProtectedContactInfo = AuthGuard(ContactInfo);
const ProtectedManageSite = AuthGuard(ManageSite);
const ProtectedUserInfo = AuthGuard(UserInfo);

const RoutesMain = (props) => {
  const [loading, setLoading] = useState(true);
  const users = useSelector((state) => state.users);
 
 
  const dispatch = useDispatch();

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

  return (
    <>
      <div className="default-layout">
        <Router>
          {loading ? (
            <Loader full={true} />
          ) : (
            <>
              <Header users={users} signOutUser={signOutUser} />
          

                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/sign-in" element={<RegisterLogin />} />
                  <Route path="/password-reset" element={<ResetPasswordForm />} />
                  <Route path="/dashboard" element={ <ProtectedUserDashboard signOutUser={signOutUser} />} />
                  <Route path="/dashboard/admin/contact_infos" element={ <ProtectedContactInfo signOutUser={signOutUser} />} />
                  <Route path="/dashboard/admin/manage_site" element={ <ProtectedManageSite signOutUser={signOutUser} />} />
                  <Route path="/dashboard/user/user-info" element={ <ProtectedUserInfo signOutUser={signOutUser} />} />



                </Routes>
         
              <Footer />
            </>
          )}
        </Router>
      </div>
    </>
  );
};

export default RoutesMain;
