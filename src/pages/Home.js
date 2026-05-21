import React from "react";

import Education from "../components/Education";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Technologies from "../components/Technologies";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <div
      id="home"
      style={{
        background:
          "radial-gradient(circle at top left, rgba(56, 189, 248, 0.18), transparent 34rem), radial-gradient(circle at 80% 10%, rgba(251, 113, 133, 0.12), transparent 28rem), #08111f",
      }}
    >
      <Hero/>
      <Projects />
      <Testimonials />
      <Education />
      <Technologies />
      <Contact />
    </div>
  );
};

export default Home;
