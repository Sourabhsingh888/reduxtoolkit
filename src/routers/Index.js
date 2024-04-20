import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loginpage from "../containers/Pages/Loginpage";
import SignUpPage from "../containers/Pages/SignUpPage";
import Navbar from '../components/navbar/Index'
import Footer from '../components/footer/Index'
import Home from '../containers/Home'

const  Index= () => {
  return (
    <Router>
        <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default Index;
