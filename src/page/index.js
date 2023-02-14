import React from "react";
import Banner from "../components/Banner1/Banner";
import Banner2 from "../components/Banner2/Banner";
import Benefit from "../components/Bennefit/Benefit";
import Footer from "../components/FooterPageIntro/Footer";
import Header from "../components/HeaderPageIntro/Header";
import Contact from "./Contact/Contact";


export default function Index() {
  return (
    <>
        <Header/>
        <Banner/>
        <Benefit/>
        <Banner2/>
        <Contact/>
        <Footer/>
    </>
  );
}
