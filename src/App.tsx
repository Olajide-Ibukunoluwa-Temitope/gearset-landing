import React from "react";
import "./App.css";
import About from "./components/view/About/About";
import Customers from "./components/view/Customers/Customers";
import Features from "./components/view/Features/Features";
import Hero from "./components/view/Hero/Hero";
import Navbar from "./components/view/Navbar/Navbar";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Customers />
    </>
  );
};

export default App;
