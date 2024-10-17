import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Footer from "./Components/Footer/footer";
import Calculator from "./Components/Calculator/index";
import Home from "./Components/Home/index";
import Header from "./Components/Header/header";
import RegisterLogin from './Components/auth/index';

import { useDispatch, useSelector } from 'react-redux';
import { userIsAuth ,userSignOut } from  '../src/store/actions/user.actions';

const RoutesMain = (props) => {
  const [loading, setLoading] = useState(true);
  const users = useSelector(state => state.users);
  console.log(users);
  const dispatch = useDispatch();


  const signOutUser = () => {
    dispatch(userSignOut())
  }


  useEffect(() => {
    dispatch(userIsAuth())
  }, [dispatch])


  useEffect(()=>{
    if(users.auth !== null){
      setLoading(false)
    }
  },[users])

  return (
    <>
      <div className="default-layout">
        <Router>
        <Header 
            users={users}
            signOutUser={signOutUser}
        />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/delivery_calc" element={<Calculator />} />
            <Route path="/sign_in" element={<RegisterLogin />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
};

export default RoutesMain;
