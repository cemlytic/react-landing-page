import React from "react";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/layout/Hero";
import Features from "./components/layout/Features";
import WorkFlow from "./components/layout/WorkFlow";
import Pricing from "./components/layout/Pricing";

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Hero />
        <Features />
        <WorkFlow />
        <Pricing />
      </div>
    </React.Fragment>
  );
};

export default App;
