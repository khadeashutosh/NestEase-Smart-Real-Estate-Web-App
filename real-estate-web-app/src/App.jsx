import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Testimonails from "./components/Testimonails";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

const App = () => {
  return (
    <>
      <div className="w-full h-0 overflow-hidden ">
        <ToastContainer />
        <Header />
        <About />
        <Projects />
        <Testimonails />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default App;
