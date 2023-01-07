import React from "react";
import Footer from "../components/Footer";
import CView from "../pages/CView";
import Introduction from "../pages/WelcomePage";
import Navbar from "../components/Navbar";
import img4 from "../assets/anchor-create-c4.webp";
import img5 from "../assets/anchor-host-c5.webp";
import img6 from "../assets/anchor-monetize-c6.webp";
import img7 from "../assets/anchor-analytics-c7.webp";
import img8 from "../assets/anchor-covers-desktop-c8.webp";
import EndNote from "../components/EndNote";
const { txt1, txt2, txt3, txt4, txt5, note5 } = require("../assets/texts");

const Home = () => {
  return (
    <div>
      <Navbar />
      <Introduction />
      <CView img={img4} text={txt1} />
      <CView img={img5} text={txt2} />
      <CView img={img6} text={txt3} />
      <CView img={img7} text={txt4} />
      <CView img={img8} text={txt5} />
      <EndNote />
      
    </div>
  );
};

export default Home;
