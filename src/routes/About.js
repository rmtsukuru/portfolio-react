import React from "react";

import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import HeroImgProjects from "../components/heroProjects/HeroImgProjects";
import AboutContent from "../components/about/AboutContent";

function About() {
  return (
    <div>
      <Navbar />
      <HeroImgProjects
        heading="ABOUT ME"
        text="I am a friendly Font-End and Back-End Web Developper"
      />
      <AboutContent />
      <Footer />
    </div>
  );
}

export default About;
