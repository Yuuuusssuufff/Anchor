import React from "react";
import Footer from "../components/Footer";
import CView from "../pages/CView";
import Introduction from "../pages/WelcomePage";
import '../styles/cview.css'


import EndNote from "../components/EndNote";
import Header from "../components/Header";
import Buttons from "../components/Buttons";
const {
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
} = require("../assets/imageSource");
const { txt1, txt2, txt3, txt4, txt5, note5 } = require("../assets/texts");

const Home = () => {
  return (
    <div>
      <Header />
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
     <>
     <CView
        img={img8}
        text={txt5}
        path="/"
        linkText={<>{note5}<Buttons path='/blog' anchorText='See the latest'/> </>}
        />
      
        </> 
      <EndNote />
      <Footer />
    </div>
  );
};

export default Home;
