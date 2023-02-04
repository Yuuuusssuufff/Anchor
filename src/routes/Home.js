import React from "react";
import Footer from "../components/Molecules/Footer/Footer";
import CView from "../components/Organisms/Page1//CView";
import Introduction from "../components/Organisms/Intro/Introduction";
import EndNote from "../components/Organisms/Endnote/EndNote";
import LastPage from "../components/Organisms/Page2/LastPage";
import Navbar from "../components/Molecules/Navbar/Navbar";

import '../app.css'
const {
  
  img4,
  img5,
  img6,
  img7,
  img8,
} = require("../assets/imageSource");





const Txt1 = ()=> <><h3><strong>Built-in uploading, recording, and editing tools</strong> so you can easily create and publish episodes.</h3></>
const Txt2 = ()=> <><h3><strong>Distribute your podcast to the most popular listening apps, including Spotify with just a single tap</strong> — and host unlimited content completely free, forever.</h3></>

const Txt3 = ()=> <><h3><strong>Unlock sponsorships or set up a subscription</strong> so you can make money as your audience grows.</h3></>

const Txt4 = ()=> <><h3><strong>Advanced analytics and insights</strong> to help you understand and grow your audience.</h3></>

const Txt5 = ()=> <div>Podcasting tips, creator stories, and Anchor news</div>

const Note5 = ()=> <><p>Our blog, Word of Mouth, has everything you need to get started or take your show to the next level.</p></>

const Home = () => {
  return (
    <div className="home"> 
      <Navbar />
      <Introduction />
     
      <CView
        img={img4}
        text={<Txt1/>}
        path="/"
        linkText="see all creation features"
      />
      <CView
        img={img5}
        text={<Txt2/>}
        path="/"
        linkText="see all hosting and distribution features"
      />
      <CView
        img={img6}
        text={<Txt3/>}
        path="/"
        linkText="see all monetization features"
      />
      <CView
        img={img7}
        text={<Txt4/>}
        path="/"
        linkText="see all analytic features"
      />
     
     <LastPage
        img={img8}
        text={<Txt5/>}
        note={<Note5/>}
        path="/"
        linkText='See the latest'
        />
      
         
      <EndNote />
      <Footer />
    </div>
  );
};

export default Home;
