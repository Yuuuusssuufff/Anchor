import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Ads from './routes/Ads';
import Switch from './routes/SwitchAnchor';
import Blogs from './routes/Blogs';
import Features from './routes/Features';
import Home from './routes/Home';
import SignInPage from './routes/SignInPage';
import SignUpPage from './routes/SignUpPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/features" element={<Features/>}/>
        <Route path="/switch" element={<Switch/>}/>
        <Route path="/ads" element={<Ads/>}/>
        <Route path="/blogs" element={<Blogs/>}/>
        <Route path="/signin" element={<SignInPage/>}/>
        <Route path="/signup" element={<SignUpPage/>}/>
        </Routes>  
    </div>
  );
}

export default App;
