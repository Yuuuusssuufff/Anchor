import React from "react";
import Footer from "../components/Molecules/Footer/Footer";
import CView from "../components/Organisms/Page1//CView";
import Introduction from "../components/Organisms/Intro/Introduction";
import EndNote from "../components/Organisms/Endnote/EndNote";
import LastPage from "../components/Organisms/Page2/LastPage";
import Navbar from "../components/Molecules/Navbar/Navbar";

import '../app.css'
import '../styles/cview.css'
// import Buttons from "../components/Buttons";
const {
  // img2,
  // img3,
  img4,
  img5,
  img6,
  img7,
  img8,
} = require("../assets/imageSource");
const { txt1, txt2, txt3, txt4, txt5, note5 } = require("../assets/texts");

const Home = () => {
  return (
    <div className="home"> 
      <Navbar />
      <Introduction />
     
      <CView
        img={img4}
        text={txt1}
        path="/"
        linkText="see all creation features"
      />
      <CView
        img={img5}
        text={txt2}
        path="/"
        linkText="see all hosting and distribution features"
      />
      <CView
        img={img6}
        text={txt3}
        path="/"
        linkText="see all monetization features"
      />
      <CView
        img={img7}
        text={txt4}
        path="/"
        linkText="see all analytic features"
      />
     
     <LastPage
        img={img8}
        text={txt5}
        path="/"
        linkText='See the latest'
        />
      
         
      <EndNote />
      <Footer />
    </div>
  );
};

export default Home;
