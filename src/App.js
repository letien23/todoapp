import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import SignUp from "./page/SignUp/SignUp";
import Login from "./page/Login/Login";

import Index from "./page";
import ChangePassword from "./page/User/ChangePassword";
import UserHeader from "./page/User/UserHeader";
import ListTask from "./page/User/ListTask";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Benefit from "./components/Benefit";
import EditProfile from "./page/EditProfile/EditProfile";
import SortByDay from "./page/delete/SortByDay";

import User from "./page/user";




const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/sx" element={<SortByDay />} />
        <Route exact path="/" element={<Index  />} />
        {/* <Route exact path="/contact" element={<Contact />} /> */}
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/sign-up" element={<SignUp />} />
        <Route exact path="/banner" element={<Banner />} />
        <Route exact path="/benefit" element={<Benefit />} />
        <Route exact path="/editProfile" element={<EditProfile />} />


        <Route exact path="/footer" element={<Footer />} />
        <Route exact path="/user" element={<UserHeader />} />
        <Route exact path="/changepassword" element={<ChangePassword />} />
        <Route exact path="/task" element={<ListTask />} />
        <Route exact path="/page-user" element={<User />} />
      </Routes>
    </Router>
  );
};

export default App;
