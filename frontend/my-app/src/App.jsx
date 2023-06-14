import React from "react";

import Footer from "./components/Footer";
import Layout from "./components/Layout";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import Medicine from "./components/pages/Medicine";
function App() {
  return (
    <>

    <BrowserRouter>
    <Routes>
      <Route path="/"  element={<Layout/>} >
        <Route index element={<Home/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="medicine" element={<Medicine/>}/>

      </Route>
      


    </Routes>
    <Footer/>
    
    </BrowserRouter>

    </>
  );
}

export default App;
