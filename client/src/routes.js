import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Footer from "./Components/Footer/footer";
import Calculator from "./Components/Calculator/index";
import Home from "./Components/Home/index";
import Header from "./Components/Header/header";

const RoutesMain = () => {
  return (
    <>
      <div className="default-layout">
        <Router>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/delivery_calc" element={<Calculator />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
};

export default RoutesMain;
