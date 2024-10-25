import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
 
import Loader from "./Components/utils/loader";
import AuthGuard  from './Components/hoc/authGuard';

import { useDispatch, useSelector } from "react-redux";
import { userIsAuth, userSignOut } from "../src/store/actions/user.actions";

import Footer from "./Components/Footer/footer";
import Calculator from "./Components/Calculator/index";
import Home from "./Components/Home/index";
import Header from "./Components/Header/header";
import RegisterLogin from "./Components/auth/index";

import UserDashboard from "./Components/dashboard";

import ContactInfo from './Components/dashboard/admin/contactInfo';

const ProtectedUserDashboard = AuthGuard(UserDashboard);
const ProtectedContactInfo = AuthGuard(ContactInfo);
// const ProtectedUserInfo = AuthGuard(UserInfo);

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
                  <Route path="/delivery_calc" element={<Calculator />} />
                  <Route path="/sign_in" element={<RegisterLogin />} />
                  <Route path="/dashboard" element={ <ProtectedUserDashboard />} />
                  <Route path="/dashboard/admin/contact_infos" element={ <ProtectedContactInfo />} />


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
