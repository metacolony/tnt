import React from 'react';
import Home from './pages/Home';
import HelpFile from './pages/HelpFile';
import Rules from './pages/Rules';
// import RegisterForm from './pages/RegisterForm';
import AboutUs from './pages/AboutUs';
import NotFound from './pages/NotFound';
import { Route , Routes } from "react-router-dom";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/helpfile" element={<HelpFile />} />
        <Route path="/rules" element={<Rules />} />
        {/* <Route path="/registerform" element={<RegisterForm />} /> */}
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
