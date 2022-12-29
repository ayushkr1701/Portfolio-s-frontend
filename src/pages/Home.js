import React from "react";

import Education from "../components/Education";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Main from "../components/Main";
import Projects from "../components/Projects";
import Technologies from "../components/Technologies";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <div id="home" style={{backgroundColor: "#212121"}} >
      <Hero/>
      <Education />
      <Projects />
      <Technologies />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Home;