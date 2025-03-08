import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Portfolio from "./Portofolio";
import Contact from "./Contact";
import Footer from "./Footer";
function App() {

  return (
    <div>
    <Header/>
    <Home/>
    <About/>
    <Skills/>
    <Portfolio/>
    <Contact />
    <Footer/>
    </div>
  );
}

export default App;
