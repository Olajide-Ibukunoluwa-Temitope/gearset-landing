import React, { useRef } from "react";
import About from "./components/view/About/About";
import Customers from "./components/view/Customers/Customers";
import Features from "./components/view/Features/Features";
import Footer from "./components/view/Footer/Footer";
import Hero from "./components/view/Hero/Hero";
import LearnMore from "./components/view/LearnMore/LearnMore";
import Navbar from "./components/view/Navbar/Navbar";

const App: React.FC = () => {
  const scrollToRef = useRef(null);
  const scrollTo = () =>
    window.scrollTo(0, (scrollToRef?.current as any)?.offsetTop);

  return (
    <>
      <Navbar onBtnClick={scrollTo} />
      <Hero onBtnClick={scrollTo} />
      <Features />
      <About />
      <Customers onBtnClick={scrollTo} />
      <div ref={scrollToRef}>
        <LearnMore />
      </div>
      <Footer />
    </>
  );
};

export default App;
